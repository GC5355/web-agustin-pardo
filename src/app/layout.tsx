import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

import { Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


const montserrat_init = Montserrat({
  subsets: ["latin"],
  weight: ["100","200", "300", "400","500", "600", "700","800", "900"],
  variable: "--font-montserrat",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans bg-black antialiased",
          montserrat_init.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
