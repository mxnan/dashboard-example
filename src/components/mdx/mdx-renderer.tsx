"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMDXComponents } from "../../../mdx-components";
import { mdxComponents } from "./components";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export default function MDXContent({ source }: MDXContentProps) {
  const components = useMDXComponents({
    ...mdxComponents,
  });

  return <MDXRemote {...source} components={components} />;
}
