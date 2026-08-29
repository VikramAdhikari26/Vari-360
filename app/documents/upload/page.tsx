import { PageContainer } from "@/components/layout/PageContainer";
import { DocumentUploader } from "@/components/documents/DocumentUploader";

export default function DocumentsUploadPage() {
  return (
    <PageContainer
      title="Upload Notice"
      description="Upload the latest property tax notice and let the document intelligence workflow classify and verify fields."
    >
      <DocumentUploader />
    </PageContainer>
  );
}
