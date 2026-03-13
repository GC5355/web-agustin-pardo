import React, { type ReactNode } from 'react'
import { type Metadata } from 'next'


interface LayoutProps {
  children: ReactNode
}

import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Navigation" });

  return {
    title: t("Dirección"),
    description: "Actividad de dirección orquestal y ensambles de Agustín Pardo Motz.",
  };
}

export default function layout({ children }: LayoutProps) {
  return (
    <div>
  
      {children}
    </div>
  )
}
