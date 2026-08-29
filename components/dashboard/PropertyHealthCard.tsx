import { ShieldCheck } from "lucide-react";
import { property } from "@/lib/mock-data";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProgressBar } from "@/components/ui/ProgressBar";

export function PropertyHealthCard() {
  return (
    <GlassCard className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Property health</p>
          <h3 className="mt-3 text-3xl font-semibold text-white">{property.healthScore}/100</h3>
        </div>
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-200">
          <ShieldCheck size={18} />
        </div>
      </div>
      <div className="mt-4">
        <ProgressBar value={property.healthScore} tone="emerald" />
      </div>
      <p className="mt-4 text-sm text-slate-300">One discrepancy warning: Built-up area differs from previous assessment.</p>
    </GlassCard>
  );
}
