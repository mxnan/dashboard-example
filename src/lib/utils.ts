// utils/cn function
import { type ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// utils/metadata.ts
import { Metadata } from "next";

export function createMetadata(title: string, description: string): Metadata {
  return {
    metadataBase: new URL("https://mxnan.com"),
    title: `${title} || mxnan.com`,
    description: `${description} | using app_router, framer motion and nextjs`,
    icons: {
      icon: "/favicon.ico",
    },
  };
}
