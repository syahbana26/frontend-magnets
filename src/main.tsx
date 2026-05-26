import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css'

import App from "./App";
import Login from "./pages/auth/login/page";
import Register from "./pages/auth/register/page";
import DashboardAdmin from "./pages/admin/dashboard/page";
import DashboardStudent from "./pages/users/students/dashboard/page";
import DashboardTeacher from "./pages/users/teachers/dashboard/page";
import DashboardSuperAdmin from "./pages/superadmin/dashboard/page";
import ProfileStudent from "./pages/users/students/profiles/page";
import AbsensiStudent from "./pages/users/students/absensi/page";
import JurnalStudent from "./pages/users/students/jurnal/page";
import ProfileAdmin from "./pages/admin/profiles/page";
import StudentAdmin from "./pages/admin/students/page";
import PerusahaanAdmin from "./pages/admin/perusahaan/page";
import TeacherAdmin from "./pages/admin/teacher/page";
import ListPerusahaan from "./pages/users/teachers/perusahaan/page";
import AbsensiSiswa from "./pages/users/teachers/absensiSiswa/page";
import JurnalSiswa from "./pages/users/teachers/jurnalSiswa/page";
import ProfileTeacher from "./pages/users/teachers/profile/page";
import CompanySuperAdmin from "./pages/superadmin/company/page";
import TeacherSuperAdmin from "./pages/superadmin/teachers/page";
import StudentSuperAdmin from "./pages/superadmin/students/page";
import ProfileSuperAdmin from "./pages/superadmin/profile/page";
import AdminSuperAdmin from "./pages/superadmin/admin/page";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* students */}
        <Route path="/jurnalStudent" element={<JurnalStudent />} />
        <Route path="/dashboardStudent" element={<DashboardStudent />} />
        <Route path="/absensiStudent" element={<AbsensiStudent />} />
        <Route path="/profileStudent" element={<ProfileStudent />} />

        {/* teachers */}
        <Route path="/dashboardTeacher" element={<DashboardTeacher />} />
        <Route path="/absensiSiswa" element={<AbsensiSiswa />} />
        <Route path="/perusahaan" element={<ListPerusahaan />} />
        <Route path="/jurnalSiswa" element={<JurnalSiswa />} />
        <Route path="/profileTeacher" element={<ProfileTeacher />} />

        {/* admin */}
        <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/dataStudent" element={<StudentAdmin />} />
        <Route path="/dataTeacher" element={<TeacherAdmin />} />
        <Route path="/perusahaanAdmin" element={<PerusahaanAdmin />} />
        <Route path="/profileAdmin" element={<ProfileAdmin />} />

        {/* super admin */}
        <Route path="/dashboardSuperAdmin" element={<DashboardSuperAdmin />} />
        <Route path="/companySuperAdmin" element={<CompanySuperAdmin />} />
        <Route path="/teacherSuperAdmin" element={<TeacherSuperAdmin />} />
        <Route path="/studentSuperAdmin" element={<StudentSuperAdmin />} />
        <Route path="/adminSuperAdmin" element={<AdminSuperAdmin />} />
        <Route path="/profileSuperAdmin" element={<ProfileSuperAdmin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);