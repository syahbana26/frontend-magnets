import Sidebar from "../../../../components/sidebar";
import {
  Save,
  X,
  Settings,
  LogOut,
  Bell,
  Shield,
  User,
  GraduationCap,
  BookOpen,
  Phone,
  MapPin,
  IdCard,
  Edit2,
} from "lucide-react";
import { useState, type ChangeEvent } from "react";

export default function ProfileStudent() {
  const [isEditing, setIsEditing] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "Muhammad Rizki",
    username: "muhammad.rizki",
    email: "m.rizki@student.edu",
    nis: "0084858678",
    studentClass: "IX",
    major: "Rekayasa Perangkat Lunak",
    phone: "+62 812 3456 7890",
    address: "Jl. Soekarno No. 123, Jakarta",
    batch: "2024",
    semester: "Semester 4",
    gpa: "3.85",
  });

  const [toggles, setToggles] = useState({
    notification: false,
    privacy: false,
    autoSave: true,
    twoFactor: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // API save di sini
    console.log("Saved:", formData);
  };

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Data untuk detail informasi
  const infoItems = [
    { label: "NIS", value: formData.nis, icon: IdCard, name: "nis" },
    { label: "Kelas", value: formData.studentClass, icon: GraduationCap, name: "studentClass" },
    { label: "Jurusan", value: formData.major, icon: BookOpen, name: "major" },
    { label: "No. Telepon", value: formData.phone, icon: Phone, name: "phone" },
    { label: "Alamat", value: formData.address, icon: MapPin, name: "address" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Sidebar />

      <div className="flex-1">
        <main className="min-h-screen">
          <div className="p-2 sm:p-4 lg:p-6">
            {/* Card Header - Profile, Name, Username rata kiri */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-xl sm:rounded-2xl shadow-xl mb-4 sm:mb-6">
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

              <div className="relative px-3 sm:px-6 py-4 sm:p-6 lg:p-8">
                {/* Profile Section dengan setting button sejajar dalam satu baris */}
                <div className="flex items-center justify-between gap-3">
                  {/* Profile Section - Rata Kiri */}
                  <div className="flex items-center gap-3 sm:gap-6 flex-1">
                    {/* Avatar dengan tombol edit di bawahnya */}
                    <div className="relative">
                      <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full bg-gradient-to-br from-white to-gray-100 p-0.5 sm:p-1 shadow-xl">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                          <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            {formData.fullName.charAt(0)}
                          </span>
                        </div>
                      </div>
                      
                      {/* Tombol Edit Profile - Icon saja di bawah lingkaran profile */}
                      {!isEditing ? (
                        <button
                          onClick={() => setIsEditing(true)}
                          className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 p-1 sm:p-1.5 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg transition-all duration-200 border-2 border-white"
                          title="Edit Profile"
                        >
                          <Edit2 size={12} className="text-white sm:w-4 sm:h-4" />
                        </button>
                      ) : (
                        <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 flex gap-0.5 sm:gap-1">
                          <button
                            onClick={handleSave}
                            className="p-1 sm:p-1.5 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-200 border-2 border-white"
                            title="Simpan"
                          >
                            <Save size={12} className="text-white sm:w-4 sm:h-4" />
                          </button>
                          <button
                            onClick={() => setIsEditing(false)}
                            className="p-1 sm:p-1.5 bg-gray-500 hover:bg-gray-600 rounded-full shadow-lg transition-all duration-200 border-2 border-white"
                            title="Batal"
                          >
                            <X size={12} className="text-white sm:w-4 sm:h-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* User Info - Rata Kiri */}
                    <div className="flex-1 min-w-0">
                      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1 break-words">
                        {formData.fullName}
                      </h1>
                      <p className="text-blue-100 text-xs sm:text-base break-words">
                        @{formData.username}
                      </p>
                    </div>
                  </div>

                  {/* Settings Button - Sejajar dengan name dalam satu baris */}
                  <button
                    onClick={() => setIsSettingsOpen(true)}
                    className="p-1.5 sm:p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg sm:rounded-xl transition-all duration-200 flex-shrink-0"
                  >
                    <Settings size={18} className="text-white sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card Detail Informasi - NIS, Kelas, Jurusan, Phone, Address */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mb-4 sm:mb-8">
              <div className="px-3 sm:px-6 py-3 sm:py-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                <h2 className="text-base sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <User size={18} className="text-blue-600 sm:w-5 sm:h-5" />
                  Informasi Lengkap
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">Detail data diri siswa</p>
              </div>

              <div className="p-3 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                  {infoItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={index}
                        className="group relative bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200"
                      >
                        {isEditing ? (
                          <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1 flex items-center gap-1">
                              <IconComponent size={12} className="text-blue-500 sm:w-3.5 sm:h-3.5" />
                              {item.label}
                            </label>
                            {item.label === "Alamat" ? (
                              <textarea
                                name={item.name}
                                value={item.value}
                                onChange={handleChange}
                                rows={2}
                                className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-xs sm:text-sm resize-none"
                                placeholder={`Masukkan ${item.label.toLowerCase()}`}
                              />
                            ) : (
                              <input
                                type="text"
                                name={item.name}
                                value={item.value}
                                onChange={handleChange}
                                className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-xs sm:text-sm"
                                placeholder={`Masukkan ${item.label.toLowerCase()}`}
                              />
                            )}
                          </div>
                        ) : (
                          <div>
                            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                              <IconComponent size={14} className="text-blue-500 sm:w-4 sm:h-4" />
                              <span className="text-[10px] sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                                {item.label}
                              </span>
                            </div>
                            <p className="text-gray-800 font-medium text-xs sm:text-base break-words pl-0.5 sm:pl-1">
                              {item.value || "-"}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Pesan saat mode edit (optional) */}
            {isEditing && (
              <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1.5 rounded-full shadow-lg text-xs sm:hidden">
                Edit mode aktif
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-6 border-b border-gray-200">
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Settings size={20} className="sm:w-6 sm:h-6" />
                Settings
              </h2>

              <button
                onClick={() => setIsSettingsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-500 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-3 sm:p-6 space-y-4 sm:space-y-6">
              {[
                {
                  key: "notification",
                  title: "Notifications",
                  desc: "Receive email notifications",
                  icon: <Bell size={18} className="text-blue-600 sm:w-5 sm:h-5" />,
                  bg: "bg-blue-100",
                },
                {
                  key: "privacy",
                  title: "Privacy Mode",
                  desc: "Hide online status",
                  icon: <Shield size={18} className="text-purple-600 sm:w-5 sm:h-5" />,
                  bg: "bg-purple-100",
                },
                {
                  key: "autoSave",
                  title: "Auto Save",
                  desc: "Automatically save changes",
                  icon: <Save size={18} className="text-green-600 sm:w-5 sm:h-5" />,
                  bg: "bg-green-100",
                },
                {
                  key: "twoFactor",
                  title: "Two-Factor Auth",
                  desc: "Extra security layer",
                  icon: <Shield size={18} className="text-orange-600 sm:w-5 sm:h-5" />,
                  bg: "bg-orange-100",
                },
              ].map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`p-1.5 sm:p-2 rounded-lg ${item.bg}`}>
                      {item.icon}
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">
                        {item.title}
                      </p>

                      <p className="text-xs sm:text-sm text-gray-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      handleToggle(item.key as keyof typeof toggles)
                    }
                    className={`relative inline-flex h-5 w-10 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                      toggles[item.key as keyof typeof toggles]
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                        toggles[item.key as keyof typeof toggles]
                          ? "translate-x-5 sm:translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              ))}

              {/* Logout */}
              <button className="w-full flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg sm:rounded-xl transition-all mt-3 sm:mt-4 text-sm sm:text-base">
                <LogOut size={18} className="sm:w-5 sm:h-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}