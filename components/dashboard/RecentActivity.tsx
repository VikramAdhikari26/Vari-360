import { Activity } from "lucide-react";
import { recentActivity } from "@/lib/mock-data";
import { GlassCard } from "@/components/ui/GlassCard";

export function RecentActivity() {
  return (
    <GlassCard className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Recent activity</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Latest updates</h3>
        </div>
        <Activity size={18} className="text-cyan-300" />
      </div>

      <div className="mt-5 space-y-4">
        {recentActivity.map((item) => (
          <div key={item.id} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-3">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
            <div className="flex-1">
              <p className="text-sm font-medium text-white">{item.title}</p>
              <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-slate-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
