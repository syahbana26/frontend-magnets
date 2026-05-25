'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { User, Mail, Lock, UserPlus, Loader2, AlertCircle, Eye, EyeOff } from 'lucide-react';

export default function Register() {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Username tidak boleh kosong');
      return;
    }
    if (!email.trim()) {
      setError('Email tidak boleh kosong');
      return;
    }
    if (!password.trim()) {
      setError('Password tidak boleh kosong');
      return;
    }
    if (password !== confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok');
      return;
    }
    if (password.length < 6) {
      setError('Password minimal 6 karakter');
      return;
    }

    setError('');
    setIsLoading(true);

    // Simulasi API call
    setTimeout(() => {
      alert('Registrasi berhasil! Selamat datang, ' + username);
      // Reset form
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      // Bisa redirect ke login atau dashboard
      // window.location.href = '/login';
      setIsLoading(false);
    }, 1500);
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
    (e: ChangeEvent<HTMLInputElement>) => setter(e.target.value);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 flex items-center justify-center p-3">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center mb-4">
                <img 
                  src="/images/icon-magnets.png" 
                  alt="Magnets Logo" 
                  className="w-11 h-11 object-contain" 
                />
              </div>
              <p className="text-gray-600 mt-1">Register</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username */}
              <div>
                <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <User size={20} />
                  </div>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={handleInputChange(setUsername)}
                    disabled={isLoading}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                    placeholder="Masukkan username"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail size={20} />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleInputChange(setEmail)}
                    disabled={isLoading}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                    placeholder="Masukkan email"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock size={20} />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handleInputChange(setPassword)}
                    disabled={isLoading}
                    className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                    placeholder="Buat password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Konfirmasi Password
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock size={20} />
                  </div>
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={handleInputChange(setConfirmPassword)}
                    disabled={isLoading}
                    className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                    placeholder="Konfirmasi password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-3.5 py-2.5 rounded-2xl flex items-start gap-3 animate-shake">
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`
                  w-full py-3.5 rounded-2xl font-semibold text-base
                  flex items-center justify-center gap-3
                  transition-all duration-300
                  ${isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.985] shadow-lg shadow-indigo-500/30'
                  }
                  text-white
                `}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Membuat akun...</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5" />
                    <span>Daftar</span>
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-5 text-center">
              <p className="text-sm text-gray-500">
                Sudah punya akun?{' '}
                <a href="/login" className="text-blue-600 hover:underline font-medium">
                  Masuk di sini
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}