import { getAllBlogs, getBlogBySlug } from "@/lib/blog-api";
import { serialize } from "next-mdx-remote/serialize";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

const MDXContent = dynamic(() => import("@/components/mdx/mdx-renderer"), {
  ssr: false,
});

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
      <div className="sticky top-32 h-fit pr-6 lg:pr-16">
        <Button variant={"destructive"}>
          <Link href="/blogs">Back</Link>
        </Button>
      </div>
      {/* Content */}
      <div className="space-y-12 w-full flex-1">
        <div className="flex lg:px-4 justify-between">
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
          <div className="relative max-md:hidden max-w-[300px] aspect-video w-full">
            <Image
              src={"/og.jpg"}
              fill
              alt="og"
              priority
              className="rounded-xl border border-custom "
            />
          </div>
        </div>
        {/* Mdx Content */}
        <div className="prose-sm">
          <MDXContent source={mdxSource} />
        </div>
      </div>
      {/* Toc button */}
      <div className="hidden md:block sticky top-32 h-fit pl-6 lg:pl-16">
        <Button variant={"destructive"}>
          <Link href="/blogs">Table of contents</Link>
        </Button>
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
