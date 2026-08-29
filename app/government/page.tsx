import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { GlassCard } from "@/components/ui/GlassCard";

const cards = [
  { title: "Government Information", href: "/government/information", description: "Public notices, records, and civic update summaries for the active property." },
  { title: "Policy Explainer", href: "/government/policies", description: "Plain-language explanations of municipal tax and property policy changes." },
  { title: "Scheme Finder", href: "/government/schemes", description: "Identify municipal relief programs and review pathways for eligible households." },
  { title: "Grievance Assistant", href: "/government/grievance", description: "Guided complaint workflow with draft generation and action steps." },
];

export default function GovernmentPage() {
  return (
    <PageContainer
      title="Government Hub"
      description="A mock civic information center designed for property owners to review public guidance, policy context, and complaint workflows."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Link key={card.title} href={card.href} className="block">
            <GlassCard className="h-full p-5 transition hover:border-cyan-500/30 hover:bg-slate-900/80">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Civic portal</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{card.description}</p>
            </GlassCard>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
