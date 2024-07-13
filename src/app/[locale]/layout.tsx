import type { Metadata } from "next";
import "@/styles/globals.css";
import {  Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  unstable_setRequestLocale,
} from "next-intl/server";
import Navigation from "@/components/Navigation";
import FooterNav from "@/components/FooterNav";

const montserrat_init = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Web Agustín Pardo",
  description: "Proximamente...",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans bg-black antialiased",
          montserrat_init.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="sticky top-0 z-10">
            <Navigation />
          </div>
          <div className={montserrat_init.variable}>{children}</div>
          <FooterNav />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
