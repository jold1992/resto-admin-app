import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export type Sugerencia = {
    id: string;
    nombre: string;
    unidad: string;
    stockActual: number;
    stockMinimo: number;
    costoUnitario: number;
    cantidadSugerida: number;
    costoEstimado: number;
};

export type OrdenCompra = {
    id: string;
    estado: string;
    createdAt: string;
    detalles: {
        id: string;
        cantidadSugerida: number;
        cantidadFinal: number | null;
        ingrediente: { nombre: string; unidad: string };
    }[];
};

export type OrdenCompraInput = {
    detalles: { ingredienteId: string; cantidadSugerida: number; cantidadFinal?: number }[];
};

export function useSugerenciasCompra() {
    return useQuery({
        queryKey: ["compras", "sugerencias"],
        queryFn: async (): Promise<{ sugerencias: Sugerencia[]; totalEstimado: number }> => {
            const res = await fetch("/api/compras/sugerencias");
            if (!res.ok) throw new Error("Error al cargar sugerencias");
            return res.json();
        },
    });
}

export function useOrdenesCompra() {
    return useQuery({
        queryKey: ["compras", "ordenes"],
        queryFn: async (): Promise<OrdenCompra[]> => {
            const res = await fetch("/api/compras");
            if (!res.ok) throw new Error("Error al cargar órdenes");
            return res.json();
        },
    });
}

export function useCrearOrdenCompra() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: OrdenCompraInput) =>
            fetch("/api/compras", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            }).then(r => r.json()),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["compras"] });
            toast.success("Orden de compra creada");
        },
        onError: () => toast.error("Error al crear orden de compra"),
    });
}