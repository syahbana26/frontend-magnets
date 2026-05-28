'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  User,
  Mail,
  Lock,
  UserPlus,
  Loader2,
  AlertCircle,
  Eye,
  EyeOff,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

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
      setIsLoading(false);

      // Popup sukses

      // Reset form
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      // Redirect ke login
      setTimeout(() => {
        navigate('/login');
      }, 2500);
    }, 1500);
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setter(e.target.value);

  return (

  <div className="relative min-h-screen overflow-hidden bg-[#eef4ff]">
    {/* BACKGROUND IMAGE */}
    <div
      className="
        absolute inset-0
        bg-center
        bg-cover
        bg-no-repeat
        scale-105
      "
      style={{
        backgroundImage: "url('/images/bg-auth.jpeg')",
      }}
    />

    {/* WHITE FADE OVERLAY */}
    <div
      className="
        absolute inset-0
        bg-white/55
      "
    />

    {/* TOP LIGHT GRADIENT */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-b
        from-white/70
        via-white/30
        to-blue-100/10
      "
    />

    {/* CONTENT */}
    <div
      className="
        relative z-10
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        py-10
      "
    >
      <div className="w-full max-w-md">
        {/* CARD */}
        <div
          className="
            bg-white/82
            backdrop-blur-xl
            rounded-[32px]
            shadow-[0_20px_60px_rgba(37,99,235,0.15)]
            border border-white/70
            p-5 sm:p-7 md:p-8
          "
        >
          {/* HEADER */}
          <div className="flex flex-col items-center text-center mb-5 sm:mb-6">
            <img
              src="/images/magnets.png"
              alt="Magnets Logo"
              className="
                w-44
                sm:w-52
                md:w-60
                object-contain
                drop-shadow-sm
              "
            />

            <h1
              className="
                text-slate-700
                -mt-2
                text-2xl
                sm:text-3xl
                font-bold
                tracking-tight
              "
            >
              Register
            </h1>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-5"
          >
            {/* USERNAME */}
            <div>
              <label
                htmlFor="username"
                className="
                  block
                  text-sm
                  font-semibold
                  text-slate-700
                  mb-2
                "
              >
                Username
              </label>

              <div className="relative">
                <div
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                >
                  <User size={18} />
                </div>

                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={handleInputChange(setUsername)}
                  disabled={isLoading}
                  placeholder="Masukkan username"
                  className="
                    w-full
                    pl-11
                    pr-4
                    py-3
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/90
                    text-slate-800
                    placeholder:text-slate-400
                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-100
                    focus:border-blue-500
                    transition-all
                  "
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="
                  block
                  text-sm
                  font-semibold
                  text-slate-700
                  mb-2
                "
              >
                Email
              </label>

              <div className="relative">
                <div
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                >
                  <Mail size={18} />
                </div>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleInputChange(setEmail)}
                  disabled={isLoading}
                  placeholder="Masukkan email"
                  className="
                    w-full
                    pl-11
                    pr-4
                    py-3
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/90
                    text-slate-800
                    placeholder:text-slate-400
                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-100
                    focus:border-blue-500
                    transition-all
                  "
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="
                  block
                  text-sm
                  font-semibold
                  text-slate-700
                  mb-2
                "
              >
                Password
              </label>

              <div className="relative">
                <div
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                >
                  <Lock size={18} />
                </div>

                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handleInputChange(setPassword)}
                  disabled={isLoading}
                  placeholder="Buat password"
                  className="
                    w-full
                    pl-11
                    pr-12
                    py-3
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/90
                    text-slate-800
                    placeholder:text-slate-400
                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-100
                    focus:border-blue-500
                    transition-all
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="
                  block
                  text-sm
                  font-semibold
                  text-slate-700
                  mb-2
                "
              >
                Konfirmasi Password
              </label>

              <div className="relative">
                <div
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                >
                  <Lock size={18} />
                </div>

                <input
                  id="confirmPassword"
                  type={
                    showConfirmPassword
                      ? 'text'
                      : 'password'
                  }
                  value={confirmPassword}
                  onChange={handleInputChange(
                    setConfirmPassword
                  )}
                  disabled={isLoading}
                  placeholder="Konfirmasi password"
                  className="
                    w-full
                    pl-11
                    pr-12
                    py-3
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/90
                    text-slate-800
                    placeholder:text-slate-400
                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-100
                    focus:border-blue-500
                    transition-all
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* ERROR */}
            {error && (
              <div
                className="
                  bg-red-50
                  border
                  border-red-200
                  text-red-700
                  px-4
                  py-3
                  rounded-2xl
                  flex
                  items-start
                  gap-3
                  animate-shake
                "
              >
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />

                <span className="text-sm">
                  {error}
                </span>
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full
                py-3.5
                rounded-2xl
                font-semibold
                text-white
                flex
                items-center
                justify-center
                gap-2
                transition-all
                duration-300
                ${
                  isLoading
                    ? 'bg-slate-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/30 hover:scale-[1.01]'
                }
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

          {/* FOOTER */}
          <div className="mt-5 text-center">
            <p className="text-sm text-slate-500">
              Sudah punya akun?{' '}
              <Link
                to="/login"
                className="
                  font-semibold
                  text-blue-600
                  hover:text-blue-700
                "
              >
                Masuk di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}