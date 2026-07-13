export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  upwork: string | null;
  resumeUrl: string;
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface Experience {
  slug: string;
  company: string;
  companyUrl: string;
  title: string;
  employmentType: string | null;
  startDate: string;
  endDate: string | null;
  domain: string[];
  overview: string;
  metrics: MetricItem[];
  responsibilities: string[];
  tools: string[];
  isFlagship: boolean;
}

export interface Artifact {
  name: string;
  tagline: string;
  description: string;
  repoUrl: string;
  tools: string[];
  facts: MetricItem[];
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  provider: string;
  issued: string;
  credentialId: string | null;
  credentialUrl: string | null;
}

export interface Education {
  degree: string;
  institution: string;
  dateRange: string;
  summary: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string | null;
}
