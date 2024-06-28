import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

export default function ActionMenu() {
  const items = [
    {
      name: "Applicants",
      count: 400,
      icon: <Image src={"applicant.svg"} alt="logo" width={16} height={16} />,
    },
    {
      name: "Matches",
      count: 100,
      icon: <Image src={"matches.svg"} alt="logo" width={16} height={16} />,
    },
    {
      name: "Messages",
      count: 147,
      icon: <Image src={"messages2.svg"} alt="logo" width={16} height={16} />,
    },
    {
      name: "Views",
      count: 800,
      icon: <Image src={"views.svg"} alt="logo" width={16} height={16} />,
    },
  ];
  return (
    <section className="md:max-w-sm w-full border-l px-8 py-10 flex flex-col gap-6">
      <div className="flex max-md:justify-center text-sm whitespace-nowrap gap-4 max-md:gap-10">
        <button className="bg-lightaccent/10 border-lightaccent border-[1px] rounded-xl px-8 py-2 text-lightaccent flex items-center gap-1 ">
          <Image src={"trash.svg"} alt="logo" width={20} height={20} /> Delete
          Job
        </button>
        <button className="bg-lightaccent rounded-xl px-8 py-2 text-white flex items-center gap-1 ">
          <Pencil1Icon className="w-5 h-5" />
          Edit Job
        </button>
      </div>
      <div className="p-3 flex flex-col gap-4">
        {items.map((item, index) => (
          <div
            className="flex items-center justify-between pb-2 border-b "
            key={index}
          >
            <p className="flex items-center gap-2">
              {item.icon}
              {item.name}
            </p>
            <span>{item.count}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
