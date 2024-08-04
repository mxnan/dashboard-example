// app/components/[category]/[slug]/page.tsx
import MDXContent from "@/components/mdx/components";
import { getComponentBySlug, getAllComponents } from "@/lib/component-api";
import dynamic from "next/dynamic";

const DynamicTableOfContents = dynamic(
  () => import("@/components/mdx/toc").then((mod) => mod.TableOfContents),
  {
    ssr: false,
  }
);

export default function ComponentPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const component = getComponentBySlug(`${params.category}/${params.slug}`);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full max-w-4xl mx-auto ">
        <div className="flex-1 w-full">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{component.title}</h1>
          <p className="text-base md:text-lg mb-4">{component.description}</p>
          <div className="flex flex-wrap mb-4">
            {component.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="max-w-3xl w-full md:px-2 prose-sm">
          <MDXContent source={component.content} />
        </div>
      </div>
      <div className="w-full hidden 2xl:right-16 xl:flex lg:w-1/4 xl:w-36 xl:fixed lg:right-6 ">
        <DynamicTableOfContents toc={component.toc} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const components = getAllComponents();
  return components.map((component) => ({
    category: component.category,
    slug: component.slug.split("/").pop(),
  }));
}