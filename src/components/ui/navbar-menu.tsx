"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { BorderBeam } from "../magicui/border-beam";
import Meteors from "../magicui/meteors";

const transition = {
  type: "tween",
  mass: 0.5,
  damping: 20,
  stiffness: 150,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// menu items and their popup div
export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const pathname = usePathname();
  const href = item.startsWith("/") ? item : `/${item.toLowerCase()}`;
  const isSelected = pathname === href;

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
            "relative capitalize cursor-pointer tracking-wide h-16 flex items-center",
            active === item &&
              "-translate-y-1 transition-transform ease-in-out duration-700"
          )}
        >
          {/* ghost button classes */}
          <span
            className={cn(
              "font-title font-medium text-xl px-6 py-2 ml-2 rounded-2xl hover:bg-stone-100 dark:hover:bg-stone-900 transition-all ease-in-out duration-300",
              isSelected && " text-gray-500 dark:text-gray-300  "
            )}
          >
            {item}
          </span>
        </motion.p>
      </Link>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 1, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[62px] left-1/2 w-min -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-stone-100 dark:bg-stone-900 backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="relative w-max h-full p-4">
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

//main menu container
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

//card for displaying blogs and components
export const ContentCard = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description?: string;
  href: string;
  src: string;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className="flex flex-row items-center space-x-4 p-2 rounded-xl group/card "
    >
      <div className="flex-1 space-y-2 pr-2">
        <h4
          className={cn(
            "text-sm uppercase font-semibold",
            pathname == href && "text-plight dark:text-pdark"
          )}
        >
          {title}
        </h4>
        <p className="text-sm max-w-xs capitalize font-light group-hover/card:translate-y-2 group-hover/card:translate-x-1 transition-transform ease-in-out duration-500">
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

//hovered link
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
