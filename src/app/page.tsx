import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import React from "react";


export default function page() {
  return (
    <section className="max-w-[1536px] w-full mx-auto min-h-screen flexcenter flex-1">
      <VelocityScroll
        text="Velocity Scroll"
        default_velocity={5}
        className="font-title text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
    </section>
  );
}
