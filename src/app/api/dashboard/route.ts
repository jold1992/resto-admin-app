import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const hoy = new Date();
  const inicioDia = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
  const inicioSemana = new Date(hoy);
  inicioSemana.setDate(hoy.getDate() - 6);
  const inicioMes = new Date(hoy.getFullYear(), hoy.getMonth(), 1);

  const [ventasHoy, ventasSemana, ventasMes, ventasPorDia, platosTop, stockBajo] =
    await Promise.all([
      // Total vendido hoy
      prisma.venta.aggregate({
        where: { fecha: { gte: inicioDia } },
        _sum: { total: true },
        _count: true,
      }),

      // Total vendido esta semana
      prisma.venta.aggregate({
        where: { fecha: { gte: inicioSemana } },
        _sum: { total: true },
        _count: true,
      }),

      // Total vendido este mes
      prisma.venta.aggregate({
        where: { fecha: { gte: inicioMes } },
        _sum: { total: true },
        _count: true,
      }),

      // Ventas por día (últimos 30 días)
      prisma.$queryRaw<{ dia: string; total: number; ventas: number }[]>`
        SELECT
          DATE(fecha) as dia,
          SUM(total)::float as total,
          COUNT(*)::int as ventas
        FROM "Venta"
        WHERE fecha >= ${new Date(hoy.getTime() - 30 * 24 * 60 * 60 * 1000)}
        GROUP BY DATE(fecha)
        ORDER BY dia ASC
      `,

      // Platos más vendidos (últimos 30 días)
      prisma.$queryRaw<{ nombre: string; total: number; ingresos: number }[]>`
        SELECT
          p.nombre,
          SUM(vd.cantidad)::int as total,
          SUM(vd.cantidad * vd.precio)::float as ingresos
        FROM "VentaDetalle" vd
        JOIN "Plato" p ON p.id = vd."platoId"
        JOIN "Venta" v ON v.id = vd."ventaId"
        WHERE v.fecha >= ${new Date(hoy.getTime() - 30 * 24 * 60 * 60 * 1000)}
        GROUP BY p.nombre
        ORDER BY total DESC
        LIMIT 8
      `,

      // Ingredientes con stock bajo
      prisma.$queryRaw<{ id: string; nombre: string; stockActual: number; stockMinimo: number; unidad: string }[]>`
        SELECT id, nombre, "stockActual"::float, "stockMinimo"::float, unidad
        FROM "Ingrediente"
        WHERE "stockActual" <= "stockMinimo"
        ORDER BY "stockActual" ASC
      `,
    ]);

  return NextResponse.json({
    ventasHoy: {
      total: Number(ventasHoy._sum.total ?? 0),
      count: ventasHoy._count,
    },
    ventasSemana: {
      total: Number(ventasSemana._sum.total ?? 0),
      count: ventasSemana._count,
    },
    ventasMes: {
      total: Number(ventasMes._sum.total ?? 0),
      count: ventasMes._count,
    },
    ventasPorDia,
    platosTop,
    stockBajo,
  });
}