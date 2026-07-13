import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ArtifactGrid } from "@/components/sections/ArtifactGrid";
import { Capabilities } from "@/components/sections/Capabilities";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Credentials } from "@/components/sections/Credentials";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <FeaturedWork />
      <ArtifactGrid />
      <Capabilities />
      <ExperienceTimeline />
      <Credentials />
      <Testimonials />
      <Contact />
    </>
  );
}
