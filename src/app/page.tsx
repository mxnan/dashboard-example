import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/utils";
import React from "react";

export const metadata = createMetadata("Home", "homepage description");
export default function page() {
  return (
    <section className="min-h-screen w-full">
      <Button>Button</Button>
      <ThemeToggle />
    </section>
  );
}
