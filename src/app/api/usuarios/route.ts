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

// Cliente admin con service role key
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

const ROLES = ["admin", "cajero", "cocina"] as const;

const crearSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "Mínimo 8 caracteres"),
  nombre: z.string().min(1, "Requerido"),
  rol: z.enum(ROLES),
});

export async function GET() {
  if (!await requireAdmin()) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { data, error } = await supabaseAdmin.auth.admin.listUsers();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const usuarios = data.users.map(u => ({
    id: u.id,
    email: u.email,
    nombre: u.user_metadata?.nombre ?? u.email?.split("@")[0] ?? "Sin nombre",
    rol: u.user_metadata?.role ?? "cajero",
    activo: !u.banned_until || new Date(u.banned_until) < new Date(),
    creadoEn: u.created_at,
    ultimoAcceso: u.last_sign_in_at,
  }));

  return NextResponse.json(usuarios);
}

export async function POST(req: Request) {
  if (!await requireAdmin()) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const body = await req.json();
  const parsed = crearSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const { email, password, nombre, rol } = parsed.data;

  const { data, error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { nombre, role: rol },
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(data.user, { status: 201 });
}