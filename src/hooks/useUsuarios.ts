import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export type Usuario = {
  id: string;
  email: string;
  nombre: string;
  rol: "admin" | "cajero" | "cocina";
  activo: boolean;
  creadoEn: string;
  ultimoAcceso: string | null;
};

export type UsuarioInput = {
  email: string;
  password: string;
  nombre: string;
  rol: "admin" | "cajero" | "cocina";
};

export const ROLES = [
  { value: "admin",   label: "Administrador", color: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400"    },
  { value: "cajero",  label: "Cajero",         color: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400" },
  { value: "cocina",  label: "Cocina",          color: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400" },
] as const;

export function getRolLabel(rol: string) {
  return ROLES.find(r => r.value === rol)?.label ?? rol;
}

export function getRolColor(rol: string) {
  return ROLES.find(r => r.value === rol)?.color ?? "bg-muted text-muted-foreground";
}

export function useUsuarios() {
  return useQuery({
    queryKey: ["usuarios"],
    queryFn: async (): Promise<Usuario[]> => {
      const res = await fetch("/api/usuarios");
      if (!res.ok) throw new Error("Error al cargar usuarios");
      return res.json();
    },
  });
}

export function useCrearUsuario() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: UsuarioInput) =>
      fetch("/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(async r => {
        const json = await r.json();
        if (!r.ok) throw new Error(json.error ?? "Error al crear usuario");
        return json;
      }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["usuarios"] });
      toast.success("Usuario creado");
    },
    onError: (e: Error) => toast.error(e.message),
  });
}

export function useEditarUsuario() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...data }: { id: string; nombre?: string; rol?: "admin" | "cajero" | "cocina"; password?: string; activo?: boolean }) =>
      fetch(`/api/usuarios/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(async r => {
        const json = await r.json();
        if (!r.ok) throw new Error(json.error ?? "Error al actualizar usuario");
        return json;
      }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["usuarios"] });
      toast.success("Usuario actualizado");
    },
    onError: (e: Error) => toast.error(e.message),
  });
}

export function useEliminarUsuario() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      fetch(`/api/usuarios/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["usuarios"] });
      toast.success("Usuario eliminado");
    },
    onError: () => toast.error("Error al eliminar usuario"),
  });
}