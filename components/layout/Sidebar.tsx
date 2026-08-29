"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpDown, Building2, ChevronRight, LayoutGrid, ShieldCheck, Sparkles, UserCircle2 } from "lucide-react";
import { navigation, iconMap } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { getCurrentUser, getInitials, type UserProfile } from "@/lib/auth";

const iconByName = {
  Dashboard: LayoutGrid,
  ...iconMap,
};

export function Sidebar() {
  const pathname = usePathname();
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    setUser(getCurrentUser());
    const syncUser = () => setUser(getCurrentUser());

    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []);

  const avatar = user?.avatar ? (
    <img src={user.avatar} alt={user.fullName} className="h-10 w-10 rounded-full object-cover" />
  ) : (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-sky-600 text-sm font-semibold text-slate-950">
      {user ? getInitials(user.fullName) : "NV"}
    </div>
  );

  return (
    <aside className="hidden w-[260px] shrink-0 border-r border-white/10 bg-[#070b12]/95 lg:flex lg:min-h-screen lg:flex-col">
      <div className="border-b border-white/10 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.18)]">
            <Building2 size={19} />
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-slate-400">Namma Vari</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-white">360</h1>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2">
          <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Property tax intelligence</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-100">{user ? user.fullName : "Citizen Profile"}</span>
            <Sparkles size={14} className="text-cyan-300" />
          </div>
        </div>
      </div>

      <div className="px-3 pb-3 pt-4">
        <Link href="/profile" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-3 py-3 transition hover:border-cyan-500/40 hover:bg-slate-900/80">
          {avatar}
          <div className="min-w-0 flex-1 text-left">
            <p className="truncate text-sm font-medium text-slate-100">{user?.fullName ?? "Citizen"}</p>
            <p className="text-[11px] text-slate-400">Property Owner</p>
          </div>
          <UserCircle2 size={16} className="text-slate-500" />
        </Link>
      </div>

      <nav className="mt-2 flex-1 space-y-6 overflow-y-auto px-3 pb-4">
        {navigation.map((section) => (
          <div key={section.title}>
            <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              {section.title}
            </p>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon ? iconByName[item.icon as keyof typeof iconByName] ?? ArrowUpDown : ArrowUpDown;
                const isActive = pathname === item.href || (item.children ?? []).some((child) => pathname === child.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-xl border px-3 py-2.5 text-sm transition-all duration-200",
                        isActive
                          ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-100 shadow-[0_0_0_1px_rgba(34,211,238,0.12)]"
                          : "border-transparent bg-transparent text-slate-300 hover:border-white/10 hover:bg-slate-900/60 hover:text-white",
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={16} className={isActive ? "text-cyan-300" : "text-slate-400"} />
                        {item.label}
                      </span>
                      {item.children ? <ChevronRight size={14} className="text-slate-500" /> : null}
                    </Link>

                    {item.children ? (
                      <ul className="mt-1 ml-6 space-y-1 border-l border-white/5 pl-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                "block rounded-lg px-2 py-1.5 text-xs transition",
                                pathname === child.href ? "text-cyan-200" : "text-slate-400 hover:text-slate-200",
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="mt-auto border-t border-white/10 bg-slate-900/40 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-200">
            <ShieldCheck size={16} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.26em] text-slate-500">Secure & Transparent</p>
            <p className="mt-1 text-xs text-slate-300">Civic-grade safeguards</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
