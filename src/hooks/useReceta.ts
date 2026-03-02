import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { Ingrediente } from "@/hooks/useIngredientes";

export type RecetaItem = {
  id: string;
  platoId: string;
  ingredienteId: string;
  cantidad: number;
  ingrediente: Ingrediente;
};

export type RecetaItemInput = {
  ingredienteId: string;
  cantidad: number;
};

export function useReceta(platoId: string | null) {
  return useQuery({
    queryKey: ["receta", platoId],
    queryFn: async (): Promise<RecetaItem[]> => {
      const res = await fetch(`/api/recetas/${platoId}`);
      if (!res.ok) throw new Error("Error al cargar receta");
      return res.json();
    },
    enabled: !!platoId,
  });
}

export function useGuardarReceta(platoId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (items: RecetaItemInput[]) =>
      fetch(`/api/recetas/${platoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      }).then(r => r.json()),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["receta", platoId] });
      toast.success("Receta guardada");
    },
    onError: () => toast.error("Error al guardar receta"),
  });
}