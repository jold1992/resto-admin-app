"use client";

import { useTransition } from "react";
import { Building2, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSucursales } from "@/hooks/useSucursales";
import { cambiarSucursal } from "@/app/actions/sucursal";

type Props = {
  sucursalActivaId: string | null;
};

export function SucursalSelector({ sucursalActivaId }: Props) {
  const { data: sucursales = [] } = useSucursales();
  const [isPending, startTransition] = useTransition();

  const activas = sucursales.filter(s => s.activa);
  const actual = activas.find(s => s.id === sucursalActivaId) ?? activas[0];

  if (activas.length === 0) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 max-w-[200px]" disabled={isPending}>
          <Building2 size={14} className="shrink-0 text-muted-foreground" />
          <span className="truncate text-sm">{actual?.nombre ?? "Seleccionar"}</span>
          <ChevronDown size={12} className="shrink-0 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
          Cambiar sucursal
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {activas.map(s => (
          <DropdownMenuItem
            key={s.id}
            onClick={() => startTransition(() => cambiarSucursal(s.id))}
            className="gap-2"
          >
            <Building2 size={14} className="text-muted-foreground" />
            <span className="flex-1">{s.nombre}</span>
            {actual?.id === s.id && <Check size={13} className="text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}