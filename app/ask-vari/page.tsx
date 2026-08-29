"use client";

import { useState } from "react";
import { SendHorizonal, Sparkles } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { GlassCard } from "@/components/ui/GlassCard";

const suggested = [
  "Why did my property tax increase?",
  "Is my assessment correct?",
  "What documents do I need?",
  "How can I raise a grievance?",
];

export default function AskVariPage() {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "vari",
      text: "I reviewed your property record. The increase is mainly driven by a revised built-up area and a schedule-based tax rate update.",
    },
    {
      id: 2,
      from: "user",
      text: "Why did my property tax increase?",
    },
  ]);

  const handleSend = () => {
    if (!value.trim()) return;
    setMessages((current) => [
      ...current,
      { id: Date.now(), from: "user", text: value },
      {
        id: Date.now() + 1,
        from: "vari",
        text: "This assessment change appears consistent with the updated built-up area and revised annual value. I recommend verifying the supporting documents before filing a review request.",
      },
    ]);
    setValue("");
  };

  return (
    <PageContainer
      title="Ask Vari"
      description="AI-guided answers for tax logic, record health, required documentation, and grievance pathways."
    >
      <div className="grid gap-6 xl:grid-cols-[0.75fr_1.25fr]">
        <GlassCard className="p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Vari</p>
              <h3 className="text-lg font-semibold text-white">Ask Vari</h3>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            {suggested.map((question) => (
              <button key={question} onClick={() => setValue(question)} className="block w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-left text-sm text-slate-200 transition hover:border-cyan-500/30 hover:bg-slate-900">
                {question}
              </button>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="flex h-[540px] flex-col justify-between">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={message.from === "user" ? "ml-auto max-w-[80%]" : "mr-auto max-w-[80%]"}>
                  <div className={[
                    "rounded-2xl px-4 py-3 text-sm leading-6",
                    message.from === "user" ? "bg-cyan-500/15 text-cyan-50" : "border border-white/10 bg-slate-900/80 text-slate-100",
                  ].join(" ")}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <div className="flex items-center gap-2">
                <input
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") handleSend();
                  }}
                  placeholder="Ask about your tax or documents..."
                  className="flex-1 bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-slate-500"
                />
                <button onClick={handleSend} className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-400">
                  <SendHorizonal size={16} />
                  Send
                </button>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </PageContainer>
  );
}
