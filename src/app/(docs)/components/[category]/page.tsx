import MDXContent from '@/components/mdx/components';
import { getComponentBySlug } from '@/lib/component-api';
import React from 'react'

export default function page() {
  const playground = getComponentBySlug("playground");

  return (
    <section className="max-w-4xl mx-auto ">
      <article className="prose-sm">
        <MDXContent source={playground.content} />
      </article>
    </section>
  );
}
