
'use client'

import React, { ReactNode } from 'react';
import { Link as ScrollLink, Element } from "react-scroll";
import { Separator } from "@/components/ui/separator"

interface LayoutProps {
  children: ReactNode;
}


export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <aside className="hidden xl:block fixed top-0 left-0 h-screen w-60  ml-10 ">
      <h3 className='text-white text-xl font-montserrat font-semibold mt-40 ml-8'>COMPOSICIONES</h3>
      <Separator className='ml-3 my-3' />
        <nav className="md:sticky w-full  p-4 flex justify-center mt-6 -z-40">      
          <ul className="flex flex-col space-y-10 font-montserrat font-normal text-lg text-center ">
       
            <li>
              <ScrollLink
                to="BigBand"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white hover:underline underline-offset-8"
              >
                BIG BAND
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Ensambles"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white hover:underline underline-offset-8"
              >
                ENSAMBLES
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Orquesta"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white hover:underline underline-offset-8"
              >
                ORQUESTA SINFÓNICA
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Cuartetos"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white hover:underline underline-offset-8"
              >
                CUARTETOS
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="MusicaAcademica"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white hover:underline underline-offset-8"
              >
                MÚSICA ACADÉMICA
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="xl:ml-80 w-full">
        {children}
      </main>
    </div>
  );
}
