"use client";

import { UploadCloud } from "lucide-react";
import { useRef, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

const steps = ["Uploading", "Reading document", "OCR extraction", "Verification", "Completed"];

export function DocumentUploader() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [activeStep, setActiveStep] = useState(2);

  return (
    <GlassCard className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Document AI</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Upload assessment notice</h3>
        </div>
        <button
          className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-500/20"
          onClick={() => inputRef.current?.click()}
        >
          <UploadCloud size={16} />
          Upload file
        </button>
      </div>

      <input ref={inputRef} type="file" className="hidden" accept=".pdf,.png,.jpg,.jpeg" />

      <div className="mt-6 rounded-2xl border border-dashed border-cyan-500/40 bg-slate-900/70 p-8 text-center">
        <UploadCloud size={28} className="mx-auto text-cyan-300" />
        <p className="mt-4 text-base font-medium text-slate-100">Drag & drop files here</p>
        <p className="mt-2 text-sm text-slate-400">Supported demo files: PDF, JPG, PNG</p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-5">
        {steps.map((step, index) => (
          <div
            key={step}
            className={[
              "rounded-xl border px-2 py-3 text-center text-xs uppercase tracking-[0.16em]",
              index <= activeStep ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-100" : "border-white/10 bg-slate-900/70 text-slate-400",
            ].join(" ")}
          >
            {step}
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
