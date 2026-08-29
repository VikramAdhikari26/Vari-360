import { PageContainer } from "@/components/layout/PageContainer";
import { TaxHistoryChart } from "@/components/dashboard/TaxHistoryChart";

export default function TaxHistoryPage() {
  return (
    <PageContainer
      title="Tax History"
      description="Annual tax trend, historical assessment values, and growth analysis for the active property record."
    >
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
          <h3 className="text-lg font-semibold text-white">Annual tax chart</h3>
          <div className="mt-4 h-80">
            <TaxHistoryChart />
          </div>
        </div>

        <div className="space-y-4">
          {[
            ["Tax growth", "+27.1%"],
            ["Year-over-year change", "+₹2,300"],
            ["Average tax", "₹8,425"],
            ["Highest increase", "+₹2,300 (2026)"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
              <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
