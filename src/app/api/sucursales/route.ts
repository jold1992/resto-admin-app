import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  nombre: z.string().min(1, "Requerido"),
  direccion: z.string().optional(),
});

export async function GET() {
  const sucursales = await prisma.sucursal.findMany({
    orderBy: { nombre: "asc" },
  });
  return NextResponse.json(sucursales);
}

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const sucursal = await prisma.sucursal.create({
    data: parsed.data,
  });
  return NextResponse.json(sucursal, { status: 201 });
}