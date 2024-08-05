"use client";
import React from "react";
import Meteors from "./magicui/meteors";
import { Button } from "./ui/button";

const MeteorInfo = () => {
  return (
    <div className="h-[700px] flexcenter ">
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
        <Meteors number={10} />
        <div className="flex flex-col gap-8">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-200 bg-clip-text text-center text-5xl md:text-[6rem] lg:text-[10rem] 2xl:text-[16rem] font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Connect ?
          </span>
          <div className="flexcenter gap-4">
            <Button variant={"ghost"} className="mt-2">
              <a href="">twitter</a>
            </Button>
            <Button variant={"ghost"} className="mt-2">
              <a href="">linkedin</a>
            </Button>
            <Button variant={"ghost"} className="mt-2">
              <a href="">github</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeteorInfo;
