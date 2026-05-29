import Sidebar from "../../../../components/sidebar";
import { useState } from "react";
import {
  Calendar,
  Clock,
  LogOut,
  CheckCircle,
  XCircle,
  AlertCircle,
  Filter,
  ChevronLeft,
  ChevronRight,
  FileText,
  X
} from "lucide-react";

export default function AbsensiStudent() {
  // Data dummy: riwayat absensi untuk satu siswa
  const [attendanceHistory] = useState([
    { id: 1, date: "2025-05-28", timeIn: "07:55", timeOut: "15:30", status: "Hadir" },
    { id: 2, date: "2025-05-27", timeIn: "08:10", timeOut: "15:25", status: "Hadir" },
    { id: 3, date: "2025-05-26", timeIn: null, timeOut: null, status: "Izin" },
    { id: 4, date: "2025-05-25", timeIn: "07:45", timeOut: "15:20", status: "Hadir" },
    { id: 5, date: "2025-05-24", timeIn: "08:20", timeOut: "15:35", status: "Hadir" },
    { id: 6, date: "2025-05-23", timeIn: null, timeOut: null, status: "Sakit" },
    { id: 7, date: "2025-05-22", timeIn: "07:50", timeOut: "15:28", status: "Hadir" },
    { id: 8, date: "2025-05-21", timeIn: null, timeOut: null, status: "Alpa" },
    { id: 9, date: "2025-05-20", timeIn: "08:05", timeOut: "15:32", status: "Hadir" },
    { id: 10, date: "2025-05-19", timeIn: "07:58", timeOut: "15:27", status: "Hadir" },
  ]);

  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // State untuk modal export PDF
  const [showExportModal, setShowExportModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Filter data berdasarkan status
  const filteredData = attendanceHistory.filter(item =>
    filterStatus === "" || item.status === filterStatus
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formatDate = (dateString: any) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const getStatusBadge = (status: any) => {
    switch (status) {
      case "Hadir":
        return { bg: "bg-emerald-100", text: "text-emerald-800", icon: CheckCircle, border: "border-emerald-200" };
      case "Izin":
        return { bg: "bg-amber-100", text: "text-amber-800", icon: Clock, border: "border-amber-200" };
      case "Sakit":
        return { bg: "bg-orange-100", text: "text-orange-800", icon: AlertCircle, border: "border-orange-200" };
      case "Alpa":
        return { bg: "bg-rose-100", text: "text-rose-800", icon: XCircle, border: "border-rose-200" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-800", icon: null, border: "border-gray-200" };
    }
  };

  const statuses = ["Hadir", "Izin", "Sakit", "Alpa"];

  const studentProfile = {
    name: "Budi Santoso",
    class: "XII RPL 1",
    nis: "20231001",
    photoInitial: "BS"
  };

  // Export PDF
  const handleExportPDF = () => {
    if (!startDate || !endDate) {
      alert("Harap pilih tanggal awal dan akhir");
      return;
    }
    const filteredByDate = attendanceHistory.filter(item => {
      return item.date >= startDate && item.date <= endDate;
    });
    if (filteredByDate.length === 0) {
      alert("Tidak ada data absensi pada rentang tanggal tersebut");
      return;
    }
    const printWindow = window.open('', '_blank');
    const title = `Laporan Absensi ${studentProfile.name}`;
    const rows = filteredByDate.map((item, idx) => `
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center">${idx + 1}</td>
        <td style="border:1px solid #ddd; padding:8px">${formatDate(item.date)}</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center">${item.timeIn || '-'}</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center">${item.timeOut || '-'}</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center">${item.status}</td>
      </tr>
    `).join('');
    const htmlContent = `
      <html>
      <head><title>${title}</title>
      <style>
        body { font-family: Arial, sans-serif; margin:20px; }
        table { width:100%; border-collapse:collapse; }
        th, td { border:1px solid #ddd; padding:8px; text-align:left; }
        th { background:#f1f5f9; }
      </style>
      </head>
      <body>
        <h2>${title}</h2>
        <p>Kelas: ${studentProfile.class} | NIS: ${studentProfile.nis}</p>
        <p>Periode: ${formatDate(startDate)} s.d. ${formatDate(endDate)}</p>
        <table>
          <thead><tr><th>No</th><th>Tanggal</th><th>Masuk</th><th>Pulang</th><th>Status</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
        <p>Dicetak: ${new Date().toLocaleString('id-ID')}</p>
      </body>
      </html>
    `;
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.print();
    }
    setShowExportModal(false);
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar />

      <div className="flex-1">
        <main className="min-h-screen">
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Header dengan group tombol (export + filter) di pojok kanan */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Daftar Absensi
                  </h1>
                </div>
              </div>
              {/* Group tombol: Export PDF + Filter - ukuran diperkecil pada mobile */}
              <div className="flex items-center gap-3 justify-end">
                <button
                  onClick={() => setShowExportModal(true)}
                  className="inline-flex items-center justify-center px-3 py-2 text-sm sm:px-4 sm:py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-sm transition"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Export PDF
                </button>
                {/* Filter status - ukuran diperkecil pada mobile */}
                <div className="relative">
                  <Filter className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  <select
                    value={filterStatus}
                    onChange={(e) => {
                      setFilterStatus(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="pl-7 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 w-32 sm:w-40 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 hover:bg-white transition-all cursor-pointer appearance-none"
                  >
                    <option value="">Semua Status</option>
                    {statuses.map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Card List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {paginatedData.length > 0 ? (
                paginatedData.map((item) => {
                  const StatusIcon = getStatusBadge(item.status).icon;
                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-blue-500" />
                          <span className="font-semibold text-gray-800">
                            {formatDate(item.date)}
                          </span>
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(item.status).bg} ${getStatusBadge(item.status).text} ${getStatusBadge(item.status).border}`}>
                          {StatusIcon && <StatusIcon className="h-3 w-3 mr-1" />}
                          {item.status}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2 text-gray-400" />
                            <span>Waktu Masuk</span>
                          </div>
                          <span className="font-mono font-medium text-gray-800">
                            {item.timeIn ? `${item.timeIn} WIB` : '-'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-600">
                            <LogOut className="h-4 w-4 mr-2 text-gray-400" />
                            <span>Waktu Pulang</span>
                          </div>
                          <span className="font-mono font-medium text-gray-800">
                            {item.timeOut ? `${item.timeOut} WIB` : '-'}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                  <div className="flex flex-col items-center text-gray-400">
                    <AlertCircle className="h-12 w-12 mb-3 text-gray-300" />
                    <p className="text-gray-600">Tidak ada data absensi</p>
                    <p className="text-sm">Coba ubah filter status</p>
                  </div>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
                <div className="text-sm text-gray-500">
                  Halaman {currentPage} dari {totalPages}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-1"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Sebelumnya
                  </button>
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-1"
                  >
                    Berikutnya
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Modal Export PDF */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 sm:mx-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Export PDF Absensi</h3>
              <button onClick={() => setShowExportModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Mulai</label>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Akhir</label>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 p-4 border-t border-gray-100">
              <button onClick={handleExportPDF} className="w-full sm:flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">Export PDF</button>
              <button onClick={() => setShowExportModal(false)} className="w-full sm:flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium">Batal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}