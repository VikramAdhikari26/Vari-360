import { PageContainer } from "@/components/layout/PageContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { alerts } from "@/lib/mock-data";

export default function AlertsPage() {
  return (
    <PageContainer
      title="Smart Alerts"
      description="Categorized status notifications across critical, warning, informational, and resolved property tax events."
    >
      <div className="space-y-4">
        {alerts.map((alert) => (
          <GlassCard key={alert.id} className="p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-semibold text-white">{alert.title}</p>
                <p className="mt-2 text-sm text-slate-300">{alert.description}</p>
              </div>
              <StatusBadge
                label={alert.category}
                tone={alert.severity === "critical" ? "critical" : alert.severity === "warning" ? "warning" : alert.severity === "success" ? "success" : "neutral"}
              />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-slate-500">{alert.time}</p>
          </GlassCard>
        ))}
      </div>
    </PageContainer>
  );
}
