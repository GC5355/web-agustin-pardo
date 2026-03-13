import type { Metadata } from "next";
import "@/styles/globals.css";
import {  Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import Navigation from "@/components/Navigation";
import FooterNav from "@/components/FooterNav";

const montserrat_init = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700", "900"],
  variable: "--font-montserrat",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: "Agustín Pardo Motz" }],
    creator: "Agustín Pardo Motz",
    openGraph: {
      type: "website",
      locale: locale,
      url: `https://agustinpardo.com/${locale}`, // Adjust if necessary
      title: t("title"),
      description: t("description"),
      siteName: t("title"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

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
          {/* <Footer /> */}
          <FooterNav />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
