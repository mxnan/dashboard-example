// app/components/layout.tsx

import ComponentSidebar from "@/components/nav/component-sidebar";



export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen pt-20"> {/* Adjust pt-44 based on your top navbar height */}
    <div className="fixed left-4 md:left-6 2xl:left-36 top-44 h-[70vh] bottom-0 md:w-64 overflow-y-auto">
      <ComponentSidebar />
    </div>
    <div className="flex-1 ml-32 sm:ml-40 md:ml-48 lg:ml-52 2xl:max-w-5xl 2xl:mx-auto overflow-y-auto">
      {children}
    </div>
  </div>
  );
}
