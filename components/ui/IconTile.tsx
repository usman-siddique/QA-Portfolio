import { TechIcon } from "@/components/ui/TechIcon";

export function IconTile({ name }: { name: string }) {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-[var(--radius-md)] border border-border bg-surface px-4 py-5 text-center shadow-xs transition-all duration-250 hover:-translate-y-1 hover:border-accent/50 hover:shadow-elevated-sm">
      <span className="flex size-9 items-center justify-center text-foreground/70 transition-colors group-hover:text-accent">
        <TechIcon name={name} className="size-full" />
      </span>
      <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        {name}
      </span>
    </div>
  );
}
