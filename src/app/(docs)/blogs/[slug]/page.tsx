import { getAllBlogs, getBlogBySlug } from "@/lib/blog-api";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import { CircleArrowLeft } from "lucide-react";
import MDXContent from "@/components/mdx/components";
import { getFormattedDate } from "@/lib/utils";

//toc has to be dynamic import
const DynamicTableOfContents = dynamic(
  () => import("@/components/mdx/toc").then((mod) => mod.TableOfContents),
  {
    ssr: false,
  }
);

//metadata
export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = getBlogBySlug(params.slug);
  return {
    title: post.title,
    description: post.description,
  };
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogBySlug(params.slug);

  return (
    <section className="flex  justify-center relative min-h-screen">
      {/* Back button */}
      <div className="w-[100px] hidden xl:block fixed top-44 left-12 2xl:left-32 self-start">
        <Link href="/blogs">
          <Button className="flex items-center gap-2" variant={"destructive"}>
            <CircleArrowLeft className="w-5 h-5" />
            Back
          </Button>
        </Link>
      </div>
      {/* Content */}
      <div className="w-full max-w-4xl 2xl:max-w-5xl mx-auto space-y-16 px-4 lg:px-8">
        <Button variant={"destructive"} className="lg:hidden mt-4">
          <Link href="/blogs" className="flex items-center gap-2">
            <CircleArrowLeft className="w-5 h-5" />
            Back
          </Link>
        </Button>
        <div className="w-full flex flex-col md:flex-row justify-between pb-4 border-b border-custom">
          <div className="space-y-4 pr-2 md:w-2/3">
            <h1 className="text-3xl md:text-4xl">{post.title}</h1>
            <p className="text-lg md:text-xl">{post.description}</p>
            <p className="text-sm">{getFormattedDate(post.date)}</p>
            <div className="flex flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block md:w-1/3 aspect-video">
            <Image
              src={"/og.jpg"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="og"
              priority
              className="rounded-xl border border-custom object-cover"
            />
          </div>
        </div>
        {/* Mdx Content */}
        <article className="prose-sm max-w-full w-full mx-auto">
          <MDXContent source={post.content} />
          <div className="flex justify-start pt-12 mb-12 lg:hidden py-4 border-custom border-t">
            <Button variant={"destructive"}>
              <Link href="/blogs" className="flex items-center gap-2">
                <CircleArrowLeft className="w-5 h-5" />
                Back
              </Link>
            </Button>
          </div>
        </article>
      </div>
      {/* Toc Links */}
      <div className="w-max hidden xl:block fixed top-44 right-4 2xl:right-20 self-start">
        <div className="flex-1 space-y-3">
          <DynamicTableOfContents toc={post.toc} />
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = getAllBlogs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
