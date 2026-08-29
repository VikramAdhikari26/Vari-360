import { GlassCard } from "@/components/ui/GlassCard";

export function OCRPreview() {
  return (
    <GlassCard className="p-5">
      <h3 className="text-lg font-semibold text-white">Extracted fields</h3>
      <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_1.4fr]">
        <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
          <div className="h-72 rounded-xl bg-[linear-gradient(135deg,#0f172a,#1e293b)] p-4">
            <div className="flex h-full items-end justify-center rounded-lg border border-dashed border-slate-700 p-4 text-slate-400">
              Document preview
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          {[
            ["Assessment number", "CHN-PT-2025-1001"],
            ["Owner name", "Arun Kumar"],
            ["Address", "Anna Nagar, Chennai"],
            ["Property area", "1,450 sq.ft"],
            ["Tax amount", "₹10,800"],
            ["Assessment year", "2026"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">{label}</p>
              <p className="mt-2 text-sm font-medium text-slate-100">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
