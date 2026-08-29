import { PageContainer } from "@/components/layout/PageContainer";
import { ExplainabilityScore } from "@/components/tax/ExplainabilityScore";

export default function ExplainabilityPage() {
  return (
    <PageContainer
      title="Explainability Score"
      description="AI transparency and calculation confidence across the assessed record, historical changes, and document quality."
    >
      <ExplainabilityScore />
    </PageContainer>
  );
}
