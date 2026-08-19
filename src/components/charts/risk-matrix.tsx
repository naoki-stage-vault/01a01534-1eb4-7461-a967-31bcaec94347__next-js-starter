"use client";

import { cn } from "@/lib/utils";

export interface RiskCell {
  x: number; // likelihood 1-5
  y: number; // impact 1-5
  id: string;
  title: string;
  status: "open" | "mitigating" | "monitoring" | "closed";
}

function cellColor(score: number) {
  if (score >= 20) return "bg-rose-500/20 text-rose-600 dark:text-rose-400 border-rose-500/30";
  if (score >= 12) return "bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/30";
  if (score >= 6) return "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30";
  return "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
}

const dotColor: Record<RiskCell["status"], string> = {
  open: "bg-rose-500",
  mitigating: "bg-amber-500",
  monitoring: "bg-blue-500",
  closed: "bg-zinc-400",
};

const LABELS = ["Rare", "Unlikely", "Possible", "Likely", "Almost certain"];

export function RiskMatrix({ risks, onSelect }: { risks: RiskCell[]; onSelect?: (id: string) => void }) {
  const grid: (RiskCell | undefined)[][] = Array.from({ length: 5 }, () => Array(5).fill(undefined));
  for (const r of risks) {
    const x = Math.max(1, Math.min(5, r.x));
    const y = Math.max(1, Math.min(5, r.y));
    grid[5 - y][x - 1] = r;
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[560px]">
        <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
          <span>Impact</span>
          <div className="flex gap-3">
            {(["open", "mitigating", "monitoring"] as const).map((s) => (
              <span key={s} className="flex items-center gap-1">
                <span className={cn("h-2 w-2 rounded-full", dotColor[s])} />
                {s[0].toUpperCase() + s.slice(1)}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col justify-between py-0.5 text-[11px] font-medium text-muted-foreground">
            <span>5</span>
            <span>4</span>
            <span>3</span>
            <span>2</span>
            <span>1</span>
          </div>
          <div className="flex-1 space-y-2">
            {grid.map((row, i) => (
              <div key={i} className="flex gap-2">
                {row.map((cell, j) => {
                  const score = (5 - i) * (j + 1);
                  return (
                    <div
                      key={j}
                      className={cn(
                        "relative flex h-16 flex-1 items-center justify-center rounded-lg border",
                        cellColor(score)
                      )}
                    >
                      {cell && (
                        <button
                          onClick={() => onSelect?.(cell.id)}
                          className="group flex h-full w-full flex-col items-center justify-center gap-1"
                          title={cell.title}
                        >
                          <span className={cn("h-2.5 w-2.5 rounded-full", dotColor[cell.status])} />
                          <span className="max-w-[90%] truncate text-[10px] font-medium">
                            {cell.title.split(" ").slice(0, 3).join(" ")}
                          </span>
                          <span className="text-[10px] text-muted-foreground">S{score}</span>
                        </button>
                      )}
                      {!cell && <span className="text-xs text-muted-foreground/40">{score}</span>}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 flex justify-between pl-6 text-[11px] font-medium text-muted-foreground">
          <span>Rare</span>
          <span>Possible</span>
          <span>Almost certain</span>
        </div>
        <div className="mt-0.5 pl-6 text-right text-[11px] text-muted-foreground">Likelihood →</div>
      </div>
    </div>
  );
}
