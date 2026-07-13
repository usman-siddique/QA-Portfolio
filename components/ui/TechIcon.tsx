import {
  SiPython,
  SiPytest,
  SiPostman,
  SiApachejmeter,
  SiJirasoftware,
  SiGithub,
  SiGit,
  SiMysql,
  SiFigma,
  SiGooglechrome,
  SiTrello,
  SiTestrail,
} from "react-icons/si";
import { Database, MonitorSmartphone } from "lucide-react";
import { cn } from "@/lib/utils";

type IconComponent = React.ComponentType<{
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}>;

function PlaywrightMark({ className }: { className?: string }) {
  // Playwright has no Simple Icons entry — hand-drawn monochrome
  // approximation of its ringed logomark, kept simple and on-brand.
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 5.5c2.4 1.4 3.8 3.7 3.8 6.5s-1.4 5.1-3.8 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9.5 8.2 12 12l-2.5 3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const iconMap: Record<string, IconComponent> = {
  Playwright: PlaywrightMark,
  Python: SiPython,
  Pytest: SiPytest,
  Postman: SiPostman,
  JMeter: SiApachejmeter,
  "Apache JMeter": SiApachejmeter,
  Jira: SiJirasoftware,
  GitHub: SiGithub,
  Git: SiGit,
  MySQL: SiMysql,
  Figma: SiFigma,
  "Chrome DevTools": SiGooglechrome,
  Trello: SiTrello,
  TestRail: SiTestrail,
  // SQLyog and BrowserStack have no official mark in Simple Icons (checked
  // the full current set) — rather than fabricate an inaccurate logo, these
  // use neutral, honest concept icons instead of a claimed brand mark.
  SQLyog: Database,
  BrowserStack: MonitorSmartphone,
};

export function hasTechIcon(name: string) {
  return name in iconMap;
}

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={cn("size-full", className)} aria-hidden="true" />;
}
