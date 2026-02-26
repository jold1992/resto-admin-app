import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  nombre: z.string().min(1),
  descripcion: z.string().optional(),
  precio: z.coerce.number().positive("El precio debe ser mayor a 0"),
  categoriaId: z.string().min(1, "La categoría es requerida"),
  activo: z.boolean().default(true),
});

export async function GET() {
  const platos = await prisma.plato.findMany({
    orderBy: { nombre: "asc" },
    include: { categoria: true },
  });
  return NextResponse.json(platos);
}

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const plato = await prisma.plato.create({
    data: parsed.data,
    include: { categoria: true },
  });
  return NextResponse.json(plato, { status: 201 });
}