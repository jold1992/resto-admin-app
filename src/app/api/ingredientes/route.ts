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

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sucursalId = searchParams.get("sucursalId");

  const ingredientes = await prisma.ingrediente.findMany({
    orderBy: { nombre: "asc" },
    include: {
      stockSucursales: sucursalId
        ? { where: { sucursalId } }
        : true,
    },
  });

  // Aplanar stock de la sucursal activa en cada ingrediente
  const result = ingredientes.map(ing => {
    const stock = ing.stockSucursales?.[0];
    return {
      ...ing,
      stockActual: stock ? Number(stock.stockActual) : 0,
      stockMinimo: stock ? Number(stock.stockMinimo) : 0,
    };
  });

  return NextResponse.json(result);
}

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const sucursalId = searchParams.get("sucursalId");

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const { stockActual, stockMinimo, ...ingredienteData } = parsed.data;

  // Crear ingrediente + stock en todas las sucursales en una transacción
  const ingrediente = await prisma.$transaction(async (tx) => {
    const ing = await tx.ingrediente.create({ data: ingredienteData });

    // Obtener todas las sucursales activas
    const sucursales = await tx.sucursal.findMany({ where: { activa: true } });

    // Crear IngredienteSucursal para cada sucursal
    // Si hay sucursalId activa, usarle el stock ingresado; el resto arranca en 0
    await tx.ingredienteSucursal.createMany({
      data: sucursales.map(s => ({
        ingredienteId: ing.id,
        sucursalId: s.id,
        stockActual: s.id === sucursalId ? stockActual : 0,
        stockMinimo: s.id === sucursalId ? stockMinimo : 0,
      })),
    });

    return ing;
  });

  return NextResponse.json(ingrediente, { status: 201 });
}