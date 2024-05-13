import React, { type ReactNode } from 'react'
import { type Metadata } from 'next'


interface LayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: `Dirección`,
  description:
    'Direcciones de Agustín Pardo.',
}

export default function layout({ children }: LayoutProps) {
  return (
    <div>
      <h1 className='my-10 text-center text-5xl font-extrabold tracking-tight'>
        Direcciones
      </h1>
      {children}
    </div>
  )
}
