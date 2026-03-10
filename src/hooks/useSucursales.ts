import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export type Sucursal = {
  id: string;
  nombre: string;
  direccion: string | null;
  activa: boolean;
  createdAt: string;
};

export function useSucursales() {
  return useQuery({
    queryKey: ["sucursales"],
    queryFn: async (): Promise<Sucursal[]> => {
      const res = await fetch("/api/sucursales");
      if (!res.ok) throw new Error("Error al cargar sucursales");
      return res.json();
    },
  });
}

export function useCrearSucursal() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: { nombre: string; direccion?: string }) =>
      fetch("/api/sucursales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(r => r.json()),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["sucursales"] });
      toast.success("Sucursal creada");
    },
    onError: () => toast.error("Error al crear sucursal"),
  });
}

export function useEditarSucursal() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...data }: { id: string; nombre?: string; direccion?: string; activa?: boolean }) =>
      fetch(`/api/sucursales/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(r => r.json()),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["sucursales"] });
      toast.success("Sucursal actualizada");
    },
    onError: () => toast.error("Error al actualizar sucursal"),
  });
}

export function useEliminarSucursal() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      fetch(`/api/sucursales/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["sucursales"] });
      toast.success("Sucursal eliminada");
    },
    onError: () => toast.error("Error al eliminar sucursal"),
  });
}