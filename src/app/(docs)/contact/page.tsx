import StickyGlobeScroll from "@/components/globe-scroll";
import { ArrowBigDownDash } from "lucide-react";

// Dynamic import with SSR disabled for meteor component
const Meteorsdynamic = dynamic(
  () => import("../../../components/meteor-info"),
  {
    ssr: false,
  }
);
// Dynamic import with SSR disabled for globe component
const Globedynamic = dynamic(() => import("../../../components/globe-scroll"), {
  ssr: false,
});

import dynamic from "next/dynamic";

import React from "react";

export default function page() {
  return (
    <section className="max-w-[1536px] relative w-full mx-auto min-h-screen flex-1 py-16">
      {/* scroll section for 1536 and above*/}
      {/*{" "}
      <div className="w-full max-2xl:hidden flex flex-col items-end gap-16">
        <h1 className="text-[100px] leading-[1.4em] font-title ">
          Contact me ?
        </h1>
        <div className="animate-pulse flex flex-col items-center gap-4 w-1/3">
          <div>
            <div className="w-48 h-6 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            <div className="w-28 h-4 bg-gray-300 dark:bg-gray-700 mx-auto mt-3 rounded-md"></div>
          </div>
          <div className="h-7 bg-gray-300 dark:bg-gray-700 w-full rounded-md"></div>
          <div className="h-7 bg-gray-300 dark:bg-gray-700 w-full rounded-md"></div>
          <div className="h-7 bg-gray-300 dark:bg-gray-700 w-full rounded-md"></div>
          <div className="h-7 bg-gray-300 dark:bg-gray-700 w-1/2 rounded-md"></div>
        </div>
        <div className="w-1/3 text-gray-400 gap-3 flex flex-col  justify-center items-center">
          <span> Scroll down .?</span>
          <ArrowBigDownDash className="w-6 h-6 animate-bounce" />
        </div>
      </div>
      <Globedynamic />*/}
      {/* scroll section for 1536 and above*/}
      {/* for all screens */}
      <Meteorsdynamic />
    </section>
  );
}
