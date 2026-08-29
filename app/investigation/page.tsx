import { PageContainer } from "@/components/layout/PageContainer";
import { TaxTimeline } from "@/components/tax/TaxTimeline";

export default function InvestigationPage() {
  return (
    <PageContainer
      title="Tax Investigation"
      description="An investigation-style timeline showing the sequence of assessments, document activity, and resolution signals."
    >
      <TaxTimeline />
    </PageContainer>
  );
}
