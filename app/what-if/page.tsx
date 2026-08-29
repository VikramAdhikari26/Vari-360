"use client";

import { useMemo, useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { property } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

const areaOptions = [1200, 1350, 1450, 1600, 1750];

export default function WhatIfPage() {
  const [area, setArea] = useState(property.area);
  const [zone, setZone] = useState("Zone VIII");
  const [propertyType, setPropertyType] = useState("Residential");
  const [taxRate, setTaxRate] = useState(1.69);

  const projectedTax = useMemo(() => {
    const rateFactor = taxRate / 1.69;
    return Math.round(property.previousTax * (area / property.previousArea) * rateFactor);
  }, [area, taxRate]);

  const difference = projectedTax - property.taxAmount;

  return (
    <PageContainer
      title="What-If Lab"
      description="Simulate changes in built-up area, type, zone, and rate to estimate the likely impact on the annual tax demand."
    >
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <GlassCard className="p-5">
          <h3 className="text-lg font-semibold text-white">Scenario controls</h3>

          <div className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Built-up area: {area.toLocaleString("en-IN")} sq.ft</label>
              <input type="range" min={1100} max={1800} step={50} value={area} onChange={(event) => setArea(Number(event.target.value))} className="w-full accent-cyan-400" />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">Property type</label>
              <select value={propertyType} onChange={(event) => setPropertyType(event.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-cyan-500/40">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Mixed-use</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">Zone</label>
              <select value={zone} onChange={(event) => setZone(event.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-cyan-500/40">
                <option>Zone VIII</option>
                <option>Zone VII</option>
                <option>Zone IX</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">Tax rate: {taxRate.toFixed(2)}%</label>
              <input type="range" min={1.2} max={2.4} step={0.05} value={taxRate} onChange={(event) => setTaxRate(Number(event.target.value))} className="w-full accent-cyan-400" />
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <h3 className="text-lg font-semibold text-white">Projection</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Current tax</p>
              <p className="mt-3 text-2xl font-semibold text-white">{formatCurrency(property.taxAmount)}</p>
            </div>
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-200">Projected tax</p>
              <p className="mt-3 text-2xl font-semibold text-white">{formatCurrency(projectedTax)}</p>
            </div>
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-amber-200">Difference</p>
              <p className="mt-3 text-2xl font-semibold text-white">{formatCurrency(Math.abs(difference))}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/80 p-4">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>Current rate</span>
              <span>1.69%</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
              <span>Projected rate</span>
              <span>{taxRate.toFixed(2)}%</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
              <span>Applicable zone</span>
              <span>{zone}</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </PageContainer>
  );
}
