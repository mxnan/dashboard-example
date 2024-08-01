import { cn } from "@/lib/utils";
import React from "react";

export const mdxComponents = {
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
};
