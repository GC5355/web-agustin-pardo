import React, { type ReactNode } from 'react'
import { type Metadata } from 'next'


interface LayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: `ARREGLOS`,
  description:
    'Contacto vía email y WhatsApp con la Asociación Vegana del Uruguay.',
}

export default function layout({ children }: LayoutProps) {
  return (
    <div>
    
      {children}
    </div>
  )
}
