import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const heroImg = "/images/magnets.png";
const logoImg = "/images/icon-magnets.png";


type AttendanceStatus = "Hadir" | "Izin" | "Sakit";

interface AttendanceRecord {
  id: number;
  name: string;
  time: string;
  status: AttendanceStatus;
  date: string;
}

const attendanceData: AttendanceRecord[] = [
  {
    id: 1,
    name: "Ahmad Fauzi",
    time: "08:00",
    status: "Hadir",
    date: "2026-05-26",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    time: "08:15",
    status: "Hadir",
    date: "2026-05-26",
  },
  {
    id: 3,
    name: "Budi Santoso",
    time: "-",
    status: "Izin",
    date: "2026-05-26",
  },
];

const features = [
  {
    title: "Absensi Harian",
    desc: "Absen masuk & keluar dengan satu klik. Mendukung QR Code dan lokasi realtime.",
    color: "from-blue-500 to-blue-600",
    text: "text-blue-600",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2 2 2 0 01-2 2v-2" />
        <path d="M13 5h6a2 2 0 012 2v12a2 2 0 01-2 2" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Laporan Magang",
    desc: "Generate laporan otomatis, rekap bulanan, dan export Excel/PDF.",
    color: "from-cyan-500 to-cyan-600",
    text: "text-cyan-600",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Manajemen Peserta",
    desc: "Kelola peserta, pembimbing, jadwal, dan penempatan dalam satu dashboard.",
    color: "from-purple-500 to-purple-600",
    text: "text-purple-600",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
];

function App() {
  const [count, setCount] = useState(127);
  const [showQR, setShowQR] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const navigate = useNavigate();

  const filteredAttendance = useMemo(() => {
    return attendanceData.filter(
      (record) => record.date === selectedDate
    );
  }, [selectedDate]);

  const getStatusColor = (status: AttendanceStatus) => {
    const colors = {
      Hadir: "bg-green-100 text-green-700",
      Izin: "bg-yellow-100 text-yellow-700",
      Sakit: "bg-red-100 text-red-700",
    };

    return colors[status];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800">
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Magnets"
              className="h-11 w-11 object-contain"
            />

            <h1 className="bg-gradient-to-r from-slate-800 to-slate-500 bg-clip-text text-2xl font-bold text-transparent">
              Magnets
            </h1>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {["Beranda", "Fitur", "Absensi"].map((item, index) => (
              <a
                key={index}
                href={`#${
                  item === "Beranda"
                    ? "hero"
                    : item === "Fitur"
                    ? "features"
                    : "attendance"
                }`}
                className="font-medium text-slate-600 transition hover:text-blue-600"
              >
                {item}
              </a>
            ))}

            <button className="rounded-xl bg-slate-900 px-5 py-2.5 font-semibold text-white transition hover:scale-105 hover:bg-slate-800" onClick={() => navigate('/login')}>
              Masuk
            </button>
          </nav>

          <button className="rounded-lg p-2 transition hover:bg-slate-100 md:hidden">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <main>
       {/* HERO */}
<section id="hero" className="relative overflow-hidden px-6 pb-24 pt-36">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />

  <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl" />

  <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
    
    {/* LEFT - Text Content */}
    <div className="order-1 lg:order-none">
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
        <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
        Platform Absensi Modern
      </div>

      <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-6xl">
        Sistem Absensi
        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Magang Modern
        </span>
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
        Kelola kehadiran, laporan, dan data peserta magang dengan
        tampilan modern, cepat, dan responsif.
      </p>
    </div>

    {/* RIGHT - Image + Buttons (di mobile buttons akan pindah ke bawah gambar) */}
    <div className="order-2 lg:order-none flex flex-col items-center lg:items-start">
      {/* Gambar */}
      <div className="relative w-full">
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl" />
        <div className="relative rounded-[32px] bg-white/50 p-4 shadow-2xl backdrop-blur">
          <img
            src={heroImg}
            alt="Dashboard"
            className="w-full rounded-3xl object-cover shadow-xl transition duration-500 hover:scale-[1.02]"
          />
        </div>

        <div className="absolute -right-3 -top-3 rounded-2xl bg-white p-3 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <span className="text-sm font-semibold">Aktif</span>
          </div>
        </div>
      </div>

      {/* Buttons - muncul di bawah gambar di mobile */}
      <div className="mt-8 w-full lg:mt-10 flex flex-col gap-4 sm:flex-row lg:justify-start">
        <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl w-full sm:w-auto" onClick={() => navigate('/register')}>
          Daftar Sekarang
        </button>

        <button className="rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:scale-105 hover:border-blue-300 hover:bg-blue-50 w-full sm:w-auto" onClick={() => navigate('/login')}>
          Masuk
        </button>
      </div>
    </div>
  </div>
</section>

        {/* ATTENDANCE */}
        <section id="attendance" className="px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            {/* COUNTER */}
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white shadow-2xl">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10" />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold">
                  Absensi Hari Ini
                </h3>

                <p className="mt-2 text-blue-100">
                  Total peserta magang
                </p>

                <div className="mt-8">
                  <span className="text-7xl font-black">{count}</span>
                  <span className="ml-2 text-lg text-blue-100">
                    Peserta
                  </span>
                </div>

                <div className="mt-8 flex gap-4">
                  <button
                    onClick={() => setCount((prev) => prev + 1)}
                    className="flex-1 rounded-xl bg-white/20 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/30"
                  >
                    + Check In
                  </button>

                  <button
                    onClick={() => setShowQR((prev) => !prev)}
                    className="flex-1 rounded-xl bg-white/20 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/30"
                  >
                    QR Code
                  </button>
                </div>

                {showQR && (
                  <div className="mt-6 rounded-2xl bg-white p-5 text-slate-700">
                    <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600">
                      <svg
                        className="h-24 w-24 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect x="4" y="4" width="6" height="6" />
                        <rect x="14" y="4" width="6" height="6" />
                        <rect x="4" y="14" width="6" height="6" />
                        <rect x="14" y="14" width="6" height="6" />
                      </svg>
                    </div>

                    <p className="mt-3 text-center text-sm">
                      Scan QR untuk absen
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* HISTORY */}
            <div className="rounded-[32px] bg-white p-8 shadow-xl">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  Riwayat Absensi
                </h3>

                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none transition focus:border-blue-500"
                />
              </div>

              <div className="space-y-4">
                {filteredAttendance.map((record) => (
                  <div
                    key={record.id}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 font-bold text-white">
                        {record.name.charAt(0)}
                      </div>

                      <div>
                        <p className="font-semibold text-slate-800">
                          {record.name}
                        </p>

                        <p className="text-xs text-slate-500">
                          {record.time} WIB
                        </p>
                      </div>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                        record.status
                      )}`}
                    >
                      {record.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="mx-auto max-w-7xl px-6 py-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🚀 Fitur Unggulan
            </div>

            <h2 className="mt-6 text-5xl font-black text-slate-900">
              Semua Kebutuhan Absensi
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Dirancang untuk mempermudah seluruh proses absensi
              dan pengelolaan magang.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-[32px] bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} text-white shadow-lg transition group-hover:scale-110`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {feature.desc}
                </p>

                <div
                  className={`mt-6 flex items-center gap-2 font-semibold ${feature.text}`}
                >
                  Pelajari lebih lanjut
                  <svg
                    className="h-5 w-5 transition group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-28">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-8 py-16 text-center shadow-2xl">
            <h2 className="text-4xl font-black text-white">
              Siap Mengelola Absensi Magang?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
              Bergabunglah dengan perusahaan yang sudah menggunakan
              Magnets untuk sistem absensi modern.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-xl bg-white px-8 py-3 font-semibold text-blue-600 transition hover:scale-105">
                Mulai Gratis
              </button>

              <button className="rounded-xl border border-white/30 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20">
                Hubungi Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
          <p>
            © 2026 Magnets. Sistem Absensi Magang • All Rights
            Reserved
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-blue-600">
              Privasi
            </a>

            <a href="#" className="transition hover:text-blue-600">
              Ketentuan
            </a>

            <a href="#" className="transition hover:text-blue-600">
              Kontak
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;