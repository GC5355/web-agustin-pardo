import React, { type ReactNode } from 'react'
import { type Metadata } from 'next'


interface LayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: `Composición`,
  description:
    'Composiciones de Agustín Pardo.',
}

export default function layout({ children }: LayoutProps) {
  return (
    <div className='relative'>
      <div className=' sticky z- h-screen w-60 bg-slate-600 '>sadasdasd</div>
      {children}
    </div>
  )
}
