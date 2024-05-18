import React, { type ReactNode } from 'react'
import { type Metadata } from 'next'


interface LayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: `Bio`,
  description:
    'Biografia de Agustin Pardo.',
}

export default function layout({ children }: LayoutProps) {
  return (
    <div>
            {children}
    </div>
  )
}
