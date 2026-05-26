import Sidebar from "../../../components/sidebar";

export default function TeacherAdmin() {

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      {/* Content wrapper - ini penting! */}
      <div className="flex-1">
        <main className="min-h-screen">
          <div className="p-4 sm:p-6 lg:p-8">
            <h1 className="text-2xl font-semibold mb-6">Data Teacher</h1>
            {/* Konten kamu di sini */}
            
            {/* Contoh konten */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p>Welcome to Data Teacher!</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}