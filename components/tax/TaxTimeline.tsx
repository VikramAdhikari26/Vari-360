import { Clock3 } from "lucide-react";
import { timelineEvents } from "@/lib/mock-data";
import { GlassCard } from "@/components/ui/GlassCard";

const tones = {
  info: "border-cyan-500/30 bg-cyan-500/10 text-cyan-200",
  warning: "border-amber-500/30 bg-amber-500/10 text-amber-200",
  critical: "border-red-500/30 bg-red-500/10 text-red-200",
};

export function TaxTimeline() {
  return (
    <GlassCard className="p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Tax timeline</h3>
        <Clock3 size={18} className="text-cyan-300" />
      </div>

      <div className="mt-6 space-y-6 border-l border-white/10 pl-4">
        {timelineEvents.map((event) => (
          <div key={event.id} className="relative">
            <div className={[
              "absolute -left-[1.15rem] top-1 h-3 w-3 rounded-full border-2 border-slate-950",
              event.severity === "critical" ? "bg-red-500" : event.severity === "warning" ? "bg-amber-500" : "bg-cyan-500",
            ].join(" ")} />
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-white">{event.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">{event.date}</p>
                </div>
                <span className={['inline-flex rounded-full border px-2 py-1 text-[10px] uppercase tracking-[0.2em]', tones[event.severity]].join(' ')}>{event.severity}</span>
              </div>
              <p className="mt-3 text-sm text-slate-300">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
