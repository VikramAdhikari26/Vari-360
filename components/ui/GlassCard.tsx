import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-slate-950/60 shadow-[0_18px_50px_rgba(15,23,42,0.45)] backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
