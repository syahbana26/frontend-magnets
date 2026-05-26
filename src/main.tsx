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
import ListPerusahaan from "./pages/users/students/perusahaan/page";
import JurnalStudent from "./pages/users/students/jurnal/page";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/dashboardSuperAdmin" element={<DashboardSuperAdmin />} />
        <Route path="/dashboardStudent" element={<DashboardStudent />} />
        <Route path="/dashboardTeacher" element={<DashboardTeacher />} />
        <Route path="/profileStudent" element={<ProfileStudent />} />
        <Route path="/absensiStudent" element={<AbsensiStudent />} />
        <Route path="/jurnalStudent" element={<JurnalStudent />} />
        <Route path="/perusahaan" element={<ListPerusahaan />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);