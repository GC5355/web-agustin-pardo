"use client";

import React, { ReactNode } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { Separator } from "@/components/ui/separator";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <aside className="hidden xl:block fixed top-0 left-0 h-screen w-60  ml-10 ">
        <h3 className="text-white text-xl font-montserrat font-semibold mt-40 ml-16">
          AREGLOS
        </h3>
        <Separator className="my-3" />
        <nav className="md:sticky w-full  p-4 flex justify-center mt-6 -z-40">
          <ul className="flex flex-col space-y-10 font-montserrat font-normal text-lg text-center ">
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
                to="Cuerdas"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white hover:underline underline-offset-8"
              >
                CUERDAS
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Vientos"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white hover:underline underline-offset-8"
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
