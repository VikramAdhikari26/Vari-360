import { Check, TriangleAlert, X } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const fields = [
  ["Assessment number", "CHN-PT-2025-1001", "CHN-PT-2025-1001", "match"],
  ["Property area", "1,200 sq.ft", "1,450 sq.ft", "changed"],
  ["Owner name", "Arun Kumar", "Arun Kumar", "match"],
  ["Tax amount", "₹8,500", "₹10,800", "changed"],
  ["Address", "Anna Nagar, Chennai", "Anna Nagar, Chennai", "match"],
  ["Zone", "Zone VIII", "Zone VIII", "match"],
  ["Document confidence", "92%", "94%", "suspicious"],
] as const;

export function ScanCompare() {
  return (
    <GlassCard className="p-5">
      <h3 className="text-lg font-semibold text-white">Scan & compare</h3>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Previous document</p>
          <div className="mt-4 rounded-xl border border-dashed border-slate-700 bg-slate-950/80 p-4 text-sm text-slate-300">
            Assessment notice 2025
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Current document</p>
          <div className="mt-4 rounded-xl border border-dashed border-slate-700 bg-slate-950/80 p-4 text-sm text-slate-300">
            Assessment notice 2026
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {fields.map(([label, previous, current, status]) => (
          <div key={label} className="grid gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-3 md:grid-cols-[1.2fr_1fr_1fr]">
            <p className="text-sm font-medium text-slate-200">{label}</p>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-slate-300">
              {status === "match" ? <Check size={14} className="text-emerald-300" /> : <TriangleAlert size={14} className="text-amber-300" />}
              {previous}
            </div>
            <div className={[
              "flex items-center gap-2 rounded-xl border px-3 py-2 text-sm",
              status === "match" ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-200" : status === "changed" ? "border-amber-500/25 bg-amber-500/10 text-amber-200" : "border-red-500/25 bg-red-500/10 text-red-200",
            ].join(" ")}>
              {status === "suspicious" ? <X size={14} /> : status === "match" ? <Check size={14} /> : <TriangleAlert size={14} />}
              {current}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
