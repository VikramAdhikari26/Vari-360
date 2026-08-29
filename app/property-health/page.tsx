import { PageContainer } from "@/components/layout/PageContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { property } from "@/lib/mock-data";

export default function PropertyHealthPage() {
  return (
    <PageContainer
      title="Property Record Health"
      description="A composite health view covering record completeness, tax continuity, and document verification quality."
    >
      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <GlassCard className="p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Health score</p>
          <div className="mt-4 flex items-end gap-3">
            <h3 className="text-5xl font-semibold text-white">{property.healthScore}</h3>
            <span className="mb-2 text-lg text-slate-400">/100</span>
          </div>
          <div className="mt-6">
            <ProgressBar value={property.healthScore} tone="emerald" />
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <h3 className="text-lg font-semibold text-white">Health factors</h3>
          <div className="mt-5 space-y-4">
            {[
              ["Property details", 91],
              ["Documents", 94],
              ["Tax history", 86],
              ["Assessment consistency", 80],
              ["Verification status", 88],
            ].map(([label, value]) => (
              <div key={label as string}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>{label as string}</span>
                  <span>{value}%</span>
                </div>
                <ProgressBar value={value as number} tone={value as number > 85 ? "emerald" : "amber"} />
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </PageContainer>
  );
}
