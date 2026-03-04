# 🍽️ Resto Admin — Sistema de Administración de Restaurantes

Aplicación web para la administración integral de restaurantes. Permite gestionar el menú, controlar el inventario, registrar ventas con descuento automático de stock, y generar órdenes de compra basadas en niveles de stock.

## Stack Tecnológico

- **Frontend:** Next.js 15 + TypeScript + Tailwind CSS v4 + shadcn/ui
- **Backend:** Next.js API Routes (App Router)
- **ORM:** Prisma v7 con driver adapter `@prisma/adapter-pg`
- **Base de datos:** PostgreSQL (Supabase)
- **Autenticación:** Supabase Auth
- **Storage:** Supabase Storage (imágenes de platos en WebP)
- **Estado del servidor:** TanStack Query v5
- **Gráficas:** Recharts
- **Deploy:** Vercel + GitHub Actions (CI/CD)

---

## Módulos

### 🗂️ Menú
Gestión completa del catálogo de platos del restaurante.
- CRUD de categorías con conteo de platos
- CRUD de platos con nombre, descripción, precio, categoría e imagen
- Subida de imágenes con conversión automática a WebP (max. 800px)
- Filtrado por categoría en tiempo real

### 📖 Recetas
Definición de ingredientes y cantidades por porción de cada plato.
- Vista global de todas las recetas activas
- Editor de receta por plato con selección de ingredientes y cantidades
- Cálculo de costo estimado por porción en tiempo real
- Ingredientes ya seleccionados se excluyen del selector para evitar duplicados

### 📦 Inventario
Control de stock de ingredientes con alertas automáticas.
- CRUD de ingredientes con unidad de medida y costo unitario
- Unidades soportadas: gramo, kilogramo, mililitro, litro, unidad, porción
- Stock actual y stock mínimo por ingrediente
- Alertas visuales de stock bajo o agotado
- Ajustes manuales de stock: entrada, salida o corrección
- Registro automático de movimientos de inventario en cada venta

### 🛒 Ventas
Registro de ventas con descuento automático de inventario.
- Registro de ventas con múltiples platos y cantidades
- Precio editable por ítem al momento de la venta
- Descuento automático de stock según la receta de cada plato vendido
- Historial de ventas con filtro por rango de fechas
- Vista expandible de detalle por venta
- Total del período visible en el encabezado

### 📊 Dashboard
Resumen ejecutivo de las operaciones del restaurante.
- Ventas del día, últimos 7 días y mes actual
- Gráfica de barras de ventas por día (últimos 30 días)
- Ranking de platos más vendidos (últimos 30 días)
- Alertas de ingredientes con stock bajo o agotado
- Actualización automática cada 60 segundos

### 🛍️ Compras
Sugerencias automáticas de reposición y generación de órdenes de compra.
- Lista de ingredientes con stock igual o menor al mínimo
- Cantidad sugerida calculada automáticamente (stock mínimo × 2 − stock actual)
- Cantidades editables antes de confirmar la orden
- Selección individual o masiva de ítems
- Historial de órdenes de compra con detalle expandible
- **Exportación a PDF** de cada orden de compra

---

## Estructura del Proyecto

```
src/
├── app/
│   ├── (dashboard)/          # Rutas protegidas con layout compartido
│   │   ├── dashboard/
│   │   ├── menu/
│   │   ├── recetas/
│   │   ├── inventario/
│   │   ├── ventas/
│   │   └── compras/
│   ├── api/
│   │   ├── categorias/
│   │   ├── platos/
│   │   ├── ingredientes/
│   │   ├── recetas/
│   │   ├── movimientos/
│   │   ├── ventas/
│   │   ├── compras/
│   │   └── dashboard/
│   ├── login/
│   └── layout.tsx
├── components/
│   ├── forms/                # Dialogs de CRUD
│   │   ├── CategoriaDialog.tsx
│   │   ├── PlatoDialog.tsx
│   │   ├── IngredienteDialog.tsx
│   │   ├── RecetaDialog.tsx
│   │   ├── VentaDialog.tsx
│   │   └── AjusteStockDialog.tsx
│   ├── layout/               # Sidebar, Topbar, ThemeToggle
│   └── ui/                   # Componentes shadcn/ui
├── hooks/                    # TanStack Query hooks
│   ├── useCategorias.ts
│   ├── usePlatos.ts
│   ├── useIngredientes.ts
│   ├── useReceta.ts
│   ├── useMovimientos.ts
│   ├── useVentas.ts
│   ├── useCompras.ts
│   └── useDashboard.ts
├── lib/
│   ├── prisma.ts             # Cliente Prisma con adapter PG
│   ├── storage.ts            # Supabase Storage + conversión WebP
│   ├── unidades.ts           # Enum y labels de unidades de medida
│   ├── exportarOrden.ts      # Generación de PDF con jsPDF
│   └── nav.ts                # Items de navegación
├── generated/
│   └── prisma/               # Cliente generado por Prisma v7
└── proxy.ts                  # Middleware de autenticación (Next.js 15)
```

---

## Configuración

### Variables de entorno

```env
DATABASE_URL=postgresql://...?pgbouncer=true
DIRECT_URL=postgresql://...
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx
```

### Instalación

```bash
npm install
npx prisma generate
npm run dev
```

### Build

```bash
npx prisma generate && next build
```

---

## Autenticación y Roles

La autenticación se gestiona con Supabase Auth. Los roles se almacenan en `user_metadata`:

```sql
UPDATE auth.users
SET raw_user_meta_data = raw_user_meta_data || '{"role": "admin"}'::jsonb
WHERE email = 'usuario@email.com';
```

Roles disponibles: `admin`, `cajero`, `cocina`.

---

## CI/CD

GitHub Actions ejecuta en cada push a `main` y `develop`:
1. **Lint** — ESLint con configuración Next.js
2. **Typecheck** — TypeScript estricto
3. **Build** — `npx prisma generate && next build`

El deploy a Vercel se realiza automáticamente al pasar el CI.

---

## Notas Técnicas

- **Prisma v7** requiere driver adapter explícito (`@prisma/adapter-pg`). No usar `previewFeatures = ["driverAdapters"]` — ya está deprecated.
- **Zod v4 + react-hook-form**: usar `useForm<any>` con resolver casteado y `z.output<typeof schema>` para inferencia de tipos.
- **Imágenes**: se convierten a WebP en el cliente usando Canvas API antes de subir a Supabase Storage.
- **Transacciones**: el registro de ventas y ajustes de stock usa `prisma.$transaction` para garantizar consistencia.
- **Next.js 15**: el middleware se llama `proxy.ts`, no `middleware.ts`.