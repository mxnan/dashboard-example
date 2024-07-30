"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface NavGroup {
  title: string;
  links: Array<{
    title: string;
    href: string;
    tag?: string;
  }>;
}
export const navLinks: Array<NavGroup> = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "/components" },
      { title: "Playground", href: "/playground" },
    ],
  },
  {
    title: "Components",
    links: [
      { title: "Buttons", href: "/components/buttons" },
      { title: "Loaders", href: "/components/loaders" },
    ],
  },
];
export default function NavigationSidebar() {
  const pathname = usePathname();
  return (
    <nav className="max-w-[200px] w-full max-md:hidden pt-4 flex flex-col gap-8">
      {navLinks.map((group) => (
        <div key={group.title} className="flex flex-col gap-3">
          <p className=" font-semibold">{group.title}</p>
          {group.links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={cn(
                "ml-3 text-sm font-medium hover:text-gray-500 hover:dark:text-gray-400 transition-colors ease-in-out duration-500",
                pathname === link.href
                  ? "text-stone-500 dark:text-stone-400"
                  : ""
              )}
            >
              {link.title}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
}
