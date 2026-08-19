"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Target,
  Users,
  ShieldAlert,
  TrendingUp,
  FileText,
  Sparkles,
  Settings,
  LifeBuoy,
  ChevronDown,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { OrgSwitcher } from "@/components/layout/org-switcher";
import { UserAvatar } from "@/components/shared/user-avatar";
import { currentUser, aiInsights } from "@/lib/data";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  badgeVariant?: "default" | "destructive" | "warning";
  children?: { href: string; label: string }[];
}

const mainNav: NavItem[] = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  {
    href: "/planning",
    label: "Strategic Planning",
    icon: Target,
    children: [
      { href: "/planning/objectives", label: "Objectives" },
      { href: "/planning/initiatives", label: "Initiatives" },
      { href: "/planning/timeline", label: "Timeline" },
    ],
  },
  {
    href: "/stakeholders",
    label: "Stakeholders",
    icon: Users,
    children: [
      { href: "/stakeholders/surveys", label: "Surveys" },
      { href: "/stakeholders/interviews", label: "Interviews" },
      { href: "/stakeholders/swot", label: "SWOT Board" },
    ],
  },
  {
    href: "/risk",
    label: "Risk Management",
    icon: ShieldAlert,
    badge: "6",
    badgeVariant: "warning",
    children: [
      { href: "/risk/register", label: "Risk Register" },
      { href: "/risk/matrix", label: "Risk Matrix" },
    ],
  },
  {
    href: "/progress",
    label: "Progress Tracking",
    icon: TrendingUp,
    children: [
      { href: "/progress/overview", label: "Overview" },
      { href: "/progress/gantt", label: "Gantt" },
      { href: "/progress/milestones", label: "Milestones" },
    ],
  },
  {
    href: "/reports",
    label: "Reports",
    icon: FileText,
    children: [
      { href: "/reports/board", label: "Board Report" },
      { href: "/reports/quarterly", label: "Quarterly Report" },
      { href: "/reports/executive", label: "Executive Summary" },
      { href: "/reports/department", label: "Department Report" },
    ],
  },
  {
    href: "/ai-advisor",
    label: "AI Advisor",
    icon: Sparkles,
    badge: `${aiInsights.length}`,
  },
];

const adminNav: NavItem[] = [
  { href: "/admin", label: "Administration", icon: Settings },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/support", label: "Support", icon: LifeBuoy },
];

function SidebarLink({
  item,
  collapsed,
  pathname,
  depth = 0,
}: {
  item: NavItem;
  collapsed: boolean;
  pathname: string;
  depth?: number;
}) {
  const Icon = item.icon;
  const active =
    pathname === item.href || (item.children?.some((c) => pathname === c.href || pathname.startsWith(c.href)) && depth === 0) || pathname.startsWith(item.href + "/");

  if (collapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={item.href}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
              active && "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary"
            )}
          >
            <Icon className="h-4.5 w-4.5" />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{item.label}</TooltipContent>
      </Tooltip>
    );
  }

  return (
    <Collapsible defaultOpen={active}>
      <CollapsibleTrigger asChild>
        <Link
          href={item.href}
          className={cn(
            "group flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
            active && "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary"
          )}
        >
          <Icon className={cn("h-4 w-4 shrink-0", active && "text-primary")} />
          <span className="flex-1 truncate">{item.label}</span>
          {item.badge && (
            <Badge variant={item.badgeVariant ?? "default"} className="h-5 px-1.5 text-[10px]">
              {item.badge}
            </Badge>
          )}
          {item.children && <ChevronDown className="h-3.5 w-3.5 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />}
        </Link>
      </CollapsibleTrigger>
      {item.children && (
        <CollapsibleContent className="mt-0.5 space-y-0.5 pl-4">
          {item.children.map((child) => {
            const childActive = pathname === child.href || pathname.startsWith(child.href);
            return (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  "flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                  childActive && "bg-accent text-foreground font-medium"
                )}
              >
                <span className={cn("h-1 w-1 rounded-full", childActive ? "bg-primary" : "bg-muted-foreground/40")} />
                {child.label}
              </Link>
            );
          })}
        </CollapsibleContent>
      )}
    </Collapsible>
  );
}

export function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex flex-col border-r bg-sidebar text-sidebar-foreground transition-[width] duration-200",
        collapsed ? "w-[64px]" : "w-[248px]"
      )}
    >
      <div className={cn("flex h-14 items-center gap-2.5 border-b px-3", collapsed && "justify-center px-0")}>
        {!collapsed && (
          <>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              S
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-tight">StrategyFlow</p>
              <p className="text-[10px] leading-tight text-muted-foreground">Strategic Planning</p>
            </div>
          </>
        )}
        {collapsed && (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            S
          </div>
        )}
      </div>

      <div className={cn("border-b px-3 py-2", collapsed && "px-2")}>
        <OrgSwitcher />
      </div>

      <nav className={cn("flex-1 space-y-4 overflow-y-auto px-3 py-3", collapsed && "px-2")}>
        <div className="space-y-0.5">
          {mainNav.map((item) => (
            <SidebarLink key={item.href} item={item} collapsed={collapsed} pathname={pathname} />
          ))}
        </div>
        <Separator />
        <div className="space-y-0.5">
          <p className={cn("px-2.5 pb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", collapsed && "sr-only")}>
            Workspace
          </p>
          {adminNav.map((item) => (
            <SidebarLink key={item.href} item={item} collapsed={collapsed} pathname={pathname} />
          ))}
        </div>
      </nav>

      <div className="border-t p-3">
        {collapsed ? (
          <div className="flex flex-col items-center gap-1">
            <UserAvatar user={currentUser} size="md" />
            <Button variant="ghost" size="icon-sm" onClick={onToggle} className="text-muted-foreground">
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-2.5">
            <UserAvatar user={currentUser} size="md" showTooltip={false} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{currentUser.name}</p>
              <p className="truncate text-xs text-muted-foreground">{currentUser.title}</p>
            </div>
            <Button variant="ghost" size="icon-sm" onClick={onToggle} className="text-muted-foreground">
              <ChevronsLeft className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </aside>
  );
}
