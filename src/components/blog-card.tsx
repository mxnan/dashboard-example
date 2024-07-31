import Link from "next/link";
import { BlogPost } from "@/lib/blog-api";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="w-full max-w-sm border h-auto shadow-lg rounded-lg overflow-hidden">
      <Link href={`/blogs/${post.slug}`} className="block h-full">
        <div className="p-4 flex flex-col h-full">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm mb-3 flex-grow line-clamp-3">{post.description}</p>
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <p>{post.date}</p>
            <p>{post.author}</p>
          </div>
          <div className="mt-auto">
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
      </Link>
    </div>
  );
}