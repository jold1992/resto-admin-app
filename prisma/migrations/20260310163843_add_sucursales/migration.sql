-- AlterTable
ALTER TABLE "MovimientoInventario" ADD COLUMN     "sucursalId" TEXT;

-- AlterTable
ALTER TABLE "OrdenCompra" ADD COLUMN     "sucursalId" TEXT;

-- AlterTable
ALTER TABLE "Venta" ADD COLUMN     "sucursalId" TEXT;

-- CreateTable
CREATE TABLE "Sucursal" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT,
    "activa" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sucursal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IngredienteSucursal" (
    "id" TEXT NOT NULL,
    "ingredienteId" TEXT NOT NULL,
    "sucursalId" TEXT NOT NULL,
    "stockActual" DECIMAL(10,3) NOT NULL DEFAULT 0,
    "stockMinimo" DECIMAL(10,3) NOT NULL DEFAULT 0,

    CONSTRAINT "IngredienteSucursal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IngredienteSucursal_ingredienteId_sucursalId_key" ON "IngredienteSucursal"("ingredienteId", "sucursalId");

-- AddForeignKey
ALTER TABLE "MovimientoInventario" ADD CONSTRAINT "MovimientoInventario_sucursalId_fkey" FOREIGN KEY ("sucursalId") REFERENCES "Sucursal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_sucursalId_fkey" FOREIGN KEY ("sucursalId") REFERENCES "Sucursal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenCompra" ADD CONSTRAINT "OrdenCompra_sucursalId_fkey" FOREIGN KEY ("sucursalId") REFERENCES "Sucursal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngredienteSucursal" ADD CONSTRAINT "IngredienteSucursal_ingredienteId_fkey" FOREIGN KEY ("ingredienteId") REFERENCES "Ingrediente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngredienteSucursal" ADD CONSTRAINT "IngredienteSucursal_sucursalId_fkey" FOREIGN KEY ("sucursalId") REFERENCES "Sucursal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
