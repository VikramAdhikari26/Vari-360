"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bell, Search, ShieldCheck, Sparkles, UserCircle2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/navigation";
import { getCurrentUser, getInitials, type UserProfile } from "@/lib/auth";

const routeLabels = new Map<string, string>();
for (const section of navigation) {
  for (const item of section.items) {
    routeLabels.set(item.href, item.label);
    for (const child of item.children ?? []) {
      routeLabels.set(child.href, child.label);
    }
  }
}

export function Header() {
  const pathname = usePathname();
  const [user, setUser] = useState<UserProfile | null>(null);
  const currentLabel = routeLabels.get(pathname) ?? "Overview";

  useEffect(() => {
    setUser(getCurrentUser());
    const syncUser = () => setUser(getCurrentUser());

    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []);

  const avatar = user?.avatar ? (
    <img src={user.avatar} alt={user.fullName} className="h-9 w-9 rounded-full object-cover" />
  ) : (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-sky-600 text-sm font-semibold text-slate-950">
      {user ? getInitials(user.fullName) : "NV"}
    </div>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-slate-500">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
            Namma Vari 360
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
            <span>Home</span>
            <span>/</span>
            <span className="text-cyan-200">{currentLabel}</span>
          </div>
        </div>

        <div className="hidden min-w-[260px] items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-slate-400 md:flex">
          <Search size={15} className="text-slate-500" />
          <input
            aria-label="Search"
            className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 outline-none"
            placeholder="Search property or tax insights"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-200 sm:flex">
            <ShieldCheck size={14} />
            AI status: verified
          </div>

          <button className="relative rounded-xl border border-white/10 bg-slate-900/75 p-2.5 text-slate-100 transition hover:border-cyan-400/50 hover:text-cyan-200" aria-label="Notifications">
            <Bell size={18} />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-amber-400 ring-2 ring-slate-950" />
          </button>

          <Link href="/profile" className="hidden items-center gap-3 rounded-xl border border-white/10 bg-slate-900/75 px-2.5 py-2 shadow-[0_12px_24px_rgba(8,47,73,0.2)] transition hover:border-cyan-500/40 md:flex">
            {avatar}
            <div className="min-w-0 text-left">
              <p className="truncate text-sm font-medium text-slate-100">{user?.fullName ?? "Citizen"}</p>
              <p className="text-[11px] text-slate-400">Property Owner</p>
            </div>
            <UserCircle2 size={18} className="text-slate-500" />
          </Link>

          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-100 md:hidden">
            <Sparkles size={15} />
            Vari AI
          </motion.button>
        </div>
      </div>
    </header>
  );
}
