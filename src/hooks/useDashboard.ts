import { getSucursalActivaClient } from "@/lib/getSucursalActivaClient";
import { useSucursalActiva } from "@/context/SucursalContext";
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
  const { sucursalId } = useSucursalActiva();
  return useQuery({
    queryKey: ["dashboard", sucursalId],
    queryFn: async (): Promise<DashboardData> => {
      const params = new URLSearchParams();
      if (sucursalId) params.set("sucursalId", sucursalId); // ← solo si existe
      const res = await fetch(`/api/dashboard?${params}`);
      if (!res.ok) throw new Error("Error al cargar dashboard");
      return res.json();
    },
    refetchInterval: 60_000, // refresca cada minuto
  });
}