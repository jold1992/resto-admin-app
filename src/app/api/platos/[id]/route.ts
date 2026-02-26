import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  nombre: z.string().min(1).optional(),
  descripcion: z.string().optional(),
  precio: z.coerce.number().positive().optional(),
  categoriaId: z.string().min(1).optional(),
  activo: z.boolean().optional(),
});

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const plato = await prisma.plato.update({
    where: { id },
    data: parsed.data,
    include: { categoria: true },
  });
  return NextResponse.json(plato);
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await prisma.plato.delete({ where: { id } });
  return new NextResponse(null, { status: 204 });
}