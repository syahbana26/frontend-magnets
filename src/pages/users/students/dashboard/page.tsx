import Sidebar from "../../../../components/sidebar";
import { Bell, GraduationCap, BookOpen, CheckCircle, LogOut, Calendar, Clock, Filter, PieChart, Building2 } from "lucide-react";
import { useState } from "react";

export default function DashboardStudent() {
  const [attendance, setAttendance] = useState({
    checkIn: false,
    checkOut: false,
    checkInTime: null as string | null,
    checkOutTime: null as string | null,
  });

  const [showNotification, setShowNotification] = useState(false);
  const [period, setPeriod] = useState("semua"); // 7hari, 1bulan, 2bulan, semua

  // Data siswa
  const studentData = {
    name: "Muhammad Rizki",
    username: "muhammad.rizki",
    dudi: "PT. Syntech Solutions",
    class: "IX",
    jurusan: "Rekayasa Perangkat Lunak",
  };

  // Data kehadiran berdasarkan periode
  const getAttendanceStats = () => {
    switch(period) {
      case "7hari":
        return { hadir: 6, sakit: 1, izin: 0, alpha: 0, total: 7 };
      case "1bulan":
        return { hadir: 22, sakit: 2, izin: 1, alpha: 0, total: 25 };
      case "2bulan":
        return { hadir: 43, sakit: 3, izin: 2, alpha: 1, total: 49 };
      default: // semua
        return { hadir: 128, sakit: 9, izin: 8, alpha: 2, total: 147 };
    }
  };

  const stats = getAttendanceStats();
  const persentaseKehadiran = ((stats.hadir / stats.total) * 100).toFixed(1);

  // Data untuk doughnut chart dengan urutan dan warna yang benar
  const doughnutData = [
    { label: "Hadir", value: stats.hadir, color: "#22c55e", bgColor: "bg-green-500" },
    { label: "Sakit", value: stats.sakit, color: "#eab308", bgColor: "bg-yellow-500" },
    { label: "Izin", value: stats.izin, color: "#3b82f6", bgColor: "bg-blue-500" },
    { label: "Alpha", value: stats.alpha, color: "#ef4444", bgColor: "bg-red-500" },
  ].filter(item => item.value > 0);

  // Fungsi absensi masuk
  const handleCheckIn = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setAttendance({
      ...attendance,
      checkIn: true,
      checkInTime: timeString,
    });
    console.log("Absen Masuk:", timeString);
  };

  // Fungsi absensi pulang
  const handleCheckOut = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setAttendance({
      ...attendance,
      checkOut: true,
      checkOutTime: timeString,
    });
    console.log("Absen Pulang:", timeString);
  };

  // Notifikasi dummy
  const notifications = [
    { id: 1, title: "Absensi Berhasil", message: "Anda telah berhasil melakukan absensi masuk", time: "5 menit lalu", read: false },
    { id: 2, title: "Jadwal Ujian", message: "Ujian akhir semester akan dimulai minggu depan", time: "1 jam lalu", read: false },
    { id: 3, title: "Pengumuman", message: "Libur nasional tanggal 17 Agustus", time: "2 jam lalu", read: true },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  // Doughnut chart component
  const DoughnutChart = () => {
    const size = 200;
    const center = size / 2;
    const radius = 80;
    
    const total = doughnutData.reduce((sum, item) => sum + item.value, 0);
    
    let currentAngle = 0;
    const segments = doughnutData.map(item => {
      const percentage = (item.value / total) * 100;
      const angle = (percentage / 100) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;
      currentAngle = endAngle;
      
      const startRad = (startAngle - 90) * Math.PI / 180;
      const endRad = (endAngle - 90) * Math.PI / 180;
      
      const x1 = center + radius * Math.cos(startRad);
      const y1 = center + radius * Math.sin(startRad);
      const x2 = center + radius * Math.cos(endRad);
      const y2 = center + radius * Math.sin(endRad);
      
      const largeArcFlag = angle > 180 ? 1 : 0;
      
      const pathData = [
        `M ${center} ${center}`,
        `L ${x1} ${y1}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        'Z'
      ].join(' ');
      
      return {
        ...item,
        path: pathData,
        percentage: percentage
      };
    });
    
    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform">
          {segments.map((segment, idx) => (
            <path
              key={idx}
              d={segment.path}
              fill={segment.color}
              className="transition-all duration-500 cursor-pointer hover:opacity-80"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            />
          ))}
          <circle cx={center} cy={center} r={radius - 30} fill="white" />
        </svg>
        <div className="absolute text-center">
          <p className="text-2xl sm:text-3xl font-bold text-gray-800">{persentaseKehadiran}%</p>
          <p className="text-xs sm:text-sm text-gray-500">Kehadiran</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Sidebar />
      
      <div className="flex-1">
        <main className="min-h-screen">
          <div className="p-3 sm:p-4 lg:p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                Welcome, {studentData.name.split(' ')[0]}!
              </h1>
              
              <div className="relative">
                <button
                  onClick={() => setShowNotification(!showNotification)}
                  className="relative p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
                >
                  <Bell size={20} className="text-gray-700 sm:w-5 sm:h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {showNotification && (
                  <>
                    <div 
                      className="fixed inset-0 z-10"
                      onClick={() => setShowNotification(false)}
                    />
                    <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-xl shadow-2xl z-20 overflow-hidden border border-gray-100">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                        <h3 className="font-semibold text-sm sm:text-base">Notifikasi</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map((notif) => (
                          <div key={notif.id} className={`p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors ${!notif.read ? 'bg-blue-50' : ''}`}>
                            <div className="flex items-start gap-2">
                              <div className={`w-2 h-2 mt-1.5 rounded-full ${!notif.read ? 'bg-blue-600' : 'bg-gray-300'}`} />
                              <div className="flex-1">
                                <p className="font-semibold text-gray-800 text-xs sm:text-sm">{notif.title}</p>
                                <p className="text-gray-600 text-xs mt-0.5">{notif.message}</p>
                                <p className="text-gray-400 text-[10px] mt-1">{notif.time}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Card Profile Utama */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mb-6 sm:mb-8">
              <div className="px-4 sm:px-6 py-5 sm:py-6">
                {/* Profile Section */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-6">
                  {/* Bagian Kiri: Avatar dan Info Dasar */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 shadow-xl">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <span className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            {studentData.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Info Dasar */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-base sm:text-xl md:text-2xl font-bold text-gray-800 mb-0.5 break-words">
                        {studentData.name}
                      </h2>
                      <p className="text-gray-500 text-xs sm:text-sm break-words">
                        @{studentData.username}
                      </p>
                    </div>
                  </div>

                  {/* Bagian Kanan: Info Detail seperti list di mobile */}
                  <div className="flex flex-col sm:flex-row sm:grid sm:grid-cols-3 gap-2 sm:gap-4">
                    {/* Kelas */}
                    <div className="flex items-center justify-between sm:block border-b sm:border-0 pb-2 sm:pb-0 border-gray-100">
                      <div className="flex items-center gap-2">
                        <GraduationCap size={14} className="text-gray-400" />
                        <p className="text-gray-400 text-xs">Kelas</p>
                      </div>
                      <p className="text-gray-800 font-semibold text-sm sm:text-base sm:mt-1">
                        {studentData.class}
                      </p>
                    </div>

                    {/* Jurusan */}
                    <div className="flex items-center justify-between sm:block border-b sm:border-0 pb-2 sm:pb-0 border-gray-100">
                      <div className="flex items-center gap-2">
                        <BookOpen size={14} className="text-gray-400" />
                        <p className="text-gray-400 text-xs">Jurusan</p>
                      </div>
                      <p className="text-gray-800 font-semibold text-sm sm:text-base sm:mt-1 break-words">
                        {studentData.jurusan}
                      </p>
                    </div>

                    {/* Tempat DUDI */}
                    <div className="flex items-center justify-between sm:block border-b sm:border-0 pb-2 sm:pb-0 border-gray-100 last:border-0">
                      <div className="flex items-center gap-2">
                        <Building2 size={14} className="text-gray-400" />
                        <p className="text-gray-400 text-xs">Tempat DUDI</p>
                      </div>
                      <p className="text-gray-800 font-semibold text-sm sm:text-base sm:mt-1 break-words">
                        {studentData.dudi}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Absensi */}
              <div className="p-4 sm:p-6 pt-0 sm:pt-0">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={20} className="text-blue-600" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">Absensi Hari Ini</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Absensi Masuk */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
                          <CheckCircle size={16} className="text-white sm:w-5 sm:h-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm sm:text-base">Absensi Masuk</p>
                        </div>
                      </div>
                      {attendance.checkIn && (
                        <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
                          <Clock size={12} className="text-green-600" />
                          <span className="text-xs font-medium text-green-700">{attendance.checkInTime}</span>
                        </div>
                      )}
                    </div>
                    
                    {!attendance.checkIn ? (
                      <button
                        onClick={handleCheckIn}
                        className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base shadow-md hover:shadow-lg"
                      >
                        ✓ Absen Masuk
                      </button>
                    ) : (
                      <div className="w-full py-2.5 sm:py-3 bg-green-100 text-green-700 rounded-xl font-semibold text-center text-sm sm:text-base border border-green-300">
                        ✓ Sudah Absen {attendance.checkInTime}
                      </div>
                    )}
                  </div>

                  {/* Absensi Pulang */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-md">
                          <LogOut size={16} className="text-white sm:w-5 sm:h-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm sm:text-base">Absensi Pulang</p>
                        </div>
                      </div>
                      {attendance.checkOut && (
                        <div className="flex items-center gap-1 bg-orange-100 px-2 py-1 rounded-full">
                          <Clock size={12} className="text-orange-600" />
                          <span className="text-xs font-medium text-orange-700">{attendance.checkOutTime}</span>
                        </div>
                      )}
                    </div>
                    
                    {!attendance.checkOut ? (
                      <button
                        onClick={handleCheckOut}
                        disabled={!attendance.checkIn}
                        className={`w-full py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base shadow-md ${
                          attendance.checkIn
                            ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
                        }`}
                      >
                        {attendance.checkIn ? '✗ Absen Pulang' : 'Absen Masuk terlebih Dahulu'}
                      </button>
                    ) : (
                      <div className="w-full py-2.5 sm:py-3 bg-orange-100 text-orange-700 rounded-xl font-semibold text-center text-sm sm:text-base border border-orange-300">
                        ✗ Sudah Absen {attendance.checkOutTime}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Doughnut Chart Kehadiran */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
              <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                <div className="flex justify-between items-center gap-3">
                  <div className="flex items-center gap-2 flex-1">
                    <PieChart size={16} className="text-blue-600 sm:w-5 sm:h-5" />
                    <h2 className="text-sm sm:text-xl font-semibold text-gray-800">
                      Statistik Kehadiran
                    </h2>
                  </div>
                  
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Filter size={14} className="text-gray-500 sm:w-4 sm:h-4" />
                    <select
                      value={period}
                      onChange={(e) => setPeriod(e.target.value)}
                      className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                      <option value="7hari">7 Hari</option>
                      <option value="1bulan">1 Bulan</option>
                      <option value="2bulan">2 Bulan</option>
                      <option value="semua">Semua</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
                  <div className="flex-shrink-0">
                    <DoughnutChart />
                  </div>

                  <div className="flex-1 w-full">
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                      {doughnutData.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${item.bgColor}`}></div>
                          <span className="text-xs sm:text-sm font-medium text-gray-700">{item.label}</span>
                          <span className="text-xs sm:text-sm font-bold text-gray-900">{item.value}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Progress Kehadiran</span>
                        <span className="font-semibold text-green-600">{persentaseKehadiran}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 rounded-full h-2 transition-all duration-500"
                          style={{ width: `${persentaseKehadiran}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}