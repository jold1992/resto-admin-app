import {
    LayoutDashboard,
    UtensilsCrossed,
    BookOpen,
    Package,
    ShoppingCart,
    TrendingUp,
    type LucideIcon,
  } from "lucide-react";
  
  export type NavItem = {
    label: string;
    href: string;
    icon: LucideIcon;
  };
  
  export const NAV_ITEMS: NavItem[] = [
    { label: "Dashboard",   href: "/dashboard",   icon: LayoutDashboard  },
    { label: "Menú",        href: "/menu",        icon: UtensilsCrossed  },
    { label: "Recetas",     href: "/recetas",     icon: BookOpen         },
    { label: "Inventario",  href: "/inventario",  icon: Package          },
    { label: "Ventas",      href: "/ventas",      icon: ShoppingCart     },
    { label: "Compras",     href: "/compras",     icon: TrendingUp       },
  ];