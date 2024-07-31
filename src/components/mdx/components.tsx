import { cn } from "@/lib/utils";

export const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-6xl font-medium tracking-tight",
        className
      )}
      {...props}
    />
  ),
};
