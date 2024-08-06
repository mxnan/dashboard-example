"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Particles from "./magicui/particles";
import { useTheme } from "next-themes";
import Globe from "./magicui/globe";

const animationOrder = {
  step0: 0,
  step5: 0.05,
  step10: 0.1,
  step15: 0.15,
  step20: 0.2,
  step25: 0.25,
  step30: 0.3,
  step35: 0.35,
  step40: 0.4,
  step45: 0.45,
  step50: 0.5,
  step55: 0.55,
  step60: 0.6,
  step65: 0.65,
  step70: 0.7,
  step75: 0.75,
  step80: 0.8,
  step85: 0.85,
  step90: 0.9,
  step95: 0.95,
  step100: 1,
};
const StickyGlobeScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.step0,
      animationOrder.step25,
      animationOrder.step50,
      animationOrder.step75,
      animationOrder.step100,
    ],
    [1, 0.8, 0.8, 0.5, 0.1]
  );
  const y = useTransform(
    scrollYProgress,
    [
      animationOrder.step0,
      animationOrder.step10,
      animationOrder.step25,
      animationOrder.step50,
      animationOrder.step75,
      animationOrder.step90,
      animationOrder.step100,
    ],
    ["50%", "0%", "0%", "0%", "0%", "-20%", "-40%"]
  );

  const x = useTransform(
    scrollYProgress,
    [
      animationOrder.step0,
      animationOrder.step10,
      animationOrder.step20,
      animationOrder.step30,
      animationOrder.step40,
      animationOrder.step50,
      animationOrder.step60,
      animationOrder.step70,
      animationOrder.step80,
      animationOrder.step90,
      animationOrder.step100,
    ],
    [
      "0%",
      "0%",
      "0%",
      "150%",
      "150%",
      "150%",
      "60%",
      "60%",
      "60%",
      "60%",
      "-200%",
    ]
  );

  const opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.step0,
      animationOrder.step10,
      animationOrder.step25,
      animationOrder.step50,
      animationOrder.step75,
      animationOrder.step90,
      animationOrder.step100,
    ],
    [0.2, 0.4, 0.9, 1, 0.7, 0, 0]
  );

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1536); // Adjust breakpoint as needed
    };

    // Check on initial render
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  // useEffect for window resize

  // for color in particles
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#FFFFFF" : "#090A0B");
  }, [theme]);

  return (
    <div
      className={cn("relative w-full h-full ", isMobile ? "hidden" : "block")}
    >
      <Particles
        className="absolute inset-0"
        quantity={300}
        ease={150}
        staticity={30}
        vx={0}
        vy={0.3}
        size={7}
        color={color}
        refresh
      />
      {/* globe container */}
      <div ref={targetRef} className="h-[300vh] w-full relative">
        {/* fixed scrollable globe */}
        <motion.div
          className="fixed top-32 aspect-[1/1] w-full max-w-[600px] mx-auto "
          style={{ scale, x, y, opacity }}
        >
          <Globe className="absolute inset-0 mx-auto " />
        </motion.div>
        {/* text */}
        <motion.div
          style={{ opacity }}
          className="absolute left-10 top-1/3 text-xl font-semibold"
        >
          <p className="uppercase text-8xl text-end">
            Global <br /> Connectivity <br /> At Your <br /> Fingertips.
          </p>
        </motion.div>
        {/* text */}
        <motion.div
          style={{ opacity }}
          className="absolute right-10 top-2/3 text-xl font-semibold"
        >
          <p className="uppercase text-7xl text-end">
            Seamless <br /> Integration, <br />{" "}
            <span className="tracking-wide">Worldwide</span> <br />{" "}
            <span className="tracking-normal">Reach.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default StickyGlobeScroll;
