"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { ContentCard, Menu, MenuItem } from "@/components/ui/navbar-menu";
import {
  ArrowDown10Icon,
  LinkedinIcon,
  LucideTwitter,
  MailIcon,
} from "lucide-react";
import ThemeToggle from "../theme-toggle";
import MobileNav from "./mobile-nav";
import { usePathname } from "next/navigation";
import { BorderBeam } from "../magicui/border-beam";

export function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    // Check on initial render
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  // useEffect for window resize
  return (
    <header className="relative w-full z-50 bg-stone-50 dark:bg-stone-950 ">
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </header>
  );
}
function DesktopNav({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const pathname = usePathname();

  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onHoverStart={() => setIsHidden(false)}
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
          opacity: 0.5,
          scaleX: 0.95,
        },
        visible: {
          y: "0%",
          opacity: 1,
          scaleX: 1,
        },
      }}
      transition={{
        duration: 0.2,
        type: "tween",
        damping: 30,
        stiffness: 120,
        restDelta: 0.001,
      }}
      className={cn(
        "w-full fixed-nav fixed -top-1  max-sm:py-6 inset-x-0 border-stone-200 dark:border-stone-800   ",
        isHidden ? "border-b-[5px]   " : "border-b-[1px]  ",
        className
      )}
    >
      <BorderBeam />
      <div className="relative mt-2 px-[1.5rem] max-w-[1686px] mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center text-gray-600 dark:text-gray-300 gap-3"
        >
          {pathname === "/" ? (
            <ArrowDown10Icon className="w-5 h-5" />
          ) : (
            <p>mxnan.com</p>
          )}
        </Link>
        <Menu setActive={setActive}>
          {/*Components*/}
          <MenuItem setActive={setActive} active={active} item="Components">
            <div className="flex flex-col space-y-2 md:space-y-4">
              <ContentCard
                title="Shimmer Button"
                href="/components/buttons/shimmer"
                src="/og.jpg"
              />
              <ContentCard
                title="Bounce Loader"
                href="/components/loaders/bounce"
                src="/og.jpg"
              />
            </div>
          </MenuItem>
          {/*Blogs*/}
          <MenuItem setActive={setActive} active={active} item="Blogs">
            <div className="flex flex-col space-y-4 md:space-y-6">
              <ContentCard
                title="emailjs"
                href="/blogs/test"
                src="/og.jpg"
                description="implement emailjs on your app using hooks and shadcn form to recieve emails to sned jasdb dsanbjhd jhshbdsa hsd"
              />
              <ContentCard
                title="test"
                href="/blogs/test2"
                src="/og.jpg"
                description="test test test"
              />
            </div>
          </MenuItem>

          {/*Contact*/}
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 pr-2 text-sm text-gray-600 dark:text-gray-400">
              <a
                href="/contact#email"
                className="flexbetween group pb-2 border-b-[0.1px] border-gray-300 dark:border-gray-600 capitalize gap-4  "
              >
                email{" "}
                <MailIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-in-out duration-500 text-plight dark:text-pdark" />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/manan-negi-377373140/"
                className="flexbetween group pb-2 border-b-[0.1px] border-gray-300 dark:border-gray-600 capitalize gap-4  "
              >
                linkedin{" "}
                <LinkedinIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-in-out duration-500 text-plight dark:text-pdark" />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/etc_etcx"
                className="flexbetween group pb-2 border-b-[0.1px] border-gray-300 dark:border-gray-600 capitalize gap-4  "
              >
                twitter{" "}
                <LucideTwitter className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-in-out duration-500 text-plight dark:text-pdark" />
              </a>
            </div>
          </MenuItem>
        </Menu>
        <ThemeToggle />
      </div>
    </motion.div>
  );
}
