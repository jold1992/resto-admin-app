"use client";

import { TrendingUp, ShoppingCart, AlertTriangle, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useDashboard } from "@/hooks/useDashboard";
import { getUnidadAbrev } from "@/lib/unidades";
import type { UnidadMedida } from "@/lib/unidades";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from "recharts";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

function StatCard({
  title, value, sub, icon: Icon, color,
}: {
  title: string;
  value: string;
  sub: string;
  icon: React.ElementType;
  color: string;
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
            <p className="text-xs text-muted-foreground mt-1">{sub}</p>
          </div>
          <div className={`p-2.5 rounded-lg ${color}`}>
            <Icon size={18} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const COLORS = ["#6366f1", "#8b5cf6", "#a78bfa", "#c4b5fd", "#818cf8", "#93c5fd", "#67e8f9", "#6ee7b7"];

export default function DashboardPage() {
  const { data, isLoading } = useDashboard();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="animate-pulse"><CardContent className="h-28 pt-6" /></Card>
          ))}
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          title="Ventas hoy"
          value={`$${data.ventasHoy.total.toFixed(2)}`}
          sub={`${data.ventasHoy.count} transacciones`}
          icon={ShoppingCart}
          color="bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400"
        />
        <StatCard
          title="Últimos 7 días"
          value={`$${data.ventasSemana.total.toFixed(2)}`}
          sub={`${data.ventasSemana.count} transacciones`}
          icon={TrendingUp}
          color="bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400"
        />
        <StatCard
          title="Este mes"
          value={`$${data.ventasMes.total.toFixed(2)}`}
          sub={`${data.ventasMes.count} transacciones`}
          icon={Package}
          color="bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400"
        />
      </div>

      {/* Alerta stock bajo */}
      {data.stockBajo.length > 0 && (
        <div className="flex items-start gap-3 rounded-lg border border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20 dark:border-yellow-900 px-4 py-3">
          <AlertTriangle size={18} className="text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-yellow-800 dark:text-yellow-400">
              {data.stockBajo.length} ingrediente{data.stockBajo.length > 1 ? "s" : ""} con stock bajo
            </p>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {data.stockBajo.map(i => (
                <Badge key={i.id} className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-0 text-xs font-normal">
                  {i.nombre} ({Number(i.stockActual).toFixed(2)} {getUnidadAbrev(i.unidad as UnidadMedida)})
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfica ventas por día */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Ventas últimos 30 días</CardTitle>
          </CardHeader>
          <CardContent>
            {data.ventasPorDia.length === 0 ? (
              <div className="flex items-center justify-center h-48 text-muted-foreground text-sm">
                Sin datos suficientes
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={data.ventasPorDia} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis
                    dataKey="dia"
                    tickFormatter={d => format(parseISO(d), "dd MMM", { locale: es })}
                    tick={{ fontSize: 11 }}
                    tickLine={false}
                  />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
                  <Tooltip
                    formatter={(val) => [`$${Number(val ?? 0).toFixed(2)}`, "Total"]}
                    labelFormatter={d => format(parseISO(String(d)), "dd MMM yyyy", { locale: es })}
                  />
                  <Bar dataKey="total" radius={[4, 4, 0, 0]} fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Ranking platos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Platos más vendidos (30 días)</CardTitle>
          </CardHeader>
          <CardContent>
            {data.platosTop.length === 0 ? (
              <div className="flex items-center justify-center h-48 text-muted-foreground text-sm">
                Sin datos suficientes
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <BarChart
                  data={data.platosTop}
                  layout="vertical"
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
                  <YAxis
                    dataKey="nombre"
                    type="category"
                    tick={{ fontSize: 11 }}
                    tickLine={false}
                    width={100}
                  />
                  <Tooltip formatter={(val) => [Number(val ?? 0), "Unidades"]} />
                  <Bar dataKey="total" radius={[0, 4, 4, 0]}>
                    {data.platosTop.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}