import { getAllBlogs, getBlogBySlug } from "@/lib/blog-api";
import { serialize } from "next-mdx-remote/serialize";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";

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
    <article className="relative flex h-full">
      <div className="sticky top-32 h-fit pr-6 lg:pr-16">
        <Button variant={"destructive"}>
          <Link href="/blogs">Back</Link>
        </Button>
      </div>

      <div className="space-y-12">
        <div>
          <h1>{post.title}</h1>
          <p>Author: {post.author}</p>
          <p>Date: {post.date}</p>
        </div>

        <div className="prose-sm">
          <MDXContent source={mdxSource} />
        </div>
      </div>
      <div className="hidden md:block sticky top-32 h-fit pl-6 lg:pl-16">
        <Button variant={"destructive"}>
          <Link href="/blogs">Toc</Link>
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
