import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  detail: string;
  tone?: "default" | "positive" | "warning" | "critical";
  icon?: ReactNode;
}

export function StatCard({ title, value, detail, tone = "default", icon }: StatCardProps) {
  const toneStyles = {
    default: "border-cyan-500/20 bg-cyan-500/5 text-cyan-200",
    positive: "border-emerald-500/20 bg-emerald-500/5 text-emerald-200",
    warning: "border-amber-500/20 bg-amber-500/5 text-amber-200",
    critical: "border-red-500/20 bg-red-500/5 text-red-200",
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 shadow-[0_18px_35px_rgba(15,23,42,0.25)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{title}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{value}</h3>
        </div>
        <div className={cn("rounded-xl border p-2", toneStyles[tone])}>
          {icon ?? (tone === "positive" ? <ArrowUpRight size={18} /> : tone === "critical" ? <ArrowDownRight size={18} /> : <ArrowUpRight size={18} />)}
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-300">{detail}</p>
    </div>
  );
}
