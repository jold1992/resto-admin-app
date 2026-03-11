import { useSucursalActiva } from "@/context/SucursalContext";
import { getSucursalActivaClient } from "@/lib/getSucursalActivaClient";
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
    const { sucursalId } = useSucursalActiva();
    return useQuery({
        queryKey: ["sugerencias", sucursalId],
        queryFn: async () => {
            const params = new URLSearchParams();
            if (sucursalId) params.set("sucursalId", sucursalId);
            const res = await fetch(`/api/compras/sugerencias?${params}`);
            if (!res.ok) throw new Error("Error al cargar sugerencias");
            return res.json();
        },
    });
}

export function useCompras() {
    const { sucursalId } = useSucursalActiva();
    return useQuery({
        queryKey: ["compras", sucursalId],
        queryFn: async () => {
            const params = new URLSearchParams();
            if (sucursalId) params.set("sucursalId", sucursalId);
            const res = await fetch(`/api/compras?${params}`);
            if (!res.ok) throw new Error("Error al cargar compras");
            return res.json();
        },
    });
}

export function useOrdenesCompra() {
    const { sucursalId } = useSucursalActiva();
    return useQuery({
        queryKey: ["compras", "ordenes", sucursalId],
        queryFn: async (): Promise<OrdenCompra[]> => {
            const res = await fetch(`/api/compras?sucursalId=${sucursalId}`);
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