import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { UnidadMedida } from "@/lib/unidades";
import { useSucursalActiva } from "@/context/SucursalContext";

export type Ingrediente = {
  id: string;
  nombre: string;
  unidad: UnidadMedida;
  costoUnitario: number;
  stockActual: number;
  stockMinimo: number;
};

type IngredienteInput = Omit<Ingrediente, "id">;

export function useIngredientes() {
  const { sucursalId } = useSucursalActiva();
  return useQuery({
    queryKey: ["ingredientes", sucursalId],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (sucursalId) params.set("sucursalId", sucursalId);
      const res = await fetch(`/api/ingredientes?${params}`);
      if (!res.ok) throw new Error("Error al cargar ingredientes");
      return res.json();
    },
  });
}

export function useCrearIngrediente() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: IngredienteInput) =>
      fetch("/api/ingredientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(r => r.json()),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["ingredientes"] });
      toast.success("Ingrediente creado");
    },
    onError: () => toast.error("Error al crear ingrediente"),
  });
}

export function useEditarIngrediente() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...data }: Partial<IngredienteInput> & { id: string }) =>
      fetch(`/api/ingredientes/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(r => r.json()),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["ingredientes"] });
      toast.success("Ingrediente actualizado");
    },
    onError: () => toast.error("Error al actualizar ingrediente"),
  });
}

export function useEliminarIngrediente() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      fetch(`/api/ingredientes/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["ingredientes"] });
      toast.success("Ingrediente eliminado");
    },
    onError: () => toast.error("Error al eliminar ingrediente"),
  });
}