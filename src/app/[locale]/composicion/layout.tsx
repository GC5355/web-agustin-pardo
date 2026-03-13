import React, { ReactNode } from "react";
import ComposicionSidebar from "@/components/ComposicionSidebar";
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
    title: t("Composición"),
    description: "Obras y composiciones de Agustín Pardo Motz para Big Band, Orquesta y Ensambles.",
  };
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex text-neutral-50 font-montserrat font-normal">
      <ComposicionSidebar />
      <main className="xl:ml-80 w-full">{children}</main>
    </div>
  );
}
