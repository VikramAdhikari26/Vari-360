"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { AIInsightCard } from "@/components/dashboard/AIInsightCard";
import { AlertsCard } from "@/components/dashboard/AlertsCard";
import { PropertyDigitalTwin } from "@/components/dashboard/PropertyDigitalTwin";
import { PropertyHealthCard } from "@/components/dashboard/PropertyHealthCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { TaxHistoryChart } from "@/components/dashboard/TaxHistoryChart";
import { TaxOverview } from "@/components/dashboard/TaxOverview";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getCurrentUser, getFirstName, type UserProfile } from "@/lib/auth";

export default function DashboardPage() {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    setUser(getCurrentUser());
    const sync = () => setUser(getCurrentUser());
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const firstName = user ? getFirstName(user.fullName) : "Citizen";

  return (
    <PageContainer
      title="Dashboard"
      description="Your property tax portfolio, assessment signals, and AI-driven verification signals are summarized here."
      action={
        <button className="inline-flex items-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-500/20">
          View full report
        </button>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[1.55fr_0.95fr]">
        <div className="space-y-6">
          <div className="relative h-[240px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-[0_18px_50px_rgba(15,23,42,0.35)]">
            <Image
              src="/images/namma-vari-360.jpeg"
              alt="Namma Vari 360 - AI Powered Property Tax Intelligence"
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-200/80">Property tax intelligence</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Good morning, {firstName}</h2>
                <p className="mt-2 max-w-lg text-sm text-slate-200">Here&apos;s your property-tax overview.</p>
              </div>
            </div>
          </div>

          <TaxOverview />
          <div className="grid gap-6 lg:grid-cols-2">
            <AIInsightCard />
            <PropertyHealthCard />
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.35)]">
            <SectionHeader title="Tax history" subtitle="Annual assessment trend" />
            <div className="mt-4">
              <TaxHistoryChart />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <PropertyDigitalTwin />
          <RecentActivity />
          <AlertsCard />
        </div>
      </div>
    </PageContainer>
  );
}
