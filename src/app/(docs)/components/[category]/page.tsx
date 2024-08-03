// app/components/[category]/page.tsx

import { getComponentsByCategory } from '@/lib/component-api';
import Link from 'next/link';

export default function ComponentsPage({ params }: { params: { category: string } }) {
  const categorizedComponents = getComponentsByCategory();
  const categoryComponents = categorizedComponents[params.category] || [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{params.category} Components</h1>
      {categoryComponents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryComponents.map((component) => (
            <Link 
              key={component.slug} 
              href={`/components/${component.slug}`}
              className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{component.title}</h2>
              <p className="text-sm text-gray-600">{component.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p>No components found in this category.</p>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const categorizedComponents = getComponentsByCategory();
  return Object.keys(categorizedComponents).map((category) => ({
    category: category,
  }));
}