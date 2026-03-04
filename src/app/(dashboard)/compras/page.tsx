"use client";

import { useState } from "react";
import { ShoppingBag, CheckSquare, AlertTriangle, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
    useSugerenciasCompra, useOrdenesCompra, useCrearOrdenCompra, type Sugerencia, type OrdenCompra,
} from "@/hooks/useCompras";
import { getUnidadAbrev } from "@/lib/unidades";
import type { UnidadMedida } from "@/lib/unidades";
import { Download } from "lucide-react";
import { exportarOrdenPDF } from "@/lib/exportarOrden";

function OrdenRow({ orden }: { orden: OrdenCompra }) {
    const [expanded, setExpanded] = useState(false);
    const total = orden.detalles.reduce((acc, d) => acc + Number(d.cantidadFinal ?? d.cantidadSugerida), 0);

    return (
        <>
            <TableRow>
                <TableCell className="text-sm">
                    {format(new Date(orden.createdAt), "dd MMM yyyy HH:mm", { locale: es })}
                </TableCell>
                <TableCell>
                    <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs" onClick={() => setExpanded(!expanded)}>
                        {orden.detalles.length} ítem{orden.detalles.length !== 1 ? "s" : ""}
                        <ChevronDown size={12} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
                    </Button>
                </TableCell>
                <TableCell>
                    <Badge variant="outline">{orden.estado}</Badge>
                </TableCell>
                <TableCell className="text-right font-semibold">{total.toFixed(3)} u</TableCell>
            </TableRow>
            {expanded && (
                <TableRow className="bg-muted/30 hover:bg-muted/30">
                    <TableCell colSpan={5} className="py-2 px-6">
                        <div className="flex flex-wrap gap-2">
                            {orden.detalles.map(d => (
                                <Badge key={d.id} variant="outline" className="font-normal">
                                    {Number(d.cantidadFinal ?? d.cantidadSugerida).toFixed(3)} {getUnidadAbrev(d.ingrediente.unidad as UnidadMedida)} {d.ingrediente.nombre}
                                </Badge>
                            ))}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className="flex gap-1 justify-end">
                            <Button
                                variant="ghost" size="icon" className="size-7"
                                onClick={() => exportarOrdenPDF(orden)}
                            >
                                <Download size={13} />
                            </Button>
                        </div>
                    </TableCell>
                </TableRow>
            )}
        </>
    );
}

export default function ComprasPage() {
    const { data: sugerenciasData, isLoading: loadingSugerencias } = useSugerenciasCompra();
    const { data: ordenes = [], isLoading: loadingOrdenes } = useOrdenesCompra();
    const crearOrden = useCrearOrdenCompra();

    const sugerencias = sugerenciasData?.sugerencias ?? [];
    const totalEstimado = sugerenciasData?.totalEstimado ?? 0;

    // Selección de ítems y cantidades editables
    const [seleccionados, setSeleccionados] = useState<Record<string, boolean>>({});
    const [cantidades, setCantidades] = useState<Record<string, number>>({});
    const [notas, setNotas] = useState("");

    function toggleSeleccion(id: string, sugerida: number) {
        setSeleccionados(prev => ({ ...prev, [id]: !prev[id] }));
        if (!cantidades[id]) setCantidades(prev => ({ ...prev, [id]: sugerida }));
    }

    function toggleTodos() {
        const todosSeleccionados = sugerencias.every(s => seleccionados[s.id]);
        if (todosSeleccionados) {
            setSeleccionados({});
        } else {
            const nuevos: Record<string, boolean> = {};
            const nuevasCantidades: Record<string, number> = { ...cantidades };
            sugerencias.forEach(s => {
                nuevos[s.id] = true;
                if (!nuevasCantidades[s.id]) nuevasCantidades[s.id] = s.cantidadSugerida;
            });
            setSeleccionados(nuevos);
            setCantidades(nuevasCantidades);
        }
    }

    const itemsSeleccionados = sugerencias.filter(s => seleccionados[s.id]);
    const totalSeleccionado = itemsSeleccionados.reduce((acc, s) => {
        return acc + (cantidades[s.id] ?? s.cantidadSugerida) * s.costoUnitario;
    }, 0);

    async function handleCrearOrden() {
        if (itemsSeleccionados.length === 0) return;
        await crearOrden.mutateAsync({
            detalles: itemsSeleccionados.map(s => ({
                ingredienteId: s.id,
                cantidadSugerida: s.cantidadSugerida,
                cantidadFinal: cantidades[s.id] ?? s.cantidadSugerida,
            })),
        });
        setSeleccionados({});
        setCantidades({});
        setNotas("");
    }

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-2xl font-semibold">Compras</h1>
                <p className="text-muted-foreground text-sm mt-1">
                    Sugerencias basadas en stock actual vs. mínimo
                </p>
            </div>

            {/* Sugerencias */}
            <Card>
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-base flex items-center gap-2">
                            <AlertTriangle size={16} className="text-yellow-500" />
                            Ingredientes por reponer
                        </CardTitle>
                        {sugerencias.length > 0 && (
                            <Button variant="outline" size="sm" onClick={toggleTodos}>
                                <CheckSquare size={14} className="mr-2" />
                                {sugerencias.every(s => seleccionados[s.id]) ? "Deseleccionar todos" : "Seleccionar todos"}
                            </Button>
                        )}
                    </div>
                </CardHeader>
                <CardContent>
                    {loadingSugerencias ? (
                        <div className="space-y-2">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-10 bg-muted animate-pulse rounded" />
                            ))}
                        </div>
                    ) : sugerencias.length === 0 ? (
                        <div className="flex items-center justify-center py-10 text-muted-foreground gap-2 text-sm">
                            <ShoppingBag size={20} className="opacity-40" />
                            Todo el stock está en niveles óptimos
                        </div>
                    ) : (
                        <div className="flex flex-col gap-1">
                            {sugerencias.map(s => {
                                const abrev = getUnidadAbrev(s.unidad as UnidadMedida);
                                const cantidad = cantidades[s.id] ?? s.cantidadSugerida;
                                const costo = cantidad * s.costoUnitario;
                                return (
                                    <div
                                        key={s.id}
                                        className={`grid grid-cols-[32px_1fr_120px_120px_100px] gap-3 items-center rounded-md px-3 py-2.5 transition-colors ${seleccionados[s.id] ? "bg-primary/5 border border-primary/20" : "hover:bg-muted/50"
                                            }`}
                                    >
                                        <Checkbox
                                            checked={!!seleccionados[s.id]}
                                            onCheckedChange={() => toggleSeleccion(s.id, s.cantidadSugerida)}
                                        />
                                        <div>
                                            <p className="text-sm font-medium">{s.nombre}</p>
                                            <p className="text-xs text-muted-foreground">
                                                Stock: {Number(s.stockActual).toFixed(2)} / Mín: {Number(s.stockMinimo).toFixed(2)} {abrev}
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-xs text-muted-foreground">Cantidad ({abrev})</p>
                                            <Input
                                                type="number"
                                                step="0.001"
                                                min="0"
                                                value={cantidad}
                                                onChange={e => setCantidades(prev => ({ ...prev, [s.id]: parseFloat(e.target.value) || 0 }))}
                                                className="h-7 text-xs"
                                                disabled={!seleccionados[s.id]}
                                            />
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            ${Number(s.costoUnitario).toFixed(4)}/u
                                        </div>
                                        <div className="text-sm font-medium text-right">
                                            ${costo.toFixed(2)}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Resumen y acción */}
                    {itemsSeleccionados.length > 0 && (
                        <div className="mt-4 pt-4 border-t flex items-end justify-between gap-4">
                            <div className="flex flex-col gap-1.5 flex-1">
                                <p className="text-xs text-muted-foreground">Notas (opcional)</p>
                                <Input
                                    value={notas}
                                    onChange={e => setNotas(e.target.value)}
                                    placeholder="Ej: Proveedor X, entrega martes"
                                    className="max-w-xs"
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <p className="text-xs text-muted-foreground">Total estimado</p>
                                    <p className="text-lg font-bold">${totalSeleccionado.toFixed(2)}</p>
                                </div>
                                <Button onClick={handleCrearOrden} disabled={crearOrden.isPending}>
                                    <ShoppingBag size={14} className="mr-2" />
                                    {crearOrden.isPending ? "Guardando..." : "Crear orden"}
                                </Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Historial de órdenes */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Historial de órdenes</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Fecha</TableHead>
                                <TableHead>Ítems</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead className="text-right">Cantidad total</TableHead>
                                <TableHead className="w-12" />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loadingOrdenes ? (
                                [...Array(3)].map((_, i) => (
                                    <TableRow key={i}>
                                        {[...Array(4)].map((_, j) => (
                                            <TableCell key={j}><div className="h-4 bg-muted animate-pulse rounded" /></TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : ordenes.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center text-muted-foreground py-10">
                                        No hay órdenes de compra registradas
                                    </TableCell>
                                </TableRow>
                            ) : (
                                ordenes.map(orden => <OrdenRow key={orden.id} orden={orden} />)
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}