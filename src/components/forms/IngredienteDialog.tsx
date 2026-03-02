"use client";

import { useEffect } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useCrearIngrediente, useEditarIngrediente, type Ingrediente } from "@/hooks/useIngredientes";
import { UNIDAD_OPTIONS } from "@/lib/unidades";

type FormData = z.output<typeof schema>;

const schema = z.object({
    nombre: z.string().min(1, "Requerido"),
    unidad: z.enum(["GRAMO", "KILOGRAMO", "MILILITRO", "LITRO", "UNIDAD", "PORCION"]),
    costoUnitario: z.preprocess((val: unknown) => (val ? Number(val) : undefined), z.number().positive("Debe ser mayor a 0")),
    stockActual: z.preprocess((val: unknown) => (val ? Number(val) : 0), z.number().min(0)),
    stockMinimo: z.preprocess((val: unknown) => (val ? Number(val) : 0), z.number().min(0)),
  });

type Props = {
  open: boolean;
  onClose: () => void;
  ingrediente?: Ingrediente | null;
};

export function IngredienteDialog({ open, onClose, ingrediente }: Props) {
  const crear = useCrearIngrediente();
  const editar = useEditarIngrediente();
  const isEditing = !!ingrediente;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema) as Resolver<FormData>,
  });

  useEffect(() => {
    reset({
      nombre: ingrediente?.nombre ?? "",
      unidad: ingrediente?.unidad ?? "GRAMO",
      costoUnitario: ingrediente?.costoUnitario ?? 0,
      stockActual: ingrediente?.stockActual ?? 0,
      stockMinimo: ingrediente?.stockMinimo ?? 0,
    });
  }, [ingrediente, reset, open]);

  async function onSubmit(data: FormData) {
    if (isEditing) {
      await editar.mutateAsync({ id: ingrediente!.id, ...data });
    } else {
      await crear.mutateAsync(data);
    }
    onClose();
  }

  const isPending = crear.isPending || editar.isPending;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Editar ingrediente" : "Nuevo ingrediente"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-2" autoComplete="off">

          <div className="flex flex-col gap-1.5">
            <Label>Nombre</Label>
            <Input {...register("nombre")} placeholder="Ej: Harina de trigo" />
            {errors.nombre?.message && <p className="text-xs text-destructive">{String(errors.nombre?.message)}</p>}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <Label>Unidad de medida</Label>
              <Select
                value={watch("unidad")}
                onValueChange={val => setValue("unidad", val as FormData["unidad"])}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  {UNIDAD_OPTIONS.map(u => (
                    <SelectItem key={u.value} value={u.value}>
                      {u.label} ({u.abrev})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.unidad?.message && <p className="text-xs text-destructive">{String(errors.unidad?.message)}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label>Costo unitario</Label>
              <Input type="number" step="0.0001" {...register("costoUnitario")} placeholder="0.00" />
              {errors.costoUnitario?.message && <p className="text-xs text-destructive">{String(errors.costoUnitario?.message)}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <Label>Stock actual</Label>
              <Input type="number" step="0.001" {...register("stockActual")} placeholder="0" />
              {errors.stockActual?.message && <p className="text-xs text-destructive">{String(errors.stockActual?.message)}</p>}
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Stock mínimo</Label>
              <Input type="number" step="0.001" {...register("stockMinimo")} placeholder="0" />
              {errors.stockMinimo?.message && <p className="text-xs text-destructive">{String(errors.stockMinimo?.message)}</p>}
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-2">
            <Button type="button" variant="outline" onClick={onClose}>Cancelar</Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Guardando..." : isEditing ? "Guardar cambios" : "Crear ingrediente"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}