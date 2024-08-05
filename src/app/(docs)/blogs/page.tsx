import { BlogCard } from "@/components/blog-card";
import BlogHero from "@/components/blog-hero";
import { getAllBlogs } from "@/lib/blog-api";
import React from "react";

//metadata
export const metadata = {
  title: "Blogs",
  description: "writing blogs here sometimes, not good at  writing",
};

export default function page() {
  const blogs = getAllBlogs();

  return (
    <section className="max-w-[1536px] w-full mx-auto min-h-screen flex-1 lg:flex max-lg:space-y-32 ">
      {/* BlogCards div */}
      <div className="flex-1 h-max flex flex-col gap-8">
        <div className="space-y-5 lg:ml-12">
          <h1 className="text-7xl font-semibold font-title uppercase">Blogs</h1>
          <p className="text-sm ">
            Just some blogs to showcase learnings and findings
          </p>
        </div>
        <div
          className="flex-1 grid grid-cols-1 gap-6 p-4
                      sm:grid-cols-2 
                      md:grid-cols-3
                      lg:grid-cols-2
                      justify-items-center content-start"
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} post={blog} />
          ))}
        </div>
      </div>
      {/* BlogHero div */}
      <div className="flex-1 ">
        <BlogHero />
      </div>
    </section>
  );
}
