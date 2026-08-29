import { PageContainer } from "@/components/layout/PageContainer";
import { PropertyDigitalTwin } from "@/components/dashboard/PropertyDigitalTwin";

export default function DigitalTwinPage() {
  return (
    <PageContainer
      title="Digital Twin"
      description="An immersive 3D representation of the property footprint with tax, area, and verification markers overlaid to help explain assessment changes."
    >
      <PropertyDigitalTwin />
    </PageContainer>
  );
}
