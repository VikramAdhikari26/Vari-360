"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Bot, ChevronDown, Paperclip, Send, X } from "lucide-react";
import { sendChatMessage } from "@/lib/services/ai-service";

type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
  time: string;
};

const quickActions = [
  "Why did my tax change?",
  "Check my assessment",
  "Explain my tax",
  "Document help",
  "Raise a grievance",
];

function formatTime(date = new Date()) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function RobotAvatar({ small = false }: { small?: boolean }) {
  return (
    <span className={`namma-robot ${small ? "namma-robot--small" : ""}`} aria-hidden="true">
      <span className="namma-robot__antenna" />
      <span className="namma-robot__head">
        <span className="namma-robot__eye" />
        <span className="namma-robot__eye" />
      </span>
      <span className="namma-robot__body">
        <span className="namma-robot__chest" />
      </span>
      <span className="namma-robot__arm namma-robot__arm--left" />
      <span className="namma-robot__arm namma-robot__arm--right" />
    </span>
  );
}

export function NammaAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi! I'm Namma AI. I can help you understand your property tax, assessment changes, documents and grievance process.",
      time: "Now",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  const submitMessage = async (message: string) => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage || isTyping) return;

    setInput("");
    setMessages((current) => [
      ...current,
      { id: Date.now(), role: "user", content: trimmedMessage, time: formatTime() },
    ]);
    setIsTyping(true);

    try {
      const response = await sendChatMessage(trimmedMessage);
      setMessages((current) => [
        ...current,
        { id: Date.now() + 1, role: "assistant", content: response.answer, time: formatTime() },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void submitMessage(input);
  };

  return (
    <div ref={panelRef} className="fixed bottom-[88px] right-6 z-50 sm:bottom-6" aria-live="polite">
      {isOpen && (
        <section
          className="namma-ai-panel mb-4 flex h-[min(620px,calc(100vh-180px))] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#101714]/95 shadow-[0_24px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
          aria-label="Namma AI chat"
        >
          <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <RobotAvatar small />
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] text-[#d9b878]">NAMMA AI</p>
                <p className="mt-0.5 text-sm text-slate-300">Your Property Tax Assistant</p>
                <p className="mt-1 flex items-center gap-1.5 text-[11px] text-[#91d8b4]"><span className="h-1.5 w-1.5 rounded-full bg-[#58c98a] shadow-[0_0_8px_#58c98a]" /> Online</p>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#69d49a]" aria-label="Close Namma AI assistant">
              <X size={18} />
            </button>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-2.5 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                {message.role === "assistant" && <Bot size={17} className="mt-1 shrink-0 text-[#72d29b]" />}
                <div className={`max-w-[82%] ${message.role === "user" ? "items-end" : "items-start"} flex flex-col`}>
                  <div className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${message.role === "user" ? "rounded-br-md bg-[#236645] text-white" : "rounded-bl-md bg-white/[0.075] text-slate-200"}`}>
                    {message.content}
                  </div>
                  <span className="mt-1 px-1 text-[10px] text-slate-500">{message.time}</span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2.5 text-[#72d29b]">
                <Bot size={17} />
                <div className="flex gap-1 rounded-2xl rounded-bl-md bg-white/[0.075] px-3.5 py-3">
                  <span className="namma-dot" /><span className="namma-dot namma-dot--delay-1" /><span className="namma-dot namma-dot--delay-2" />
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-white/10 px-4 pb-4 pt-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
              {quickActions.map((action) => (
                <button key={action} type="button" onClick={() => void submitMessage(action)} disabled={isTyping} className="shrink-0 rounded-full border border-[#5ab985]/25 bg-[#5ab985]/[0.08] px-3 py-1.5 text-[11px] text-[#a8e2bf] transition hover:border-[#78d9a1]/60 hover:bg-[#5ab985]/[0.18] disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#69d49a]">
                  {action}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 p-1.5 focus-within:border-[#62c991]/60">
              <button type="button" className="rounded-xl p-2 text-slate-500 transition hover:bg-white/10 hover:text-[#d9b878] focus:outline-none focus:ring-2 focus:ring-[#69d49a]" aria-label="Attach a document" title="Attach a document">
                <Paperclip size={17} />
              </button>
              <input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-white outline-none placeholder:text-slate-500" placeholder="Ask about your property tax..." aria-label="Ask about your property tax" disabled={isTyping} />
              <button type="submit" disabled={!input.trim() || isTyping} className="rounded-xl bg-[#4fbd82] p-2 text-[#07110c] transition hover:bg-[#72d29b] disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-[#d9b878]" aria-label="Send message">
                <Send size={16} />
              </button>
            </form>
          </div>
        </section>
      )}

      <div className="flex flex-col items-end gap-2">
        {!isOpen && <span className="namma-ai-label rounded-full border border-[#d9b878]/20 bg-[#101714]/90 px-3 py-1.5 text-xs font-medium text-[#e8d0a2] shadow-lg backdrop-blur-md">Ask Namma AI</span>}
        <button type="button" onClick={() => setIsOpen((current) => !current)} className={`namma-ai-trigger group relative flex h-[76px] w-[76px] items-center justify-center rounded-[26px] border border-[#d9b878]/30 bg-[#111817] shadow-[0_12px_40px_rgba(44,177,111,0.18)] transition focus:outline-none focus:ring-2 focus:ring-[#d9b878] focus:ring-offset-2 focus:ring-offset-[#070b12] ${isOpen ? "namma-ai-trigger--open" : ""}`} aria-label="Open Namma AI assistant" aria-expanded={isOpen}>
          <span className="absolute inset-1 rounded-[21px] border border-[#5fc78b]/20" />
          <RobotAvatar />
          <span className="absolute -right-1 top-1 h-2.5 w-2.5 rounded-full border-2 border-[#111817] bg-[#5fc78b] shadow-[0_0_10px_#5fc78b]" />
          {isOpen ? <ChevronDown className="absolute bottom-1.5 right-2 text-[#d9b878]" size={13} /> : null}
        </button>
      </div>
    </div>
  );
}
