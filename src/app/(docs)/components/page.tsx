// app/components/page.tsx
import MDXContent from "@/components/mdx/components";
import { getComponentBySlug } from "@/lib/component-api";

export default function ComponentsPage() {
  const introComponent = getComponentBySlug("introduction");

  return (
    <div className="max-w-4xl mx-auto ">
      <article className="prose-sm">
        <MDXContent source={introComponent.content} />
      </article>
    </div>
  );
}
