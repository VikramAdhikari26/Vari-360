"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { propertyHistory } from "@/lib/mock-data";
import { normalizeNumericValue } from "@/lib/utils";

export function TaxHistoryChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={propertyHistory} margin={{ top: 16, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="taxFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.55} />
              <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.08} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="year" stroke="#94a3b8" tickLine={false} axisLine={false} />
          <YAxis
            stroke="#94a3b8"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => {
              const numericValue = normalizeNumericValue(value);
              return `₹${numericValue / 1000}k`;
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#020817",
              border: "1px solid rgba(148,163,184,0.2)",
              borderRadius: 12,
            }}
            formatter={(value) => {
              const numericValue = normalizeNumericValue(value);
              return [`₹${numericValue.toLocaleString("en-IN")}`, "Tax"];
            }}
          />
          <Area type="monotone" dataKey="tax" stroke="#38bdf8" strokeWidth={3} fill="url(#taxFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
