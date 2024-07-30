"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import {
  ContentCard,
  HoveredLink,
  Menu,
  MenuItem,
} from "@/components/ui/navbar-menu";
import { Button } from "@/components/ui/button";
import MobileNav from "./mobile-nav";
import {
  CircleArrowDownIcon,
  CircleArrowRightIcon,
  GitBranchPlus,
  MailCheckIcon,
  TwitterIcon,
} from "lucide-react";
import ThemeToggle from "./theme-toggle";

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
    <header className="relative w-full z-50 bg-white dark:bg-black ">
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </header>
  );
}
function DesktopNav({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

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
        type: "spring",
        damping: 30,
        stiffness: 120,
        restDelta: 0.001,
      }}
      className={cn(
        "w-full fixed-nav fixed top-0 dark:border-stone-800 max-sm:py-6 inset-x-0   ",
        isHidden ? "border-b-[5px] " : "border-b-[1px]",
        className
      )}
    >
      <div className="px-[1.5rem] max-w-[1686px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          mxnan.com
        </Link>

        <Menu setActive={setActive}>
          {/*Solutions*/}
          <MenuItem setActive={setActive} active={active} item="components">
            <div className="relative flex max-xl:flex-col gap-4">
              <ContentCard
                title="How a multi-billion dollar manufacturer boosted sales volume with Industrial AI."
                href="/content/content1.webp"
                src="/og.jpg"
                description="Industrial AI built a custom automated quoting solution using Generative AI integrated with ERP and CRM systems."
              />
              <ContentCard
                title="How a multi-billion dollar manufacturer boosted sales volume with Industrial AI."
                href="/content/content1.webp"
                src="/og.jpg"
                description="Industrial AI built a custom automated quoting solution using Generative AI integrated with ERP and CRM systems."
              />

            </div>
          </MenuItem>
          {/*Our  Approach*/}
          <MenuItem
            setActive={setActive}
            active={active}
            icon={<CircleArrowDownIcon className="h-5 w-5" />}
            item="/"
          >
            <Button
              variant={"ghost"}
              size={"lg"}
              className="flex  font-semibold items-center gap-3 group/button "
            >
              <Link href={"/approach"}>Our Approach</Link>
              <CircleArrowRightIcon className="w-5 h-5 group-hover/button:rotate-[25deg] transition-transform ease-in-out duration-200" />
            </Button>
          </MenuItem>
          {/*Security*/}
          <MenuItem
            setActive={setActive}
            active={active}
            icon={<CircleArrowDownIcon className="h-5 w-5" />}
            item="/blog"
          >
            <Button
              variant={"ghost"}
              size={"lg"}
              className="flex font-semibold items-center gap-3 group/button"
            >
              <Link href={"/security"}>Security</Link>
              <CircleArrowRightIcon className="w-5 h-5 group-hover/button:rotate-[25deg] transition-transform ease-in-out duration-200" />
            </Button>
          </MenuItem>
          {/*Company*/}
          <MenuItem setActive={setActive} active={active} item="contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">
                email <MailCheckIcon />
              </HoveredLink>
              <HoveredLink href="/individual">
                github <GitBranchPlus />
              </HoveredLink>
              <HoveredLink href="/team">
                twitter
                <TwitterIcon />
              </HoveredLink>
            </div>
          </MenuItem>
        </Menu>

        <ThemeToggle />
      </div>
    </motion.div>
  );
}
