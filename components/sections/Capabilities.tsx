import { Database, Target, Terminal, type LucideIcon } from "lucide-react";
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

const industryExperience = [
  "Automotive E-commerce",
  "Ride-sharing & Mobility",
  "SaaS & E-learning Platforms",
];

const toolFocus: Record<string, string> = {
  Playwright: "Automation",
  Python: "Programming",
  Pytest: "Test Framework",
  Postman: "API Testing",
  "Apache JMeter": "Performance",
  Jira: "Bug Tracking",
  TestRail: "Test Management",
  BrowserStack: "Cross-Browser",
  Git: "Version Control",
  GitHub: "Code Collaboration",
  SQLyog: "Database Client",
  Figma: "Design Handoff",
  "Chrome DevTools": "Debugging",
  MySQL: "Database",
};

const capabilityPillars: Array<{
  icon: LucideIcon;
  title: string;
  summary: string;
  coverage: string[];
}> = [
  {
    icon: Target,
    title: "Manual & Release Testing",
    summary:
      "Functional, regression, smoke, sanity, exploratory, and UI testing across critical web and mobile journeys.",
    coverage: [
      "Functional · Regression",
      "Smoke · Sanity",
      "Exploratory · UI/UX",
      "Cross-browser · Device",
    ],
  },
  {
    icon: Database,
    title: "API, Database & Performance",
    summary:
      "REST API testing with Postman, database validation using MySQL and SQL Server, and load testing with JMeter.",
    coverage: [
      "Postman · REST APIs",
      "MySQL · SQL Server",
      "JMeter · Load Testing",
    ],
  },
  {
    icon: Terminal,
    title: "Test Automation",
    summary:
      "Maintainable Playwright automation built with Python, Pytest, page objects, and parallel execution.",
    coverage: [
      "Playwright · Python",
      "Pytest",
      "POM Framework",
      "Parallel · Multi-browser",
    ],
  },
];

// Categories whose real tools now live in the icon grid above collapse
// into a compact reference strip instead of standing as near-empty
// boxes of their own.
const supportingGroups = [
  {
    label: "Management & Tracking",
    items: ["Jira", "Bugzilla", "TestRail", "Zephyr Scale"],
  },
  {
    label: "Databases",
    items: ["MySQL", "SQL Server", "SQLyog"],
  },
  {
    label: "Platforms",
    items: ["Web", "Desktop", "iOS", "Android"],
  },
  {
    label: "Methodology",
    items: ["SDLC", "STLC", "Agile", "Scrum"],
  },
];

export function Capabilities() {
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
            description="Manual web and mobile testing, REST APIs with Postman, databases with MySQL and SQL Server, performance with JMeter, and Playwright automation with Python."
          />
        </Reveal>

        <Reveal delay={0.04}>
          <div className="mt-10 hidden items-center justify-between gap-6 border-y border-border py-4 md:flex">
            <h3 className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              Industry Experience
            </h3>
            <ul
              className="flex flex-wrap justify-end gap-2"
              aria-label="Industries with professional testing experience"
            >
              {industryExperience.map((industry) => (
                <li
                  key={industry}
                  className="rounded-[var(--radius-sm)] border border-border-strong bg-surface-2 px-3 py-2 font-mono text-[10px] uppercase leading-tight tracking-wide text-foreground/80"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {capabilityPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={0.06 + index * 0.05}>
                <Card className="relative flex h-full flex-col gap-4 overflow-hidden p-5 sm:p-6">
                  <div className="flex items-start gap-3 pr-8">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-border-strong bg-surface-2 text-accent">
                      <Icon className="size-[18px]" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                        Quality Layer {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 text-base font-medium leading-snug text-foreground">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-3 font-mono text-4xl font-semibold leading-none text-accent/[0.07]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
                    {pillar.summary}
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {pillar.coverage.map((item) => (
                      <li
                        key={item}
                        className="rounded-[var(--radius-sm)] border border-border bg-surface-2 px-2.5 py-1.5 font-mono text-[9px] uppercase leading-tight tracking-wide text-foreground/75 sm:text-[10px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.22}>
          <div className="mt-4 rounded-[var(--radius-lg)] border border-border bg-surface/80 p-4 shadow-xs sm:p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
              Supporting Coverage
            </p>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-4">
              {supportingGroups.map((group) => (
                <div key={group.label} className="min-w-0">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                    {group.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/80">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {iconizedTools.length > 0 ? (
          <Reveal delay={0.28}>
            <div className="mt-10">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                Core Tools &amp; Technologies
              </h3>
              <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                {iconizedTools.map((tool) => (
                  <IconTile key={tool} name={tool} label={toolFocus[tool]} />
                ))}
              </div>
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
