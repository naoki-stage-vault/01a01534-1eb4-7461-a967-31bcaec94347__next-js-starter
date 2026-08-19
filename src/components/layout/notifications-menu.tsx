"use client";

import { Bell, ShieldAlert, AtSign, CalendarClock, RefreshCw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { notifications, type Notification } from "@/lib/data";
import { cn, relativeTime } from "@/lib/utils";

const iconMap: Record<Notification["type"], React.ComponentType<{ className?: string }>> = {
  alert: ShieldAlert,
  mention: AtSign,
  deadline: CalendarClock,
  update: RefreshCw,
  system: Sparkles,
};

export function NotificationsMenu() {
  const unread = notifications.filter((n) => !n.read).length;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative text-muted-foreground">
          <Bell className="h-4 w-4" />
          {unread > 0 && (
            <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
            </span>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[380px] p-0">
        <DropdownMenuLabel className="flex items-center justify-between px-4 py-3">
          <span>Notifications</span>
          <Badge variant="neutral">{unread} unread</Badge>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-h-[360px] overflow-y-auto">
          {notifications.map((n) => {
            const Icon = iconMap[n.type];
            return (
              <DropdownMenuItem key={n.id} className="items-start gap-3 px-4 py-3 focus:bg-muted/50">
                <div
                  className={cn(
                    "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                    n.type === "alert" ? "bg-rose-500/10 text-rose-500" : "bg-muted text-muted-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1 space-y-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-medium">{n.title}</p>
                    <span className="shrink-0 text-[11px] text-muted-foreground">{relativeTime(n.createdAt)}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">{n.body}</p>
                </div>
                {!n.read && <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center text-center text-sm font-medium text-primary">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
