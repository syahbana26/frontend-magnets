import { useState, useEffect } from 'react'
import heroImg from '../public/images/magnets.png'

function App() {
  const [count, setCount] = useState(0)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showQR, setShowQR] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [attendanceRecords, setAttendanceRecords] = useState([
    { id: 1, name: 'Ahmad Fauzi', time: '08:00', status: 'Hadir', date: '2026-05-26' },
    { id: 2, name: 'Siti Nurhaliza', time: '08:15', status: 'Hadir', date: '2026-05-26' },
    { id: 3, name: 'Budi Santoso', time: '-', status: 'Izin', date: '2026-05-26' },
  ])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'Hadir': return 'bg-green-100 text-green-700'
      case 'Izin': return 'bg-yellow-100 text-yellow-700'
      case 'Sakit': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="flex h-12 w-12 items-center justify-center text-white transition-all duration-300 group-hover:scale-110">
              <img src="/public/images/icon-magnets.png" alt="" className='w-20 h-13'/>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Magnets
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#hero"
              className="font-medium text-slate-600 transition-all duration-300 hover:text-blue-600 hover:scale-105"
            >
              Beranda
            </a>
            <a
              href="#features"
              className="font-medium text-slate-600 transition-all duration-300 hover:text-blue-600 hover:scale-105"
            >
              Fitur
            </a>
            <a
              href="#attendance"
              className="font-medium text-slate-600 transition-all duration-300 hover:text-blue-600 hover:scale-105"
            >
              Absensi
            </a>
            <button className="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-700">
              Masuk
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden rounded-lg p-2 hover:bg-slate-100 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="hero" className="relative overflow-hidden pt-36 pb-20">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Text Content */}
              <div className="animate-fade-in-up">
                <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-white/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  ✨ Platform Absensi Modern
                </div>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                  Kelola kehadiran, laporan, dan data magang dengan sistem modern
                  yang intuitif, cepat, dan mudah digunakan. Dilengkapi dengan fitur QR Code dan tracking realtime.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <span className="relative z-10 flex items-center gap-2">
                      Mulai Absensi
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>

                  <button className="rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-blue-200 hover:bg-blue-50 hover:shadow-lg">
                    Demo Interaktif
                  </button>
                </div>

                {/* Stats Preview */}
                <div className="mt-12 flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-cyan-500 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">100+ Peserta</p>
                      <p className="text-xs text-slate-500">Bergabung dengan kami</p>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-slate-200"></div>
                  <div>
                    <p className="font-semibold text-slate-800">98% Puas</p>
                    <p className="text-xs text-slate-500">Tingkat kepuasan</p>
                  </div>
                </div>
              </div>

              {/* Image with Animation */}
              <div className="relative animate-fade-in-up animation-delay-200">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 shadow-2xl">
                  <img
                    src={heroImg}
                    alt="Magnets Dashboard"
                    className="relative z-10 w-full rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-3 animate-bounce-slow">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold">Aktif</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-3 animate-bounce-slow delay-300">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-semibold">Real-time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS & ABSENSI SECTION */}
        <section id="attendance" className="relative px-6 py-20">
          <div className="mx-auto max-w-7xl">

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left: Quick Attendance Card */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 group-hover:scale-150 transition-transform duration-700 delay-100"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold">Absensi Hari Ini</h3>
                  <p className="mt-2 text-blue-100">Total peserta magang</p>
                  
                  <div className="mt-8">
                    <span className="text-7xl font-black">{count}</span>
                    <span className="ml-2 text-blue-100">Peserta</span>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <button
                      onClick={() => setCount(count + 1)}
                      className="flex-1 rounded-xl bg-white/20 backdrop-blur px-6 py-3 font-semibold transition-all duration-300 hover:bg-white/30 hover:scale-105"
                    >
                      + Check In
                    </button>
                    <button
                      onClick={() => setShowQR(!showQR)}
                      className="flex-1 rounded-xl bg-white/20 backdrop-blur px-6 py-3 font-semibold transition-all duration-300 hover:bg-white/30 hover:scale-105"
                    >
                      QR Code
                    </button>
                  </div>

                  {showQR && (
                    <div className="mt-6 p-4 bg-white rounded-2xl animate-fade-in">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="4" y="4" width="6" height="6" fill="currentColor" />
                          <rect x="14" y="4" width="6" height="6" fill="currentColor" />
                          <rect x="4" y="14" width="6" height="6" fill="currentColor" />
                          <rect x="14" y="14" width="6" height="6" fill="currentColor" />
                        </svg>
                      </div>
                      <p className="text-center text-slate-600 mt-2 text-sm">Scan QR untuk absen</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Recent Attendance */}
              <div className="bg-white rounded-3xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-800">Riwayat Absensi</h3>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {attendanceRecords.map((record, index) => (
                    <div 
                      key={record.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 hover:scale-[1.02] animate-slide-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
                          {record.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">{record.name}</p>
                          <p className="text-xs text-slate-500">{record.time} WIB</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(record.status)}`}>
                        {record.status}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full rounded-xl border-2 border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:scale-[1.02]">
                  Lihat Semua Riwayat
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-32">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-6">
              🚀 Fitur Unggulan
            </div>
            <h2 className="text-5xl font-black text-slate-900">
              Semua Kebutuhan Absensi
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Dirancang untuk mempermudah seluruh proses absensi dan pengelolaan
              magang Anda dengan teknologi terkini.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* CARD 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2 2 2 0 01-2 2v-2" />
                  <path d="M13 5h6a2 2 0 012 2v12a2 2 0 01-2 2" />
                  <path d="M9 12h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Absensi Harian</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Absen masuk & keluar dengan satu klik. Mendukung QR Code dan lokasi realtime dengan akurasi tinggi.
              </p>
              <div className="mt-6 flex items-center text-blue-600 font-semibold">
                <span>Pelajari lebih lanjut</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Laporan Magang</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Generate laporan otomatis, rekap bulanan, dan visualisasi data dengan cepat. Export ke Excel & PDF.
              </p>
              <div className="mt-6 flex items-center text-cyan-600 font-semibold">
                <span>Pelajari lebih lanjut</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.34a4 4 0 010 7.32" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Manajemen Peserta</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Kelola peserta magang, pembimbing, jadwal, dan penempatan dalam satu dashboard modern dan terintegrasi.
              </p>
              <div className="mt-6 flex items-center text-purple-600 font-semibold">
                <span>Pelajari lebih lanjut</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative mx-auto max-w-7xl px-6 pb-32">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-12 text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 animate-pulse delay-1000"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white">Siap Mengelola Absensi Magang?</h2>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan perusahaan yang sudah menggunakan Magnets untuk sistem absensi magang mereka.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="rounded-xl bg-white px-8 py-3 font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Mulai Sekarang Gratis
                </button>
                <button className="rounded-xl border-2 border-white/30 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  Hubungi Tim Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 4V20M4 12H20" />
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                </div>
                <span className="font-bold text-slate-800">Magnets</span>
              </div>
              <p className="text-sm text-slate-500">Sistem Absensi Magang Modern</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Produk</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition">Fitur</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Harga</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Karir</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition">Privasi</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Ketentuan</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Kebijakan</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
            <p>&copy; 2026 Magnets. Sistem Absensi Magang • All Rights Reserved</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

export default App