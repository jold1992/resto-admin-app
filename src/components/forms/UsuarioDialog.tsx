"use client";

import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  useCrearUsuario, useEditarUsuario, ROLES, type Usuario,
} from "@/hooks/useUsuarios";

type Props = {
  open: boolean;
  onClose: () => void;
  usuario?: Usuario | null;
};

export function UsuarioDialog({ open, onClose, usuario }: Props) {
  const crear = useCrearUsuario();
  const editar = useEditarUsuario();
  const isEditing = !!usuario;

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState<"admin" | "cajero" | "cocina">("cajero");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (open) {
      setNombre(usuario?.nombre ?? "");
      setEmail(usuario?.email ?? "");
      setPassword("");
      setRol(usuario?.rol ?? "cajero");
    }
  }, [open, usuario]);

  const isPending = crear.isPending || editar.isPending;

  async function handleSubmit() {
    if (isEditing) {
      await editar.mutateAsync({
        id: usuario.id,
        nombre: nombre || undefined,
        rol,
        password: password || undefined,
      });
    } else {
      if (!email || !password || !nombre) return;
      await crear.mutateAsync({ email, password, nombre, rol });
    }
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Editar usuario" : "Nuevo usuario"}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col gap-1.5">
            <Label>Nombre</Label>
            <Input
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              placeholder="Ej: Juan Pérez"
            />
          </div>

          {!isEditing && (
            <div className="flex flex-col gap-1.5">
              <Label>Email</Label>
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="juan@restaurante.com"
              />
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <Label>{isEditing ? "Nueva contraseña (opcional)" : "Contraseña"}</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder={isEditing ? "Dejar vacío para no cambiar" : "Mínimo 8 caracteres"}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label>Rol</Label>
            <Select value={rol} onValueChange={v => setRol(v as typeof rol)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ROLES.map(r => (
                  <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end gap-2 mt-2">
            <Button variant="outline" onClick={onClose}>Cancelar</Button>
            <Button
              onClick={handleSubmit}
              disabled={isPending || (!isEditing && (!email || !password || !nombre))}
            >
              {isPending ? "Guardando..." : isEditing ? "Guardar cambios" : "Crear usuario"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}