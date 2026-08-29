import { grievances } from "../mock-data";

export async function getGrievances() {
  return grievances;
}

export async function submitGrievance(data: {
  issueType: string;
  description: string;
  priority: "Low" | "Medium" | "High";
}) {
  return {
    id: `g-${Date.now()}`,
    ...data,
    status: "Draft",
    generatedAt: new Date().toISOString().slice(0, 10),
  };
}
