import React, { type ReactNode } from 'react'
import { type Metadata } from 'next'


interface LayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: `Instrumentista`,
  description:
    'Agustín Pardo',
}

export default function layout({ children }: LayoutProps) {
  return (
    <div className='text-neutral-50 font-montserrat font-normal'>
      {children}
    </div>
  )
}
