import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/sections/SpotlightCard";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { experience } from "@/content/experience";

export function FeaturedWork() {
  const flagship = experience.find((item) => item.isFlagship);
  const rest = experience.filter((item) => !item.isFlagship);

  return (
    <section id="work" className="scroll-mt-16 border-b border-border">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Case Studies"
            title="Real engagements, real outcomes"
            description="Every number below comes from actual production work — not a portfolio exercise. Open a case study for the full scope, tools, and testing approach."
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          {flagship ? (
            <Reveal>
              <SpotlightCard experience={flagship} />
            </Reveal>
          ) : null}

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((item, index) => (
              <Reveal key={item.slug} delay={0.1 + index * 0.08}>
                <ProjectCard experience={item} index={index + 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
