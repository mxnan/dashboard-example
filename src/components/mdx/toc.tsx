"use client";

import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { CornerDownRight } from "lucide-react";

interface TocEntry {
  title: string;
  slug: string;
}

interface TocProps {
  toc: TocEntry[];
}

export function TableOfContents({ toc }: TocProps) {
  const [activeId, setActiveId] = useState("");

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id);
      }
    });
  }, []);

  useEffect(() => {
    const headingElements = toc
      .map((item) => document.getElementById(item.slug))
      .filter(Boolean);

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "-10% 0% -30% 0%",
      threshold: 0.5,
    });

    headingElements.forEach((element) => element && observer.observe(element));

    return () => observer.disconnect();
  }, [toc, handleObserver]);

  return (
    <nav className="space-y-4">
      <p className="font-medium text-lg">Table of contents</p>
      <ul className="space-y-6 text-sm font-normal">
        {toc.map((item) => (
          <TableOfContentsItem
            key={item.slug}
            item={item}
            isActive={item.slug === activeId}
          />
        ))}
      </ul>
    </nav>
  );
}

interface TableOfContentsItemProps {
  item: TocEntry;
  isActive: boolean;
}

function TableOfContentsItem({ item, isActive }: TableOfContentsItemProps) {
  return (
    <li className="ml-2 py-2">
      <a
        href={`#${item.slug}`}
        className={cn(
          " capitalize transition-all ease-in-out duration-100 flex gap-3  ",
          isActive
            ? " text-black dark:text-white"
            : " text-stone-400  dark:text-stone-500"
        )}
      >
        <CornerDownRight className="w-4 h-4 " />
        <span
          className={cn(
            "transition-all ease-in-out duration-100",
            isActive
              ? "translate-x-4 font-semibold "
              : "translate-x-0 translate-y-0"
          )}
        >
          {item.title}
        </span>
      </a>
    </li>
  );
}
