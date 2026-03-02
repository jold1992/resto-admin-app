import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export type VentaDetalle = {
  id: string;
  platoId: string;
  cantidad: number;
  precio: number;
  plato: { id: string; nombre: string; categoria: { nombre: string } };
};

export type Venta = {
  id: string;
  total: number;
  fecha: string;
  notas: string | null;
  detalles: VentaDetalle[];
};

export type VentaInput = {
  notas?: string;
  detalles: { platoId: string; cantidad: number; precio: number }[];
};

export function useVentas(desde?: string, hasta?: string) {
  return useQuery({
    queryKey: ["ventas", desde, hasta],
    queryFn: async (): Promise<Venta[]> => {
      const params = new URLSearchParams();
      if (desde) params.set("desde", desde);
      if (hasta) params.set("hasta", hasta);
      const res = await fetch(`/api/ventas?${params}`);
      if (!res.ok) throw new Error("Error al cargar ventas");
      return res.json();
    },
  });
}

export function useRegistrarVenta() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: VentaInput) =>
      fetch("/api/ventas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(r => r.json()),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["ventas"] });
      qc.invalidateQueries({ queryKey: ["ingredientes"] }); // stock actualizado
      toast.success("Venta registrada");
    },
    onError: () => toast.error("Error al registrar venta"),
  });
}

export function useEliminarVenta() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      fetch(`/api/ventas/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["ventas"] });
      toast.success("Venta eliminada");
    },
    onError: () => toast.error("Error al eliminar venta"),
  });
}