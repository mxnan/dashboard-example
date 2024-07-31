import NavigationSidebar from "@/components/nav-sidebar";
import TableOfContents from "@/components/toc";
import React from "react";

export default async function MdxLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen relative flex py-6">{children}</div>
  );
}
