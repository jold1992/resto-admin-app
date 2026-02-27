"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCrearCategoria, useEditarCategoria } from "@/hooks/useCategorias";

const schema = z.object({ nombre: z.string().min(1, "Requerido") });
type FormData = z.infer<typeof schema>;

type Props = {
  open: boolean;
  onClose: () => void;
  categoria?: { id: string; nombre: string } | null;
};

export function CategoriaDialog({ open, onClose, categoria }: Props) {
  const crear = useCrearCategoria();
  const editar = useEditarCategoria();
  const isEditing = !!categoria;

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    reset({ nombre: categoria?.nombre ?? "" });
  }, [categoria, reset]);

  async function onSubmit(data: FormData) {
    if (isEditing) {
      await editar.mutateAsync({ id: categoria.id, nombre: data.nombre });
    } else {
      await crear.mutateAsync(data.nombre);
    }
    onClose();
  }

  const isPending = crear.isPending || editar.isPending;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Editar categoría" : "Nueva categoría"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="nombre">Nombre</Label>
            <Input id="nombre" {...register("nombre")} placeholder="Ej: Entradas" />
            {errors.nombre && <p className="text-xs text-destructive">{errors.nombre.message}</p>}
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>Cancelar</Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Guardando..." : isEditing ? "Guardar cambios" : "Crear"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}