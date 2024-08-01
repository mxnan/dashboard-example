import { getAllBlogs, getBlogBySlug } from "@/lib/blog-api";
import { serialize } from "next-mdx-remote/serialize";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import { TableOfContents } from "@/components/mdx/toc";

const MDXContent = dynamic(() => import("@/components/mdx/mdx-renderer"), {
  ssr: false,
});
const DynamicTableOfContents = dynamic(() => import('@/components/mdx/toc').then(mod => mod.TableOfContents), {
  ssr: false
})


export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogBySlug(params.slug);

  const mdxSource = await serialize(post.content);

  return (
    <article className="relative flex w-full h-full">
      {/* Back button */}
      <div className="sticky top-32 h-fit hidden sm:block sm:pr-12 lg:pr-16">
        <Button variant={"destructive"}>
          <Link href="/blogs">Back</Link>
        </Button>
      </div>
      {/* Content */}
      <div className="space-y-12 w-full flex-1">
        <div className="flex lg:px-4 py-2 pb-6 justify-between border-b border-custom">
          <div className="space-y-4 pr-2">
            <h1 className="text-4xl">{post.title}</h1>
            <p className="text-xl">{post.description}</p>
            <p className="text-sm">{post.date}</p>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="relative hidden md:block max-w-[300px] aspect-video w-full">
            <Image
              src={"/og.jpg"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="og"
              priority
              className="rounded-xl border border-custom "
            />
          </div>
        </div>
        {/* Mdx Content */}
        <div className="prose-sm">
          <MDXContent source={mdxSource} />
          <div className="flexcenter md:hidden py-4 border-custom border-t">
            <Button variant={"destructive"}>
              <Link href="/blogs">Back</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Toc Links */}
      <div className="hidden md:block sticky top-32 h-fit pl-6 lg:pl-16">
        <div className="flex-1 space-y-3">
          <DynamicTableOfContents toc={post.toc} />
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = getAllBlogs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
