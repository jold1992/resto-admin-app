export type UnidadMedida = "GRAMO" | "KILOGRAMO" | "MILILITRO" | "LITRO" | "UNIDAD" | "PORCION";

export const UNIDAD_LABELS: Record<UnidadMedida, string> = {
  GRAMO: "g",
  KILOGRAMO: "kg",
  MILILITRO: "ml",
  LITRO: "L",
  UNIDAD: "und",
  PORCION: "por",
};

export type EstadoOrden = "BORRADOR" | "ENVIADA" | "RECIBIDA";
export type TipoMovimiento = "ENTRADA" | "SALIDA" | "AJUSTE";