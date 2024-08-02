import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  published: boolean;
  tags: string[];
  author: string;
  content: string;
  slug: string;
  toc: { title: string; slug: string }[]; // Add this line
}

const postsDirectory = path.join(process.cwd(), "src/content/blogs");

export function getBlogSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

function extractTOC(content: string): { title: string; slug: string }[] {
  const headings = content.match(/^## (.*$)/gm);
  return headings
    ? headings.map((heading) => {
        const title = heading.replace('## ', '').trim();
        const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        return { title, slug };
      })
    : [];
}

export function getBlogBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const toc = extractTOC(content);

  const blogData: BlogPost = {
    title: data.title,
    description: data.description,
    date: data.date,
    published: data.published ?? true,
    tags: data.tags ?? [],
    author: data.author,
    content: content,
    slug: realSlug,
    toc: toc, // Add this line
  };

  return blogData;
}

export function getAllBlogs(): BlogPost[] {
  const slugs = getBlogSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    .filter((blog) => blog.published);

  return blogs;
}