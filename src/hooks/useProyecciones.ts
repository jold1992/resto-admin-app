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

export function useProyecciones(dias: number = 7, ventana: number = 30) {
  return useQuery({
    queryKey: ["proyecciones", dias, ventana],
    queryFn: async (): Promise<ProyeccionData> => {
      const res = await fetch(`/api/proyecciones?dias=${dias}&ventana=${ventana}`);
      if (!res.ok) throw new Error("Error al cargar proyecciones");
      return res.json();
    },
    staleTime: 5 * 60 * 1000, // cache 5 minutos
  });
}