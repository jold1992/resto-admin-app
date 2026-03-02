import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  items: z.array(z.object({
    ingredienteId: z.string().min(1),
    cantidad: z.coerce.number().positive("Debe ser mayor a 0"),
  })).min(1, "La receta debe tener al menos un ingrediente"),
});

// GET — obtener receta de un plato
export async function GET(_: Request, { params }: { params: Promise<{ platoId: string }> }) {
  const { platoId } = await params;
  const items = await prisma.recetaItem.findMany({
    where: { platoId },
    include: { ingrediente: true },
    orderBy: { ingrediente: { nombre: "asc" } },
  });
  return NextResponse.json(items);
}

// PUT — reemplazar receta completa de un plato
export async function PUT(req: Request, { params }: { params: Promise<{ platoId: string }> }) {
  const { platoId } = await params;
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  // Reemplazar todos los items de la receta en una transacción
  const items = await prisma.$transaction(async (tx) => {
    await tx.recetaItem.deleteMany({ where: { platoId } });
    return tx.recetaItem.createMany({
      data: parsed.data.items.map(item => ({ platoId, ...item })),
    });
  });

  return NextResponse.json(items);
}

// DELETE — eliminar receta completa
export async function DELETE(_: Request, { params }: { params: Promise<{ platoId: string }> }) {
  const { platoId } = await params;
  await prisma.recetaItem.deleteMany({ where: { platoId } });
  return new NextResponse(null, { status: 204 });
}