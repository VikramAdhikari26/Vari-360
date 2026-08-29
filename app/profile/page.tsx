"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CalendarDays, Mail, PencilLine, Phone, ShieldCheck, Sparkles, UserCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { getCurrentUser, getInitials, logoutUser, updateUserProfile, type UserProfile } from "@/lib/auth";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.push("/login");
      return;
    }

    setUser(currentUser);
    setFullName(currentUser.fullName);
    setMobile(currentUser.mobile);
    setAvatar(currentUser.avatar ?? "");
  }, [router]);

  const handleSave = async () => {
    if (!user) return;

    setLoading(true);
    setMessage(null);

    try {
      const updatedUser = updateUserProfile({
        id: user.id,
        fullName,
        mobile,
        avatar,
      });

      setUser(updatedUser);
      setMessage("Profile updated successfully.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logoutUser();
    router.push("/login");
  };

  if (!user) {
    return null;
  }

  const avatarContent = avatar ? (
    <img src={avatar} alt={user.fullName} className="h-24 w-24 rounded-full object-cover ring-4 ring-cyan-500/20" />
  ) : (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-sky-600 text-2xl font-semibold text-slate-950 ring-4 ring-cyan-500/20">
      {getInitials(user.fullName)}
    </div>
  );

  return (
    <div className="mx-auto max-w-5xl py-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="rounded-[28px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.7)] backdrop-blur-xl sm:p-7"
      >
        <div className="flex flex-col gap-6 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            {avatarContent}
            <div>
              <p className="text-[10px] uppercase tracking-[0.26em] text-cyan-300/80">Property Owner</p>
              <h1 className="mt-2 text-3xl font-semibold text-white">{user.fullName}</h1>
              <p className="mt-2 text-sm text-slate-300">Citizen account profile</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-500/40">
              Back to dashboard
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-200 transition hover:bg-rose-500/15"
            >
              Sign out
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <div className="mb-4 flex items-center gap-2 text-cyan-200">
                <UserCircle2 size={16} />
                <span className="text-sm font-medium">Profile details</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Full name</label>
                  <input
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-500/40"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">Mobile number</label>
                  <input
                    value={mobile}
                    onChange={(event) => setMobile(event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-500/40"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">Profile photo URL</label>
                  <input
                    value={avatar}
                    onChange={(event) => setAvatar(event.target.value)}
                    placeholder="https://example.com/avatar.jpg"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-500/40"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSave}
                  disabled={loading}
                  className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-75"
                >
                  <PencilLine size={16} />
                  {loading ? "Saving..." : "Edit Profile"}
                </button>

                {message ? <p className="text-sm text-cyan-200">{message}</p> : null}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <div className="mb-4 flex items-center gap-2 text-cyan-200">
                <Sparkles size={16} />
                <span className="text-sm font-medium">Account summary</span>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2.5">
                  <Mail size={16} className="text-cyan-300" />
                  <span>{user.email}</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2.5">
                  <Phone size={16} className="text-cyan-300" />
                  <span>{user.mobile}</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2.5">
                  <CalendarDays size={16} className="text-cyan-300" />
                  <span>{new Date(user.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-2.5 text-emerald-200">
                  <ShieldCheck size={16} />
                  <span>Property Owner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
