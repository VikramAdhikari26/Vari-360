"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Building2, Eye, EyeOff, LockKeyhole, Mail, Phone, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import { useState } from "react";
import { registerUser } from "@/lib/auth";

const initialForm = {
  fullName: "",
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof typeof initialForm, string>>>({});

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (message) {
      setMessage(null);
    }
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof typeof initialForm, string>> = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.mobile.trim()) {
      nextErrors.mobile = "Mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) {
      nextErrors.mobile = "Enter a valid 10-digit Indian mobile number.";
    }

    if (!form.password) {
      nextErrors.password = "Password is required.";
    } else if (form.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters long.";
    }

    if (!form.confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (form.confirmPassword !== form.password) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      await registerUser({
        fullName: form.fullName,
        email: form.email,
        mobile: form.mobile,
        password: form.password,
      });

      router.push("/dashboard");
    } catch (error) {
      const message = error instanceof Error ? error.message : "We couldn't create your account. Please try again.";
      setMessage(message === "Please complete all required fields." || message === "An account with this email already exists."
        ? message
        : "We couldn't create your account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-[#070b12] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_30%),linear-gradient(180deg,_rgba(7,11,18,1),_rgba(8,15,26,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 py-8 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto w-full max-w-5xl overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/40 shadow-[0_30px_80px_rgba(2,6,23,0.8)] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-[42%_58%]">
            <div className="relative hidden overflow-hidden border-r border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.85),rgba(2,6,23,0.98))] p-8 xl:p-10 lg:flex lg:flex-col lg:justify-center">
              <div className="relative z-10">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-200">
                  <Sparkles size={12} />
                  PROPERTY TAX • TRANSPARENCY • TRUST
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-200">
                    <Building2 size={26} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Namma Vari</p>
                    <h1 className="mt-1 text-4xl font-semibold text-white">360</h1>
                  </div>
                </div>

                <h2 className="mt-8 text-4xl font-semibold tracking-tight text-white">Create your Namma Vari 360 account</h2>
                <p className="mt-4 max-w-md text-base text-slate-300">Track your property tax profile, assessment history and civic transparency in one secure place.</p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <div className="h-24 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,_rgba(15,23,42,0.9),_rgba(2,6,23,0.98))]">
                    <div className="relative h-full w-full">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                      >
                        <div className="absolute inset-x-5 top-4 h-8 rounded-md bg-cyan-300/20" />
                        <div className="absolute inset-x-7 bottom-4 h-8 rounded-md bg-sky-500/15" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center bg-slate-950/35 px-4 py-8 sm:px-8 lg:px-10">
              <div className="w-full max-w-xl">
                <div className="mb-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-300/80">Citizen onboarding</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Create account</h3>
                  <p className="mt-2 text-sm text-slate-300">Set up your profile to start tracking property tax insights.</p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm text-slate-300">Full Name</label>
                    <div className="relative">
                      <UserRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        id="fullName"
                        value={form.fullName}
                        onChange={(event) => handleChange("fullName", event.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-slate-900/80 py-2.5 pl-10 pr-3 text-sm text-slate-100 outline-none transition focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20"
                        placeholder="Enter your full name"
                        aria-invalid={Boolean(errors.fullName)}
                      />
                    </div>
                    {errors.fullName ? <p className="mt-2 text-xs text-rose-300">{errors.fullName}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-slate-300">Email Address</label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(event) => handleChange("email", event.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-slate-900/80 py-2.5 pl-10 pr-3 text-sm text-slate-100 outline-none transition focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20"
                        placeholder="you@example.com"
                        autoComplete="email"
                        aria-invalid={Boolean(errors.email)}
                      />
                    </div>
                    {errors.email ? <p className="mt-2 text-xs text-rose-300">{errors.email}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="mobile" className="mb-2 block text-sm text-slate-300">Mobile Number</label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        id="mobile"
                        type="tel"
                        value={form.mobile}
                        onChange={(event) => handleChange("mobile", event.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-slate-900/80 py-2.5 pl-10 pr-3 text-sm text-slate-100 outline-none transition focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20"
                        placeholder="9876543210"
                        autoComplete="tel"
                        aria-invalid={Boolean(errors.mobile)}
                      />
                    </div>
                    {errors.mobile ? <p className="mt-2 text-xs text-rose-300">{errors.mobile}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="password" className="mb-2 block text-sm text-slate-300">Password</label>
                    <div className="relative">
                      <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={(event) => handleChange("password", event.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-slate-900/80 py-2.5 pl-10 pr-10 text-sm text-slate-100 outline-none transition focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20"
                        placeholder="Create a strong password"
                        aria-invalid={Boolean(errors.password)}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((previous) => !previous)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    {errors.password ? <p className="mt-2 text-xs text-rose-300">{errors.password}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="mb-2 block text-sm text-slate-300">Confirm Password</label>
                    <div className="relative">
                      <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={form.confirmPassword}
                        onChange={(event) => handleChange("confirmPassword", event.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-slate-900/80 py-2.5 pl-10 pr-10 text-sm text-slate-100 outline-none transition focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20"
                        placeholder="Re-enter your password"
                        aria-invalid={Boolean(errors.confirmPassword)}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((previous) => !previous)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                        aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                      >
                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    {errors.confirmPassword ? <p className="mt-2 text-xs text-rose-300">{errors.confirmPassword}</p> : null}
                  </div>

                  {message ? <p className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">{message}</p> : null}

                  <motion.button
                    whileHover={{ scale: loading ? 1 : 1.01 }}
                    whileTap={{ scale: loading ? 1 : 0.99 }}
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(34,211,238,0.25)] transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-75"
                  >
                    {loading ? "Creating account..." : "Create Account"}
                  </motion.button>
                </form>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-300">
                  <span>Already have an account?</span>
                  <Link href="/login" className="font-medium text-cyan-300 transition hover:text-cyan-200">
                    Sign in
                  </Link>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-200">
                  <ShieldCheck size={14} />
                  Your information is securely protected
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
