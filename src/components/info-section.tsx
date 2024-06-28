import React from "react";
import { DotFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function InfoSection() {
  return (
    <section className="flex-1 w-full ">
      <div className="flex flex-col border-b w-full flex-wrap max-md:gap-4 pl-4  lg:pl-24 gap-6 py-10">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-5xl font-medium">Senior Product Designer</h1>
          <DotFilledIcon className="text-stone-500" />
          <p className="text-stone-500">posted 2 days ago</p>
          <span className="flex items-center px-2 py-1 rounded-full border bg-emerald-100 text-emerald-900 ">
            <DotFilledIcon />
            Open
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Image src={"location.svg"} alt="logo" width={16} height={16} />
          <p>Delaware,USA</p>
          <DotFilledIcon />
          <Image src={"salary.svg"} alt="logo" width={20} height={20} />
          <p>$300k-$400k</p>
        </div>
      </div>
      <div className="border-b w-full flex max-md:flex-col max-md:gap-4 md:gap-24 lg:gap-44 pl-4  lg:pl-24  py-10">
        <div className="flex flex-col gap-3">
          <p className="text-stone-500">Skills Required</p>
          <div className="flex flex-col max-md:flex-row gap-2">
            <span className="flex gap-2 w-max items-center px-2 py-1 border rounded-xl">
              <Image src={"figma.svg"} alt="logo" width={20} height={20} />
              Figma
            </span>
            <span className="flex gap-2 w-max items-center px-2 py-1 border rounded-xl">
              <Image src={"adobe1.svg"} alt="logo" width={20} height={20} />
              Adobe Illustrator
            </span>
            <span className="flex gap-2 w-max items-center px-2 py-1 border rounded-xl">
              <Image src={"adobe2.svg"} alt="logo" width={20} height={20} />
              Adobe XD
            </span>
          </div>
        </div>
        <div className="flex flex-col max-md:flex-row gap-3">
          <p className="text-stone-500">Preferred Language</p>
          <p className="font-semibold">English</p>
        </div>
        <div className="flex flex-col max-md:flex-row gap-3">
          <p className="text-stone-500">Type</p>
          <p className="font-semibold">Full time</p>
        </div>
        <div className="flex flex-col max-md:flex-row gap-3">
          <p className="text-stone-500">Years of Experience</p>
          <p className="font-semibold">3+ Years of Experience</p>
        </div>
      </div>
      <div className="border-b w-full flex gap-2 flex-col flex-wrap  pl-4  lg:pl-24  py-10">
        <p className="text-stone-600">About the job</p>

        <ul className="font-medium text-stone-700">
          <li>1. Handle the UI/UX research design.</li>
          <li>
            2. Work on researching on latest web applications designs & trends
          </li>
          <li>3. Work on conceptualizing and visualizing</li>
          <li>
            4. Work on creating graphics content and other graphic related works
          </li>

          <li>Benefits</li>
          <li className="flex items-center gap-1">
            <DotFilledIcon /> Health insurance
          </li>
          <li className="flex items-center gap-1">
            <DotFilledIcon /> Provident Fund
          </li>

          <li>Schedule</li>
          <li className="flex items-center gap-1">
            <DotFilledIcon /> Day shift
          </li>

          <li>Supplemental pay types:</li>
          <li className="flex items-center gap-1">
            <DotFilledIcon /> Performance bonus
          </li>
          <li className="flex items-center gap-1">
            <DotFilledIcon />
            Yearly bonus
          </li>

          <li>Work Location: In person</li>
        </ul>
      </div>
      <div className="border-b w-full flex flex-col flex-wrap gap-12  pl-4  lg:pl-24  py-10">
        <div className="flex items-center gap-4">
          <Image src={"logo2.svg"} alt="logo" width={44} height={44} />
          <p className="text-2xl">Atlassian</p>
        </div>
        <ul className="grid grid-cols-2 gap-4 justify-items-start max-w-4xl">
          <li>
            <p className="font-light">Company size</p>{" "}
            <p className="font-semibold">1k - 2k Employees</p>
          </li>
          <li>
            <p className="font-light">Type</p>{" "}
            <p className="font-semibold">Private</p>
          </li>
          <li>
            <p className="font-light">Sector</p>{" "}
            <p className="font-semibold">
              Information Technology, Infrastructure
            </p>
          </li>
          <li>
            <p className="font-light">Funding</p>{" "}
            <p className="font-semibold">Bootstrapped</p>
          </li>
          <li>
            <p className="font-light">Founded In</p>{" "}
            <p className="font-semibold">2019</p>
          </li>
          <li>
            <p className="font-light">Founded By</p>{" "}
            <p className="font-semibold">Scott Farquhar, Mike Cannon-Brookes</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
