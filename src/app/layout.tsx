
import { Outfit as FontSans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";


import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/nav/navbar";


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});


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
          <div className="overflow-hidden mx-auto container">
            <main className="w-full  pt-24">
              {children}
            </main>
          </div>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
