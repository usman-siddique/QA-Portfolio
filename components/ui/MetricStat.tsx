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
    <div className={cn("flex flex-col gap-2", className)}>
      <span className="font-mono text-3xl font-semibold leading-none tracking-[-0.04em] text-foreground sm:text-4xl">
        {value}
      </span>

      <span className="text-xs font-mono uppercase tracking-[0.1em] leading-relaxed text-muted-foreground">
        {label}
      </span>
    </div>
  );
}