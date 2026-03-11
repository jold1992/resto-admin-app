import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const hoy = new Date();
  const inicioDia = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
  const inicioSemana = new Date(hoy);
  inicioSemana.setDate(hoy.getDate() - 6);
  const inicioMes = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
  const hace30Dias = new Date(hoy.getTime() - 30 * 24 * 60 * 60 * 1000);

  const { searchParams } = new URL(req.url);
  const sucursalId = searchParams.get("sucursalId");
  const sucursalFilter = sucursalId ? { sucursalId } : {};

  const [ventasHoy, ventasSemana, ventasMes, ventasPorDia, platosTop, stockBajo] =
    await Promise.all([
      prisma.venta.aggregate({
        where: { ...sucursalFilter, fecha: { gte: inicioDia } },
        _sum: { total: true },
        _count: true,
      }),

      prisma.venta.aggregate({
        where: { ...sucursalFilter, fecha: { gte: inicioSemana } },
        _sum: { total: true },
        _count: true,
      }),

      prisma.venta.aggregate({
        where: { ...sucursalFilter, fecha: { gte: inicioMes } },
        _sum: { total: true },
        _count: true,
      }),

      // Ventas por día — query separada según sucursalId
      sucursalId
        ? prisma.$queryRaw<{ dia: string; total: number; ventas: number }[]>`
            SELECT
              DATE(fecha) as dia,
              SUM(total)::float as total,
              COUNT(*)::int as ventas
            FROM "Venta"
            WHERE "sucursalId" = ${sucursalId}
              AND fecha >= ${hace30Dias}
            GROUP BY DATE(fecha)
            ORDER BY dia ASC
          `
        : prisma.$queryRaw<{ dia: string; total: number; ventas: number }[]>`
            SELECT
              DATE(fecha) as dia,
              SUM(total)::float as total,
              COUNT(*)::int as ventas
            FROM "Venta"
            WHERE fecha >= ${hace30Dias}
            GROUP BY DATE(fecha)
            ORDER BY dia ASC
          `,

      // Platos más vendidos
      sucursalId
        ? prisma.$queryRaw<{ nombre: string; total: number; ingresos: number }[]>`
            SELECT
              p.nombre,
              SUM(vd.cantidad)::int as total,
              SUM(vd.cantidad * vd.precio)::float as ingresos
            FROM "VentaDetalle" vd
            JOIN "Plato" p ON p.id = vd."platoId"
            JOIN "Venta" v ON v.id = vd."ventaId"
            WHERE v."sucursalId" = ${sucursalId}
              AND v.fecha >= ${hace30Dias}
            GROUP BY p.nombre
            ORDER BY total DESC
            LIMIT 8
          `
        : prisma.$queryRaw<{ nombre: string; total: number; ingresos: number }[]>`
            SELECT
              p.nombre,
              SUM(vd.cantidad)::int as total,
              SUM(vd.cantidad * vd.precio)::float as ingresos
            FROM "VentaDetalle" vd
            JOIN "Plato" p ON p.id = vd."platoId"
            JOIN "Venta" v ON v.id = vd."ventaId"
            WHERE v.fecha >= ${hace30Dias}
            GROUP BY p.nombre
            ORDER BY total DESC
            LIMIT 8
          `,

      // Stock bajo — usa IngredienteSucursal
      sucursalId
        ? prisma.$queryRaw<{ id: string; nombre: string; stockActual: number; stockMinimo: number; unidad: string }[]>`
            SELECT i.id, i.nombre, is2."stockActual"::float, is2."stockMinimo"::float, i.unidad
            FROM "IngredienteSucursal" is2
            JOIN "Ingrediente" i ON i.id = is2."ingredienteId"
            WHERE is2."sucursalId" = ${sucursalId}
              AND is2."stockActual" <= is2."stockMinimo"
            ORDER BY is2."stockActual" ASC
          `
        : prisma.$queryRaw<{ id: string; nombre: string; stockActual: number; stockMinimo: number; unidad: string }[]>`
            SELECT i.id, i.nombre, is2."stockActual"::float, is2."stockMinimo"::float, i.unidad
            FROM "IngredienteSucursal" is2
            JOIN "Ingrediente" i ON i.id = is2."ingredienteId"
            WHERE is2."stockActual" <= is2."stockMinimo"
            ORDER BY is2."stockActual" ASC
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