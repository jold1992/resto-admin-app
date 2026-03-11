import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sucursalId = searchParams.get("sucursalId");

  const ingredientes = await (sucursalId
    ? prisma.$queryRaw<{
        id: string;
        nombre: string;
        unidad: string;
        stockActual: number;
        stockMinimo: number;
        costoUnitario: number;
      }[]>`
        SELECT
          i.id,
          i.nombre,
          i.unidad,
          is2."stockActual"::float,
          is2."stockMinimo"::float,
          i."costoUnitario"::float
        FROM "IngredienteSucursal" is2
        JOIN "Ingrediente" i ON i.id = is2."ingredienteId"
        WHERE is2."sucursalId" = ${sucursalId}
          AND is2."stockActual" <= is2."stockMinimo"
        ORDER BY (is2."stockMinimo" - is2."stockActual") DESC
      `
    : prisma.$queryRaw<{
        id: string;
        nombre: string;
        unidad: string;
        stockActual: number;
        stockMinimo: number;
        costoUnitario: number;
      }[]>`
        SELECT
          i.id,
          i.nombre,
          i.unidad,
          SUM(is2."stockActual")::float as "stockActual",
          SUM(is2."stockMinimo")::float as "stockMinimo",
          i."costoUnitario"::float
        FROM "IngredienteSucursal" is2
        JOIN "Ingrediente" i ON i.id = is2."ingredienteId"
        GROUP BY i.id, i.nombre, i.unidad, i."costoUnitario"
        HAVING SUM(is2."stockActual") <= SUM(is2."stockMinimo")
        ORDER BY (SUM(is2."stockMinimo") - SUM(is2."stockActual")) DESC
      `
  );

  const sugerencias = ingredientes.map(i => {
    const cantidadSugerida = Math.max(i.stockMinimo * 2 - i.stockActual, 0);
    return {
      ...i,
      cantidadSugerida,
      costoEstimado: cantidadSugerida * i.costoUnitario,
    };
  });

  const totalEstimado = sugerencias.reduce((acc, s) => acc + s.costoEstimado, 0);

  return NextResponse.json({ sugerencias, totalEstimado });
}