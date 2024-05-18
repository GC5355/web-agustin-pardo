'use client';


import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import type {AppPathnames} from '@/config';
import {Link} from '@/navigation';

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      className='px-5'
      href={href}
      {...rest}
    />
  );
}
