import {
  LayoutDashboard,
  Users,
  Shield,
  ClipboardList,
  NotebookPen,
  Building2,
  CircleUserRound,
} from "lucide-react";

export type Role =
  | "student"
  | "teacher"
  | "admin"
  | "superadmin";

export const sidebarMenus = [
  {
    title: "Dashboard",
    href: "/dashboardStudent",
    icon: LayoutDashboard,
    roles: ["student"],
  },
  {
    title: "Dashboard",
    href: "/dashboardAdmin",
    icon: LayoutDashboard,
    roles: ["admin"],
  },
  {
    title: "Absensi",
    href: "/absensiStudent",
    icon: NotebookPen,
    roles: ["student"],
  },
  {
    title: "Perusahaan",
    href: "/perusahaan",
    icon: Building2,
    roles: ["student"],
  },
  {
    title: "Jurnal",
    href: "/jurnalstudent",
    icon: ClipboardList,
    roles: ["student"],
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
    title: "Profile",
    href: "/profileStudent",
    icon: CircleUserRound,
    roles: ["student", "admin", "superadmin"],
  },
];