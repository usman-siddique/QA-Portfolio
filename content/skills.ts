import type { SkillCategory } from "@/types/content";

// Consolidated from the résumé and verified portfolio content.
// Each skill and tool is shown once so the section stays fast to scan.
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
      "UI/UX",
    ],
  },
  {
    category: "Test Automation",
    items: ["Playwright", "Python", "Pytest", "Page Object Model (POM)"],
  },
  {
    category: "API Testing",
    items: ["Postman", "REST APIs"],
  },
  {
    category: "Database Testing",
    items: ["MySQL", "SQL Server", "SQLyog"],
  },
  {
    category: "Performance Testing",
    items: ["Apache JMeter", "Load Testing"],
  },
  {
    category: "Platforms Tested",
    items: ["Web", "Desktop", "Android", "iOS"],
  },
  {
    category: "Test Case Management",
    items: ["TestRail", "Zephyr Scale"],
  },
  {
    category: "Bug Tracking",
    items: ["Jira", "Bugzilla"],
  },
  {
    category: "Cross-Browser Testing",
    items: ["BrowserStack"],
  },
  {
    category: "Methodologies",
    items: ["Agile", "Scrum", "SDLC", "STLC"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"],
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
  { name: "Jira", label: "Bug Tracking" },
  { name: "TestRail", label: "Test Management" },
  { name: "BrowserStack", label: "Cross-Browser" },
  { name: "Git", label: "Version Control" },
  { name: "GitHub", label: "Code Collaboration" },
  { name: "SQLyog", label: "Database Client" },
  { name: "Figma", label: "Design Handoff" },
  { name: "MySQL", label: "Database" },
  { name: "SQL Server", label: "Database" },
] as const;
