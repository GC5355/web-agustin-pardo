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
      <h3 className=" text-lg  font-medium tracking-wider ml-2 mt-40 text-amber-100  ">ARREGLOS</h3>
      <Separator className=" my-1 bg-amber-100 " />
      <nav className="md:sticky w-full  p-4 flex ml-2  mt-2 -z-40">
        <ul className="flex flex-col text-amber-50  space-y-8 text-left text-base tracking-wide  ">
          <li>
            <ScrollLink
              to="Ensambles"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:underline underline-offset-8"
            >
              ENSAMBLES
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="Cuerdas"
              smooth={true}
              duration={500}
              className="cursor-pointer  hover:underline underline-offset-8"
            >
              CUERDAS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="Vientos"
              smooth={true}
              duration={500}
              className="cursor-pointer  hover:underline underline-offset-8"
            >
              VIENTOS
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </aside>
    <main className="xl:ml-80 w-full">{children}</main>
  </div>
  );
}
