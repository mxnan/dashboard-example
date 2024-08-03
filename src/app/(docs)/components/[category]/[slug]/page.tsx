// app/components/[category]/[slug]/page.tsx
import MDXContent from "@/components/mdx/components";

import { getComponentBySlug, getAllComponents } from "@/lib/component-api";
import dynamic from "next/dynamic";

//toc has to be dynamic import
const DynamicTableOfContents = dynamic(
  () => import("@/components/mdx/toc").then((mod) => mod.TableOfContents),
  {
    ssr: false,
  }
);

export default function ComponentPage({ params }: { params: { category: string, slug: string } }) {
  const component = getComponentBySlug(`${params.category}/${params.slug}`);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{component.title}</h1>
      <p className="text-lg mb-4">{component.description}</p>
      <div className="flex flex-wrap mb-4">
        {component.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="flex">
        <div className="w-3/4 pr-8">
          <MDXContent source={component.content} />
        </div>
        <div className="w-1/4">
          <DynamicTableOfContents toc={component.toc} />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const components = getAllComponents();
  return components.map((component) => ({
    category: component.category,
    slug: component.slug.split('/').pop(),
  }));
}