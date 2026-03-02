"use client";

import { useState } from "react";
import { Plus, Trash2, Calendar, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useVentas, useEliminarVenta, type Venta } from "@/hooks/useVentas";
import { VentaDialog } from "@/components/forms/VentaDialog";

function VentaRow({ venta, onDelete }: { venta: Venta; onDelete: (id: string) => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell className="text-sm">
          {format(new Date(venta.fecha), "dd MMM yyyy HH:mm", { locale: es })}
        </TableCell>
        <TableCell>
          <Button
            variant="ghost" size="sm" className="h-7 gap-1 text-xs"
            onClick={() => setExpanded(!expanded)}
          >
            {venta.detalles.length} plato{venta.detalles.length !== 1 ? "s" : ""}
            <ChevronDown size={12} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
          </Button>
        </TableCell>
        <TableCell className="text-sm text-muted-foreground">
          {venta.notas ?? "—"}
        </TableCell>
        <TableCell className="text-right font-semibold">
          ${Number(venta.total).toFixed(2)}
        </TableCell>
        <TableCell>
          <Button
            variant="ghost" size="icon" className="size-7 text-destructive hover:text-destructive"
            onClick={() => onDelete(venta.id)}
          >
            <Trash2 size={13} />
          </Button>
        </TableCell>
      </TableRow>
      {expanded && (
        <TableRow className="bg-muted/30 hover:bg-muted/30">
          <TableCell colSpan={5} className="py-2 px-6">
            <div className="flex flex-wrap gap-2">
              {venta.detalles.map(d => (
                <Badge key={d.id} variant="outline" className="font-normal">
                  {d.cantidad}× {d.plato.nombre} — ${Number(d.precio).toFixed(2)}
                </Badge>
              ))}
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}

export default function VentasPage() {
  const hoy = new Date();
  const inicioMes = new Date(hoy.getFullYear(), hoy.getMonth(), 1).toISOString().split("T")[0];
  const hoyStr = hoy.toISOString().split("T")[0];

  const [desde, setDesde] = useState(inicioMes);
  const [hasta, setHasta] = useState(hoyStr);
  const [ventaDialog, setVentaDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; id: string } | null>(null);

  const { data: ventas = [], isLoading } = useVentas(desde, hasta);
  const eliminar = useEliminarVenta();

  const totalPeriodo = ventas.reduce((acc, v) => acc + Number(v.total), 0);

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
          <h1 className="text-2xl font-semibold">Ventas</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {ventas.length} ventas · Total: ${totalPeriodo.toFixed(2)}
          </p>
        </div>
        <Button onClick={() => setVentaDialog(true)}>
          <Plus size={16} className="mr-2" /> Nueva venta
        </Button>
      </div>

      {/* Filtros de fecha */}
      <div className="flex items-end gap-4 p-4 rounded-lg border bg-card">
        <Calendar size={18} className="text-muted-foreground mb-2 shrink-0" />
        <div className="flex flex-col gap-1.5">
          <Label className="text-xs">Desde</Label>
          <Input type="date" value={desde} onChange={e => setDesde(e.target.value)} className="w-40" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label className="text-xs">Hasta</Label>
          <Input type="date" value={hasta} onChange={e => setHasta(e.target.value)} className="w-40" />
        </div>
      </div>

      {/* Tabla */}
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fecha</TableHead>
              <TableHead>Platos</TableHead>
              <TableHead>Notas</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="w-12" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              [...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  {[...Array(5)].map((_, j) => (
                    <TableCell key={j}>
                      <div className="h-4 bg-muted animate-pulse rounded" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : ventas.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-12">
                  No hay ventas en este período
                </TableCell>
              </TableRow>
            ) : (
              ventas.map(venta => (
                <VentaRow
                  key={venta.id}
                  venta={venta}
                  onDelete={(id) => setDeleteDialog({ open: true, id })}
                />
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <VentaDialog open={ventaDialog} onClose={() => setVentaDialog(false)} />

      <AlertDialog open={!!deleteDialog?.open} onOpenChange={() => setDeleteDialog(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar venta?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no restaura el stock descontado. Solo elimina el registro.
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