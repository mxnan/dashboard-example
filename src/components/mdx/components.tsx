import { cn } from "@/lib/utils";
import React from "react";

export const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-6xl font-medium tracking-tight",
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
          "mt-10 scroll-m-20 border-b pb-2 text-3xl uppercase font-semibold tracking-tight first:mt-0",
          className
        )}
        {...props}
      />
    );
  },
};
