"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Evita hydration mismatch — solo renderiza en el cliente
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const icon =
        theme === "light" ? <Sun size={18} /> :
            theme === "dark" ? <Moon size={18} /> :
                <Monitor size={18} />;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button size="icon" className="rounded-full shadow-lg size-11">
                        {icon}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" side="top" className="mb-2">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                        <Sun size={15} className="mr-2" /> Claro
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                        <Moon size={15} className="mr-2" /> Oscuro
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                        <Monitor size={15} className="mr-2" /> Sistema
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}