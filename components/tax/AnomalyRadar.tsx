"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { anomalyData } from "@/lib/mock-data";
import { GlassCard } from "@/components/ui/GlassCard";

export function AnomalyRadar() {
  return (
    <GlassCard className="p-5">
      <h3 className="text-lg font-semibold text-white">Anomaly radar</h3>
      <div className="mt-4 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={anomalyData}>
            <PolarGrid stroke="#334155" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: "#cbd5e1", fontSize: 12 }} />
            <Radar dataKey="value" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.35} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-center">
        <p className="text-xs uppercase tracking-[0.26em] text-cyan-200/80">Anomaly score</p>
        <h4 className="mt-2 text-3xl font-semibold text-white">74</h4>
      </div>
    </GlassCard>
  );
}
