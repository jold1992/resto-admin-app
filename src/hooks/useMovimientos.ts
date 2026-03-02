import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export type Movimiento = {
  id: string;
  ingredienteId: string;
  tipo: "ENTRADA" | "SALIDA" | "AJUSTE";
  cantidad: number;
  motivo: string;
  fecha: string;
  ingrediente: { nombre: string; unidad: string };
};

export type MovimientoInput = {
  ingredienteId: string;
  tipo: "ENTRADA" | "SALIDA" | "AJUSTE";
  cantidad: number;
  motivo: string;
};

export function useMovimientos(ingredienteId?: string) {
  return useQuery({
    queryKey: ["movimientos", ingredienteId],
    queryFn: async (): Promise<Movimiento[]> => {
      const params = ingredienteId ? `?ingredienteId=${ingredienteId}` : "";
      const res = await fetch(`/api/movimientos${params}`);
      if (!res.ok) throw new Error("Error al cargar movimientos");
      return res.json();
    },
  });
}

export function useRegistrarMovimiento() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: MovimientoInput) =>
      fetch("/api/movimientos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(r => r.json()),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["movimientos"] });
      qc.invalidateQueries({ queryKey: ["ingredientes"] });
      toast.success("Movimiento registrado");
    },
    onError: () => toast.error("Error al registrar movimiento"),
  });
}