import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "@/components/layout/LogoutButton";
import { PerfilDropdown } from "./PerfilDropdown";
import { SucursalSelector } from "./SucursalSelector";

export async function Topbar({ sucursalActivaId }: { sucursalActivaId: string | null }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const role = user?.user_metadata?.role as string ?? "usuario";
  const email = user?.email ?? "";
  const nombre = user?.user_metadata?.nombre ?? user?.email?.split("@")[0] ?? "Usuario";
  const rol = user?.user_metadata?.role as string ?? "cajero";

  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-6">
      <div /> {/* espacio para breadcrumbs en fases futuras */}
      <div className="flex items-center gap-4">
        <SucursalSelector sucursalActivaId={sucursalActivaId} />
        <PerfilDropdown
          nombre={nombre}
          email={user?.email ?? ""}
          rol={rol}
        />
        <LogoutButton />
      </div>
    </header>
  );
}