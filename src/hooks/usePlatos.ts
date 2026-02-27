import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export type Plato = {
  id: string;
  nombre: string;
  descripcion: string | null;
  precio: number;
  activo: boolean;
  imagen: string | null;
  categoriaId: string;
  categoria: { id: string; nombre: string };
};

type PlatoInput = Omit<Plato, "id" | "categoria">;
export type { PlatoInput };

async function fetchPlatos(): Promise<Plato[]> {
  const res = await fetch("/api/platos");
  if (!res.ok) throw new Error("Error al cargar platos");
  return res.json();
}

export function usePlatos() {
  return useQuery({ queryKey: ["platos"], queryFn: fetchPlatos });
}

export function useCrearPlato() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: PlatoInput) =>
      fetch("/api/platos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(r => r.json()),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["platos"] });
      toast.success("Plato creado");
    },
    onError: () => toast.error("Error al crear plato"),
  });
}

export function useEditarPlato() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...data }: Partial<PlatoInput> & { id: string }) =>
      fetch(`/api/platos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(r => r.json()),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["platos"] });
      toast.success("Plato actualizado");
    },
    onError: () => toast.error("Error al actualizar plato"),
  });
}

export function useEliminarPlato() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      fetch(`/api/platos/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["platos"] });
      toast.success("Plato eliminado");
    },
    onError: () => toast.error("Error al eliminar plato"),
  });
}