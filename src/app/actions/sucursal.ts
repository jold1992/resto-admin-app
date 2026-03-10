"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function cambiarSucursal(sucursalId: string) {
  const cookieStore = await cookies();
  cookieStore.set("sucursal_activa", sucursalId, {
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30, // 30 días
  });
  revalidatePath("/", "layout");
}

export async function getSucursalActiva(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get("sucursal_activa")?.value ?? null;
}