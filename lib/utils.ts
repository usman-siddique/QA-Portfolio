import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateRange(start: string, end: string | null): string {
  const format = (value: string) => {
    const [year, month] = value.split("-").map(Number);
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };
  return `${format(start)} — ${end ? format(end) : "Present"}`;
}
