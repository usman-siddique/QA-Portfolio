import {
  getTechIconColor,
  TechIcon,
} from "@/components/ui/TechIcon";

export function IconTile({
  name,
  label,
}: {
  name: string;
  label?: string;
}) {
  const iconColor = getTechIconColor(name);
  const isThemeColor = iconColor.startsWith("var(");

  return (
    <div className="group flex flex-col items-center gap-3 rounded-[var(--radius-md)] border border-border-strong bg-surface-2/70 px-4 py-5 text-center shadow-elevated-sm transition-all duration-250 hover:-translate-y-1 hover:border-accent/50 hover:shadow-elevated-md">
      <span
        className="flex size-10 items-center justify-center rounded-[var(--radius-sm)] border transition-transform duration-250 group-hover:scale-105"
        style={{
          color: iconColor,
          backgroundColor: isThemeColor
            ? `color-mix(in srgb, ${iconColor} 8%, transparent)`
            : `${iconColor}14`,
          borderColor: isThemeColor
            ? `color-mix(in srgb, ${iconColor} 22%, transparent)`
            : `${iconColor}38`,
          boxShadow: isThemeColor
            ? `0 0 18px color-mix(in srgb, ${iconColor} 7%, transparent)`
            : `0 0 18px ${iconColor}12`,
        }}
      >
        <TechIcon name={name} className="size-7" variant="official" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium text-foreground">
          {name}
        </span>
        {label ? (
          <span className="mt-1 block font-mono text-[9px] leading-tight tracking-wide text-muted-foreground">
            {label}
          </span>
        ) : null}
      </span>
    </div>
  );
}
