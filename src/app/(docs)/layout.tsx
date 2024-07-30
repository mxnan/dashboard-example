import React from "react";

export default async function MdxLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen relative flex">
      <nav className="max-w-[200px] w-full max-md:hidden">leftbar</nav>
      <section className="w-full container">
        <article className="prose">{children}</article>
      </section>
      <div className="max-w-[200px] w-full hidden lg:block">right</div>
    </div>
  );
}
