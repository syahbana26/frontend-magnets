import {
  LayoutDashboard,
  Users,
  ClipboardList,
  NotebookPen,
  Building2,
  CircleUserRound,
  GraduationCap,
  House,
} from "lucide-react";

export type Role =
  | "student"
  | "teacher"
  | "admin"
  | "superadmin";

export const sidebarMenus = [

  // student
  {
    title: "Dashboard",
    href: "/dashboardStudent",
    icon: House,
    roles: ["student"],
  },
  {
    title: "Absensi",
    href: "/absensiStudent",
    icon: NotebookPen,
    roles: ["student"],
  },
  {
    title: "Jurnal",
    href: "/jurnalstudent",
    icon: ClipboardList,
    roles: ["student"],
  },
  {
    title: "Profile",
    href: "/profileStudent",
    icon: CircleUserRound,
    roles: ["student"],
  },

  // teacher 
  {
    title: "Dashboard",
    href: "/dashboardStudent",
    icon: LayoutDashboard,
    roles: ["teacher"],
  },
  {
    title: "Absensi Siswa",
    href: "/absensiStudent",
    icon: NotebookPen,
    roles: ["teacher"],
  },
  {
    title: "Perusahaan",
    href: "/Perusahaan",
    icon: Building2,
    roles: ["teacher"],
  },
  {
    title: "Jurnal Siswa",
    href: "/jurnalsiswa",
    icon: ClipboardList,
    roles: ["teacher"],
  },
  {
    title: "Profile",
    href: "/profileteacher",
    icon: CircleUserRound,
    roles: ["teacher"],
  },

  // admin
  {
    title: "Dashboard",
    href: "/dashboardAdmin",
    icon: LayoutDashboard,
    roles: ["admin"],
  },
  {
    title: "Company",
    href: "/perusahaanAdmin",
    icon: Building2,
    roles: ["admin"],
  },
  {
    title: "Students",
    href: "/datastudent",
    icon: Users,
    roles: ["admin"],
  },
  {
    title: "Teachers",
    href: "/datateacher",
    icon: GraduationCap,
    roles: ["admin"],
  },
  {
    title: "Profile",
    href: "/profileAdmin",
    icon: CircleUserRound,
    roles: ["admin"],
  },

  // super admin
  {
    title: "Dashboard",
    href: "/dashboardSuperAdmin",
    icon: LayoutDashboard,
    roles: ["superadmin"],
  },
  {
    title: "Company",
    href: "/companySuperAdmin",
    icon: Building2,
    roles: ["superadmin"],
  },
  {
    title: "Teachers",
    href: "/teacherSuperAdmin",
    icon: Building2,
    roles: ["superadmin"],
  },
  {
    title: "Students",
    href: "/teacherSuperAdmin",
    icon: Building2,
    roles: ["superadmin"],
  },
  {
    title: "Admin",
    href: "/adminSuperAdmin",
    icon: Building2,
    roles: ["superadmin"],
  },
  {
    title: "Profile",
    href: "/profileSuperAdmin",
    icon: Building2,
    roles: ["superadmin"],
  },
];