import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  nombre: z.string().min(1, "Requerido"),
  unidad: z.enum(["GRAMO", "KILOGRAMO", "MILILITRO", "LITRO", "UNIDAD", "PORCION"]),
  costoUnitario: z.coerce.number().positive("Debe ser mayor a 0"),
  stockActual: z.coerce.number().min(0).default(0),
  stockMinimo: z.coerce.number().min(0).default(0),
});

export async function GET() {
  const ingredientes = await prisma.ingrediente.findMany({
    orderBy: { nombre: "asc" },
  });
  return NextResponse.json(ingredientes);
}

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const ingrediente = await prisma.ingrediente.create({ data: parsed.data });
  return NextResponse.json(ingrediente, { status: 201 });
}