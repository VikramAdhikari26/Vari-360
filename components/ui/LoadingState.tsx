export function LoadingState({ label = "Loading" }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-slate-200">
      <span className="h-3.5 w-3.5 animate-pulse rounded-full bg-cyan-400" />
      <span className="text-sm">{label}</span>
    </div>
  );
}
