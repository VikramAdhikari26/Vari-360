import { PageContainer } from "@/components/layout/PageContainer";
import { TaxComparison } from "@/components/tax/TaxComparison";
import { TaxBreakdown } from "@/components/tax/TaxBreakdown";

export default function TaxAnalyzerPage() {
  return (
    <PageContainer
      title="Tax Analyzer"
      description="A comparison of current and prior assessments, tax movements, and the factors driving the change."
    >
      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <TaxComparison />
        <TaxBreakdown />
      </div>
    </PageContainer>
  );
}
