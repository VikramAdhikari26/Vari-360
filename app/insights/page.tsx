import { PageContainer } from "@/components/layout/PageContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { insights } from "@/lib/mock-data";

export default function InsightsPage() {
  return (
    <PageContainer
      title="Smart Insights"
      description="AI-generated summaries of the property’s tax movement, area revision, and document trust signals."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {insights.map((insight) => (
          <GlassCard key={insight.id} className="p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{insight.title}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{insight.value}</h3>
            <p className="mt-3 text-sm text-slate-300">{insight.description}</p>
            <p className="mt-4 text-sm text-cyan-200">{insight.trend}</p>
          </GlassCard>
        ))}
      </div>
    </PageContainer>
  );
}
