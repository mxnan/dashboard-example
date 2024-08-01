import React from "react";

export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full min-h-screen relative flex-1 py-6">
      {children}
    </section>
  );
}
