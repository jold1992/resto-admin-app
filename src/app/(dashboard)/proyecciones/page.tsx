"use client";

import { useState } from "react";
import { TrendingUp, TrendingDown, Minus, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, ReferenceLine, Legend,
} from "recharts";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { useProyecciones } from "@/hooks/useProyecciones";
import { getUnidadAbrev } from "@/lib/unidades";
import type { UnidadMedida } from "@/lib/unidades";

const DIAS_OPTIONS = [7, 14, 30];
const VENTANA_OPTIONS = [14, 30, 60];

const COLORS = ["#6366f1", "#f59e0b", "#10b981", "#ef4444", "#8b5cf6", "#06b6d4", "#f97316", "#84cc16"];

function TendenciaBadge({ tendencia }: { tendencia: "alza" | "baja" | "estable" }) {
    if (tendencia === "alza") return (
        <Badge className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400 border-0 gap-1">
            <TrendingUp size={11} /> Alza
        </Badge>
    );
    if (tendencia === "baja") return (
        <Badge className="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400 border-0 gap-1">
            <TrendingDown size={11} /> Baja
        </Badge>
    );
    return (
        <Badge className="bg-muted text-muted-foreground border-0 gap-1">
            <Minus size={11} /> Estable
        </Badge>
    );
}

export default function ProyeccionesPage() {
    const [dias, setDias] = useState(7);
    const [ventana, setVentana] = useState(30);
    const [platoSeleccionado, setPlatoSeleccionado] = useState<string | null>(null);

    const { data, isLoading } = useProyecciones(dias, ventana);

    const proyecciones = data?.proyecciones ?? [];
    const materiaPrima = data?.materiaPrima ?? [];
    const conDeficit = materiaPrima.filter(m => m.deficit > 0);

    // Datos para la gráfica del plato seleccionado
    const platoData = proyecciones.find(p => p.platoId === platoSeleccionado) ?? proyecciones[0];

    const chartData = platoData ? [
        ...platoData.historial.slice(-14).map(h => ({
            fecha: h.fecha,
            real: h.cantidad,
            proyectado: null as number | null,
        })),
        ...platoData.proyeccion.map(p => ({
            fecha: p.fecha,
            real: null as number | null,
            proyectado: p.cantidad,
        })),
    ] : [];

    const hoy = new Date().toISOString().split("T")[0];

    return (
        <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold">Proyecciones</h1>
                    <p className="text-muted-foreground text-sm mt-1">
                        Demanda estimada usando promedios móviles ponderados
                    </p>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-1.5">
                        <span className="text-xs text-muted-foreground">Proyectar:</span>
                        {DIAS_OPTIONS.map(d => (
                            <Button
                                key={d}
                                size="sm"
                                variant={dias === d ? "default" : "outline"}
                                className="h-7 text-xs px-2.5"
                                onClick={() => setDias(d)}
                            >
                                {d}d
                            </Button>
                        ))}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-xs text-muted-foreground">Historial:</span>
                        {VENTANA_OPTIONS.map(v => (
                            <Button
                                key={v}
                                size="sm"
                                variant={ventana === v ? "default" : "outline"}
                                className="h-7 text-xs px-2.5"
                                onClick={() => setVentana(v)}
                            >
                                {v}d
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            {isLoading ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <Card key={i} className="animate-pulse"><CardContent className="h-48" /></Card>
                    ))}
                </div>
            ) : proyecciones.length === 0 ? (
                <Card>
                    <CardContent className="flex items-center justify-center h-48 text-muted-foreground text-sm">
                        No hay datos de ventas suficientes para generar proyecciones
                    </CardContent>
                </Card>
            ) : (
                <>
                    {/* Alerta déficit */}
                    {conDeficit.length > 0 && (
                        <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900 px-4 py-3">
                            <AlertTriangle size={18} className="text-red-500 shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-medium text-red-800 dark:text-red-400">
                                    {conDeficit.length} ingrediente{conDeficit.length > 1 ? "s" : ""} con déficit proyectado para los próximos {dias} días
                                </p>
                                <div className="flex flex-wrap gap-1.5 mt-1.5">
                                    {conDeficit.map(m => (
                                        <Badge key={m.nombre} className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 border-0 text-xs font-normal">
                                            {m.nombre} (déficit: {m.deficit.toFixed(2)} {getUnidadAbrev(m.unidad as UnidadMedida)})
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Lista de platos */}
                        <Card className="lg:col-span-1">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-base">Platos</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-1 p-3">
                                {proyecciones.map((p, i) => {
                                    const totalProyectado = p.proyeccion.reduce((acc, d) => acc + d.cantidad, 0);
                                    const isSelected = (platoSeleccionado ?? proyecciones[0]?.platoId) === p.platoId;
                                    return (
                                        <button
                                            key={p.platoId}
                                            onClick={() => setPlatoSeleccionado(p.platoId)}
                                            className={`flex items-center justify-between rounded-md px-3 py-2.5 text-left transition-colors w-full ${isSelected ? "bg-primary/10 border border-primary/20" : "hover:bg-muted/50"
                                                }`}
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <div
                                                    className="size-2.5 rounded-full shrink-0"
                                                    style={{ backgroundColor: COLORS[i % COLORS.length] }}
                                                />
                                                <span className="text-sm font-medium">{p.nombre}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-muted-foreground">{totalProyectado} u</span>
                                                <TendenciaBadge tendencia={p.tendencia} />
                                            </div>
                                        </button>
                                    );
                                })}
                            </CardContent>
                        </Card>

                        {/* Gráfica */}
                        <Card className="lg:col-span-2">
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-base">
                                        {platoData?.nombre ?? "Selecciona un plato"}
                                    </CardTitle>
                                    {platoData && <TendenciaBadge tendencia={platoData.tendencia} />}
                                </div>
                            </CardHeader>
                            <CardContent>
                                {platoData ? (
                                    <ResponsiveContainer width="100%" height={260}>
                                        <LineChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                                            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                                            <XAxis
                                                dataKey="fecha"
                                                tickFormatter={d => {
                                                    try {
                                                        const str = String(d);
                                                        if (!str || str === "auto") return "";
                                                        return format(parseISO(str), "dd MMM", { locale: es });
                                                    } catch {
                                                        return "";
                                                    }
                                                }}
                                                tick={{ fontSize: 10 }}
                                                tickLine={false}
                                            />
                                            <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                                            <Tooltip
                                                labelFormatter={d => {
                                                    try {
                                                        return format(parseISO(String(d)), "dd MMM yyyy", { locale: es });
                                                    } catch {
                                                        return String(d);
                                                    }
                                                }}
                                                formatter={(val, name) => [val ?? "—", name === "real" ? "Real" : "Proyectado"]}
                                            />
                                            <Legend formatter={v => v === "real" ? "Ventas reales" : "Proyección"} />
                                            <ReferenceLine x={hoy} stroke="#94a3b8" strokeDasharray="4 4" label={{ value: "Hoy", fontSize: 10, fill: "#94a3b8" }} />
                                            <Line
                                                type="monotone"
                                                dataKey="real"
                                                stroke="#6366f1"
                                                strokeWidth={2}
                                                dot={{ r: 3 }}
                                                connectNulls={false}
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="proyectado"
                                                stroke="#f59e0b"
                                                strokeWidth={2}
                                                strokeDasharray="5 5"
                                                dot={{ r: 3 }}
                                                connectNulls={false}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                ) : (
                                    <div className="flex items-center justify-center h-48 text-muted-foreground text-sm">
                                        Selecciona un plato para ver su proyección
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Materia prima necesaria */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">
                                Materia prima necesaria — próximos {dias} días
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {materiaPrima.map(m => {
                                    const abrev = getUnidadAbrev(m.unidad as UnidadMedida);
                                    const porcentaje = Math.min((m.stockActual / (m.cantidadNecesaria || 1)) * 100, 100);
                                    const suficiente = m.deficit === 0;
                                    return (
                                        <div key={m.nombre} className={`rounded-lg border px-4 py-3 ${!suficiente ? "border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900" : ""
                                            }`}>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium">{m.nombre}</span>
                                                {suficiente ? (
                                                    <Badge variant="secondary" className="text-xs">OK</Badge>
                                                ) : (
                                                    <Badge className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 border-0 text-xs">
                                                        Déficit
                                                    </Badge>
                                                )}
                                            </div>
                                            {/* Barra de progreso */}
                                            <div className="h-1.5 rounded-full bg-muted overflow-hidden mb-2">
                                                <div
                                                    className={`h-full rounded-full transition-all ${suficiente ? "bg-primary" : "bg-red-500"}`}
                                                    style={{ width: `${porcentaje}%` }}
                                                />
                                            </div>
                                            <div className="flex justify-between text-xs text-muted-foreground">
                                                <span>Stock: {m.stockActual.toFixed(2)} {abrev}</span>
                                                <span>Necesario: {m.cantidadNecesaria.toFixed(2)} {abrev}</span>
                                            </div>
                                            {!suficiente && (
                                                <p className="text-xs text-red-600 dark:text-red-400 mt-1 font-medium">
                                                    Faltan {m.deficit.toFixed(2)} {abrev}
                                                </p>
                                            )}
                                        </div>
                                    );
                                })}
                                {materiaPrima.length === 0 && (
                                    <div className="col-span-3 text-center text-muted-foreground text-sm py-8">
                                        No hay recetas definidas para calcular materia prima
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </>
            )}
        </div>
    );
}