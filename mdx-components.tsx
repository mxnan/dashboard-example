import { BackButton } from "@/components/mdx/back-button";
import { MdxLink } from "@/components/mdx/mdx-link";
import { type MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: MdxLink,
    BackButton: BackButton,
  };
}
