import type { Artifact } from "@/types/content";

// Independent engineering work, kept separate from client case studies.
// SAT Automation leads — it's the primary automation project and the
// same framework referenced in the SAT Japan case study, surfaced here
// as a standalone, inspectable artifact.
export const artifacts: Artifact[] = [
  {
    name: "SAT Automation",
    tagline: "End-to-end automation framework",
    description:
      "A Playwright + Python automation framework built for a global automotive e-commerce platform, covering Sell My Car, Car Services, and core end-to-end flows.",
    repoUrl: "https://github.com/usman-siddique/SAT_Automation",
    tools: ["Playwright", "Python", "Pytest"],
    facts: [
      { label: "Pattern", value: "Page Object Model" },
      { label: "Coverage", value: "36+ tests" },
      { label: "Execution", value: "Parallel · multi-browser" },
      { label: "Reporting", value: "pytest-html + screenshots" },
    ],
    featured: true,
  },
  {
    name: "JMeter Performance Testing",
    tagline: "API load & performance testing",
    description:
      "Apache JMeter test plans for API load and performance testing — response-time analysis, throughput, and scalability validation under load.",
    repoUrl:
      "https://github.com/usman-siddique/JMeter-API-Load-Performance-Testing",
    tools: ["JMeter"],
    facts: [],
    featured: false,
  },
  {
    name: "Database Testing",
    tagline: "SQL validation & schema testing",
    description:
      "A SQL database testing project covering schema validation and query-based data verification against a realistic sample dataset.",
    repoUrl: "https://github.com/usman-siddique/Superstore-Database-Testing",
    tools: [],
    facts: [],
    featured: false,
  },
];
