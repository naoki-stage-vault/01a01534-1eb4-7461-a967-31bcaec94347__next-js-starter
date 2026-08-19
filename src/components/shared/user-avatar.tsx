import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { getUser, type User } from "@/lib/data";
import { cn, initials } from "@/lib/utils";

export function UserAvatar({
  user,
  size = "md",
  showTooltip = true,
}: {
  user: User | string;
  size?: "xs" | "sm" | "md" | "lg";
  showTooltip?: boolean;
}) {
  const u = typeof user === "string" ? getUser(user) : user;
  const sizes = {
    xs: "h-6 w-6 text-[10px]",
    sm: "h-7 w-7 text-[11px]",
    md: "h-9 w-9 text-xs",
    lg: "h-11 w-11 text-sm",
  };
  const avatar = (
    <Avatar className={cn(sizes[size], "ring-2 ring-card")}>
      <AvatarImage src={`https://i.pravatar.cc/96?u=${u.id}`} alt={u.name} />
      <AvatarFallback className={cn(u.avatarColor, "text-white")}>{initials(u.name)}</AvatarFallback>
    </Avatar>
  );
  if (!showTooltip) return avatar;
  return (
    <Tooltip>
      <TooltipTrigger asChild>{avatar}</TooltipTrigger>
      <TooltipContent>
        {u.name} — {u.title}
      </TooltipContent>
    </Tooltip>
  );
}

export function AvatarStack({ userIds, max = 4 }: { userIds: string[]; max?: number }) {
  const visible = userIds.slice(0, max);
  const rest = userIds.length - visible.length;
  return (
    <div className="flex -space-x-2">
      {visible.map((id) => (
        <UserAvatar key={id} user={id} size="sm" />
      ))}
      {rest > 0 && (
        <Avatar className="h-7 w-7 text-[11px] ring-2 ring-card">
          <AvatarFallback className="bg-secondary text-secondary-foreground">+{rest}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
