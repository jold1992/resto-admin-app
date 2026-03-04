import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
    notas: z.string().optional(),
    detalles: z.array(z.object({
        ingredienteId: z.string().min(1),
        cantidadSugerida: z.number().positive(),
        cantidadFinal: z.number().positive().optional(),
    })).min(1),
});

export async function GET() {
    const ordenes = await prisma.ordenCompra.findMany({
        include: {
            detalles: {
                include: { ingrediente: true },
            },
        },
        orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(ordenes);
}

export async function POST(req: Request) {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success)
        return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

    const { detalles } = parsed.data;

    const orden = await prisma.ordenCompra.create({
        data: {
          detalles: {
            create: detalles.map(d => ({
              ingredienteId: d.ingredienteId,
              cantidadSugerida: d.cantidadSugerida,
              cantidadFinal: d.cantidadFinal,
            })),
          },
        },
        include: {
          detalles: { include: { ingrediente: true } },
        },
      });

    return NextResponse.json(orden, { status: 201 });
}