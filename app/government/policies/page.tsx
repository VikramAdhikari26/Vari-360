import { PageContainer } from "@/components/layout/PageContainer";
import { GlassCard } from "@/components/ui/GlassCard";

export default function GovernmentPoliciesPage() {
  return (
    <PageContainer
      title="Policy Explainer"
      description="Plain-language summaries of the civic policies that influence tax revisions, reassessment, and document verification."
    >
      <div className="space-y-4">
        {[
          ["Assessment methodology", "Tax is recalculated on the basis of annual value, property use class, building area, and current municipal rate schedules."],
          ["Revision triggers", "A change in built-up area, property classification, or zone rates can trigger an updated tax assessment."],
          ["Review pathways", "Property owners may request document verification or file a grievance if records or assumptions differ from approved documents."],
        ].map(([title, value]) => (
          <GlassCard key={title} className="p-5">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{value}</p>
          </GlassCard>
        ))}
      </div>
    </PageContainer>
  );
}
