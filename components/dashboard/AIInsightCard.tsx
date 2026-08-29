import { Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function AIInsightCard() {
  return (
    <GlassCard className="p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
          <Sparkles size={18} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">AI insight</p>
          <h3 className="text-lg font-semibold text-white">Vari explains the increase</h3>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-200">
        Your property tax increased primarily because the assessed built-up area changed from 1,200 sq.ft to 1,450 sq.ft.
      </p>
    </GlassCard>
  );
}
