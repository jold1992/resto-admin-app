"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await signIn(email, password);

    if (error) {
      setError("Credenciales incorrectas. Intenta de nuevo.");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-amber-600/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-700/20 blur-3xl" />
      </div>

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-md mx-4"
        style={{
          animation: "fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        }}
      >
        <div className="bg-white/6 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          {/* Top accent line */}
          <div className="h-1 w-full bg-linear-to-r from-amber-400 via-amber-500 to-amber-600" />

          <div className="p-10">
            {/* Logo */}
            <div className="flex flex-col items-center mb-8" style={{ animation: "fadeSlideUp 0.6s 0.1s cubic-bezier(0.16, 1, 0.3, 1) both" }}>
              <div className="relative w-24 h-24 mb-4 drop-shadow-2xl">
                <Image
                  src="/resto-admin-only-logo.png"
                  alt="Resto Admin App"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="text-2xl font-semibold text-white tracking-wide">Resto Admin</h1>
              <p className="text-slate-400 text-sm mt-1 tracking-widest uppercase">Panel de Administración</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" autoComplete="off">
              {/* Email field */}
              <div style={{ animation: "fadeSlideUp 0.6s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both" }}>
                <label htmlFor="email" className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-2">
                  Correo electrónico
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </span>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="admin@restaurante.com"
                    required
                    className={`w-full pl-11 pr-4 py-3 bg-white/[0.07] border rounded-xl text-white placeholder-slate-500 outline-none transition-all duration-300 text-sm ${
                      focused === "email"
                        ? "border-amber-400/70 bg-white/10 shadow-[0_0_0_3px_rgba(251,191,36,0.1)]"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  />
                </div>
              </div>

              {/* Password field */}
              <div style={{ animation: "fadeSlideUp 0.6s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both" }}>
                <label htmlFor="password" className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </span>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onFocus={() => setFocused("password")}
                    onBlur={() => setFocused(null)}
                    required
                    placeholder="••••••••"
                    className={`w-full pl-11 pr-4 py-3 bg-white/[0.07] border rounded-xl text-white placeholder-slate-500 outline-none transition-all duration-300 text-sm ${
                      focused === "password"
                        ? "border-amber-400/70 bg-white/10 shadow-[0_0_0_3px_rgba(251,191,36,0.1)]"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  />
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3" style={{ animation: "fadeSlideUp 0.3s ease both" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
                  </svg>
                  {error}
                </div>
              )}

              {/* Submit button */}
              <div style={{ animation: "fadeSlideUp 0.6s 0.4s cubic-bezier(0.16, 1, 0.3, 1) both" }}>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-xl font-semibold text-sm tracking-wide text-slate-900 bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Ingresando...
                    </>
                  ) : (
                    "Iniciar sesión"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <p className="text-center text-slate-600 text-xs mt-6" style={{ animation: "fadeSlideUp 0.6s 0.5s cubic-bezier(0.16, 1, 0.3, 1) both" }}>
          © {new Date().getFullYear()} Resto Admin App - By John Lomas D. - <a href="https://www.linkedin.com/in/jold1992/" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400 transition-colors">LinkedIn</a>
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
