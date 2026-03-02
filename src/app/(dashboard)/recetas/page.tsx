"use client";

import { useState } from "react";
import { BookOpen, ChefHat } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePlatos, type Plato } from "@/hooks/usePlatos";
import { useReceta } from "@/hooks/useReceta";
import { useIngredientes } from "@/hooks/useIngredientes";
import { getUnidadAbrev } from "@/lib/unidades";
import { RecetaDialog } from "@/components/forms/RecetaDialog";
import Image from "next/image";

function RecetaCard({ plato, onEditar }: { plato: Plato; onEditar: (plato: Plato) => void }) {
  const { data: receta = [], isLoading } = useReceta(plato.id);
  const { data: ingredientes = [] } = useIngredientes();

  const costoTotal = receta.reduce((acc, item) => {
    const ing = ingredientes.find(i => i.id === item.ingredienteId);
    return acc + (Number(ing?.costoUnitario ?? 0) * Number(item.cantidad));
  }, 0);

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            {plato.imagen ? (
              <div className="relative size-10 rounded-md overflow-hidden shrink-0">
                <Image src={plato.imagen} alt={plato.nombre} fill className="object-cover" />
              </div>
            ) : (
              <div className="size-10 rounded-md bg-muted flex items-center justify-center shrink-0">
                <ChefHat size={18} className="text-muted-foreground" />
              </div>
            )}
            <div>
              <CardTitle className="text-sm">{plato.nombre}</CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">{plato.categoria.nombre}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="size-7 shrink-0" onClick={() => onEditar(plato)}>
            <BookOpen size={13} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {isLoading ? (
          <div className="space-y-1.5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-3 bg-muted animate-pulse rounded" />
            ))}
          </div>
        ) : receta.length === 0 ? (
          <p className="text-xs text-muted-foreground italic">Sin receta definida</p>
        ) : (
          <>
            <div className="flex flex-col gap-1">
              {receta.map(item => (
                <div key={item.id} className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{item.ingrediente.nombre}</span>
                  <Badge variant="outline" className="text-xs font-normal">
                    {Number(item.cantidad)} {getUnidadAbrev(item.ingrediente.unidad)}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2 border-t mt-1">
              <span className="text-xs text-muted-foreground">Costo por porción</span>
              <span className="text-xs font-semibold">${costoTotal.toFixed(4)}</span>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default function RecetasPage() {
  const { data: platos = [], isLoading } = usePlatos();
  const [recetaDialog, setRecetaDialog] = useState<{ open: boolean; plato?: Plato | null }>({ open: false });

  const platosActivos = platos.filter(p => p.activo);
  const conReceta = platosActivos.filter(p => p.activo);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Recetas</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {platosActivos.length} platos en el menú
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse"><CardContent className="h-40" /></Card>
          ))}
        </div>
      ) : conReceta.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-48 text-muted-foreground gap-2">
          <ChefHat size={32} className="opacity-30" />
          <p>No hay platos activos en el menú</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {conReceta.map(plato => (
            <RecetaCard
              key={plato.id}
              plato={plato}
              onEditar={p => setRecetaDialog({ open: true, plato: p })}
            />
          ))}
        </div>
      )}

      <RecetaDialog
        open={recetaDialog.open}
        plato={recetaDialog.plato ?? null}
        onClose={() => setRecetaDialog({ open: false })}
      />
    </div>
  );
}