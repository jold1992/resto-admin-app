"use client";

import { useState } from "react";
import { Plus, Trash2, ShoppingCart } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { usePlatos } from "@/hooks/usePlatos";
import { useRegistrarVenta } from "@/hooks/useVentas";

type ItemVenta = {
  platoId: string;
  cantidad: number;
  precio: number;
};

type Props = {
  open: boolean;
  onClose: () => void;
};

export function VentaDialog({ open, onClose }: Props) {
  const { data: platos = [] } = usePlatos();
  const registrar = useRegistrarVenta();
  const [items, setItems] = useState<ItemVenta[]>([{ platoId: "", cantidad: 1, precio: 0 }]);
  const [notas, setNotas] = useState("");

  const platosActivos = platos.filter(p => p.activo);

  function agregarItem() {
    setItems(prev => [...prev, { platoId: "", cantidad: 1, precio: 0 }]);
  }

  function actualizarItem(index: number, field: keyof ItemVenta, value: string | number) {
    setItems(prev => prev.map((item, i) => {
      if (i !== index) return item;
      if (field === "platoId") {
        const plato = platos.find(p => p.id === value);
        return { ...item, platoId: String(value), precio: plato ? Number(plato.precio) : 0 };
      }
      return { ...item, [field]: value };
    }));
  }

  function eliminarItem(index: number) {
    setItems(prev => prev.filter((_, i) => i !== index));
  }

  function platosDisponibles(currentIndex: number) {
    const seleccionados = items
      .map((item, idx) => idx !== currentIndex ? item.platoId : null)
      .filter(Boolean);
    return platosActivos.filter(p => !seleccionados.includes(p.id));
  }

  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  const validos = items.filter(i => i.platoId && i.cantidad > 0 && i.precio > 0);

  async function handleSubmit() {
    if (validos.length === 0) return;
    await registrar.mutateAsync({ notas: notas || undefined, detalles: validos });
    setItems([{ platoId: "", cantidad: 1, precio: 0 }]);
    setNotas("");
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingCart size={18} /> Nueva venta
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-2">
          {/* Items */}
          <div className="flex flex-col gap-3">
            {items.map((item, index) => {
              const plato = platos.find(p => p.id === item.platoId);
              return (
                <div key={index} className="grid grid-cols-[1fr_80px_90px_32px] gap-2 items-end">
                  <div className="flex flex-col gap-1">
                    {index === 0 && <Label className="text-xs text-muted-foreground">Plato</Label>}
                    <Select
                      value={item.platoId}
                      onValueChange={val => actualizarItem(index, "platoId", val)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        {platosDisponibles(index).map(p => (
                          <SelectItem key={p.id} value={p.id}>{p.nombre}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-1">
                    {index === 0 && <Label className="text-xs text-muted-foreground">Cant.</Label>}
                    <Input
                      type="number"
                      min="1"
                      value={item.cantidad}
                      onChange={e => actualizarItem(index, "cantidad", parseInt(e.target.value) || 1)}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    {index === 0 && <Label className="text-xs text-muted-foreground">Precio</Label>}
                    <Input
                      type="number"
                      step="0.01"
                      value={item.precio}
                      onChange={e => actualizarItem(index, "precio", parseFloat(e.target.value) || 0)}
                    />
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-8 text-destructive hover:text-destructive"
                    onClick={() => eliminarItem(index)}
                    disabled={items.length === 1}
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              );
            })}
          </div>

          <Button type="button" variant="outline" size="sm" onClick={agregarItem}>
            <Plus size={14} className="mr-2" /> Agregar plato
          </Button>

          {/* Notas */}
          <div className="flex flex-col gap-1.5">
            <Label>Notas (opcional)</Label>
            <Input
              value={notas}
              onChange={e => setNotas(e.target.value)}
              placeholder="Mesa 5, para llevar..."
            />
          </div>

          {/* Total */}
          {validos.length > 0 && (
            <div className="flex items-center justify-between rounded-md bg-muted px-4 py-3">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="text-lg font-semibold">${total.toFixed(2)}</span>
            </div>
          )}

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>Cancelar</Button>
            <Button onClick={handleSubmit} disabled={registrar.isPending || validos.length === 0}>
              {registrar.isPending ? "Registrando..." : "Registrar venta"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}