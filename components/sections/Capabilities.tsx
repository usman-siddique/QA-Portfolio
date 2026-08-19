import { Container } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { coreTools, skills } from "@/content/skills";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-16 border-b border-border bg-surface/40"
    >
      <Container className="py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="QA CAPABILITIES"
            title="Quality engineering across Web, Mobile, APIs, Data & Automation"
            description="Functional validation, API testing, database verification, performance testing, and maintainable test automation."
            className="max-w-4xl"
          />
        </Reveal>

        <div
          className="mt-8 grid gap-3 lg:grid-cols-2 lg:gap-x-5"
          aria-label="Quality assurance skills and tools"
        >
          {skills.map((skill, index) => (
            <Reveal
              key={skill.category}
              delay={0.03 + index * 0.025}
              className="min-w-0"
            >
              <div className="group relative h-full min-w-0 overflow-hidden rounded-[var(--radius-md)] border border-border-strong bg-surface px-4 py-4 shadow-xs transition-colors duration-200 hover:border-accent/40 sm:grid sm:grid-cols-[10.5rem_1fr] sm:items-start sm:gap-5 sm:px-5">
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-0.5 bg-accent/70"
                />
                <h3 className="text-sm font-semibold leading-relaxed text-foreground">
                  {skill.category}
                </h3>
                <p className="mt-1 min-w-0 break-words text-sm leading-relaxed text-muted-foreground sm:mt-0">
                  {skill.items.join(" · ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.36}>
          <div className="mt-10 border-t border-border pt-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
              Core QA Toolchain
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-7">
              {coreTools.map((tool) => (
                <IconTile key={tool.name} name={tool.name} label={tool.label} />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
