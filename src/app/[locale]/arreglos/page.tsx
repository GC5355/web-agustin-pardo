"use client";

import React, { useEffect, useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";

export default function Composicion() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [selectedEnlace, setSelectedEnlace] = useState("");

  const handleLinkClick = (enlace: React.SetStateAction<string>) => {
    setSelectedEnlace(enlace);
  };

  return (
    <main className="flex min-h-screen flex-col items-center text-slate-50 pt-10 w-5/6 mx-auto">
      <h1 className="text-4xl font-montserrat font-normal text-slate-50 tracking-tight lg:text-5xl mt-16 mb-8">
        COMPOSICIONES
      </h1>

      <nav className={`md:sticky md:top-24 w-full my-14 p-4 flex justify-center z-10  ${
        isScrolled
          ? "transition-all duration-500 ease-in backdrop-blur-sm bg-black/30"
          : "transition-all duration-500 ease-out"
      }`}
    >
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-16 font-montserrat font-normal text-lg">
          <li>
            <ScrollLink
              to="BigBand"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:underline underline-offset-8"
            >
              ENSAMBLES
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="Ensambles"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:underline underline-offset-8"
            >
              CUERDAS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="Orquesta"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:underline underline-offset-8"
            >
              VIENTOS
            </ScrollLink>
          </li>
        
        </ul>
      </nav>

      {/* Big Band*/}
      <Element
        name="BigBand"
        className="flex content-center justify-center mt-10 max-w-full"
      >
        <div className="grid grid-cols-1 gap-16">
      
        </div>
      </Element>

      {/* Ensambles */}
      <Element
        name="Ensambles"
        className="flex content-center justify-center mt-10 max-w-full"
      >
        <div className="grid grid-cols-1 gap-16">
      
        </div>
      </Element>
    </main>
  );
}
