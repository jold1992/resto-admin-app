"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCrearPlato, useEditarPlato, type Plato } from "@/hooks/usePlatos";
import { useCategorias } from "@/hooks/useCategorias";

const schema = z.object({
  nombre: z.string().min(1, "Requerido"),
  descripcion: z.string().optional(),
  precio: z.coerce.number().positive("Debe ser mayor a 0"),
  categoriaId: z.string().min(1, "Selecciona una categoría"),
  activo: z.boolean().default(true),
});

type FormData = z.infer<typeof schema>;

type Props = {
  open: boolean;
  onClose: () => void;
  plato?: Plato | null;
};

export function PlatoSheet({ open, onClose, plato }: Props) {
  const crear = useCrearPlato();
  const editar = useEditarPlato();
  const { data: categorias = [] } = useCategorias();
  const isEditing = !!plato;

  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    reset({
      nombre: plato?.nombre ?? "",
      descripcion: plato?.descripcion ?? "",
      precio: plato?.precio ?? 0,
      categoriaId: plato?.categoriaId ?? "",
      activo: plato?.activo ?? true,
    });
  }, [plato, reset]);

  async function onSubmit(data: FormData) {
    if (isEditing) {
      await editar.mutateAsync({ id: plato.id, ...data });
    } else {
      await crear.mutateAsync(data);
    }
    onClose();
  }

  const isPending = crear.isPending || editar.isPending;

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{isEditing ? "Editar plato" : "Nuevo plato"}</SheetTitle>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-6">
          <div className="flex flex-col gap-1.5">
            <Label>Nombre</Label>
            <Input {...register("nombre")} placeholder="Ej: Lomo saltado" />
            {errors.nombre && <p className="text-xs text-destructive">{errors.nombre.message}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Descripción</Label>
            <Input {...register("descripcion")} placeholder="Opcional" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Precio</Label>
            <Input type="number" step="0.01" {...register("precio")} placeholder="0.00" />
            {errors.precio && <p className="text-xs text-destructive">{errors.precio.message}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Categoría</Label>
            <Select
              value={watch("categoriaId")}
              onValueChange={val => setValue("categoriaId", val)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar categoría" />
              </SelectTrigger>
              <SelectContent>
                {categorias.map(c => (
                  <SelectItem key={c.id} value={c.id}>{c.nombre}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.categoriaId && <p className="text-xs text-destructive">{errors.categoriaId.message}</p>}
          </div>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Guardando..." : isEditing ? "Guardar cambios" : "Crear plato"}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}