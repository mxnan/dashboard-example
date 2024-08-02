import Link from "next/link";
import { BlogPost } from "@/lib/blog-api";
import { getFormattedDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="w-full max-w-sm border-stone-200 dark:border-stone-800 border h-auto shadow-xl rounded-lg overflow-hidden">
      <Link href={`/blogs/${post.slug}`} className="block h-full group/card">
        <div className="p-4 flex flex-col h-full">
          <h2 className="text-xl font-bold  mb-2 line-clamp-2">{post.title}</h2>
          <p className="text-stone-600 dark:text-stone-500 text-sm my-3 flex-grow line-clamp-3">
            {post.description}
          </p>

          <p className="font-semibold text-xs mb-2 group-hover/card:translate-x-2  transition-all ease-in-out duration-300">
            {getFormattedDate(post.date)}
          </p>

          <div className="mt-auto group-hover/card:translate-y-1 transition-all ease-in-out duration-300">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-2xl px-2 py-1 m-1 text-xs font-semibold
                transition-all ease-in-out duration-500
                  text-plight dark:text-pdark 
                  group-hover/card:bg-gray-200/60 group-hover/card:dark:bg-stone-900
               "
              >
                {"# "}
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
