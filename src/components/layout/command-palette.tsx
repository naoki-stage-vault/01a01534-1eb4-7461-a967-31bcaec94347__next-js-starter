"use client";

import * as React from "react";
import { Search, FileText, LayoutDashboard, Target, Users, ShieldAlert, TrendingUp, Sparkles, Settings, LifeBuoy, ArrowRight, Plus, Command as CommandIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { initiatives, users, reports } from "@/lib/data";

const navActions = [
  { group: "Navigate", items: [
    { label: "Dashboard", href: "/", icon: LayoutDashboard },
    { label: "Strategic Planning", href: "/planning", icon: Target },
    { label: "Stakeholders", href: "/stakeholders", icon: Users },
    { label: "Risk Management", href: "/risk", icon: ShieldAlert },
    { label: "Progress Tracking", href: "/progress", icon: TrendingUp },
    { label: "Reports", href: "/reports", icon: FileText },
    { label: "AI Advisor", href: "/ai-advisor", icon: Sparkles },
    { label: "Administration", href: "/admin", icon: Settings },
    { label: "Support", href: "/support", icon: LifeBuoy },
  ]},
];

const quickActions = [
  { label: "New initiative", href: "/planning/initiatives?new=1", icon: Plus, shortcut: "N" },
  { label: "New survey", href: "/stakeholders/surveys?new=1", icon: Plus, shortcut: "S" },
  { label: "New risk", href: "/risk/register?new=1", icon: Plus },
  { label: "Ask AI Advisor", href: "/ai-advisor", icon: Sparkles },
];

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const run = (href: string) => {
    onOpenChange(false);
    setQuery("");
    router.push(href);
  };

  const filteredInitiatives = initiatives
    .filter((i) => i.name.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 5);
  const filteredUsers = users
    .filter((u) => u.name.toLowerCase().includes(query.toLowerCase()) || u.role.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 4);
  const filteredReports = reports.filter((r) => r.title.toLowerCase().includes(query.toLowerCase())).slice(0, 3);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." value={query} onValueChange={setQuery} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Quick actions">
          {quickActions.map((a) => (
            <CommandItem key={a.label} onSelect={() => run(a.href)}>
              <a.icon className="mr-2" />
              {a.label}
              {a.shortcut && <CommandShortcut>{a.shortcut}</CommandShortcut>}
            </CommandItem>
          ))}
        </CommandGroup>
        {navActions.map((group) => (
          <CommandGroup key={group.group} heading={group.group}>
            {group.items.map((a) => (
              <CommandItem key={a.href} onSelect={() => run(a.href)}>
                <a.icon className="mr-2" />
                {a.label}
                <ArrowRight className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
        {filteredInitiatives.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="Initiatives">
              {filteredInitiatives.map((i) => (
                <CommandItem key={i.id} onSelect={() => run("/planning/initiatives")}>
                  <Target className="mr-2 text-muted-foreground" />
                  <span className="truncate">{i.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{i.department}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
        {filteredUsers.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="People">
              {filteredUsers.map((u) => (
                <CommandItem key={u.id} onSelect={() => run("/admin/users")}>
                  <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[9px] font-bold">
                    {u.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <span>{u.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{u.role}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
        {filteredReports.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="Reports">
              {filteredReports.map((r) => (
                <CommandItem key={r.id} onSelect={() => run("/reports")}>
                  <FileText className="mr-2 text-muted-foreground" />
                  {r.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
      </CommandList>
      <div className="flex items-center gap-2 border-t px-3 py-2 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5"><CommandIcon className="h-2.5 w-2.5" />K</span>
        to open · <span className="flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5">↑↓</span> to navigate · <span className="flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5">↵</span> to select
      </div>
    </CommandDialog>
  );
}

export function SearchTrigger({ onOpen }: { onOpen: () => void }) {
  return (
    <Button
      variant="outline"
      className={cn("h-9 w-full max-w-sm justify-start gap-2 rounded-md border-dashed text-muted-foreground sm:w-72")}
      onClick={onOpen}
    >
      <Search className="h-4 w-4" />
      <span className="flex-1 text-left text-sm">Search or jump to...</span>
      <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium sm:flex">
        ⌘K
      </kbd>
    </Button>
  );
}
