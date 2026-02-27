"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { usePlatos, useEliminarPlato, type Plato } from "@/hooks/usePlatos";
import { useCategorias, useEliminarCategoria } from "@/hooks/useCategorias";
import { PlatoDialog } from "@/components/forms/PlatoDialog";
import { CategoriaDialog } from "@/components/forms/CategoriaDialog";

export default function MenuPage() {
  const { data: platos = [], isLoading } = usePlatos();
  const { data: categorias = [] } = useCategorias();
  const eliminarPlato = useEliminarPlato();
  const eliminarCategoria = useEliminarCategoria();

  const [platoDialog, setPlatoDialog] = useState<{ open: boolean; plato?: Plato | null }>({ open: false });
  const [categoriaDialog, setCategoriaDialog] = useState<{ open: boolean; categoria?: { id: string; nombre: string } | null }>({ open: false });
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; type: "plato" | "categoria"; id: string; nombre: string } | null>(null);
  const [filtroCategoria, setFiltroCategoria] = useState<string>("todas");

  const platosFiltrados = filtroCategoria === "todas"
    ? platos
    : platos.filter(p => p.categoriaId === filtroCategoria);

  async function handleDelete() {
    if (!deleteDialog) return;
    if (deleteDialog.type === "plato") await eliminarPlato.mutateAsync(deleteDialog.id);
    else await eliminarCategoria.mutateAsync(deleteDialog.id);
    setDeleteDialog(null);
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Menú</h1>
          <p className="text-muted-foreground text-sm mt-1">{platos.length} platos registrados</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setCategoriaDialog({ open: true })}>
            <Plus size={16} className="mr-2" /> Categoría
          </Button>
          <Button onClick={() => setPlatoDialog({ open: true })}>
            <Plus size={16} className="mr-2" /> Plato
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex gap-2 flex-wrap">
        <Button
          variant={filtroCategoria === "todas" ? "default" : "outline"}
          size="sm"
          onClick={() => setFiltroCategoria("todas")}
        >
          Todas
        </Button>
        {categorias.map(c => (
          <div key={c.id} className="flex items-center gap-1">
            <Button
              variant={filtroCategoria === c.id ? "default" : "outline"}
              size="sm"
              onClick={() => setFiltroCategoria(c.id)}
            >
              {c.nombre}
              <Badge variant="secondary" className="ml-2">{c._count.platos}</Badge>
            </Button>
            <Button variant="ghost" size="icon" className="size-7"
              onClick={() => setCategoriaDialog({ open: true, categoria: c })}>
              <Pencil size={12} />
            </Button>
            <Button variant="ghost" size="icon" className="size-7 text-destructive hover:text-destructive"
              onClick={() => setDeleteDialog({ open: true, type: "categoria", id: c.id, nombre: c.nombre })}>
              <Trash2 size={12} />
            </Button>
          </div>
        ))}
      </div>

      {/* Grid de platos */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse"><CardContent className="h-48" /></Card>
          ))}
        </div>
      ) : platosFiltrados.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-48 text-muted-foreground gap-2">
          <p>No hay platos en esta categoría</p>
          <Button variant="outline" size="sm" onClick={() => setPlatoDialog({ open: true })}>
            <Plus size={14} className="mr-2" /> Agregar plato
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {platosFiltrados.map(plato => (
            <Card key={plato.id} className={!plato.activo ? "opacity-50" : ""}>
              {plato.imagen && (
                <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
                  <Image src={plato.imagen} alt={plato.nombre} fill className="object-cover" />
                </div>
              )}
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base">{plato.nombre}</CardTitle>
                  <div className="flex gap-1 shrink-0">
                    <Button variant="ghost" size="icon" className="size-7"
                      onClick={() => setPlatoDialog({ open: true, plato })}>
                      <Pencil size={13} />
                    </Button>
                    <Button variant="ghost" size="icon" className="size-7 text-destructive hover:text-destructive"
                      onClick={() => setDeleteDialog({ open: true, type: "plato", id: plato.id, nombre: plato.nombre })}>
                      <Trash2 size={13} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                {plato.descripcion && (
                  <p className="text-sm text-muted-foreground line-clamp-2">{plato.descripcion}</p>
                )}
                <div className="flex items-center justify-between mt-1">
                  <Badge variant="outline">{plato.categoria.nombre}</Badge>
                  <span className="font-semibold text-sm">${Number(plato.precio).toFixed(2)}</span>
                </div>
                {!plato.activo && <Badge variant="secondary">Inactivo</Badge>}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <PlatoDialog
        open={platoDialog.open}
        plato={platoDialog.plato}
        onClose={() => setPlatoDialog({ open: false })}
      />
      <CategoriaDialog
        open={categoriaDialog.open}
        categoria={categoriaDialog.categoria}
        onClose={() => setCategoriaDialog({ open: false })}
      />

      <AlertDialog open={!!deleteDialog?.open} onOpenChange={() => setDeleteDialog(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              ¿Eliminar {deleteDialog?.type === "plato" ? "plato" : "categoría"}?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Se eliminará <strong>{deleteDialog?.nombre}</strong> permanentemente. Esta acción no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}