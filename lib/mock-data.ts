import type {
  Alert,
  Discrepancy,
  GovernmentScheme,
  Grievance,
  Insight,
  Property,
  TaxAssessment,
  TaxChange,
  TaxDocument,
  TimelineEvent,
} from "./types";

export const property: Property = {
  id: "NV360-1001",
  ownerName: "Arun Kumar",
  assessmentNumber: "CHN-PT-2025-1001",
  address: "Anna Nagar, Chennai",
  location: "Anna Nagar, Chennai",
  zone: "Zone VIII",
  propertyType: "Residential",
  area: 1450,
  previousArea: 1200,
  taxAmount: 10800,
  previousTax: 8500,
  currentAssessmentYear: 2026,
  previousAssessmentYear: 2025,
  healthScore: 82,
  discrepancyCount: 1,
  documentConfidence: 94,
};

export const taxChanges: TaxChange[] = [
  {
    label: "Built-up area",
    previous: 1200,
    current: 1450,
    difference: 250,
    percentage: 20.8,
    tone: "warning",
  },
  {
    label: "Tax amount",
    previous: 8500,
    current: 10800,
    difference: 2300,
    percentage: 27.1,
    tone: "positive",
  },
  {
    label: "Annual value",
    previous: 520000,
    current: 640000,
    difference: 120000,
    percentage: 23.1,
    tone: "warning",
  },
];

export const taxHistory: TaxAssessment[] = [
  { id: "2023", year: 2023, area: 1100, annualValue: 480000, taxRate: 1.4, taxAmount: 7200, status: "verified" },
  { id: "2024", year: 2024, area: 1180, annualValue: 520000, taxRate: 1.45, taxAmount: 7900, status: "verified" },
  { id: "2025", year: 2025, area: 1200, annualValue: 560000, taxRate: 1.52, taxAmount: 8500, status: "verified" },
  { id: "2026", year: 2026, area: 1450, annualValue: 640000, taxRate: 1.69, taxAmount: 10800, status: "warning" },
];

export const taxComparison = {
  previousAssessment: {
    year: 2025,
    propertyType: "Residential",
    zone: "Zone VIII",
    area: 1200,
    taxRate: 1.52,
    annualValue: 560000,
    taxAmount: 8500,
  },
  currentAssessment: {
    year: 2026,
    propertyType: "Residential",
    zone: "Zone VIII",
    area: 1450,
    taxRate: 1.69,
    annualValue: 640000,
    taxAmount: 10800,
  },
};

export const discrepancies: Discrepancy[] = [
  {
    id: "d-1",
    field: "Built-up area",
    previousValue: "1,200 sq.ft",
    currentValue: "1,450 sq.ft",
    difference: "+250 sq.ft",
    severity: "high",
    recommendedAction: "Verify against latest approved plan or permit documents",
  },
  {
    id: "d-2",
    field: "Tax rate",
    previousValue: "1.52%",
    currentValue: "1.69%",
    difference: "+0.17%",
    severity: "medium",
    recommendedAction: "Cross-check revision in zonal rate schedule",
  },
];

export const alerts: Alert[] = [
  {
    id: "a-1",
    title: "Built-up area differs from previous assessment",
    description: "The assessed built-up area increased by 250 sq.ft compared to the last valuation.",
    category: "Warning",
    time: "2 hours ago",
    severity: "warning",
  },
  {
    id: "a-2",
    title: "Document verification recommended",
    description: "One certificate requires a second check before finalizing the tax revision.",
    category: "Information",
    time: "Today",
    severity: "info",
  },
  {
    id: "a-3",
    title: "Appeal window nearing close",
    description: "The property owner has 12 days remaining to submit a grievance or review request.",
    category: "Critical",
    time: "3 days ago",
    severity: "critical",
  },
];

export const insights: Insight[] = [
  {
    id: "i-1",
    title: "Tax increased 27.1%",
    description: "The change is driven primarily by a larger built-up area and updated rate changes.",
    value: "+₹2,300",
    trend: "+27.1%",
  },
  {
    id: "i-2",
    title: "Built-up area increased 20.8%",
    description: "The assessed built-up area was revised from 1,200 to 1,450 sq.ft.",
    value: "+250 sq.ft",
    trend: "+20.8%",
  },
  {
    id: "i-3",
    title: "One record needs verification",
    description: "The area documentation differs from the previously assessed record.",
    value: "1 alert",
    trend: "Needs review",
  },
  {
    id: "i-4",
    title: "Document verification recommended",
    description: "The uploaded notice is ready to compare with the property record.",
    value: "94% confidence",
    trend: "Ready",
  },
];

export const documents: TaxDocument[] = [
  {
    id: "doc-1",
    name: "Property Tax Assessment Notice 2026.pdf",
    type: "PDF",
    uploadedAt: "2026-07-04",
    status: "verified",
    assessmentNumber: "CHN-PT-2025-1001",
    ownerName: "Arun Kumar",
    address: "Anna Nagar, Chennai",
    propertyArea: 1450,
    taxAmount: 10800,
    assessmentYear: 2026,
  },
  {
    id: "doc-2",
    name: "Previous Notice 2025.jpg",
    type: "JPG",
    uploadedAt: "2025-09-10",
    status: "verified",
    assessmentNumber: "CHN-PT-2025-1001",
    ownerName: "Arun Kumar",
    address: "Anna Nagar, Chennai",
    propertyArea: 1200,
    taxAmount: 8500,
    assessmentYear: 2025,
  },
];

export const governmentSchemes: GovernmentScheme[] = [
  {
    id: "scheme-1",
    name: "Senior Citizen Tax Relief",
    description: "Tax concessions for eligible senior citizens under the municipal relief framework.",
    eligibility: "Age 60+ and owner-occupied residential property",
    benefit: "Up to 15% reduction in annual tax",
    status: "Open",
  },
  {
    id: "scheme-2",
    name: "Green Roof Incentive",
    description: "Support for properties using sustainable building features and approved installations.",
    eligibility: "Residential or mixed-use properties with certified green upgrades",
    benefit: "One-time credit and rate adjustment review",
    status: "Pilot",
  },
  {
    id: "scheme-3",
    name: "Property Tax Amnesty Review",
    description: "Assessment review for owners with documentation mismatches or historical valuation gaps.",
    eligibility: "Documentation disputes and prior-year assessment anomalies",
    benefit: "Reassessment and correction support",
    status: "Limited",
  },
];

export const grievances: Grievance[] = [
  {
    id: "g-1",
    issueType: "Assessment discrepancy",
    description: "The built-up area recorded in the notice differs from the approved building plan",
    status: "Draft",
    priority: "High",
    generatedAt: "2026-08-27",
  },
  {
    id: "g-2",
    issueType: "Tax rate correction",
    description: "Residential rate change appears inconsistent with the zone classification",
    status: "In Review",
    priority: "Medium",
    generatedAt: "2026-08-28",
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "t-1",
    title: "Assessment updated",
    date: "2026-03-20",
    type: "assessment",
    severity: "warning",
    description: "Assessment year revised to 2026 with new built-up area inputs.",
  },
  {
    id: "t-2",
    title: "Area review completed",
    date: "2026-04-05",
    type: "area",
    severity: "info",
    description: "Built-up area validated against the latest plan documents.",
  },
  {
    id: "t-3",
    title: "Tax adjusted",
    date: "2026-04-18",
    type: "tax",
    severity: "critical",
    description: "New tax amount set at ₹10,800 after rate and annual value revision.",
  },
  {
    id: "t-4",
    title: "Document uploaded",
    date: "2026-07-04",
    type: "document",
    severity: "info",
    description: "Assessment notice for the current year was uploaded and indexed.",
  },
  {
    id: "t-5",
    title: "Verification check passed",
    date: "2026-07-05",
    type: "verification",
    severity: "info",
    description: "Document confidence reached 94% with no major data mismatch.",
  },
];

export const recentActivity = [
  { id: "r-1", title: "Assessment notice uploaded", detail: "Current tax notice matched owner record", time: "14 mins ago" },
  { id: "r-2", title: "Tax anomaly flagged", detail: "Area change exceeded expected range", time: "1 hour ago" },
  { id: "r-3", title: "Owner review requested", detail: "AI recommended document verification", time: "3 hours ago" },
];

export const propertyHistory = [
  { year: "2023", tax: 7200 },
  { year: "2024", tax: 7900 },
  { year: "2025", tax: 8500 },
  { year: "2026", tax: 10800 },
];

export const anomalyData = [
  { subject: "Area anomaly", value: 78 },
  { subject: "Tax anomaly", value: 86 },
  { subject: "Assessment anomaly", value: 72 },
  { subject: "Document anomaly", value: 61 },
  { subject: "Historical anomaly", value: 68 },
];

export const explainabilityScores = [
  { label: "Data completeness", value: 92 },
  { label: "Calculation transparency", value: 88 },
  { label: "Historical consistency", value: 84 },
  { label: "Document confidence", value: 90 },
  { label: "AI confidence", value: 86 },
];
