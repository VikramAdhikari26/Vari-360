import { PageContainer } from "@/components/layout/PageContainer";
import { OCRPreview } from "@/components/documents/OCRPreview";

export default function DocumentsOCRPage() {
  return (
    <PageContainer
      title="OCR"
      description="Review the extracted source fields captured from a property tax document and validate the record against the current assessment."
    >
      <OCRPreview />
    </PageContainer>
  );
}
