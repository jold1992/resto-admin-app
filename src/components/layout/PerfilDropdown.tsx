"use client";

import { useState } from "react";
import { User, Pencil } from "lucide-react";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { getRolLabel } from "@/hooks/useUsuarios";

type Props = {
  nombre: string;
  email: string;
  rol: string;
};

export function PerfilDropdown({ nombre, email, rol }: Props) {
  const [editOpen, setEditOpen] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(nombre);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const iniciales = nombre
    .split(" ")
    .map(n => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  async function handleGuardar() {
    if (!nuevoNombre.trim()) return;
    setIsPending(true);
    const { error } = await supabase.auth.updateUser({
      data: { nombre: nuevoNombre.trim() },
    });
    setIsPending(false);
    if (error) {
      toast.error("Error al actualizar nombre");
    } else {
      toast.success("Nombre actualizado");
      setEditOpen(false);
      router.refresh();
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2.5 px-2 h-9">
            <Avatar className="size-7">
              <AvatarFallback className="text-xs bg-primary/10 text-primary font-semibold">
                {iniciales}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start text-left hidden sm:flex">
              <span className="text-sm font-medium leading-none">{nombre}</span>
              <span className="text-xs text-muted-foreground mt-0.5">{getRolLabel(rol)}</span>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>
            <div className="flex flex-col gap-0.5">
              <span className="font-medium">{nombre}</span>
              <span className="text-xs text-muted-foreground font-normal">{email}</span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => { setNuevoNombre(nombre); setEditOpen(true); }}>
            <Pencil size={14} className="mr-2" /> Editar nombre
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Editar nombre</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col gap-1.5">
              <Label>Nombre</Label>
              <Input
                value={nuevoNombre}
                onChange={e => setNuevoNombre(e.target.value)}
                placeholder="Tu nombre completo"
                onKeyDown={e => e.key === "Enter" && handleGuardar()}
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setEditOpen(false)}>Cancelar</Button>
              <Button onClick={handleGuardar} disabled={isPending || !nuevoNombre.trim()}>
                {isPending ? "Guardando..." : "Guardar"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}