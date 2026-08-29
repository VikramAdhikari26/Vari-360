import { ProgressBar } from "@/components/ui/ProgressBar";
import { GlassCard } from "@/components/ui/GlassCard";
import { explainabilityScores } from "@/lib/mock-data";

export function ExplainabilityScore() {
  const total = explainabilityScores.reduce((sum, item) => sum + item.value, 0) / explainabilityScores.length;

  return (
    <GlassCard className="p-5">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">AI transparency</p>
      <div className="mt-3 flex items-end gap-3">
        <h3 className="text-4xl font-semibold text-white">{Math.round(total)}%</h3>
        <span className="mb-1 text-sm text-emerald-300">Explainability Score</span>
      </div>

      <div className="mt-6 space-y-4">
        {explainabilityScores.map((entry) => (
          <div key={entry.label}>
            <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
              <span>{entry.label}</span>
              <span>{entry.value}%</span>
            </div>
            <ProgressBar value={entry.value} tone={entry.value > 85 ? "emerald" : "cyan"} />
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
