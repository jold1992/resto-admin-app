"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getSucursalActivaClient } from "@/lib/getSucursalActivaClient";

type SucursalContextType = {
  sucursalId: string | null;
  setSucursalId: (id: string) => void;
};

const SucursalContext = createContext<SucursalContextType>({
  sucursalId: null,
  setSucursalId: () => {},
});

export function SucursalProvider({
  children,
  initialId,
}: {
  children: React.ReactNode;
  initialId: string | null;
}) {
  const [sucursalId, setSucursalIdState] = useState<string | null>(initialId);

  function setSucursalId(id: string) {
    // Actualizar cookie manualmente para que el context refleje el cambio
    document.cookie = `sucursal_activa=${id}; path=/; max-age=${60 * 60 * 24 * 30}`;
    setSucursalIdState(id);
  }

  return (
    <SucursalContext.Provider value={{ sucursalId, setSucursalId }}>
      {children}
    </SucursalContext.Provider>
  );
}

export function useSucursalActiva() {
  return useContext(SucursalContext);
}