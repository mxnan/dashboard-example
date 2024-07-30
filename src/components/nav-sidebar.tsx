import Link from "next/link";
import React from "react";

export default function NavigationSidebar() {
  const sidebarLinks = [
    {
      title: "Intro",
      href: "/custom/buttons/shimmer-button",
    },
  ];
  return (
    <div>
      <Link href={sidebarLinks[0].href}>{sidebarLinks[0].title}</Link>
    </div>
  );
}
