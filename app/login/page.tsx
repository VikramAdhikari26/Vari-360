"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Building2, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { getCurrentUser, loginUser } from "@/lib/auth";

const initialForm = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  useEffect(() => {
    if (getCurrentUser()) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (message) {
      setMessage(null);
    }
  };

  const validate = () => {
    const nextErrors: { email?: string; password?: string } = {};

    if (!form.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.password.trim()) {
      nextErrors.password = "Password is required.";
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
      await loginUser({ email: form.email, password: form.password });
      router.push("/dashboard");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "We couldn't sign you in. Please try again.");
      if (!(error instanceof Error)) {
        console.error("Login failed", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-[#070b12] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_30%),linear-gradient(180deg,_rgba(7,11,18,1),_rgba(8,15,26,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-8 sm:px-6 lg:px-10">
        <div className="grid w-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/30 shadow-[0_28px_90px_rgba(2,6,23,0.8)] backdrop-blur-xl lg:grid-cols-[45%_55%]">
          <motion.section
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative hidden overflow-hidden border-r border-white/10 lg:flex lg:flex-col lg:justify-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.82),rgba(2,6,23,0.96))]" />

            <div className="relative z-10 p-8 xl:p-10">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-200">
                <Sparkles size={12} />
                PROPERTY TAX • TRANSPARENCY • TRUST
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.14)]">
                  <Building2 size={26} />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">Namma Vari</p>
                  <h1 className="mt-1 text-4xl font-semibold tracking-tight text-white">360</h1>
                </div>
              </div>

              <div className="mt-8 max-w-md">
                <h2 className="text-4xl font-semibold tracking-tight text-white xl:text-[3rem]">Welcome to Namma Vari 360</h2>
                <p className="mt-4 text-lg text-slate-200">Understand your property tax. Track every change. Stay informed.</p>
                <p className="mt-3 text-sm text-slate-400">Your transparent, citizen-friendly property tax companion.</p>
              </div>

              <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-slate-950/50 p-4 shadow-[0_18px_50px_rgba(9,14,22,0.4)]">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Civic intelligence</p>
                    <p className="mt-2 text-lg font-medium text-white">Chennai property visibility</p>
                  </div>
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-300">
                    <ShieldCheck size={18} />
                  </div>
                </div>

                <div className="h-28 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.9),_rgba(2,6,23,0.9))] p-3">
                  <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950/50">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[24px] border border-cyan-400/30 bg-cyan-500/8 shadow-[0_0_35px_rgba(34,211,238,0.18)]"
                    >
                      <div className="absolute inset-x-5 top-4 h-8 rounded-md bg-cyan-300/20" />
                      <div className="absolute inset-x-7 bottom-4 h-8 rounded-md bg-sky-500/15" />
                    </motion.div>
                    <div className="absolute inset-x-3 bottom-3 flex items-end justify-between">
                      <div className="h-10 w-14 rounded-t-xl border border-white/10 bg-slate-900/60" />
                      <div className="h-14 w-14 rounded-t-xl border border-white/10 bg-slate-900/60" />
                      <div className="h-12 w-12 rounded-t-xl border border-white/10 bg-slate-900/60" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-7 max-w-md text-sm leading-6 text-slate-300">
                Making property-tax information simple, transparent and accessible for every citizen.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            className="flex items-center justify-center bg-slate-950/30 px-4 py-8 sm:px-8 lg:px-12"
          >
            <div className="w-full max-w-md">
              <div className="rounded-[24px] border border-white/10 bg-slate-950/55 p-5 shadow-[0_22px_60px_rgba(15,23,42,0.52)] backdrop-blur-xl sm:p-7">
                <div className="mb-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-300/80">Secure access</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Sign in to your account</h3>
                  <p className="mt-2 text-sm text-slate-300">Access your property assessment and tax insights.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                      Email address
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(event) => handleChange("email", event.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-slate-900/80 py-2.5 pl-10 pr-3 text-sm text-slate-100 outline-none transition focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20"
                        placeholder="Enter your email"
                        autoComplete="email"
                        aria-invalid={Boolean(errors.email)}
                      />
                    </div>
                    {errors.email ? <p className="mt-2 text-xs text-rose-300">{errors.email}</p> : null}
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label htmlFor="password" className="text-sm text-slate-300">Password</label>
                    </div>
                    <div className="relative">
                      <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={(event) => handleChange("password", event.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-slate-900/80 py-2.5 pl-10 pr-10 text-sm text-slate-100 outline-none transition focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        aria-invalid={Boolean(errors.password)}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((previous) => !previous)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-200"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    {errors.password ? <p className="mt-2 text-xs text-rose-300">{errors.password}</p> : null}
                  </div>

                  <div className="flex items-center justify-between gap-3 text-sm text-slate-300">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(event) => setRemember(event.target.checked)}
                        className="h-4 w-4 rounded border-white/10 bg-slate-900 text-cyan-500 focus:ring-cyan-500/30"
                      />
                      Remember me
                    </label>
                    <Link href="/login" className="text-cyan-300 transition hover:text-cyan-200">
                      Forgot password?
                    </Link>
                  </div>

                  {message ? <p className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">{message}</p> : null}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: loading ? 1 : 1.01 }}
                    whileTap={{ scale: loading ? 1 : 0.99 }}
                    disabled={loading}
                    className="flex w-full items-center justify-center rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(34,211,238,0.35)] transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-75"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </motion.button>
                </form>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-300">
                  <span>Don&apos;t have an account?</span>
                  <Link href="/register" className="font-medium text-cyan-300 transition hover:text-cyan-200">
                    Create an account
                  </Link>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-200">
                  <ShieldCheck size={14} />
                  Your information is securely protected
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
