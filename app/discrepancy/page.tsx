import { AlertTriangle, ChevronRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { discrepancies } from "@/lib/mock-data";

export default function DiscrepancyPage() {
  return (
    <PageContainer
      title="Discrepancy Checker"
      description="A focused review of mismatched fields, severity, and recommended actions before final tax processing."
    >
      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Total checks", "12"],
          ["Verified", "9"],
          ["Warnings", "2"],
          ["Critical discrepancies", "1"],
        ].map(([label, value]) => (
          <GlassCard key={label} className="p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{label}</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">{value}</h3>
          </GlassCard>
        ))}
      </div>

      <div className="space-y-4">
        {discrepancies.map((item) => (
          <GlassCard key={item.id} className="p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <AlertTriangle size={16} className={item.severity === "critical" ? "text-red-300" : item.severity === "high" ? "text-amber-300" : "text-cyan-300"} />
                  <p className="text-lg font-semibold text-white">{item.field}</p>
                </div>
              </div>
              <span className="inline-flex rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs uppercase tracking-[0.2em] text-amber-200">
                {item.severity}
              </span>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Previous value</p>
                <p className="mt-2 text-sm text-slate-100">{item.previousValue}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Current value</p>
                <p className="mt-2 text-sm text-slate-100">{item.currentValue}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Difference</p>
                <p className="mt-2 text-sm text-slate-100">{item.difference}</p>
              </div>
              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-200">Recommended action</p>
                <p className="mt-2 text-sm text-cyan-50">{item.recommendedAction}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </PageContainer>
  );
}
