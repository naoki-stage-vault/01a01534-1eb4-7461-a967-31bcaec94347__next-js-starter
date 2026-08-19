"use client";

import { Check, ChevronsUpDown, Building2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { organizations } from "@/lib/data";

export function OrgSwitcher({ currentOrgId = "org-horizon-health" }: { currentOrgId?: string }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(currentOrgId);
  const current = organizations.find((o) => o.id === value) ?? organizations[0];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="h-9 w-full justify-between gap-2 px-2 font-medium"
        >
          <span className="flex min-w-0 items-center gap-2">
            <span className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[10px] font-bold text-white", current.color)}>
              {current.initials}
            </span>
            <span className="truncate text-sm">{current.name}</span>
          </span>
          <ChevronsUpDown className="h-4 w-4 shrink-0 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search organizations..." />
          <CommandList>
            <CommandEmpty>No organization found.</CommandEmpty>
            <CommandGroup heading="Organizations">
              {organizations.map((org) => (
                <CommandItem
                  key={org.id}
                  value={org.name}
                  onSelect={() => {
                    setValue(org.id);
                    setOpen(false);
                  }}
                >
                  <Building2 className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="flex-1 truncate">{org.name}</span>
                  <span className="text-xs text-muted-foreground">{org.industry}</span>
                  {value === org.id && <Check className="ml-2 h-4 w-4 text-primary" />}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
