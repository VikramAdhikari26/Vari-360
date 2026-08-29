import { PageContainer } from "@/components/layout/PageContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { property } from "@/lib/mock-data";

export default function DocumentsVerifyPage() {
  return (
    <PageContainer
      title="Verify"
      description="Check document trust, field consistency, and record confidence before finalizing the assessment summary."
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <GlassCard className="p-5">
          <h3 className="text-lg font-semibold text-white">Verification results</h3>
          <div className="mt-5 space-y-3">
            {[
              ["Assessment number", "CHN-PT-2025-1001", "Match"],
              ["Owner name", "Arun Kumar", "Match"],
              ["Address", "Anna Nagar, Chennai", "Match"],
              ["Property area", "1,450 sq.ft", "Review"],
              ["Tax amount", "₹10,800", "Match"],
              ["Assessment year", "2026", "Match"],
            ].map(([field, value, status]) => (
              <div key={field} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{field}</p>
                  <p className="mt-1 text-sm text-slate-100">{value}</p>
                </div>
                <span className={status === "Review" ? "rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-xs uppercase tracking-[0.2em] text-amber-200" : "rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200"}>{status}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Document trust</p>
          <h3 className="mt-3 text-4xl font-semibold text-white">{property.documentConfidence}%</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">The record is validated against the property record and shows a strong match across tax, ownership, and address fields. One area reconciliation is recommended.</p>
          <button className="mt-6 inline-flex items-center rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-400">
            Verify against property record
          </button>
        </GlassCard>
      </div>
    </PageContainer>
  );
}
