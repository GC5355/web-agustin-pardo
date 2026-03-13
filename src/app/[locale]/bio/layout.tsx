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
  const t = await getTranslations({ locale, namespace: "Bio" });

  return {
    title: t("titulo"),
    description: t("texto1").substring(0, 160),
  };
}

export default function layout({ children }: LayoutProps) {
  return (
    <div>
            {children}
    </div>
  )
}
