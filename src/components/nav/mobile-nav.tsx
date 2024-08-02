"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../theme-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const mobileLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Components",
    link: "/components",
  },

  {
    name: "Blogs",
    link: "/blogs",
  },

  {
    name: "Contact",
    link: "/contact",
  },
];
interface MobileLinkProps {
  name: string;
  link: string;
}
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const dropIn = {
    hidden: {
      opacity: 0,
      y: "-100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="relative w-full z-50 bg-white dark:bg-black  ">
      <div
        className="fixed top-0 fixed-nav
      flex items-center justify-between py-4 container"
      >
        <ThemeToggle />
        <div className="relative uppercase  font-body text-lg ">
          <div className="flex items-center justify-between gap-4">
            <Link href={mobileLinks[0].link} legacyBehavior>
              <a
                className={cn(
                  "font-semibold block py-2",
                  pathname === "/" && "text-plight dark:text-pdark"
                )}
              >
                {mobileLinks[0].name}
              </a>
            </Link>
            <button
              className=""
              onClick={toggleMenu}
              aria-label="Toggle Mobile Menu"
            >
              <svg
                className="h-6 w-6 fill-plight dark:fill-pdark "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-10 right-0 w-max mx-auto
                 bg-stone-100 dark:bg-stone-900
                  border-[1px] border-stone-200 dark:border-stone-800
                  shadow-md rounded-xl p-4"
              >
                {mobileLinks.slice(1).map((link: MobileLinkProps) => (
                  <Link key={link.link} href={link.link} legacyBehavior>
                    <a
                      className={cn(
                        "block py-2 font-semibold",
                        link.link === pathname && "text-plight dark:text-pdark"
                      )}
                    >
                      {link.name}
                    </a>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
