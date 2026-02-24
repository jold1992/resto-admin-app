import { createClient } from "@/lib/supabase/client";

export type UserRole = "admin" | "cajero" | "cocina";

export async function signIn(email: string, password: string) {
  const supabase = createClient();
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signOut() {
  const supabase = createClient();
  return supabase.auth.signOut();
}

export async function getUserRole(): Promise<UserRole | null> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return (user?.user_metadata?.role as UserRole) ?? null;
}