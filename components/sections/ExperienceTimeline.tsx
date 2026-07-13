import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { formatDateRange } from "@/lib/utils";
import { experience } from "@/content/experience";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-16 border-b border-border">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Career timeline" />
        </Reveal>

        <ol className="relative mt-14 flex flex-col">
          <div
            aria-hidden="true"
            className="absolute bottom-3 left-[7px] top-3 hidden w-px bg-border sm:block"
          />

          {experience.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.06}>
              <li className="group relative border-t border-border first:border-t-0 sm:pl-12">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-11 hidden size-[15px] rounded-full border-[3px] border-background bg-border shadow-elevated-sm transition-colors duration-300 group-hover:bg-accent sm:block"
                />

                <Link
                  href={`/work/${item.slug}`}
                  className="flex flex-col gap-4 rounded-[var(--radius-md)] py-8 transition-colors duration-300 hover:bg-surface/70 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:px-4 sm:py-10"
                >
                  <div className="sm:w-48 sm:shrink-0">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {formatDateRange(item.startDate, item.endDate)}
                    </p>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                      {item.title} · {item.company}
                    </h3>
                    {item.employmentType ? (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.employmentType}
                      </p>
                    ) : null}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.domain.map((d) => (
                        <Badge key={d}>{d}</Badge>
                      ))}
                    </div>
                  </div>

                  <ArrowRight
                    className="mt-1 hidden size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent sm:block"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
