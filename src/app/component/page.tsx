import { createMetadata } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = createMetadata("Components", "component description");
export default function page() {
  return <div>Component</div>;
}
