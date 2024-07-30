// components/mdx/mdx-h1.tsx
import React from "react";

type MdxH3Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const MdxH3 = React.forwardRef<HTMLHeadingElement, MdxH3Props>(
  ({ children, className, ...rest }, ref) => {
    return (
      <h3
        ref={ref}
        className={`text-3xl max-lg:text-xl max-md:text-lg font-bold mb-4 text-gray-900 dark:text-gray-100 ${
          className || ""
        }`}
        {...rest}
      >
        {children}
      </h3>
    );
  }
);

MdxH3.displayName = "MdxH1";
