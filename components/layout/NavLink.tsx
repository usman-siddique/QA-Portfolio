"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative rounded-[var(--radius-sm)] px-3 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
    >
      <span className="absolute inset-0 scale-95 rounded-[var(--radius-sm)] bg-surface opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
      <span className="relative">{children}</span>
      <span className="absolute inset-x-3 -bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </Link>
  );
}
