import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "shadow-xs inline-flex items-center rounded-[var(--radius-sm)] border border-border bg-surface px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
