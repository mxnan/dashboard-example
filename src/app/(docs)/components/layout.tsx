// app/components/layout.tsx

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex-1 p-6">{children}</div>;
}
