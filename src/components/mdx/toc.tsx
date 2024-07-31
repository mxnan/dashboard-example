"use client"

import * as React from "react"
import { useEffect, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface TocEntry {
  title: string
  slug: string
}

interface TocProps {
  toc: TocEntry[]
}

export function TableOfContents({ toc }: TocProps) {
  const [activeId, setActiveId] = useState("")

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id)
      }
    })
  }, [])

  useEffect(() => {
    const headingElements = toc.map((item) => document.getElementById(item.slug)).filter(Boolean)
    
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "-40% 0% -40% 0%",
      threshold: 0.5,
    })

    headingElements.forEach((element) => element && observer.observe(element))

    return () => observer.disconnect()
  }, [toc, handleObserver])

  return (
    <nav className="space-y-2">
      <p className="font-medium">Table of contents</p>
      <ul className="space-y-2 text-sm">
        {toc.map((item) => (
          <TableOfContentsItem 
            key={item.slug} 
            item={item} 
            isActive={item.slug === activeId}
          />
        ))}
      </ul>
    </nav>
  )
}

interface TableOfContentsItemProps {
  item: TocEntry
  isActive: boolean
}

function TableOfContentsItem({ item, isActive }: TableOfContentsItemProps) {
  return (
    <li className="ml-2">
      <a
        href={`#${item.slug}`}
        className={cn(
          "block transition-colors duration-200 hover:text-gray-900 dark:hover:text-gray-100",
          isActive
            ? "text-gray-900 dark:text-gray-100 font-medium"
            : "text-gray-500 dark:text-gray-400"
        )}
      >
        {item.title}
      </a>
    </li>
  )
}