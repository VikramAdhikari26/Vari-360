import { ArrowUpRight, Building2, Landmark, TrendingUp } from "lucide-react";
import { property } from "@/lib/mock-data";
import { formatArea, formatCurrency, formatPercent } from "@/lib/utils";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function TaxOverview() {
  const taxChange = ((property.taxAmount - property.previousTax) / property.previousTax) * 100;

  return (
    <GlassCard className="p-5">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-slate-400">Current Tax</p>
          <div className="mt-4 flex items-end gap-3">
            <h3 className="text-4xl font-semibold text-white">{formatCurrency(property.taxAmount)}</h3>
            <div className="mb-1 flex items-center gap-2 text-sm text-emerald-300">
              <ArrowUpRight size={16} />
              {formatPercent(taxChange)}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <span>Previous: {formatCurrency(property.previousTax)}</span>
            <span className="h-1 w-1 rounded-full bg-slate-500" />
            <span>Assessment: {property.currentAssessmentYear}</span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[420px]">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
            <div className="flex items-center gap-2 text-slate-400">
              <Building2 size={16} />
              Built-up area
            </div>
            <p className="mt-3 text-xl font-semibold text-white">{formatArea(property.area)}</p>
            <p className="mt-1 text-xs text-slate-400">Previous: {formatArea(property.previousArea)}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
            <div className="flex items-center gap-2 text-slate-400">
              <Landmark size={16} />
              Property health
            </div>
            <p className="mt-3 text-xl font-semibold text-white">{property.healthScore}/100</p>
            <StatusBadge label="Stable" tone="success" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
            <div className="flex items-center gap-2 text-slate-400">
              <TrendingUp size={16} />
              Tax change
            </div>
            <p className="mt-3 text-xl font-semibold text-white">{formatPercent(taxChange)}</p>
            <p className="mt-1 text-xs text-slate-400">vs. previous year</p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
