// components/mdx/mdx-h1.tsx
import React from "react";

type MdxH1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const MdxH1 = React.forwardRef<HTMLHeadingElement, MdxH1Props>(
  ({ children, className, ...rest }, ref) => {
    return (
      <h1
        ref={ref}
        className={`text-7xl max-lg:text-5xl max-md:text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 ${
          className || ""
        }`}
        {...rest}
      >
        {children}
      </h1>
    );
  }
);

MdxH1.displayName = "MdxH1";
