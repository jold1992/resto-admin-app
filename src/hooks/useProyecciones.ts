import { useSucursalActiva } from "@/context/SucursalContext";
import { useQuery } from "@tanstack/react-query";

export type ProyeccionPlato = {
  platoId: string;
  nombre: string;
  historial: { fecha: string; cantidad: number }[];
  proyeccion: { fecha: string; cantidad: number }[];
  tendencia: "alza" | "baja" | "estable";
  promedioBase: number;
};

export type MateriaPrima = {
  nombre: string;
  unidad: string;
  cantidadNecesaria: number;
  stockActual: number;
  stockMinimo: number;
  deficit: number;
};

export type ProyeccionData = {
  proyecciones: ProyeccionPlato[];
  materiaPrima: MateriaPrima[];
  diasProyectados: number;
};

export function useProyecciones(dias: number, ventana: number) {
  const { sucursalId } = useSucursalActiva();
  return useQuery({
    queryKey: ["proyecciones", dias, ventana, sucursalId],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.set("dias", String(dias));
      params.set("ventana", String(ventana));
      if (sucursalId) params.set("sucursalId", sucursalId);
      const res = await fetch(`/api/proyecciones?${params}`);
      if (!res.ok) throw new Error("Error al cargar proyecciones");
      return res.json();
    },
  });
}