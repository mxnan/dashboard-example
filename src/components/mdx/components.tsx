import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/panda-syntax-light.css";
import CopyButton from "./copy-button";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

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
              <span className="absolute bottom-0 rotate-3 group-hover/underline:-rotate-1
              transition-transform ease-in-out duration-200
               bg-plight dark:bg-pdark rounded-md h-[6px] w-full" />
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
        //custom a tag
        a: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLAnchorElement>) => {
          return (
            <a
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
              className={cn(
                "my-4 overflow-x-auto rounded-lg bg-custom p-6",
                className
              )}
              {...props}
            />
          );
        },
        code: ({ node, className, children, ...props }: any) => {
          const match = /language-(\w+)/.exec(className || "");
          if (match?.length) {
            let Icon = Terminal;
            const id = (Math.floor(Math.random() * 100) + 1).toString();
            return (
              <div
                className="bg-stone-50 dark:bg-stone-950  border-[1px]
        border-stone-200 dark:border-stone-800 shadow-md rounded-lg"
              >
                <div className="px-4 py-3  flex items-center justify-between">
                  <div className="flex items-center text-plight dark:text-pdark gap-4">
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-semibold text-plight dark:text-pdark">
                      {
                        //@ts-ignore
                        node?.data?.meta
                      }
                    </span>
                  </div>
                  <CopyButton id={id} />
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
        },
        //
      }}
    >
      {source}
    </Markdown>
  );
}
