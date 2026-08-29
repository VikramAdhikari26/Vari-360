"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpDown, BellDot, FileText, House, Sparkles, TrendingUp } from "lucide-react";

const items = [
  { href: "/dashboard", label: "Home", icon: House },
  { href: "/tax-analyzer", label: "Analyze", icon: TrendingUp },
  { href: "/documents", label: "Docs", icon: FileText },
  { href: "/insights", label: "Insights", icon: Sparkles },
  { href: "/alerts", label: "Alerts", icon: BellDot },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/90 p-2 backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-5 gap-2">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={[
                "flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-[10px] transition",
                active ? "bg-cyan-500/10 text-cyan-200" : "text-slate-400 hover:text-slate-200",
              ].join(" ")}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
