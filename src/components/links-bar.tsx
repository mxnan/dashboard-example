"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function LinksBar() {
  const router = usePathname();
  return (
    <div className="flex flex-wrap max-md:gap-4 gap-8 pl-4 lg:pl-16 border-t border-b ">
      <Link
        className={cn(
          "font-medium text-lg relative p-3 py-4",
          router === "/" ? "text-lightaccent " : ""
        )}
        href={"/"}
      >
        Job Preview
        <span
          className={cn(
            router === "/"
              ? "absolute bottom-0  right-1/2 translate-x-1/2 bg-lightaccent w-1/2 h-1"
              : ""
          )}
        />
      </Link>
      <Link
        className={cn(
          "font-medium text-lg relative p-3 py-4",
          router === "/applicants" ? "text-lightaccent" : ""
        )}
        href={"/applicants"}
      >
        Applicants
        <span
          className={cn(
            router === "/applicants"
              ? "absolute bottom-0  right-1/2 translate-x-1/2 bg-lightaccent w-1/2 h-1"
              : ""
          )}
        />
      </Link>
      <Link
        className={cn(
          "font-medium text-lg relative p-3 py-4",
          router === "/matches" ? "text-lightaccent" : ""
        )}
        href={"/matches"}
      >
        Match
        <span
          className={cn(
            router === "/matches"
              ? "absolute bottom-0  right-1/2 translate-x-1/2 bg-lightaccent w-1/2 h-1"
              : ""
          )}
        />
      </Link>
      <Link
        className={cn(
          "font-medium text-lg relative p-3 py-4",
          router === "/messages" ? "text-lightaccent" : ""
        )}
        href={"/messages"}
      >
        Messages
       <span
          className={cn(
            router === "/messages"
              ? "absolute bottom-0  right-1/2 translate-x-1/2 bg-lightaccent w-1/2 h-1"
              : ""
          )}
        />
      </Link>
    </div>
  );
}
