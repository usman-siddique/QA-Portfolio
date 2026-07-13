import Link from "next/link";

export function Logo({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span className="flex size-9 items-center justify-center rounded-[var(--radius-sm)] border border-border-strong bg-surface font-mono text-[13px] font-semibold text-accent shadow-xs transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-elevated-sm">
        {initials}
      </span>
      <span className="hidden text-[15px] font-medium tracking-tight text-foreground sm:inline">
        {name}
      </span>
    </Link>
  );
}
