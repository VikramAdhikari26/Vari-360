import { documents } from "../mock-data";

export async function getDocuments(propertyId: string) {
  void propertyId;
  return documents;
}

export async function uploadDocument(fileName: string) {
  return {
    id: `doc-${Date.now()}`,
    name: fileName,
    status: "processing",
    extracted: {
      assessmentNumber: "CHN-PT-2025-1001",
      ownerName: "Arun Kumar",
      address: "Anna Nagar, Chennai",
      propertyArea: 1450,
      taxAmount: 10800,
      assessmentYear: 2026,
    },
  };
}
