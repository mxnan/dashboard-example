"use client";
import React from "react";
import Meteors from "./magicui/meteors";
import { motion } from "framer-motion";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { GitBranchPlus, LinkedinIcon } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";

const MeteorInfo = () => {
  return (
    <div className="h-[700px] flexcenter ">
      <div className="relative group/meteor  flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
        <Meteors number={10} />
        {/* content */}
        <motion.div
          whileInView={{
            opacity: 1,
            transition: {
              duration: 2,
              delay: 0.5,
              ease: "easeInOut",
              type: "tween",
              stiffness: 100,
              damping: 20,
              restDelta: 0.001,
            },
          }}
          className="flex flex-col opacity-0 gap-24 sm:gap-8 p-4"
        >
          <p className=" whitespace-pre-wrap bg-gradient-to-b from-black to-gray-400/60 dark:from-white dark:to-stone-900/90 bg-clip-text text-center text-5xl md:text-[6rem] lg:text-[10rem] 2xl:text-[16rem] font-semibold leading-none text-transparent ">
            Connect ?
          </p>

          {/* social links */}
          <div className="flexcenter max-sm:flex-col gap-3 ">
            <span className="relative font-title w-max capitalize font-medium text-xl px-6 py-2 ml-2 rounded-2xl  ">
              <BorderBeam />
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://twitter.com/etc_etcx"
                className="custom-underline pb-3 flexcenter gap-2"
              >
                twitter <TwitterLogoIcon className="w-5 h-5" />
              </a>
            </span>
            <span className=" relative font-title w-max capitalize font-medium text-xl px-6 py-2 ml-2 rounded-2xl ">
              <BorderBeam />
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://twitter.com/etc_etcx"
                className="custom-underline pb-3 flexcenter gap-2"
              >
                linkedin <LinkedinIcon className="w-5 h-5" />
              </a>
            </span>
            <span className="relative font-title w-max capitalize font-medium text-xl px-6 py-2 ml-2 rounded-2xl ">
              <BorderBeam />
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/mxnan"
                className="custom-underline pb-3 flexcenter gap-2"
              >
                github <GitBranchPlus className="w-5 h-5" />
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MeteorInfo;
