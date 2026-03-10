"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, ShieldCheck, UserX, UserCheck, KeyRound } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  useUsuarios, useEditarUsuario, useEliminarUsuario,
  getRolLabel, getRolColor, type Usuario,
} from "@/hooks/useUsuarios";
import { UsuarioDialog } from "@/components/forms/UsuarioDialog";

export default function UsuariosPage() {
  const { data: usuarios = [], isLoading } = useUsuarios();
  const editar = useEditarUsuario();
  const eliminar = useEliminarUsuario();

  const [dialog, setDialog] = useState<{ open: boolean; usuario?: Usuario | null }>({ open: false });
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; id: string; nombre: string } | null>(null);

  async function handleToggleActivo(usuario: Usuario) {
    await editar.mutateAsync({ id: usuario.id, activo: !usuario.activo });
  }

  async function handleDelete() {
    if (!deleteDialog) return;
    await eliminar.mutateAsync(deleteDialog.id);
    setDeleteDialog(null);
  }

  return (
    <TooltipProvider>
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Usuarios</h1>
            <p className="text-muted-foreground text-sm mt-1">
              {usuarios.length} usuario{usuarios.length !== 1 ? "s" : ""} registrado{usuarios.length !== 1 ? "s" : ""}
            </p>
          </div>
          <Button onClick={() => setDialog({ open: true })}>
            <Plus size={16} className="mr-2" /> Nuevo usuario
          </Button>
        </div>

        {/* Leyenda de roles */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs text-muted-foreground">Roles:</span>
          <Badge className="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400 border-0 gap-1">
            <ShieldCheck size={11} /> Administrador — acceso total
          </Badge>
          <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400 border-0">
            Cajero — ventas e inventario
          </Badge>
          <Badge className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400 border-0">
            Cocina — solo lectura del menú
          </Badge>
        </div>

        {/* Tabla */}
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Último acceso</TableHead>
                <TableHead>Creado</TableHead>
                <TableHead className="w-24" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                [...Array(4)].map((_, i) => (
                  <TableRow key={i}>
                    {[...Array(7)].map((_, j) => (
                      <TableCell key={j}><div className="h-4 bg-muted animate-pulse rounded" /></TableCell>
                    ))}
                  </TableRow>
                ))
              ) : usuarios.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground py-12">
                    No hay usuarios registrados
                  </TableCell>
                </TableRow>
              ) : (
                usuarios.map(u => (
                  <TableRow key={u.id} className={!u.activo ? "opacity-50" : ""}>
                    <TableCell className="font-medium">{u.nombre}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{u.email}</TableCell>
                    <TableCell>
                      <Badge className={`${getRolColor(u.rol)} border-0 text-xs`}>
                        {getRolLabel(u.rol)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {u.activo ? (
                        <Badge variant="secondary" className="text-xs">Activo</Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs text-muted-foreground">Inactivo</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {u.ultimoAcceso
                        ? format(new Date(u.ultimoAcceso), "dd MMM yyyy HH:mm", { locale: es })
                        : "Nunca"}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {format(new Date(u.creadoEn), "dd MMM yyyy", { locale: es })}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1 justify-end">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost" size="icon" className="size-7"
                              onClick={() => setDialog({ open: true, usuario: u })}
                            >
                              <Pencil size={13} />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Editar</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost" size="icon" className="size-7"
                              onClick={() => handleToggleActivo(u)}
                            >
                              {u.activo ? <UserX size={13} /> : <UserCheck size={13} />}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>{u.activo ? "Desactivar" : "Activar"}</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost" size="icon"
                              className="size-7 text-destructive hover:text-destructive"
                              onClick={() => setDeleteDialog({ open: true, id: u.id, nombre: u.nombre })}
                            >
                              <Trash2 size={13} />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Eliminar</TooltipContent>
                        </Tooltip>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <UsuarioDialog
          open={dialog.open}
          usuario={dialog.usuario}
          onClose={() => setDialog({ open: false })}
        />

        <AlertDialog open={!!deleteDialog?.open} onOpenChange={() => setDeleteDialog(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Eliminar usuario?</AlertDialogTitle>
              <AlertDialogDescription>
                Se eliminará permanentemente la cuenta de <strong>{deleteDialog?.nombre}</strong>.
                Esta acción no se puede deshacer.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
                Eliminar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </TooltipProvider>
  );
}