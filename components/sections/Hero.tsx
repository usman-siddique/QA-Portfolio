import { ArrowDownRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="bg-mesh relative overflow-hidden">
      <div aria-hidden="true" className="bg-dot-grid absolute inset-0 -z-10" />
      <Container className="relative grid gap-12 pb-16 pt-10 sm:gap-14 sm:pb-20 sm:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pb-24 lg:pt-14">
        <div className="flex flex-col gap-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" aria-hidden="true" />
                {profile.location}
              </span>
              <span aria-hidden="true">·</span>
              <span>SQA Engineer</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 text-accent">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                Open to opportunities
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-balance max-w-xl text-[clamp(2.5rem,5.5vw,4.25rem)] font-medium leading-[1.05] tracking-tight text-foreground">
              Two years finding what breaks.
              <br />
              Now building the systems that{" "}
              <span className="text-accent">catch it automatically.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              I&apos;m an SQA Engineer testing automotive marketplaces, mobility
              platforms, and SaaS products end-to-end — manual, API,
              performance, and increasingly automation with Playwright and
              Python.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/#work">
                View Case Studies
                <ArrowDownRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href="/#contact" variant="secondary">
                Get in Touch
              </Button>
            </div>
          </Reveal>
        </div>

        <div>
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
