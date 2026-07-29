import { Container } from "@/components/ui/Container";
import { MetricStat } from "@/components/ui/MetricStat";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: "2+", label: "Years in software QA" },
  { value: "600+", label: "Bugs reported at SAT Japan" },
  { value: "20%", label: "Regression effort reduced through automation" },
  { value: "3", label: "Product domains tested end-to-end" },
];

const qualityPrinciples = [
  {
    number: "01",
    title: "Own the full journey",
    description:
      "Validate complete workflows instead of testing screens in isolation.",
  },
  {
    number: "02",
    title: "Challenge assumptions",
    description:
      "Explore edge cases, failed requests, slow networks, and invalid inputs.",
  },
  {
    number: "03",
    title: "Report with evidence",
    description:
      "Turn findings into clear, reproducible defects teams can act on.",
  },
  {
    number: "04",
    title: "Automate with purpose",
    description:
      "Prioritize stable regression coverage where it reduces manual effort.",
  },
];

export function ProofStrip() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-10 -mt-10 scroll-mt-24 border-b border-border sm:-mt-14"
    >
      <Container className="pb-20 sm:pb-28">
        <Reveal delay={0.12}>
          <div className="surface-sheen overflow-hidden rounded-[var(--radius-xl)] border border-border-strong bg-surface shadow-elevated-lg">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
              <div className="p-6 sm:p-10 lg:p-12">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  About
                </p>
                <h2
                  id="about-heading"
                  className="text-balance mt-4 max-w-xl text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl"
                >
                  Quality assurance built around real product risk.
                </h2>

                <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    I&apos;m Muhammad Usman, an SQA Engineer working across
                    automotive e-commerce, mobility, and SaaS products. I
                    validate complete customer journeys across web and mobile,
                    from requirements and APIs to data, performance, and release
                    readiness.
                  </p>
                  <p>
                    I combine structured regression with exploratory thinking,
                    then automate the repeatable checks that matter most. The
                    goal is practical: clear evidence, faster feedback, and
                    confidence to ship.
                  </p>
                </div>

                <div className="mt-8 border-l-2 border-accent pl-4">
                  <p className="text-sm font-medium leading-relaxed text-foreground">
                    Quality means finding risk before users have to.
                  </p>
                </div>
              </div>

              <div className="border-t border-border bg-surface-2/50 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  How I protect quality
                </p>
                <ol className="mt-6">
                  {qualityPrinciples.map((principle, index) => (
                    <li
                      key={principle.title}
                      className={
                        index > 0
                          ? "mt-5 border-t border-border pt-5"
                          : undefined
                      }
                    >
                      <div className="grid grid-cols-[2rem_1fr] gap-3">
                        <span
                          aria-hidden="true"
                          className="pt-0.5 font-mono text-xs text-accent"
                        >
                          {principle.number}
                        </span>
                        <div>
                          <h3 className="font-medium text-foreground">
                            {principle.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-px border-t border-border bg-border md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-0 bg-surface px-5 py-6 sm:px-8 sm:py-7"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <MetricStat value={stat.value} label={stat.label} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
