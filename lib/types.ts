export interface Property {
  id: string;
  ownerName: string;
  assessmentNumber: string;
  address: string;
  location: string;
  zone: string;
  propertyType: string;
  area: number;
  previousArea: number;
  taxAmount: number;
  previousTax: number;
  currentAssessmentYear: number;
  previousAssessmentYear: number;
  healthScore: number;
  discrepancyCount: number;
  documentConfidence: number;
}

export interface TaxAssessment {
  id: string;
  year: number;
  area: number;
  annualValue: number;
  taxRate: number;
  taxAmount: number;
  status: "verified" | "warning" | "critical";
}

export interface TaxChange {
  label: string;
  previous: number | string;
  current: number | string;
  difference: number | string;
  percentage: number;
  tone: "positive" | "warning" | "critical";
}

export interface TaxDocument {
  id: string;
  name: string;
  type: "PDF" | "JPG" | "PNG";
  uploadedAt: string;
  status: "verified" | "pending" | "review";
  assessmentNumber: string;
  ownerName: string;
  address: string;
  propertyArea: number;
  taxAmount: number;
  assessmentYear: number;
}

export interface Discrepancy {
  id: string;
  field: string;
  previousValue: string;
  currentValue: string;
  difference: string;
  severity: "low" | "medium" | "high" | "critical";
  recommendedAction: string;
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  category: "Critical" | "Warning" | "Information" | "Resolved";
  time: string;
  severity: "critical" | "warning" | "info" | "success";
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  value: string;
  trend: string;
}

export interface GovernmentScheme {
  id: string;
  name: string;
  description: string;
  eligibility: string;
  benefit: string;
  status: "Open" | "Limited" | "Pilot";
}

export interface Grievance {
  id: string;
  issueType: string;
  description: string;
  status: "Draft" | "In Review" | "Escalated";
  priority: "Low" | "Medium" | "High";
  generatedAt: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  type: "assessment" | "area" | "tax" | "document" | "verification";
  severity: "info" | "warning" | "critical";
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: Array<{
    label: string;
    href: string;
  }>;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}
