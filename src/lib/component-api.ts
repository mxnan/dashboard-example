// lib/component-api.ts

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ComponentData {
  title: string;
  description: string;
  category: string;
  tags: string[];
  content: string;
  slug: string;
  toc: { title: string; slug: string }[];
}

const componentsDirectory = path.join(process.cwd(), "src/content/components");

export function getComponentSlugs(): string[] {
  const allFiles: string[] = [];

  function traverseDirectory(dir: string) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        traverseDirectory(fullPath);
      } else if (path.extname(file) === ".mdx") {
        allFiles.push(path.relative(componentsDirectory, fullPath));
      }
    });
  }

  traverseDirectory(componentsDirectory);
  return allFiles;
}

function extractTOC(content: string): { title: string; slug: string }[] {
  const headings = content.match(/^## (.*$)/gm);
  return headings
    ? headings.map((heading) => {
        const title = heading.replace("## ", "").trim();
        const slug = title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "");
        return { title, slug };
      })
    : [];
}

export function getComponentBySlug(slug: string): ComponentData {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(componentsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const toc = extractTOC(content);

  const componentData: ComponentData = {
    title: data.title,
    description: data.description,
    category: data.category,
    tags: data.tags ?? [],
    content: content,
    slug: realSlug,
    toc: toc,
  };

  return componentData;
}

export function getAllComponents(): ComponentData[] {
  const slugs = getComponentSlugs();
  const components = slugs.map((slug) => getComponentBySlug(slug));

  return components;
}

export function getComponentsByCategory(): Record<string, ComponentData[]> {
  const components = getAllComponents();
  const categorizedComponents: Record<string, ComponentData[]> = {};

  components.forEach((component) => {
    if (!categorizedComponents[component.category]) {
      categorizedComponents[component.category] = [];
    }
    categorizedComponents[component.category].push(component);
  });

  return categorizedComponents;
}
