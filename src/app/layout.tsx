import { QueryProvider } from "@/components/layout/QueryProvider";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <title>Resto Admin App 🍽️</title>
        <meta name="description" content="Panel de Administración de Resto Admin App" />
        <meta name="keywords" content="Resto Admin App, Restaurant, Admin, Panel, Management" />
        <meta name="author" content="John Lomas D." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/resto-admin-only-logo.ico" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryProvider>{children}</QueryProvider>
          <ThemeToggle />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}