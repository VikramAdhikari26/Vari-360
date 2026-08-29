import { PageContainer } from "@/components/layout/PageContainer";
import { DocumentUploader } from "@/components/documents/DocumentUploader";
import { OCRPreview } from "@/components/documents/OCRPreview";

export default function DocumentsPage() {
  return (
    <PageContainer
      title="Document AI"
      description="Upload the latest assessment notice and verify extracted fields against the property record."
    >
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <DocumentUploader />
        <OCRPreview />
      </div>
    </PageContainer>
  );
}
