"use client";

import { BarChart, Bar, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { GlassCard } from "@/components/ui/GlassCard";
import { normalizeNumericValue } from "@/lib/utils";

const data = [
  { name: "Base", value: 38 },
  { name: "Zone rate", value: 24 },
  { name: "Area", value: 22 },
  { name: "Annual value", value: 16 },
];

export function TaxBreakdown() {
  return (
    <GlassCard className="p-5">
      <h3 className="text-lg font-semibold text-white">Tax breakdown</h3>
      <div className="mt-4 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="#334155" strokeDasharray="4 4" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{ backgroundColor: "#020817", border: "1px solid rgba(148,163,184,0.2)", borderRadius: 12 }}
              formatter={(value) => {
                const numericValue = normalizeNumericValue(value);
                return [`${numericValue}%`, "Share"];
              }}
            />
            <Bar dataKey="value" fill="#38bdf8" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
}
