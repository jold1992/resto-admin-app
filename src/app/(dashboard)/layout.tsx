import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { getSucursalActiva } from "@/app/actions/sucursal";
import { SucursalProvider } from "@/context/SucursalContext";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const sucursalActivaId = await getSucursalActiva();

  if (!user) redirect("/login");

  const rol = user?.user_metadata?.role ?? "cajero";

  return (
    <SucursalProvider initialId={sucursalActivaId}>
      <div className="flex h-screen overflow-hidden bg-background">
        <Sidebar rol={rol} />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Topbar sucursalActivaId={sucursalActivaId} />
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </SucursalProvider>
  );
}
