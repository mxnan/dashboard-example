import React from "react";
import CopyPasteButton from "./copy-button";
import { LucideFileTerminal } from "lucide-react";

const Codeblock = ({ node, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || "");
  if (match?.length) {
    let Icon = LucideFileTerminal;
    const id = (Math.floor(Math.random() * 100) + 1).toString();
    return (
      <div
        className="bg-stone-50 dark:bg-stone-950  border-[1px]
        border-stone-200 dark:border-stone-800 shadow-md rounded-lg"
      >
        <div className="px-4 py-3 flexbetween">
          <div className="flex items-center h-8 text-plight dark:text-pdark gap-4">
            <Icon size={20} />
            <span className="text-sm font-semibold text-plight dark:text-pdark">
              {
                //@ts-ignore
                node?.data?.meta
              }
            </span>
          </div>
          <CopyPasteButton id={id} />
        </div>
        <div className="overflow-x-auto  w-full p-4">
          <code className="text-sm font-body" id={id}>
            {children}
          </code>
        </div>
      </div>
    );
  } else {
    return (
      <code className="text-lightmode dark:text-darkmode" {...props}>
        {children}
      </code>
    );
  }
};

export default Codeblock;
