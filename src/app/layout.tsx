import { QueryProvider } from "@/components/layout/QueryProvider";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
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