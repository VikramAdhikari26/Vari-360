import { PageContainer } from "@/components/layout/PageContainer";
import { TaxTimeline } from "@/components/tax/TaxTimeline";

export default function TaxTimelinePage() {
  return (
    <PageContainer
      title="Tax Timeline"
      description="Visual chronology of all property tax events and key status transitions affecting the current assessment."
    >
      <TaxTimeline />
    </PageContainer>
  );
}
