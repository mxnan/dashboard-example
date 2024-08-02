"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const transition = {
  type: "tween",
  mass: 0.5,
  damping: 20,
  stiffness: 150,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  icon,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  // Create an absolute path
  const href = item.startsWith("/") ? item : `/${item.toLowerCase()}`;
  return (
    <div
      onClick={() => setActive(item)}
      onMouseEnter={() => setActive(item)}
      className="relative group/item"
    >
      <Link href={href}>
        <motion.p
          transition={{ duration: 0.3 }}
          className={cn(
            "relative capitalize cursor-pointer h-16 text-center py-5 px-5 font-normal max-md:px-3 lg:px-7 text-sm md:text-base",
            active === item &&
              "text-stone-500  dark:text-stone-400 transition-colors ease-in-out duration-300"
          )}
        >
          {!icon ? (
            <span>{item}</span>
          ) : (
            <span
              className={cn(
                "inline-block transition-transform ease-in-out duration-300",
                item === "Our Approach"
                  ? "group-hover/item:-rotate-[25deg]"
                  : item === "Security"
                  ? "group-hover/item:rotate-[25deg]"
                  : "group-hover/item:rotate-0"
              )}
            >
              {icon}
            </span>
          )}
        </motion.p>
      </Link>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 1, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[60px] left-1/2 sm:-translate-x-1/3 lg:-translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative flexcenter"
    >
      {children}
    </div>
  );
};

export const ContentCard = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className="flex flex-row items-center space-x-4  p-4 rounded-xl group/card "
    >
      <div className="flex-1 space-y-2 pr-2">
        <h4
          className={cn(
            "text-lg  uppercase font-bold",
            pathname === href && "text-plight dark:text-pdark"
          )}
        >
          {title}
        </h4>
        <p className="text-base  capitalize font-light group-hover/card:translate-y-2 group-hover/card:translate-x-1 transition-transform ease-in-out duration-500">
          {description}
        </p>
      </div>
      <div className="relative w-36 h-24 group-hover/card:translate-x-2 transition-transform ease-in-out duration-500  flex-shrink-0">
        <Image
          src={src}
          alt={title}
          fill
          priority
          style={{ objectFit: "cover" }}
          className="rounded-lg "
          sizes="(max-width: 768px) 128px, 128px"
        />
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="flex items-center justify-between pb-2 border-b capitalize gap-4  text-stone-700 dark:text-stone-300 hover:text-stone-500 dark:hover:text-stone-400"
    >
      {children}
    </Link>
  );
};
