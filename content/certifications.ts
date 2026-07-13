import type { Certification } from "@/types/content";

// Source of truth: user-provided credential details.
// IT Mustakbil Training Program was in-person — no credential ID or
// verification link exists, and none should be implied.
export const certifications: Certification[] = [
  {
    name: "Playwright Python and Pytest for Web Automation Testing",
    provider: "Coursera",
    issued: "April 2026",
    credentialId: "N8ATQP151QBC",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/N8ATQP151QBC",
  },
  {
    name: "Master JMeter on Live Apps for Performance Testing",
    provider: "Coursera",
    issued: "January 2026",
    credentialId: "T8C2PP7I2OBR",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/T8C2PP7I2OBR",
  },
  {
    name: "IT Mustakbil Training Program",
    provider: "Systems Limited",
    issued: "2024",
    credentialId: null,
    credentialUrl: null,
  },
];
