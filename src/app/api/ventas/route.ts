import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  notas: z.string().optional(),
  detalles: z.array(z.object({
    platoId: z.string().min(1),
    cantidad: z.number().int().positive(),
    precio: z.number().positive(),
  })).min(1, "La venta debe tener al menos un plato"),
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const desde = searchParams.get("desde");
  const hasta = searchParams.get("hasta");

  const ventas = await prisma.venta.findMany({
    where: {
      ...(desde || hasta ? {
        fecha: {
          ...(desde ? { gte: new Date(desde) } : {}),
          ...(hasta ? { lte: new Date(`${hasta}T23:59:59.999Z`) } : {}),
        }
      } : {}),
    },
    include: {
      detalles: {
        include: { plato: { include: { categoria: true } } },
      },
    },
    orderBy: { fecha: "desc" },
  });
  return NextResponse.json(ventas);
}

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const { notas, detalles } = parsed.data;

  const total = detalles.reduce((acc, d) => acc + d.precio * d.cantidad, 0);

  // Crear venta y descontar stock en una transacción
  const venta = await prisma.$transaction(async (tx) => {
    // 1 — Crear la venta con sus detalles
    const nuevaVenta = await tx.venta.create({
      data: {
        total,
        notas,
        detalles: {
          create: detalles.map(d => ({
            platoId: d.platoId,
            cantidad: d.cantidad,
            precio: d.precio,
          })),
        },
      },
      include: {
        detalles: { include: { plato: true } },
      },
    });

    // 2 — Descontar stock por cada plato vendido
    for (const detalle of detalles) {
      const receta = await tx.recetaItem.findMany({
        where: { platoId: detalle.platoId },
      });

      for (const item of receta) {
        const consumo = Number(item.cantidad) * detalle.cantidad;
        await tx.ingrediente.update({
          where: { id: item.ingredienteId },
          data: { stockActual: { decrement: consumo } },
        });

        // Registrar movimiento de inventario
        await tx.movimientoInventario.create({
          data: {
            ingredienteId: item.ingredienteId,
            tipo: "SALIDA",
            cantidad: consumo,
            motivo: `Venta #${nuevaVenta.id.slice(-6)}`,
          },
        });
      }
    }

    return nuevaVenta;
  });

  return NextResponse.json(venta, { status: 201 });
}