import type { SkillCategory } from "@/types/content";

// Consolidated from the résumé and verified portfolio content.
// Ordered in desktop row pairs: left-column capability, then right-column capability.
export const skills: SkillCategory[] = [
  {
    category: "Manual Testing",
    items: [
      "Functional",
      "Regression",
      "Smoke",
      "Sanity",
      "Exploratory",
      "Integration",
      "E2E",
      "UI Validation",
    ],
  },
  {
    category: "Test Automation",
    items: ["Playwright", "Python", "Pytest", "Page Object Model"],
  },
  {
    category: "API Testing",
    items: ["Postman", "REST APIs"],
  },
  {
    category: "Platform Coverage",
    items: ["Web", "Android", "iOS"],
  },
  {
    category: "Database Validation",
    items: ["MySQL", "SQL Server", "SQLyog"],
  },
  {
    category: "Cross-Browser Testing",
    items: ["BrowserStack"],
  },
  {
    category: "Performance Testing",
    items: ["Apache JMeter", "Load Testing"],
  },
  {
    category: "Defect Management",
    items: ["Jira", "Bugzilla"],
  },
  {
    category: "Test Management",
    items: ["TestRail", "Zephyr Scale"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"],
  },
  {
    category: "QA Methodologies",
    items: ["Agile", "Scrum", "SDLC", "STLC"],
  },
  {
    category: "Design Collaboration",
    items: ["Figma"],
  },
];

export const coreTools = [
  { name: "Playwright", label: "Automation" },
  { name: "Python", label: "Programming" },
  { name: "Pytest", label: "Test Framework" },
  { name: "Postman", label: "API Testing" },
  { name: "Apache JMeter", label: "Performance" },
  { name: "Jira", label: "Defect Management" },
  { name: "TestRail", label: "Test Management" },
  { name: "BrowserStack", label: "Cross-Browser" },
  { name: "Git", label: "Version Control" },
  { name: "GitHub", label: "Code Collaboration" },
  { name: "Chrome DevTools", label: "Debugging" },
  { name: "SQLyog", label: "Database Client" },
  { name: "MySQL", label: "Database" },
  { name: "SQL Server", label: "Database" },
] as const;
