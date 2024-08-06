import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/panda-syntax-light.css";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import CopyPasteButton from "./copy-button";
import Codeblock from "./codeblock";

export default function MDXContent({ source }: { source: string }) {
  return (
    <Markdown
      rehypePlugins={[rehypeHighlight]}
      components={{
        // custom h1 , h2
        h1: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLHeadingElement>) => (
          <h1
            className={cn(
              "mt-2 scroll-m-20 text-5xl  sm:text-6xl lg:text-8xl font-medium tracking-tight",
              className
            )}
            {...props}
          />
        ),
        h2: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLHeadingElement>) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const id = React.useMemo(() => {
            if (props.id) return props.id;
            if (typeof props.children === "string") {
              return props.children.toLowerCase().replace(/\s+/g, "-");
            }
            return "";
          }, [props.id, props.children]);

          return (
            <div className="relative w-max group/underline">
              <span
                className="absolute bottom-0 rotate-3 group-hover/underline:-rotate-1
              transition-transform ease-in-out duration-200
               bg-plight dark:bg-pdark rounded-md h-[6px] w-full"
              />
              <h2
                id={id}
                className={cn(
                  "mt-10 scroll-m-20 pb-2 pr-4  font-title uppercase text-3xl lg:text-4xl  font-semibold w-max first:mt-0",
                  className
                )}
                {...props}
              />
            </div>
          );
        },
        //custom a tag for external links
        a: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLAnchorElement>) => {
          return (
            <a
              rel="noreferrer noopener"
              target="_blank"
              className={cn(
                "font-bold text-stone-600 text-base dark:text-stone-500 py-3 px-1 custom-underline",
                className
              )}
              {...props}
            />
          );
        },
        // custom code block
        pre: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLPreElement>) => {
          return (
            <pre
              className={cn("my-4 overflow-x-auto rounded-lg p-6", className)}
              {...props}
            />
          );
        },
        code: Codeblock,
        //
      }}
    >
      {source}
    </Markdown>
  );
}
