import React from "react";

export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="w-full ">{children}</section>;
}
