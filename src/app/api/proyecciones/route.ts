import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generarProyeccion, detectarTendencia } from "@/lib/proyecciones";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const dias = parseInt(searchParams.get("dias") ?? "7");
  const ventana = parseInt(searchParams.get("ventana") ?? "30");

  // Ventas por plato por día (últimos `ventana` días)
  const desde = new Date();
  desde.setDate(desde.getDate() - ventana);

  const ventasPorPlato = await prisma.$queryRaw<{
    platoId: string;
    nombre: string;
    dia: string;
    cantidad: number;
  }[]>`
    SELECT
      p.id as "platoId",
      p.nombre,
      DATE(v.fecha) as dia,
      SUM(vd.cantidad)::int as cantidad
    FROM "VentaDetalle" vd
    JOIN "Plato" p ON p.id = vd."platoId"
    JOIN "Venta" v ON v.id = vd."ventaId"
    WHERE v.fecha >= ${desde}
    GROUP BY p.id, p.nombre, DATE(v.fecha)
    ORDER BY p.nombre, dia ASC
  `;

  // Agrupar por plato
  const platoMap = new Map<string, { nombre: string; historial: { fecha: string; cantidad: number }[] }>();

  ventasPorPlato.forEach(row => {
    if (!platoMap.has(row.platoId)) {
      platoMap.set(row.platoId, { nombre: row.nombre, historial: [] });
    }
    platoMap.get(row.platoId)!.historial.push({
      fecha: String(row.dia),
      cantidad: Number(row.cantidad),
    });
  });

  // Generar proyecciones
  const proyecciones = Array.from(platoMap.entries()).map(([platoId, data]) => {
    const valores = data.historial.map(h => h.cantidad);
    const proyeccion = generarProyeccion(data.historial, dias, ventana);
    const tendencia = detectarTendencia(valores);
    const promedioBase = valores.reduce((a, b) => a + b, 0) / (valores.length || 1);

    return {
      platoId,
      nombre: data.nombre,
      historial: data.historial,
      proyeccion,
      tendencia,
      promedioBase: Math.round(promedioBase * 10) / 10,
    };
  });

  // Calcular materia prima necesaria para la proyección
  const recetas = await prisma.recetaItem.findMany({
    include: { ingrediente: true },
  });

  const materiaPrima = new Map<string, {
    nombre: string;
    unidad: string;
    cantidadNecesaria: number;
    stockActual: number;
    stockMinimo: number;
    deficit: number;
  }>();

  proyecciones.forEach(p => {
    const totalProyectado = p.proyeccion.reduce((acc, d) => acc + d.cantidad, 0);
    const recetaPlato = recetas.filter(r => r.platoId === p.platoId);

    recetaPlato.forEach(item => {
      const necesario = Number(item.cantidad) * totalProyectado;
      const ing = item.ingrediente;

      if (!materiaPrima.has(ing.id)) {
        materiaPrima.set(ing.id, {
          nombre: ing.nombre,
          unidad: ing.unidad,
          cantidadNecesaria: 0,
          stockActual: Number(ing.stockActual),
          stockMinimo: Number(ing.stockMinimo),
          deficit: 0,
        });
      }

      const entry = materiaPrima.get(ing.id)!;
      entry.cantidadNecesaria += necesario;
      entry.deficit = Math.max(0, entry.cantidadNecesaria - entry.stockActual);
    });
  });

  return NextResponse.json({
    proyecciones,
    materiaPrima: Array.from(materiaPrima.values()).sort((a, b) => b.deficit - a.deficit),
    diasProyectados: dias,
  });
}