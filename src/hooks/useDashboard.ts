import { useQuery } from "@tanstack/react-query";

export type DashboardData = {
  ventasHoy: { total: number; count: number };
  ventasSemana: { total: number; count: number };
  ventasMes: { total: number; count: number };
  ventasPorDia: { dia: string; total: number; ventas: number }[];
  platosTop: { nombre: string; total: number; ingresos: number }[];
  stockBajo: { id: string; nombre: string; stockActual: number; stockMinimo: number; unidad: string }[];
};

export function useDashboard() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: async (): Promise<DashboardData> => {
      const res = await fetch("/api/dashboard");
      if (!res.ok) throw new Error("Error al cargar dashboard");
      return res.json();
    },
    refetchInterval: 60_000, // refresca cada minuto
  });
}