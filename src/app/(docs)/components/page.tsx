// app/components/page.tsx

import MDXContent from "@/components/mdx/components";
import { getComponentBySlug } from "@/lib/component-api";

export default function ComponentsPage() {
  const introComponent = getComponentBySlug('introduction');

  return (
    <div className="max-w-4xl mx-auto prose-sm">
      <h1 className="text-3xl font-bold mb-6">{introComponent.title}</h1>
      <MDXContent source={introComponent.content} />
    </div>
  );
}