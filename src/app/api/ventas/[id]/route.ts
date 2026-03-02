import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const venta = await prisma.venta.findUnique({
        where: { id },
        include: {
            detalles: {
                include: { plato: { include: { categoria: true } } },
            },
        },
    });
    if (!venta) return NextResponse.json({ error: "No encontrada" }, { status: 404 });
    return NextResponse.json(venta);
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    await prisma.$transaction(async (tx) => {
        await tx.ventaDetalle.deleteMany({ where: { ventaId: id } });
        await tx.venta.delete({ where: { id } });
    });

    return new NextResponse(null, { status: 204 });
}