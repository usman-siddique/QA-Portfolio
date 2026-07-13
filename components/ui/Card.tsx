import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  interactive = false,
}: {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "surface-sheen rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-elevated-sm transition-all duration-300 sm:p-8",
        interactive &&
          "hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
