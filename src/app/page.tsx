import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

import React from "react";

export default function page() {
  return (
    <section className="min-h-screen w-full">
      <Button>Button</Button>
      <ThemeToggle />
    </section>
  );
}
