import "./globals.css";
import { Providers } from "./providers";

import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/nav/navbar";
import { cn } from "@/lib/utils";

import { Anybody, Cuprum } from "next/font/google";
import { Metadata } from "next";

//fonts
export const bodyFont = Anybody({
  subsets: ["latin"],
  variable: "--font-body",
});
export const titleFont = Cuprum({
  subsets: ["latin"],
  variable: "--font-title",
});
//fonts

//metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://syntaxui.com"),
  title: {
    template: "%s || mxnan",
    default: "mxnan.com",
  },
  description: `Personal website, creating components and some blogs . `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "relative w-full font-body",
          bodyFont.variable,
          titleFont.variable
        )}
      >
        <Providers>
          <Navbar />
          <div className="overflow-hidden mx-auto container">
            <main className="w-full pt-24">{children}</main>
          </div>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
