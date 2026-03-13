import React, { ReactNode } from "react";
import ArreglosSidebar from "@/components/ArreglosSidebar";
import { getTranslations } from "next-intl/server";

interface LayoutProps {
  children: ReactNode;
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Navigation" });

  return {
    title: t("Arreglos"),
    description: "Arreglos musicales de Agustín Pardo Motz para diversos ensambles, cuerdas y vientos.",
  };
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex text-neutral-50 font-montserrat font-normal">
      <ArreglosSidebar />
      <main className="xl:ml-80 w-full">{children}</main>
    </div>
  );
}
