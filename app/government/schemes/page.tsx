import { PageContainer } from "@/components/layout/PageContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { governmentSchemes } from "@/lib/mock-data";

export default function GovernmentSchemesPage() {
  return (
    <PageContainer
      title="Scheme Finder"
      description="Mock civic assistance and municipal relief pathways that may align with the active property profile."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {governmentSchemes.map((scheme) => (
          <GlassCard key={scheme.id} className="p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{scheme.status}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{scheme.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{scheme.description}</p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Eligibility</p>
              <p className="mt-2 text-sm text-slate-200">{scheme.eligibility}</p>
            </div>
            <div className="mt-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-200">Benefit</p>
              <p className="mt-2 text-sm text-cyan-50">{scheme.benefit}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </PageContainer>
  );
}
