// utils/cn function
import { type ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// formatted date function

export const getFormattedDate = (publishedAt: string): string => {
  const now = new Date();
  const [day, month, year] = publishedAt.split("-").map(Number);
  const publishedAtDate = new Date(year, month - 1, day); // month is 0-indexed in JS Date

  const diffTime = now.getTime() - publishedAtDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
};
