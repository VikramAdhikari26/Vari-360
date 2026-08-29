import { property } from "@/lib/mock-data";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProgressBar } from "@/components/ui/ProgressBar";

export function PropertyDetails() {
  return (
    <div className="space-y-6">
      <GlassCard className="p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Record overview</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{property.ownerName}</h3>
            <p className="mt-2 text-sm text-slate-300">{property.address}</p>
          </div>
          <StatusBadge label="Verified" tone="success" />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Assessment number", property.assessmentNumber],
            ["Property ID", property.id],
            ["Zone", property.zone],
            ["Property type", property.propertyType],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{label}</p>
              <p className="mt-2 text-sm font-medium text-slate-100">{value}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <GlassCard className="p-5">
          <h3 className="text-lg font-semibold text-white">Assessment summary</h3>
          <div className="mt-5 space-y-4">
            {[
              ["Previous area", "1,200 sq.ft"],
              ["Current area", "1,450 sq.ft"],
              ["Previous tax", "₹8,500"],
              ["Current tax", "₹10,800"],
              ["Previous assessment", "2025"],
              ["Current assessment", "2026"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-3">
                <span className="text-sm text-slate-400">{label}</span>
                <span className="text-sm font-medium text-slate-100">{value}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <h3 className="text-lg font-semibold text-white">Record quality</h3>
          <div className="mt-6 space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                <span>Document confidence</span>
                <span>{property.documentConfidence}%</span>
              </div>
              <ProgressBar value={property.documentConfidence} tone="cyan" />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                <span>Health score</span>
                <span>{property.healthScore}/100</span>
              </div>
              <ProgressBar value={property.healthScore} tone="emerald" />
            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4 text-sm text-amber-100">
              One discrepancy warning is pending verification from the latest area comparison.
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
