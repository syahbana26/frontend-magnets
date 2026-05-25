import {
  LayoutDashboard,
  Users,
  Shield,
  ClipboardList,
  Settings,
} from "lucide-react";

export type Role =
  | "user"
  | "admin"
  | "superadmin";

export const sidebarMenus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: ["user", "admin", "superadmin"],
  },
  {
    title: "Absensi",
    href: "/absensi",
    icon: ClipboardList,
    roles: ["user"],
  },
  {
    title: "Data User",
    href: "/users",
    icon: Users,
    roles: ["admin", "superadmin"],
  },
  {
    title: "Super Admin",
    href: "/superadmin",
    icon: Shield,
    roles: ["superadmin"],
  },
  {
    title: "Pengaturan",
    href: "/settings",
    icon: Settings,
    roles: ["user", "admin", "superadmin"],
  },
];