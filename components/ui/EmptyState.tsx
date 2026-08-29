import type { ReactNode } from "react";
import { GlassCard } from "./GlassCard";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <GlassCard className="p-8 text-center">
      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </GlassCard>
  );
}
