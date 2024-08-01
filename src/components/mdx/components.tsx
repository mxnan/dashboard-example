import { cn } from "@/lib/utils";
import React from "react";
import CopyButton from "./copy-button";
import { Terminal } from "lucide-react";

export const mdxComponents = {
  // custom h1 , h2
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-5xl  sm:text-6xl lg:text-8xl font-medium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const id = React.useMemo(() => {
      if (props.id) return props.id;
      if (typeof props.children === "string") {
        return props.children.toLowerCase().replace(/\s+/g, "-");
      }
      return "";
    }, [props.id, props.children]);

    return (
      <h2
        id={id}
        className={cn(
          "mt-10 scroll-m-20 pb-2 pr-4 border-b border-custom text-3xl lg:text-4xl capitalize font-semibold w-max first:mt-0",
          className
        )}
        {...props}
      />
    );
  },
  //custom a tag
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => {
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
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
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
          className="bg-zinc-100 dark:bg-stone-900
         border border-custom rounded-lg"
        >
          <div className="px-4 py-3 border-b border-custom flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Icon className="h-5 w-5" />
              <span>
                {
                  //@ts-ignore
                  node?.data?.meta
                }
              </span>
            </div>
            <CopyButton id={id} />
          </div>
          <div className="overflow-x-auto w-full p-4">
            <code className="text-sm" id={id}>
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
};
