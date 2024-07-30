// components/MdxLink.tsx
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface MdxLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
}

export const MdxLink: React.FC<MdxLinkProps> = ({
  href,
  children,
  ...rest
}) => {
  if (href && (href.startsWith("/") || href.startsWith("#"))) {
    return (
      <Link href={href} {...rest}>
        <Button variant={"link"} className="text-base">
          {children}
        </Button>
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
};
