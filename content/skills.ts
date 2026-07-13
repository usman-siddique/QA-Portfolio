import type { SkillCategory } from "@/types/content";

// Consolidated from README "What I Do" + "Skills & Tools" and résumé "Skills".
// Deliberately not split into 3 overlapping lists, and no fabricated proficiency percentages.
export const skills: SkillCategory[] = [
  {
    category: "Testing Practices",
    items: [
      "Functional Testing",
      "Regression Testing",
      "Exploratory Testing",
      "UI/UX Testing",
      "Cross-Browser & Cross-Device Testing",
      "API Testing",
      "Database Testing",
      "Performance & Load Testing",
    ],
  },
  {
    category: "Automation & Programming",
    items: [
      "Playwright",
      "Python",
      "Pytest",
      "Page Object Model (POM)",
      "Multi-Browser Automation",
      "Parallel Execution (pytest-xdist)",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Postman",
      "Apache JMeter",
      "Jira",
      "Bugzilla",
      "Zephyr Scale",
      "TestRail",
      "BrowserStack",
      "Git",
      "GitHub",
      "SQLyog",
      "Figma",
      "Chrome DevTools",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQL Server", "SQLyog"],
  },
  {
    category: "Platforms Tested",
    items: ["Web", "Desktop", "iOS", "Android"],
  },
  {
    category: "Process & Methodology",
    items: ["SDLC", "STLC", "Agile", "Scrum"],
  },
];
