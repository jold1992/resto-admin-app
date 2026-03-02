"use client";

import { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useRegistrarMovimiento } from "@/hooks/useMovimientos";
import { getUnidadAbrev } from "@/lib/unidades";
import type { Ingrediente } from "@/hooks/useIngredientes";
import type { UnidadMedida } from "@/lib/unidades";

type Props = {
  open: boolean;
  onClose: () => void;
  ingrediente: Ingrediente | null;
};

const TIPOS = [
  { value: "ENTRADA", label: "Entrada", description: "Compra o reposición de stock" },
  { value: "AJUSTE", label: "Ajuste", description: "Corrección manual de inventario" },
  { value: "SALIDA", label: "Salida", description: "Pérdida, merma o uso manual" },
] as const;

export function AjusteStockDialog({ open, onClose, ingrediente }: Props) {
  const registrar = useRegistrarMovimiento();
  const [tipo, setTipo] = useState<"ENTRADA" | "SALIDA" | "AJUSTE">("ENTRADA");
  const [cantidad, setCantidad] = useState("");
  const [motivo, setMotivo] = useState("");

  function handleClose() {
    setCantidad("");
    setMotivo("");
    setTipo("ENTRADA");
    onClose();
  }

  async function handleSubmit() {
    if (!ingrediente || !cantidad || !motivo) return;
    await registrar.mutateAsync({
      ingredienteId: ingrediente.id,
      tipo,
      cantidad: parseFloat(cantidad),
      motivo,
    });
    handleClose();
  }

  const abrev = ingrediente ? getUnidadAbrev(ingrediente.unidad as UnidadMedida) : "";

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Ajustar stock — {ingrediente?.nombre}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-2">
          {/* Stock actual */}
          <div className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-sm">
            <span className="text-muted-foreground">Stock actual</span>
            <span className="font-semibold">
              {Number(ingrediente?.stockActual ?? 0).toFixed(3)} {abrev}
            </span>
          </div>

          {/* Tipo de movimiento */}
          <div className="flex flex-col gap-1.5">
            <Label>Tipo de movimiento</Label>
            <div className="grid grid-cols-3 gap-2">
              {TIPOS.map(t => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setTipo(t.value)}
                  className={`rounded-md border px-3 py-2 text-left text-xs transition-colors ${
                    tipo === t.value
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:bg-muted"
                  }`}
                >
                  <div className="font-medium">{t.label}</div>
                  <div className="text-muted-foreground mt-0.5 leading-tight">{t.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Cantidad */}
          <div className="flex flex-col gap-1.5">
            <Label>Cantidad ({abrev})</Label>
            <Input
              type="number"
              step="0.001"
              min="0"
              value={cantidad}
              onChange={e => setCantidad(e.target.value)}
              placeholder="0.000"
            />
          </div>

          {/* Motivo */}
          <div className="flex flex-col gap-1.5">
            <Label>Motivo</Label>
            <Input
              value={motivo}
              onChange={e => setMotivo(e.target.value)}
              placeholder={
                tipo === "ENTRADA" ? "Ej: Compra semanal proveedor X" :
                tipo === "SALIDA" ? "Ej: Merma por vencimiento" :
                "Ej: Corrección de conteo físico"
              }
            />
          </div>

          <div className="flex justify-end gap-2 mt-2">
            <Button type="button" variant="outline" onClick={handleClose}>Cancelar</Button>
            <Button
              onClick={handleSubmit}
              disabled={registrar.isPending || !cantidad || !motivo}
            >
              {registrar.isPending ? "Guardando..." : "Registrar"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}