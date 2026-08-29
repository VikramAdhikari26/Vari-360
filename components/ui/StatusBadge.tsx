import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  label: string;
  tone?: "success" | "warning" | "critical" | "neutral";
}

export function StatusBadge({ label, tone = "neutral" }: StatusBadgeProps) {
  const styles = {
    success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    warning: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    critical: "border-red-500/30 bg-red-500/10 text-red-300",
    neutral: "border-sky-500/30 bg-sky-500/10 text-sky-200",
  };

  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium", styles[tone])}>
      {label}
    </span>
  );
}
