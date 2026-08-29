import { PageContainer } from "@/components/layout/PageContainer";
import { GlassCard } from "@/components/ui/GlassCard";

const sections = [
  ["Profile", "Owner name, property relationship, and contact profile summary."],
  ["Preferences", "Language, region, and report default settings."],
  ["Notifications", "Alert thresholds and weekly summary preferences."],
  ["Data & Privacy", "Control how local explanations and document records are stored and shared."],
  ["Appearance", "Theme preferences and dashboard focus mode."],
];

export default function SettingsPage() {
  return (
    <PageContainer
      title="Settings"
      description="Manage your account profile, workspace preferences, and the data privacy controls for the property dashboard."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {sections.map(([title, description]) => (
          <GlassCard key={title} className="p-5">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
          </GlassCard>
        ))}
      </div>
    </PageContainer>
  );
}
