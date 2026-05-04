import { ApplicationStatus } from "@/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function StatusBadge({ status }: { status: ApplicationStatus }) {
  const getStatusStyles = () => {
    switch (status) {
      case "Submitted":
        return "bg-blue-500/15 text-blue-600 dark:text-blue-400 hover:bg-blue-500/25 border-blue-500/20";
      case "Seen":
        return "bg-[var(--status-warning)]/15 text-amber-600 dark:text-amber-400 hover:bg-[var(--status-warning)]/25 border-[var(--status-warning)]/20 animate-pulse-slow";
      case "Rejected":
        return "bg-[var(--status-error)]/15 text-red-600 dark:text-red-400 hover:bg-[var(--status-error)]/25 border-[var(--status-error)]/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusDot = () => {
    switch (status) {
      case "Submitted":
        return "bg-blue-500";
      case "Seen":
        return "bg-amber-500";
      case "Rejected":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Badge variant="outline" className={cn("font-medium gap-1.5 py-1 px-2.5", getStatusStyles())}>
      <span className={cn("w-1.5 h-1.5 rounded-full", getStatusDot())} />
      {status}
    </Badge>
  );
}
