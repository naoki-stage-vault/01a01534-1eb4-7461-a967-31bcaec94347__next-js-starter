import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Status, Priority } from "@/lib/data";

const statusConfig: Record<Status, { label: string; variant: "success" | "warning" | "destructive" | "neutral" | "blue" }> = {
  "on-track": { label: "On track", variant: "success" },
  "at-risk": { label: "At risk", variant: "warning" },
  behind: { label: "Behind", variant: "destructive" },
  completed: { label: "Completed", variant: "blue" },
  "not-started": { label: "Not started", variant: "neutral" },
  paused: { label: "Paused", variant: "neutral" },
};

export function StatusBadge({ status, className }: { status: Status; className?: string }) {
  const cfg = statusConfig[status] ?? statusConfig["not-started"];
  return (
    <Badge variant={cfg.variant} className={cn("capitalize", className)}>
      <span className={cn("h-1.5 w-1.5 rounded-full", dotColor(status))} />
      {cfg.label}
    </Badge>
  );
}

export function dotColor(status: Status) {
  switch (status) {
    case "on-track":
      return "bg-emerald-500";
    case "at-risk":
      return "bg-amber-500";
    case "behind":
      return "bg-rose-500";
    case "completed":
      return "bg-blue-500";
    default:
      return "bg-zinc-400";
  }
}

export function progressColor(progress: number) {
  if (progress >= 75) return "bg-emerald-500";
  if (progress >= 50) return "bg-blue-500";
  if (progress >= 25) return "bg-amber-500";
  return "bg-rose-500";
}

const priorityConfig: Record<Priority, { label: string; variant: "destructive" | "warning" | "blue" | "neutral" }> = {
  critical: { label: "Critical", variant: "destructive" },
  high: { label: "High", variant: "warning" },
  medium: { label: "Medium", variant: "blue" },
  low: { label: "Low", variant: "neutral" },
};

export function PriorityBadge({ priority, className }: { priority: Priority; className?: string }) {
  const cfg = priorityConfig[priority] ?? priorityConfig.low;
  return (
    <Badge variant={cfg.variant} className={cn("capitalize", className)}>
      {cfg.label}
    </Badge>
  );
}
