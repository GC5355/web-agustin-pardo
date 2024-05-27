import React, { type ReactNode } from 'react'
import { type Metadata } from 'next'


interface LayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: `Instrumentista`,
  description:
    'Direcciones de Agustín Pardo.',
}

export default function layout({ children }: LayoutProps) {
  return (
    <div>
  
      {children}
    </div>
  )
}
