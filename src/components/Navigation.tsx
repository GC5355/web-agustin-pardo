"use client";

import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { SetStateAction, useEffect, useState } from "react";
import { nav_links } from "@/constants/nav-links";
import Link from "next/link";
import Image from "next/image";
import fotoRedondaPepe from "@/imagenes/logos/LogoRedondo.png";
import MobileNav from "./MobileNav";

export default function Navigation() {
  const t = useTranslations("Navigation");
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedEnlace, setSelectedEnlace] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (enlace: SetStateAction<string>) => {
    setSelectedEnlace(enlace);
  };

  return (
    <div className="bg-slate-850">
      <nav
        className={`flex items-center justify-between py-6 ${
          isScrolled
            ? "transition-all duration-500 ease-in backdrop-blur-sm bg-black/70"
            : "transition-all duration-500 ease-out bg-neutral-950"
        }`}
      >
        <div className="flex items-center justify-end pl-10">
          <Link href="/">
            <Image
              src={fotoRedondaPepe}
              alt="logo"
              width={50}
              height={50}
              className="inline-block"
            />
          </Link>
        </div>

        <div className="flex items-center mr-4">
          <ul className="hidden xl:flex items-end space-x-3">
            {nav_links.map((link, i) => (
              <Link href={link.href} key={i} className="p-1">
                <div
                  onClick={() => handleLinkClick(link.title)}
                  className={`font-montserrat font-normal tracking-wide text-sm ml-4 text-slate-50 transition-all hover:text-amber-100 ${
                    selectedEnlace === link.title
                      ? "underline underline-offset-4 font-semibold text-amber-100"
                      : ""
                  }`}
                  style={{ minWidth: "fit-content" }}
                >
                  {t(`${link.title}`).toUpperCase()}
                </div>
              </Link>
            ))}
          </ul>

          <div className="hidden lg:flex items-center mx-10">
            <LocaleSwitcher />
          </div>

          <div className="xl:hidden flex items-center pr-5">
            <MobileNav />
          </div>
        </div>
      </nav>
    </div>
  );
}
