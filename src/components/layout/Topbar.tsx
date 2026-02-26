import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "@/components/layout/LogoutButton";

export async function Topbar() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const role = user?.user_metadata?.role as string ?? "usuario";
  const email = user?.email ?? "";

  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-6">
      <div /> {/* espacio para breadcrumbs en fases futuras */}
      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium leading-none">{email}</p>
          <p className="text-xs text-muted-foreground capitalize mt-1">{role}</p>
        </div>
        <LogoutButton />
      </div>
    </header>
  );
}