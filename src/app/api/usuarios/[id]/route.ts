import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createClient as createServerClient } from "@/lib/supabase/server";
import { z } from "zod";

async function requireAdmin() {
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user?.user_metadata?.role !== "admin") return null;
  return user;
}

function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

const ROLES = ["admin", "cajero", "cocina"] as const;

const editarSchema = z.object({
  nombre: z.string().min(1).optional(),
  rol: z.enum(ROLES).optional(),
  password: z.string().min(8).optional(),
  activo: z.boolean().optional(),
});

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await requireAdmin()) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const supabaseAdmin = getSupabaseAdmin();
  const { id } = await params;
  const body = await req.json();
  const parsed = editarSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const { nombre, rol, password, activo } = parsed.data;

  const updateData: Record<string, unknown> = {};

  if (nombre || rol) {
    updateData.user_metadata = {
      ...(nombre ? { nombre } : {}),
      ...(rol ? { role: rol } : {}),
    };
  }
  if (password) updateData.password = password;
  if (activo !== undefined) {
    // Supabase usa ban_duration para desactivar
    updateData.ban_duration = activo ? "none" : "876600h"; // 100 años
  }

  const { data, error } = await supabaseAdmin.auth.admin.updateUserById(id, updateData);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(data.user);
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await requireAdmin()) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const supabaseAdmin = getSupabaseAdmin();
  const { id } = await params;
  const { error } = await supabaseAdmin.auth.admin.deleteUser(id);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return new NextResponse(null, { status: 204 });
}