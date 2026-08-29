"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { GlassCard } from "@/components/ui/GlassCard";

const issueOptions = [
  "Assessment discrepancy",
  "Tax rate correction",
  "Property area mismatch",
  "Document verification request",
];

export default function GrievanceAssistantPage() {
  const [issue, setIssue] = useState(issueOptions[0]);
  const [description, setDescription] = useState("The built-up area recorded in the notice differs from the approved plan and previous assessment record.");

  return (
    <PageContainer
      title="Grievance Assistant"
      description="Guided issue intake, required document recommendations, and a generated draft description for property tax objections."
    >
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <GlassCard className="p-5">
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-slate-300">1. Select issue</label>
              <select value={issue} onChange={(event) => setIssue(event.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-cyan-500/40">
                {issueOptions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">2. Describe issue</label>
              <textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={6} className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-cyan-500/40" />
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">AI analysis</p>
              <p className="mt-2 text-sm text-cyan-50">The issue has a medium-to-high priority and should be supported by the approved plan, the latest tax notice, and prior assessment records.</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Required documents</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                <li>Latest property tax assessment notice</li>
                <li>Approved building plan or area certificate</li>
                <li>Previous year tax notice</li>
                <li>Owner identity proof or property deed</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Recommended action</p>
              <p className="mt-3 text-sm text-slate-200">Submit the grievance with the supporting documents and request a reassessment against the approved built-up area record.</p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/80 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Generated complaint preview</p>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                I submit this grievance for {issue}. The current assessment notice records a built-up area that differs from the approved record and the previous year’s assessment. Please review the property record and issue a corrected reassessment if necessary.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </PageContainer>
  );
}
