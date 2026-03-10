export function getSucursalActivaClient(): string | null {
    if (typeof document === "undefined") return null;
    return document.cookie
      .split("; ")
      .find(r => r.startsWith("sucursal_activa="))
      ?.split("=")[1] ?? null;
  }