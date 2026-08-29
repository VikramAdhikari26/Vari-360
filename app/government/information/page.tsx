import { PageContainer } from "@/components/layout/PageContainer";
import { GlassCard } from "@/components/ui/GlassCard";

export default function GovernmentInformationPage() {
  return (
    <PageContainer
      title="Government Information"
      description="Demonstration civic notices and guidance for property owners, built for local review and internal workflow onboarding."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {[
          ["Current tax notice", "Assessment notice for FY 2026 has been published and is ready for review."],
          ["Zonal rate schedule", "Municipal residential rate revision is reflected in the latest public guidance."],
          ["Urban property update", "Property records are aligned to the latest approved planning updates for the locality."],
          ["Appeal guidance", "Review windows and documentation requirements are summarized in the civic policy portal."],
        ].map(([title, value]) => (
          <GlassCard key={title} className="p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Notice</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{value}</p>
          </GlassCard>
        ))}
      </div>
    </PageContainer>
  );
}
