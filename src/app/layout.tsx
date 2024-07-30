import type { Metadata } from "next";
import { Outfit as FontSans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { createMetadata } from "@/lib/utils";
import { Navbar } from "@/components/navbar";


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = createMetadata("", "");
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable} suppressHydrationWarning>
      <body className="relative w-full ">
        <Providers>
          <Navbar />
          <div className="max-w-[1686px] mx-auto container">
            <main className="w-full flexcenter pt-24">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
