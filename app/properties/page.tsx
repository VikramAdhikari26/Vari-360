import { Building2, PlusCircle } from "lucide-react";
import Link from "next/link";
import { property } from "@/lib/mock-data";
import { PageContainer } from "@/components/layout/PageContainer";
import { GlassCard } from "@/components/ui/GlassCard";

export default function PropertiesPage() {
  return (
    <PageContainer
      title="My Properties"
      description="Your current property portfolio and assessment status derived from locally simulated civic records."
      action={
        <Link href="/properties/add" className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-500/20">
          <PlusCircle size={18} />
          Add Property
        </Link>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <GlassCard className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Primary property</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{property.ownerName}</h3>
              <p className="mt-2 text-sm text-slate-300">{property.address}</p>
            </div>
            <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-2 text-cyan-200">
              <Building2 size={20} />
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Assessment no.</p>
              <p className="mt-2 text-sm font-medium text-slate-100">{property.assessmentNumber}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Property ID</p>
              <p className="mt-2 text-sm font-medium text-slate-100">{property.id}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Zone</p>
              <p className="mt-2 text-sm font-medium text-slate-100">{property.zone}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Type</p>
              <p className="mt-2 text-sm font-medium text-slate-100">{property.propertyType}</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Property record</p>
          <div className="mt-4 space-y-4 text-sm text-slate-200">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <span>Current area</span>
              <span>{property.area.toLocaleString("en-IN")} sq.ft</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <span>Previous area</span>
              <span>{property.previousArea.toLocaleString("en-IN")} sq.ft</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <span>Current tax</span>
              <span>₹{property.taxAmount.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <span>Health score</span>
              <span>{property.healthScore}/100</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </PageContainer>
  );
}
