import { Navigate } from "react-router-dom";
import DashboardAdmin from "../admin/dashboard/page";
import DashboardSuperAdmin from "../superadmin/dashboard/page";
import DashboardStudent from "../users/students/dashboard/page";
import DashboardTeacher from "../users/teachers/dashboard/page";
import ProfileStudent from "../users/students/profiles/page";
import AbsensiStudent from "../users/students/absensi/page";

type Role = "student" | "teacher" | "admin" | "superadmin";

export default function DashboardPage() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) {
    return <Navigate to="/login" />;
  }

  const userRole: Role = user?.role;

  switch (userRole) {
    case "student":
      return (
        <>
            <DashboardStudent /> 
            <ProfileStudent/>
            <AbsensiStudent />
        </>
      );

    case "teacher":
      return <DashboardTeacher />;

    case "admin":
      return <DashboardAdmin />;

    case "superadmin":
      return <DashboardSuperAdmin />;

    default:
      return <div>Role tidak ditemukan / belum login</div>;
  }
}