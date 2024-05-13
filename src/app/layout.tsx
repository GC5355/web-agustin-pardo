import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google";
import { Roboto, Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "900"],
  variable: "--font-roboto",
});

const montserrat_init = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Web Agustín Pardo",
  description: "Proximamente...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          roboto_init.variable,
          montserrat_init.variable
        )}
      >
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className={montserrat_init.variable}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
