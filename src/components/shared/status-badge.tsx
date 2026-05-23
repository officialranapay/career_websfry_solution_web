import { ApplicationStatus } from "@/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function StatusBadge({ status }: { status: ApplicationStatus }) {
  const getStatusStyles = () => {
    switch (status) {
      // case "accepted":
      //   return "bg-green-100 text-green-700 border-green-200";
      case "seen":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "rejected":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
    }
  };

  const getStatusDot = () => {
    switch (status) {
      // case "accepted":
      //   return "bg-green-500";
      case "seen":
        return "bg-blue-500";
      case "rejected":
        return "bg-red-500";
      default:
        return "bg-yellow-500";
    }
  };

  return (
    <Badge variant="outline" className={cn("font-medium gap-1.5 py-1 px-2.5", getStatusStyles())}>
      <span className={cn("w-1.5 h-1.5 rounded-full",getStatusDot())} />
      {status}
    </Badge>
  );
}
