import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

type Categoria = { id: string; nombre: string; _count: { platos: number } };

async function fetchCategorias(): Promise<Categoria[]> {
  const res = await fetch("/api/categorias");
  if (!res.ok) throw new Error("Error al cargar categorías");
  return res.json();
}

export function useCategorias() {
  return useQuery({ queryKey: ["categorias"], queryFn: fetchCategorias });
}

export function useCrearCategoria() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (nombre: string) =>
      fetch("/api/categorias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre }),
      }).then(r => r.json()),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["categorias"] });
      toast.success("Categoría creada");
    },
    onError: () => toast.error("Error al crear categoría"),
  });
}

export function useEditarCategoria() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, nombre }: { id: string; nombre: string }) =>
      fetch(`/api/categorias/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre }),
      }).then(r => r.json()),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["categorias"] });
      toast.success("Categoría actualizada");
    },
    onError: () => toast.error("Error al actualizar categoría"),
  });
}

export function useEliminarCategoria() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      fetch(`/api/categorias/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["categorias"] });
      toast.success("Categoría eliminada");
    },
    onError: () => toast.error("Error al eliminar categoría"),
  });
}