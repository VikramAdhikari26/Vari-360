import { BellRing } from "lucide-react";
import { alerts } from "@/lib/mock-data";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function AlertsCard() {
  return (
    <GlassCard className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Smart alerts</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Priority notifications</h3>
        </div>
        <BellRing size={18} className="text-cyan-300" />
      </div>

      <div className="mt-5 space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-white">{alert.title}</p>
              <StatusBadge
                label={alert.category}
                tone={alert.severity === "critical" ? "critical" : alert.severity === "warning" ? "warning" : alert.severity === "success" ? "success" : "neutral"}
              />
            </div>
            <p className="mt-2 text-sm text-slate-300">{alert.description}</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-slate-500">{alert.time}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
