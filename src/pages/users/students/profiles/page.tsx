import Sidebar from "../../../../components/sidebar";
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Award, Clock, Edit2, Save, X, Settings, LogOut, Bell, Shield } from "lucide-react";
import { useState } from "react";

export default function ProfileStudent() {
  const [isEditing, setIsEditing] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "Muhammad Rizki",
    username: "muhammad.rizki",
    email: "m.rizki@student.edu",
    phone: "+62 812 3456 7890",
    address: "Jakarta, Indonesia",
    studentId: "STU-2024-001",
    program: "Computer Science",
    batch: "2024",
    semester: "Semester 4",
    gpa: "3.85"
  });

  const [toggles, setToggles] = useState({
    notification: false,
    privacy: false,
    autoSave: true,
    twoFactor: false
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you can add API call to save data
  };

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles({
      ...toggles,
      [key]: !toggles[key]
    });
  };

  const statsData = [
    { icon: BookOpen, label: "Courses", value: "8", color: "from-blue-500 to-blue-600" },
    { icon: Award, label: "Certificates", value: "12", color: "from-purple-500 to-purple-600" },
    { icon: Clock, label: "Hours Learned", value: "248", color: "from-green-500 to-green-600" },
    { icon: Calendar, label: "Days Active", value: "156", color: "from-orange-500 to-orange-600" }
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Sidebar />
      
      <div className="flex-1">
        <main className="min-h-screen">
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Header Card */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-2xl shadow-xl mb-8">
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl"></div>
              
              <div className="relative px-4 sm:px-6 py-6 sm:p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Profile Section */}
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Profile Avatar */}
                    <div className="relative">
                      <div className="w-16 h-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 sm:h-20 md:h-24 lg:h-28 xl:h-32 rounded-full bg-gradient-to-br from-white to-gray-100 p-1 shadow-xl">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            {formData.fullName.charAt(0)}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 truncate">
                        {formData.fullName}
                      </h1>
                      <p className="text-blue-100 text-sm sm:text-base truncate">
                        @{formData.username}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs text-white font-medium">
                          {formData.studentId}
                        </span>
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs text-white font-medium">
                          {formData.program}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Settings Icon */}
                  <button
                    onClick={() => setIsSettingsOpen(true)}
                    className="self-end sm:self-center p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl transition-all duration-200"
                  >
                    <Settings size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {statsData.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3`}>
                    <stat.icon className="text-white" size={20} />
                  </div>
                  <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Personal Information Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 sm:px-6 py-4">
                <h2 className="text-white text-base sm:text-lg font-semibold flex items-center gap-2">
                  <User size={20} />
                  Personal Information
                </h2>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-gray-900">
                        <User size={16} className="text-gray-400" />
                        <span>{formData.fullName}</span>
                      </div>
                    )}
                  </div>

                  {/* Username */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Username
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-gray-900">
                        <User size={16} className="text-gray-400" />
                        <span>@{formData.username}</span>
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-gray-900">
                        <Mail size={16} className="text-gray-400" />
                        <span>{formData.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-gray-900">
                        <Phone size={16} className="text-gray-400" />
                        <span>{formData.phone}</span>
                      </div>
                    )}
                  </div>

                  {/* Address */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-gray-900">
                        <MapPin size={16} className="text-gray-400" />
                        <span>{formData.address}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Edit/Save Buttons */}
                <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 sm:px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-sm sm:text-base"
                    >
                      <Edit2 size={18} />
                      Edit Profile
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={handleSave}
                        className="px-4 sm:px-5 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-all shadow-lg flex items-center gap-2 text-sm sm:text-base"
                      >
                        <Save size={18} />
                        Save
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-4 sm:px-5 py-2 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-all shadow-lg flex items-center gap-2 text-sm sm:text-base"
                      >
                        <X size={18} />
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Settings Dialog Modal with Toggle Switches */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in zoom-in duration-200">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Settings size={24} />
                Settings
              </h2>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>
            
            <div className="p-4 sm:p-6 space-y-6">
              {/* Notification Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Bell size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Notifications</p>
                    <p className="text-sm text-gray-500">Receive email notifications</p>
                  </div>
                </div>
                <button
                  onClick={() => handleToggle('notification')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    toggles.notification ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      toggles.notification ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Privacy Mode Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Shield size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Privacy Mode</p>
                    <p className="text-sm text-gray-500">Hide online status</p>
                  </div>
                </div>
                <button
                  onClick={() => handleToggle('privacy')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    toggles.privacy ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      toggles.privacy ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Auto Save Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Save size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Auto Save</p>
                    <p className="text-sm text-gray-500">Automatically save changes</p>
                  </div>
                </div>
                <button
                  onClick={() => handleToggle('autoSave')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    toggles.autoSave ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      toggles.autoSave ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Two Factor Auth Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Shield size={20} className="text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Two-Factor Auth</p>
                    <p className="text-sm text-gray-500">Extra security layer</p>
                  </div>
                </div>
                <button
                  onClick={() => handleToggle('twoFactor')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    toggles.twoFactor ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      toggles.twoFactor ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Logout Button */}
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all mt-4">
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}