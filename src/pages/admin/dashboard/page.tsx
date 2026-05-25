import { useState } from "react";
import Sidebar from "../../../components/sidebar";

export default function DashboardAdmin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        role="admin" 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />

      {/* Main Content - Mengikuti lebar sidebar */}
      <main className={`transition-all duration-300 min-h-screen pb-20 lg:pb-6
        ${isSidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}>
        
        <div className="p-4 sm:p-6 lg:p-8">
          <h1 className="text-2xl font-semibold mb-6">Admin Page</h1>
          {/* Konten kamu */}
        </div>
      </main>
    </div>
  );
}