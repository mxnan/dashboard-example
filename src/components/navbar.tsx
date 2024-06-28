import React from "react";

import { BellIcon, DropdownMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full ">
      <div className="flex items-center justify-between px-5 py-2 ">
        <button className="px-4 py-2 bg-stone-300">Logo</button>
        <div className="flex gap-12 rounded-full py-3 px-2 border max-md:hidden ">
          <button className="rounded-full px-3 py-2  bg-lightaccent  flex items-center text-white  gap-2">
            <Image src={"jobs.svg"} alt="logo" width={24} height={24} /> Jobs
          </button>
          <button className="rounded-full px-3 py-2  flex items-center text-stone-500  gap-2">
            <Image src={"messages.svg"} alt="logo" width={24} height={24} />
            Messages
          </button>
          <button className="rounded-full px-3 py-2  flex items-center text-stone-500   gap-2">
            <Image src={"payments.svg"} alt="logo" width={24} height={24} />{" "}
            Payments
          </button>
        </div>
        <div className="flex items-center gap-2">
          <BellIcon className="h-6 w-6 mr-1" />
          <button className="rounded-full">
            <Image src={"logo.svg"} alt="logo" width={32} height={32} />
          </button>
          <DropdownMenuIcon className="h-6 w-6" />
        </div>
      </div>
    </nav>
  );
}
