import { PageContainer } from "@/components/layout/PageContainer";
import { AnomalyRadar } from "@/components/tax/AnomalyRadar";

export default function AnomalyRadarPage() {
  return (
    <PageContainer
      title="Tax Anomaly Radar"
      description="A radar summary of assessment anomalies, tax exception patterns, and document inconsistencies across the property record."
    >
      <AnomalyRadar />
    </PageContainer>
  );
}
