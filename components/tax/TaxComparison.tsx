import { ArrowRightLeft, TrendingDown, TrendingUp } from "lucide-react";
import { property, taxComparison } from "@/lib/mock-data";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

const fields = [
  { key: "area", label: "Built-up area", format: (value: number) => `${value.toLocaleString("en-IN")} sq.ft` },
  { key: "propertyType", label: "Property type", format: (value: string) => value },
  { key: "zone", label: "Zone", format: (value: string) => value },
  { key: "taxRate", label: "Tax rate", format: (value: number) => `${value.toFixed(2)}%` },
  { key: "annualValue", label: "Annual value", format: (value: number) => `₹${value.toLocaleString("en-IN")}` },
  { key: "taxAmount", label: "Tax amount", format: (value: number) => formatCurrency(value) },
  { key: "year", label: "Assessment year", format: (value: number) => value.toString() },
] as const;

export function TaxComparison() {
  const diff = taxComparison.currentAssessment.taxAmount - taxComparison.previousAssessment.taxAmount;
  const percent = (diff / taxComparison.previousAssessment.taxAmount) * 100;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <GlassCard className="p-4">
          <p className="text-xs uppercase tracking-[0.26em] text-slate-400">Previous assessment</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{taxComparison.previousAssessment.year}</h3>
          <p className="mt-2 text-sm text-slate-300">{formatCurrency(taxComparison.previousAssessment.taxAmount)}</p>
        </GlassCard>
        <GlassCard className="p-4">
          <p className="text-xs uppercase tracking-[0.26em] text-slate-400">Current assessment</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{taxComparison.currentAssessment.year}</h3>
          <p className="mt-2 text-sm text-slate-300">{formatCurrency(taxComparison.currentAssessment.taxAmount)}</p>
        </GlassCard>
        <GlassCard className="p-4">
          <p className="text-xs uppercase tracking-[0.26em] text-slate-400">Difference</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{formatCurrency(diff)}</h3>
          <div className="mt-2 flex items-center gap-2 text-emerald-300">
            <TrendingUp size={16} />
            {formatPercent(percent)}
          </div>
        </GlassCard>
      </div>

      <GlassCard className="p-5">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Assessment comparison</h3>
          <StatusBadge label="Demonstration data" tone="neutral" />
        </div>

        <div className="grid gap-3">
          {fields.map((field) => {
            const prev = taxComparison.previousAssessment[field.key as keyof typeof taxComparison.previousAssessment];
            const curr = taxComparison.currentAssessment[field.key as keyof typeof taxComparison.currentAssessment];
            const match = String(prev) === String(curr);

            return (
              <div key={field.label} className="grid gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-3 md:grid-cols-[1.1fr_1fr_1fr] md:items-center">
                <p className="text-sm font-medium text-slate-200">{field.label}</p>
                <div className="rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-slate-300">
                  {field.format(prev as never)}
                </div>
                <div className={[
                  "rounded-xl border px-3 py-2 text-sm",
                  match ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-200" : "border-amber-500/20 bg-amber-500/10 text-amber-200",
                ].join(" ")}>
                  {field.format(curr as never)}
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>

      <GlassCard className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">Why did my tax change?</h3>
          <button className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-100 transition hover:bg-cyan-500/20">
            <ArrowRightLeft size={16} />
            View explanation
          </button>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          The tax increased because the assessed built-up area moved from 1,200 sq.ft to 1,450 sq.ft and the annual value was revised from ₹5.6 lakh to ₹6.4 lakh, supported by the latest municipal rate schedule for {property.zone}.
        </p>
      </GlassCard>
    </div>
  );
}
