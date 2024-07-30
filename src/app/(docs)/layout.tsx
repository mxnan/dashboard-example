import NavigationSidebar from "@/components/nav-sidebar";
import React from "react";

export default async function MdxLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen relative flex py-6">
      <NavigationSidebar />
      <section className="w-full ">
        <article className="prose-sm lg:prose-lg xl:prose-xl w-full lg:prose-h1:text-7xl ">
          {children}
        </article>
      </section>
      <div className="max-w-[200px] w-full hidden lg:block">right</div>
    </div>
  );
}
