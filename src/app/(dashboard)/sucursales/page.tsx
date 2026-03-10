"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Building2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  useSucursales, useCrearSucursal, useEditarSucursal,
  useEliminarSucursal, type Sucursal,
} from "@/hooks/useSucursales";

function SucursalDialog({ open, onClose, sucursal }: {
  open: boolean; onClose: () => void; sucursal?: Sucursal | null;
}) {
  const crear = useCrearSucursal();
  const editar = useEditarSucursal();
  const [nombre, setNombre] = useState(sucursal?.nombre ?? "");
  const [direccion, setDireccion] = useState(sucursal?.direccion ?? "");
  const isEditing = !!sucursal;

  useEffect(() => {
    if (open) {
      setNombre(sucursal?.nombre ?? "");
      setDireccion(sucursal?.direccion ?? "");
    }
  }, [open, sucursal]);


  async function handleSubmit() {
    if (!nombre) return;
    if (isEditing) {
      await editar.mutateAsync({ id: sucursal.id, nombre, direccion: direccion || undefined });
    } else {
      await crear.mutateAsync({ nombre, direccion: direccion || undefined });
    }
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Editar sucursal" : "Nueva sucursal"}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col gap-1.5">
            <Label>Nombre</Label>
            <Input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Ej: Sucursal Norte" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Dirección (opcional)</Label>
            <Input value={direccion} onChange={e => setDireccion(e.target.value)} placeholder="Ej: Av. Principal 123" />
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <Button variant="outline" onClick={onClose}>Cancelar</Button>
            <Button onClick={handleSubmit} disabled={crear.isPending || editar.isPending || !nombre}>
              {crear.isPending || editar.isPending ? "Guardando..." : isEditing ? "Guardar cambios" : "Crear sucursal"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function SucursalesPage() {
  const { data: sucursales = [], isLoading } = useSucursales();
  const editar = useEditarSucursal();
  const eliminar = useEliminarSucursal();

  const [dialog, setDialog] = useState<{ open: boolean; sucursal?: Sucursal | null }>({ open: false });
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; id: string; nombre: string } | null>(null);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Sucursales</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {sucursales.length} sucursal{sucursales.length !== 1 ? "es" : ""} registrada{sucursales.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Button onClick={() => setDialog({ open: true })}>
          <Plus size={16} className="mr-2" /> Nueva sucursal
        </Button>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="animate-pulse"><CardContent className="h-28" /></Card>
          ))}
        </div>
      ) : sucursales.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-48 text-muted-foreground gap-2">
          <Building2 size={32} className="opacity-30" />
          <p>No hay sucursales registradas</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sucursales.map(s => (
            <Card key={s.id}>
              <CardContent className="pt-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <p className="font-medium">{s.nombre}</p>
                      {s.direccion && (
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                          <MapPin size={11} /> {s.direccion}
                        </p>
                      )}
                      <div className="mt-2">
                        {s.activa
                          ? <Badge variant="secondary" className="text-xs">Activa</Badge>
                          : <Badge variant="outline" className="text-xs text-muted-foreground">Inactiva</Badge>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <Button variant="ghost" size="icon" className="size-7"
                      onClick={() => setDialog({ open: true, sucursal: s })}>
                      <Pencil size={13} />
                    </Button>
                    <Button variant="ghost" size="icon"
                      className="size-7 text-destructive hover:text-destructive"
                      onClick={() => setDeleteDialog({ open: true, id: s.id, nombre: s.nombre })}>
                      <Trash2 size={13} />
                    </Button>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t flex justify-end">
                  <Button variant="outline" size="sm" className="h-7 text-xs"
                    onClick={() => editar.mutate({ id: s.id, activa: !s.activa })}>
                    {s.activa ? "Desactivar" : "Activar"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <SucursalDialog
        open={dialog.open}
        sucursal={dialog.sucursal}
        onClose={() => setDialog({ open: false })}
      />

      <AlertDialog open={!!deleteDialog?.open} onOpenChange={() => setDeleteDialog(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar sucursal?</AlertDialogTitle>
            <AlertDialogDescription>
              Se eliminará <strong>{deleteDialog?.nombre}</strong> permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => { await eliminar.mutateAsync(deleteDialog!.id); setDeleteDialog(null); }}
              className="bg-destructive hover:bg-destructive/90">
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}