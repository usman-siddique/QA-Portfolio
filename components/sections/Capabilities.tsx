import { Target, Terminal, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { IconTile } from "@/components/ui/IconTile";
import { hasTechIcon } from "@/components/ui/TechIcon";
import { skills } from "@/content/skills";

const iconizedTools = Array.from(
  new Set(skills.flatMap((group) => group.items).filter(hasTechIcon)),
);

const primaryMeta: Record<string, { icon: LucideIcon; blurb: string }> = {
  "Testing Practices": {
    icon: Target,
    blurb:
      "Full-spectrum manual and functional coverage across web and mobile, from first pass to release sign-off.",
  },
  "Automation & Programming": {
    icon: Terminal,
    blurb:
      "Automation structured for maintainability — page objects and parallel execution, not one-off scripts.",
  },
};

// Categories whose real tools now live in the icon grid above collapse
// into a compact reference strip instead of standing as near-empty
// boxes of their own.
const stripLabels: Record<string, string> = {
  "Tools & Platforms": "Also Used",
  Databases: "Databases",
  "Platforms Tested": "Platforms",
  "Process & Methodology": "Methodology",
};

export function Capabilities() {
  const primaryGroups = skills.filter((g) => g.category in primaryMeta);
  const stripGroups = skills
    .filter((g) => g.category in stripLabels)
    .map((g) => ({
      label: stripLabels[g.category],
      items: g.items.filter((item) => !hasTechIcon(item)),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section
      id="capabilities"
      className="scroll-mt-16 border-b border-border bg-surface/40"
    >
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="One integrated testing stack"
            description="Manual, API, performance, database, and automation testing — not siloed skills, but one coverage strategy applied across every engagement."
          />
        </Reveal>

        {iconizedTools.length > 0 ? (
          <Reveal delay={0.05}>
            <div className="mt-14">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                Core Tools &amp; Technologies
              </h3>
              <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                {iconizedTools.map((tool) => (
                  <IconTile key={tool} name={tool} />
                ))}
              </div>
            </div>
          </Reveal>
        ) : null}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {primaryGroups.map((group, index) => {
            const meta = primaryMeta[group.category];
            const Icon = meta.icon;
            return (
              <Reveal key={group.category} delay={0.1 + index * 0.06}>
                <Card className="flex h-full flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface-2 text-accent">
                      <Icon className="size-[18px]" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-medium text-foreground">
                      {group.category}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {meta.blurb}
                  </p>

                  <ul className="mt-1 grid grid-cols-1 gap-x-6 gap-y-2.5 border-t border-border pt-5 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-foreground/85"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {stripGroups.length > 0 ? (
          <Reveal delay={0.24}>
            <div className="mt-6 grid gap-x-8 gap-y-6 rounded-[var(--radius-lg)] border border-border bg-surface px-6 py-6 shadow-xs sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
              {stripGroups.map((group, index) => (
                <div
                  key={group.label}
                  className={
                    index > 0
                      ? "sm:border-l sm:border-border sm:pl-8"
                      : undefined
                  }
                >
                  <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                    {group.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
