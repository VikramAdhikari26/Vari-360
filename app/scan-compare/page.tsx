import { PageContainer } from "@/components/layout/PageContainer";
import { ScanCompare } from "@/components/documents/ScanCompare";

export default function ScanComparePage() {
  return (
    <PageContainer
      title="Scan & Compare"
      description="Side-by-side comparison of the previous and current assessment notices to identify changed values and mismatches."
    >
      <ScanCompare />
    </PageContainer>
  );
}
