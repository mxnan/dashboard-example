// components/mdx/mdx-h1.tsx
import React from "react";

type MdxH2Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const MdxH2 = React.forwardRef<HTMLHeadingElement, MdxH2Props>(
  ({ children, className, ...rest }, ref) => {
    return (
      <h2 ref={ref} className="text-red-500" {...rest}>
        {children}
      </h2>
    );
  }
);

MdxH2.displayName = "MdxH2";
