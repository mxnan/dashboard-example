import { BackButton } from "@/components/mdx/back-button";
import { MdxH2 } from "@/components/mdx/h2";

import { MdxLink } from "@/components/mdx/mdx-link";
import { type MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: MdxLink,
    h2: MdxH2,
    BackButton: BackButton,
  };
}
