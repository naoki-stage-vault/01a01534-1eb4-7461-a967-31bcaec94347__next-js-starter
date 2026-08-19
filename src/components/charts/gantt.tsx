"use client";

import { cn, formatDate } from "@/lib/utils";
import { dotColor } from "@/components/shared/status-badge";

export interface GanttItem {
  id: string;
  name: string;
  start: string;
  end: string;
  progress: number;
  status: "on-track" | "at-risk" | "behind" | "completed" | "not-started";
  owner: string;
}

const MONTHS = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];

function monthIndex(date: string) {
  const d = new Date(date);
  const first = new Date(2025, 8, 1); // Sep 2025
  return Math.round((d.getTime() - first.getTime()) / (1000 * 60 * 60 * 24 * 30.4));
}

export function GanttChart({ items }: { items: GanttItem[] }) {
  const startIdx = 0;
  const endIdx = MONTHS.length - 1;
  const total = endIdx - startIdx + 1;

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[760px]">
        <div className="grid" style={{ gridTemplateColumns: `240px repeat(${total}, 1fr)` }}>
          <div className="sticky left-0 z-10 flex items-end pb-2 text-xs font-medium text-muted-foreground">
            Initiative
          </div>
          {MONTHS.map((m, i) => (
            <div key={m} className={cn("pb-2 text-center text-xs font-medium text-muted-foreground", i % 2 === 1 && "bg-muted/40")}>
              {m}
            </div>
          ))}
        </div>
        <div className="space-y-1">
          {items.map((item) => {
            const start = monthIndex(item.start);
            const end = monthIndex(item.end);
            const span = Math.max(1, end - start + 1);
            return (
              <div key={item.id} className="grid items-center" style={{ gridTemplateColumns: `240px repeat(${total}, 1fr)` }}>
                <div className="truncate pr-3 text-sm font-medium">{item.name}</div>
                <div className="relative col-span-8 h-7">
                  <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 bg-muted/60 rounded-full" />
                  <div
                    className="absolute top-1/2 h-4 -translate-y-1/2 rounded-md border border-black/5 shadow-sm"
                    style={{
                      left: `calc(${(start - startIdx) / total * 100}% + 3px)`,
                      width: `calc(${(span / total) * 100}% - 6px)`,
                      backgroundColor: "var(--primary)",
                      opacity: 0.35,
                    }}
                  />
                  <div
                    className="absolute top-1/2 h-4 -translate-y-1/2 rounded-md border border-black/5 shadow-sm"
                    style={{
                      left: `calc(${(start - startIdx) / total * 100}% + 3px)`,
                      width: `calc(${(span / total) * 100 * (item.progress / 100)}% - 3px)`,
                      backgroundColor: item.status === "completed" ? "var(--success)" : item.status === "behind" ? "var(--destructive)" : item.status === "at-risk" ? "var(--warning)" : "var(--primary)",
                    }}
                  />
                  <span className={cn("absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full border border-background", dotColor(item.status))} style={{ right: "6px" }} />
                  <span className="absolute right-9 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground">
                    {item.progress}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-2 text-right text-xs text-muted-foreground">
          {formatDate("2025-09-01")} — {formatDate("2026-05-31")}
        </div>
      </div>
    </div>
  );
}
