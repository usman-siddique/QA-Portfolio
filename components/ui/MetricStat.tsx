import { cn } from "@/lib/utils";

export function MetricStat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="font-mono text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
        {value}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
