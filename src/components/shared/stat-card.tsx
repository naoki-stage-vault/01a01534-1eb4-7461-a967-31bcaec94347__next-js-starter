import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { Trend } from "@/lib/data";

export function StatCard({
  label,
  value,
  sub,
  icon: Icon,
  trend,
  trendLabel,
  className,
}: {
  label: string;
  value: string | number;
  sub?: string;
  icon?: LucideIcon;
  trend?: Trend;
  trendLabel?: string;
  className?: string;
}) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-muted-foreground">{label}</p>
            <p className="mt-1.5 text-2xl font-semibold tracking-tight">{value}</p>
            {sub && <p className="mt-1 truncate text-xs text-muted-foreground">{sub}</p>}
          </div>
          {Icon && (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
          )}
        </div>
        {trend && (
          <div className="mt-3 flex items-center gap-1 text-xs">
            {trend === "up" && <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />}
            {trend === "down" && <TrendingDown className="h-3.5 w-3.5 text-rose-500" />}
            {trend === "flat" && <Minus className="h-3.5 w-3.5 text-muted-foreground" />}
            <span className={cn(trend === "up" && "text-emerald-600 dark:text-emerald-400", trend === "down" && "text-rose-600 dark:text-rose-400", trend === "flat" && "text-muted-foreground")}>
              {trendLabel}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
