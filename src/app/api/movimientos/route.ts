import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  ingredienteId: z.string().min(1),
  tipo: z.enum(["ENTRADA", "SALIDA", "AJUSTE"]),
  cantidad: z.number().positive(),
  motivo: z.string().min(1, "Requerido"),
  sucursalId: z.string().min(1, "Requerido"),
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const ingredienteId = searchParams.get("ingredienteId");
  const sucursalId = searchParams.get("sucursalId");
  const sucursalFilter = sucursalId ? { sucursalId } : {};

  const movimientos = await prisma.movimientoInventario.findMany({
    where: {
      ...sucursalFilter,
      ...(ingredienteId ? { ingredienteId } : {}),
    },
    include: { ingrediente: true },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return NextResponse.json(movimientos);
}

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const { ingredienteId, tipo, cantidad, motivo, sucursalId } = parsed.data;
  const incremento = tipo === "SALIDA" ? -cantidad : cantidad;

  const resultado = await prisma.$transaction(async (tx) => {
    // Actualizar stock en IngredienteSucursal (no en Ingrediente)
    await tx.ingredienteSucursal.update({
      where: {
        ingredienteId_sucursalId: { ingredienteId, sucursalId },
      },
      data: { stockActual: { increment: incremento } },
    });

    return tx.movimientoInventario.create({
      data: { ingredienteId, tipo, cantidad, motivo, sucursalId },
      include: { ingrediente: true },
    });
  });

  return NextResponse.json(resultado, { status: 201 });
}