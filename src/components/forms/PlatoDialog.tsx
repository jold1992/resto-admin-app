"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { ImagePlus, X } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCrearPlato, useEditarPlato, type Plato, type PlatoInput } from "@/hooks/usePlatos";
import { useCategorias } from "@/hooks/useCategorias";
import { uploadPlatoImage } from "@/lib/storage";
import { cuid } from "@/lib/utils";

const schema = z.object({
  nombre: z.string().min(1, "Requerido"),
  descripcion: z.string().nullish(),
  precio: z.coerce.number().min(0.01, "Debe ser mayor a 0"),
  categoriaId: z.string().min(1, "Selecciona una categoría"),
  activo: z.boolean().default(true),
});

type FormData = z.infer<typeof schema>;

type Props = {
  open: boolean;
  onClose: () => void;
  plato?: Plato | null;
};

export function PlatoDialog({ open, onClose, plato }: Props) {
  const crear = useCrearPlato();
  const editar = useEditarPlato();
  const { data: categorias = [] } = useCategorias();
  const isEditing = !!plato;

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema) as unknown as import('react-hook-form').Resolver<FormData>,
  });

  useEffect(() => {
    reset({
      nombre: plato?.nombre ?? "",
      descripcion: plato?.descripcion ?? "",
      precio: plato?.precio ?? 0,
      categoriaId: plato?.categoriaId ?? "",
      activo: plato?.activo ?? true,
    });
    setImageFile(null);
    setImagePreview(plato?.imagen ?? null);
  }, [plato, reset, open]);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  function handleRemoveImage() {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    let imagenUrl: string | null = plato?.imagen ?? null;

    if (imageFile) {
      setUploadingImage(true);
      try {
        const id = plato?.id ?? cuid();
        imagenUrl = await uploadPlatoImage(imageFile, id);
      } catch {
        return;
      } finally {
        setUploadingImage(false);
      }
    }

    if (!imagePreview && plato?.imagen) {
      imagenUrl = null;
    }

    const payload: PlatoInput = {
      nombre: data.nombre,
      descripcion: data.descripcion ?? null,
      precio: data.precio,
      categoriaId: data.categoriaId,
      activo: data.activo,
      imagen: imagenUrl
    };

    if (isEditing) {
      await editar.mutateAsync({ id: plato.id, ...payload });
    } else {
      await crear.mutateAsync(payload);
    }
    onClose();
  }

  const isPending = crear.isPending || editar.isPending || uploadingImage;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Editar plato" : "Nuevo plato"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-2">

          {/* Upload de imagen */}
          <div className="flex flex-col gap-1.5">
            <Label>Imagen</Label>
            {imagePreview ? (
              <div className="relative w-full h-40 rounded-md overflow-hidden border group">
                <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center justify-center w-full h-40 rounded-md border border-dashed text-muted-foreground hover:bg-accent transition-colors gap-2"
              >
                <ImagePlus size={24} />
                <span className="text-sm">Subir imagen</span>
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label>Nombre</Label>
            <Input {...register("nombre")} placeholder="Ej: Lomo saltado" />
            {errors.nombre && <p className="text-xs text-destructive">{errors.nombre.message}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <Label>Descripción</Label>
            <Input {...register("descripcion")} placeholder="Opcional" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <Label>Precio</Label>
              <Input type="number" step="0.01" {...register("precio")} placeholder="0.00" />
              {errors.precio && <p className="text-xs text-destructive">{errors.precio.message}</p>}
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Categoría</Label>
              <Select value={watch("categoriaId")} onValueChange={val => setValue("categoriaId", val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  {categorias.map(c => (
                    <SelectItem key={c.id} value={c.id}>{c.nombre}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.categoriaId && <p className="text-xs text-destructive">{errors.categoriaId.message}</p>}
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-2">
            <Button type="button" variant="outline" onClick={onClose}>Cancelar</Button>
            <Button type="submit" disabled={isPending}>
              {uploadingImage ? "Subiendo imagen..." : isPending ? "Guardando..." : isEditing ? "Guardar cambios" : "Crear plato"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}