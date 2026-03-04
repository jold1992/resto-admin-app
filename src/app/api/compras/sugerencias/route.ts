import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const ingredientes = await prisma.$queryRaw<{
    id: string;
    nombre: string;
    unidad: string;
    stockActual: number;
    stockMinimo: number;
    costoUnitario: number;
  }[]>`
    SELECT id, nombre, unidad, "stockActual"::float, "stockMinimo"::float, "costoUnitario"::float
    FROM "Ingrediente"
    WHERE "stockActual" <= "stockMinimo"
    ORDER BY ("stockMinimo" - "stockActual") DESC
  `;

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