"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  useIngredientes, useEliminarIngrediente, type Ingrediente,
} from "@/hooks/useIngredientes";
import { IngredienteDialog } from "@/components/forms/IngredienteDialog";
import { getUnidadAbrev } from "@/lib/unidades";

import { AjusteStockDialog } from "@/components/forms/AjusteStockDialog";
import { ArrowUpDown } from "lucide-react";

export default function InventarioPage() {
  const { data: ingredientes = [], isLoading } = useIngredientes();
  const eliminar = useEliminarIngrediente();

  const [dialog, setDialog] = useState<{ open: boolean; ingrediente?: Ingrediente | null }>({ open: false });
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; id: string; nombre: string } | null>(null);
  const [ajusteDialog, setAjusteDialog] = useState<{ open: boolean; ingrediente?: Ingrediente | null }>({ open: false });

  const stockBajo = ingredientes.filter(i => Number(i.stockActual) <= Number(i.stockMinimo));

  async function handleDelete() {
    if (!deleteDialog) return;
    await eliminar.mutateAsync(deleteDialog.id);
    setDeleteDialog(null);
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Inventario</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {ingredientes.length} ingredientes registrados
          </p>
        </div>
        <Button onClick={() => setDialog({ open: true })}>
          <Plus size={16} className="mr-2" /> Ingrediente
        </Button>
      </div>

      {/* Alerta stock bajo */}
      {stockBajo.length > 0 && (
        <div className="flex items-center gap-3 rounded-lg border border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20 dark:border-yellow-900 px-4 py-3">
          <AlertTriangle size={18} className="text-yellow-600 dark:text-yellow-500 shrink-0" />
          <p className="text-sm text-yellow-800 dark:text-yellow-400">
            <strong>{stockBajo.length} ingrediente{stockBajo.length > 1 ? "s" : ""}</strong> con stock bajo o agotado:{" "}
            {stockBajo.map(i => i.nombre).join(", ")}
          </p>
        </div>
      )}

      {/* Tabla */}
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Unidad</TableHead>
              <TableHead className="text-right">Costo unitario</TableHead>
              <TableHead className="text-right">Stock actual</TableHead>
              <TableHead className="text-right">Stock mínimo</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="w-20" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              [...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  {[...Array(7)].map((_, j) => (
                    <TableCell key={j}>
                      <div className="h-4 bg-muted animate-pulse rounded" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : ingredientes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground py-12">
                  No hay ingredientes registrados
                </TableCell>
              </TableRow>
            ) : (
              ingredientes.map(ingrediente => {
                const stockBajo = Number(ingrediente.stockActual) <= Number(ingrediente.stockMinimo);
                const agotado = Number(ingrediente.stockActual) === 0;
                return (
                  <TableRow key={ingrediente.id}>
                    <TableCell className="font-medium">{ingrediente.nombre}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{getUnidadAbrev(ingrediente.unidad)}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      ${Number(ingrediente.costoUnitario).toFixed(4)}
                    </TableCell>
                    <TableCell className="text-right">
                      {Number(ingrediente.stockActual).toFixed(3)}
                    </TableCell>
                    <TableCell className="text-right">
                      {Number(ingrediente.stockMinimo).toFixed(3)}
                    </TableCell>
                    <TableCell>
                      {agotado ? (
                        <Badge variant="destructive">Agotado</Badge>
                      ) : stockBajo ? (
                        <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-0">
                          Stock bajo
                        </Badge>
                      ) : (
                        <Badge variant="secondary">OK</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1 justify-end">
                        <Button
                          variant="ghost" size="icon" className="size-7 cursor-pointer"
                          title="Movimientos"
                          onClick={() => setAjusteDialog({ open: true, ingrediente })}                          
                        >
                          <ArrowUpDown size={13} />
                        </Button>
                        <Button
                          variant="ghost" size="icon" className="size-7 cursor-pointer"
                          title="Editar"
                          onClick={() => setDialog({ open: true, ingrediente })}
                        >
                          <Pencil size={13} />
                        </Button>
                        <Button
                          variant="ghost" size="icon"
                          title="Eliminar"
                          className="size-7 text-destructive hover:text-destructive cursor-pointer"
                          onClick={() => setDeleteDialog({ open: true, id: ingrediente.id, nombre: ingrediente.nombre })}
                        >
                          <Trash2 size={13} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      <IngredienteDialog
        open={dialog.open}
        ingrediente={dialog.ingrediente}
        onClose={() => setDialog({ open: false })}
      />

      <AjusteStockDialog
        open={ajusteDialog.open}
        ingrediente={ajusteDialog.ingrediente ?? null}
        onClose={() => setAjusteDialog({ open: false })}
      />

      <AlertDialog open={!!deleteDialog?.open} onOpenChange={() => setDeleteDialog(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar ingrediente?</AlertDialogTitle>
            <AlertDialogDescription>
              Se eliminará <strong>{deleteDialog?.nombre}</strong> permanentemente.
              Si está siendo usado en alguna receta, fallará.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive hover:bg-destructive/90"
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}