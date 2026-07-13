import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { experience } from "@/content/experience";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...experience.map((item) => ({
      url: `${siteConfig.url}/work/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return routes;
}
