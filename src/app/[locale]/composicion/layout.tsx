"use client";

import React, { ReactNode } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { Separator } from "@/components/ui/separator";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex text-neutral-50 font-montserrat font-normal">
      <aside className="hidden xl:block fixed top-0 left-0 h-screen w-60  ml-10 ">
        <h3 className=" text-lg  font-medium tracking-wider ml-2 mt-40 text-amber-100  ">COMPOSICIONES</h3>
        <Separator className=" my-2" />
        <nav className="md:sticky w-full  p-4 flex justify-center mt-4 -z-40">
          <ul className="flex flex-col text-amber-50  space-y-10 text-left text-base  ">
            <li>
              <ScrollLink
                to="BigBand"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline underline-offset-8"
              >
                BIG BAND
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Ensambles"
                smooth={true}
                duration={500}
                className="cursor-pointer  hover:underline underline-offset-8"
              >
                ENSAMBLES
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Orquesta"
                smooth={true}
                duration={500}
                className="cursor-pointer  hover:underline underline-offset-8"
              >
                ORQUESTA SINFÓNICA
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Cuartetos"
                smooth={true}
                duration={500}
                className="cursor-pointer  hover:underline underline-offset-8"
              >
                CUARTETOS
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="MusicaAcademica"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline underline-offset-8"
              >
                MÚSICA ACADÉMICA
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="xl:ml-80 w-full">{children}</main>
    </div>
  );
}
