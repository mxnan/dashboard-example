import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/utils";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = createMetadata(
  "Home",
  "homepage description"
);
export default function page() {
  return (
    <div>
      <Button>Button</Button>
      <ThemeToggle />
    </div>
  );
}
