import "./globals.css";
import { Providers } from "./providers";

import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/nav/navbar";
import { cn } from "@/lib/utils";

import { Anybody, Archivo_Narrow, Cuprum, Dosis } from "next/font/google";

export const bodyFont = Anybody({
  subsets: ["latin"],
  variable: "--font-body",
});

export const titleFont = Cuprum({
  subsets: ["latin"],
  variable: "--font-title",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
            <main className="w-full  pt-24">{children}</main>
          </div>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
