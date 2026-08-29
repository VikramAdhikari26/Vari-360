import { PageContainer } from "@/components/layout/PageContainer";
import { PropertyDetails } from "@/components/property/PropertyDetails";

export default function PropertyDetailPage() {
  return (
    <PageContainer
      title="Property Profile"
      description="Detailed property record, assessment summary, and document trust status for the selected record."
    >
      <PropertyDetails />
    </PageContainer>
  );
}
