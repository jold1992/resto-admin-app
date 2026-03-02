"use client";

import { useEffect, useState, useRef } from "react";
import { Plus, Trash2 } from "lucide-react";
import {
    Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useReceta, useGuardarReceta, type RecetaItemInput } from "@/hooks/useReceta";
import { useIngredientes } from "@/hooks/useIngredientes";
import { getUnidadAbrev } from "@/lib/unidades";
import type { Plato } from "@/hooks/usePlatos";

type Props = {
    open: boolean;
    onClose: () => void;
    plato: Plato | null;
};

export function RecetaDialog({ open, onClose, plato }: Props) {
    const { data: recetaActual = [], isLoading } = useReceta(plato?.id ?? null);
    const { data: ingredientes = [] } = useIngredientes();
    const guardar = useGuardarReceta(plato?.id ?? "");

    const [items, setItems] = useState<RecetaItemInput[]>([]);

    const recetaInicializada = useRef(false);

    useEffect(() => {
        if (!open) {
            recetaInicializada.current = false;
            return;
        }

        if (recetaInicializada.current) return;

        if (!isLoading) {
            setItems(recetaActual.map(i => ({
                ingredienteId: i.ingredienteId,
                cantidad: Number(i.cantidad),
            })));
            recetaInicializada.current = true;
        }
    }, [open, isLoading, recetaActual]);

    function agregarItem() {
        setItems(prev => [...prev, { ingredienteId: "", cantidad: 0 }]);
    }

    function actualizarItem(index: number, field: keyof RecetaItemInput, value: string | number) {
        setItems(prev => prev.map((item, i) =>
            i === index ? { ...item, [field]: value } : item
        ));
    }

    function eliminarItem(index: number) {
        setItems(prev => prev.filter((_, i) => i !== index));
    }

    async function handleGuardar() {
        const validos = items.filter(i => i.ingredienteId && i.cantidad > 0);
        if (validos.length === 0) return;
        await guardar.mutateAsync(validos);
        onClose();
    }

    // Ingredientes disponibles (excluyendo los ya seleccionados)
    function ingredientesDisponibles(currentIndex: number) {
        const seleccionados = items
            .map((i, idx) => idx !== currentIndex ? i.ingredienteId : null)
            .filter(Boolean);
        return ingredientes.filter(i => !seleccionados.includes(i.id));
    }

    const costoTotal = items.reduce((acc, item) => {
        const ing = ingredientes.find(i => i.id === item.ingredienteId);
        if (!ing) return acc;
        return acc + (Number(ing.costoUnitario) * item.cantidad);
    }, 0);

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Receta — {plato?.nombre}</DialogTitle>
                </DialogHeader>

                {isLoading ? (
                    <div className="flex justify-center py-8">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" />
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 mt-2">

                        {/* Lista de ingredientes */}
                        {items.length === 0 ? (
                            <p className="text-sm text-muted-foreground text-center py-4">
                                No hay ingredientes en la receta. Agrega uno para comenzar.
                            </p>
                        ) : (
                            <div className="flex flex-col gap-3">
                                {items.map((item, index) => {
                                    const ing = ingredientes.find(i => i.id === item.ingredienteId);
                                    return (
                                        <div key={index} className="grid grid-cols-[1fr_120px_32px] gap-2 items-end">
                                            <div className="flex flex-col gap-1">
                                                {index === 0 && <Label className="text-xs text-muted-foreground">Ingrediente</Label>}
                                                <Select
                                                    value={item.ingredienteId}
                                                    onValueChange={val => actualizarItem(index, "ingredienteId", val)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Seleccionar" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {ingredientesDisponibles(index).map(i => (
                                                            <SelectItem key={i.id} value={i.id}>
                                                                {i.nombre} ({getUnidadAbrev(i.unidad)})
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                {index === 0 && (
                                                    <Label className="text-xs text-muted-foreground">
                                                        Cantidad {ing ? `(${getUnidadAbrev(ing.unidad)})` : ""}
                                                    </Label>
                                                )}
                                                <Input
                                                    type="number"
                                                    step="0.001"
                                                    min="0"
                                                    value={item.cantidad || ""}
                                                    onChange={e => actualizarItem(index, "cantidad", parseFloat(e.target.value) || 0)}
                                                    placeholder="0"
                                                />
                                            </div>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="size-8 text-destructive hover:text-destructive"
                                                onClick={() => eliminarItem(index)}
                                            >
                                                <Trash2 size={14} />
                                            </Button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        <Button type="button" variant="outline" size="sm" onClick={agregarItem}>
                            <Plus size={14} className="mr-2" /> Agregar ingrediente
                        </Button>

                        {/* Costo estimado */}
                        {items.some(i => i.ingredienteId && i.cantidad > 0) && (
                            <div className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm">
                                <span className="text-muted-foreground">Costo estimado por porción</span>
                                <span className="font-semibold">${costoTotal.toFixed(4)}</span>
                            </div>
                        )}

                        <div className="flex justify-end gap-2 mt-2">
                            <Button type="button" variant="outline" onClick={onClose}>Cancelar</Button>
                            <Button
                                onClick={handleGuardar}
                                disabled={guardar.isPending || items.filter(i => i.ingredienteId && i.cantidad > 0).length === 0}
                            >
                                {guardar.isPending ? "Guardando..." : "Guardar receta"}
                            </Button>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}