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
    title: t("Instrumentista"),
    description: "Trayectoria de Agustín Pardo Motz como intérprete multi-instrumentista en diversas giras y estilos.",
  };
}

export default function layout({ children }: LayoutProps) {
  return (
    <div className='text-neutral-50 font-montserrat font-normal'>
      {children}
    </div>
  )
}
