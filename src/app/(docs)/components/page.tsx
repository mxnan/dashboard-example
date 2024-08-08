// app/components/page.tsx
import MDXContent from "@/components/mdx/components";
import { getComponentBySlug } from "@/lib/component-api";

//metadata
export const metadata = {
  title: "Intro",
  description: "Intro to Components Library",
};

export default function ComponentsPage() {
  const introComponent = getComponentBySlug("introduction");

  return (
    <section className="max-w-4xl mx-auto ">
      <article className="prose-sm">
        <MDXContent source={introComponent.content} />
      </article>
    </section>
  );
}
