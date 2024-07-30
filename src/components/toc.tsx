"use client";
import React, { useEffect, useState } from "react";

export default function TableOfContents() {
  const tocLinks = [
    { title: "Intro", href: "#intro" },
    { title: "Preview", href: "#preview" },
    { title: "Code", href: "#code" },
  ];

  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      rootMargin: "0px 0px -50% 0px",
      threshold: 0,
    });

    const headings = document.querySelectorAll("article h2");
    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-[200px] relative  w-full pt-4 max-lg:hidden ">
      <div className="lg:flex flex-1 sticky top-24 flex-col items-end gap-8">
        {tocLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className={`text-lg font-medium transition-colors ease-in-out duration-500 ${
              activeId === link.href.substring(1)
                ? "text-blue-600"
                : "hover:text-gray-500 hover:dark:text-gray-400"
            }`}
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
