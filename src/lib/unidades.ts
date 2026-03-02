export const UNIDAD_OPTIONS = [
    { value: "GRAMO",     label: "Gramo",     abrev: "g"   },
    { value: "KILOGRAMO", label: "Kilogramo", abrev: "kg"  },
    { value: "MILILITRO", label: "Mililitro", abrev: "ml"  },
    { value: "LITRO",     label: "Litro",     abrev: "L"   },
    { value: "UNIDAD",    label: "Unidad",    abrev: "und" },
    { value: "PORCION",   label: "Porción",   abrev: "por" },
  ] as const;
  
  export type UnidadMedida = typeof UNIDAD_OPTIONS[number]["value"];
  
  export function getUnidadAbrev(unidad: UnidadMedida): string {
    return UNIDAD_OPTIONS.find(u => u.value === unidad)?.abrev ?? unidad;
  }