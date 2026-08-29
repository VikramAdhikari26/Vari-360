"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { GlassCard } from "@/components/ui/GlassCard";

export default function AddPropertyPage() {
  const [ownerName, setOwnerName] = useState("Arun Kumar");
  const [address, setAddress] = useState("Anna Nagar, Chennai");
  const [assessmentNumber, setAssessmentNumber] = useState("CHN-PT-2025-1002");

  return (
    <PageContainer
      title="Add Property"
      description="Add a new property record with a mock record checker for future backend integration."
    >
      <GlassCard className="p-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Owner name</label>
            <input value={ownerName} onChange={(event) => setOwnerName(event.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-cyan-500/40" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Assessment number</label>
            <input
              value={assessmentNumber}
              onChange={(event) => setAssessmentNumber(event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-cyan-500/40"
            />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-slate-300">Address</label>
            <input value={address} onChange={(event) => setAddress(event.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-cyan-500/40" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Property type</label>
            <select className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-cyan-500/40">
              <option>Residential</option>
              <option>Commercial</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Zone</label>
            <select className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-cyan-500/40">
              <option>Zone VIII</option>
              <option>Zone IX</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-400">
            Save property record
          </button>
        </div>
      </GlassCard>
    </PageContainer>
  );
}
