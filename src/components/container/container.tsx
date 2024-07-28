import { Metadata } from 'next'
import Navbar from "./navbar";

export interface ContainerProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}


export default function Container({ children, title, description }: ContainerProps) {
  return (
    <div className="max-w-[1686px] mx-auto container">
      <Navbar />
      <main className="min-h-screen max-w-[1536px] mx-auto w-full flexcenter pt-24">
        {children}
      </main>
    </div>
  );
}
