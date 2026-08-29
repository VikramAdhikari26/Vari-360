import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowUpDown,
  BarChart3,
  BellDot,
  Briefcase,
  Building2,
  FileText,
  FolderKanban,
  Gauge,
  Gavel,
  House,
  Landmark,
  MessageSquareText,
  Microscope,
  NotebookText,
  ScanSearch,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Telescope,
  TrendingUp,
  Wand2,
} from "lucide-react";
import type { NavSection } from "./types";

export const navigation: NavSection[] = [
  {
    title: "MAIN",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: "Dashboard" },
      {
        label: "My Properties",
        href: "/properties",
        icon: "Building2",
        children: [
          { label: "Add Property", href: "/properties/add" },
          { label: "Property Profile", href: "/properties/NV360-1001" },
        ],
      },
    ],
  },
  {
    title: "ANALYSIS",
    items: [
      { label: "Tax Analyzer", href: "/tax-analyzer", icon: "BarChart3" },
      { label: "Tax History", href: "/tax-history", icon: "TrendingUp" },
      { label: "Tax Timeline", href: "/tax-timeline", icon: "NotebookText" },
      { label: "Discrepancy Checker", href: "/discrepancy", icon: "AlertTriangle" },
      { label: "Tax Investigation", href: "/investigation", icon: "Microscope" },
      { label: "Tax Anomaly Radar", href: "/anomaly-radar", icon: "Telescope" },
      { label: "Explainability Score", href: "/explainability", icon: "Gauge" },
    ],
  },
  {
    title: "DOCUMENT INTELLIGENCE",
    items: [
      {
        label: "Document AI",
        href: "/documents",
        icon: "FileText",
        children: [
          { label: "Upload Notice", href: "/documents/upload" },
          { label: "OCR", href: "/documents/ocr" },
          { label: "Verify", href: "/documents/verify" },
        ],
      },
      { label: "Scan & Compare", href: "/scan-compare", icon: "ScanSearch" },
    ],
  },
  {
    title: "PROPERTY INTELLIGENCE",
    items: [
      { label: "Property Record Health", href: "/property-health", icon: "ShieldCheck" },
      { label: "Digital Twin", href: "/digital-twin", icon: "House" },
      { label: "What-If Lab", href: "/what-if", icon: "Wand2" },
    ],
  },
  {
    title: "AI INTELLIGENCE",
    items: [
      { label: "Smart Insights", href: "/insights", icon: "Sparkles" },
      { label: "Smart Alerts", href: "/alerts", icon: "BellDot" },
      { label: "Ask Vari", href: "/ask-vari", icon: "MessageSquareText" },
    ],
  },
  {
    title: "GOVERNMENT HUB",
    items: [
      { label: "Government Hub", href: "/government", icon: "Landmark" },
      { label: "Government Information", href: "/government/information", icon: "FolderKanban" },
      { label: "Policy Explainer", href: "/government/policies", icon: "Gavel" },
      { label: "Scheme Finder", href: "/government/schemes", icon: "Star" },
      { label: "Grievance Assistant", href: "/government/grievance", icon: "Briefcase" },
    ],
  },
  {
    title: "SYSTEM",
    items: [{ label: "Settings", href: "/settings", icon: "Settings" }],
  },
];

export const iconMap: Record<string, LucideIcon> = {
  Dashboard: House,
  Building2,
  BarChart3,
  TrendingUp,
  NotebookText,
  AlertTriangle,
  Microscope,
  Telescope,
  Gauge,
  FileText,
  ScanSearch,
  ShieldCheck,
  House,
  Wand2,
  Sparkles,
  BellDot,
  MessageSquareText,
  Landmark,
  FolderKanban,
  Gavel,
  Star,
  Briefcase,
  Settings,
  ArrowUpDown,
};
