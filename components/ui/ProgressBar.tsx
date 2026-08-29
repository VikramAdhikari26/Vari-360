interface ProgressBarProps {
  value: number;
  tone?: "cyan" | "emerald" | "amber" | "red";
}

export function ProgressBar({ value, tone = "cyan" }: ProgressBarProps) {
  const colors = {
    cyan: "from-cyan-400 to-sky-500",
    emerald: "from-emerald-400 to-emerald-500",
    amber: "from-amber-400 to-yellow-500",
    red: "from-red-500 to-red-600",
  };

  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800/80">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${colors[tone]}`}
        style={{ width: `${Math.min(value, 100)}%` }}
      />
    </div>
  );
}
