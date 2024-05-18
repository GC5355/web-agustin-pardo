"use client";

import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";

import { useEffect, useState } from "react";
import { nav_links } from "@/constants/nav-links";
import Link from "next/link";

import Image from "next/image";

import hamburguesa from "@/imagenes/logos/logo navbar.png";
import fotoRedondaPepe from "@/imagenes/logos/LogoRedondo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const t = useTranslations("Navigation");

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
    <div className="bg-slate-850">
      <nav
        className={`grid grid-cols-8  pl-5 py-3 justify-center content-center   ${
          isScrolled
            ? "transition-all duration-500 ease-in backdrop-blur-sm bg-black/30 "
            : "transition-all duration-500 ease-out bg-neutral-950"
        }`}
      >
        <Link href="/" className="col-span-3 space-x-4 ">
          <Image
            src={fotoRedondaPepe}
            alt="logo"
            width={50}
            height={50}
            className="inline-block"
          />
          <span
            onClick={() => handleLinkClick("Inicio")}
            className={`hidden sm:inline-block font-semibold text-slate-50 text-2xl font-montserrat ${
              selectedEnlace === "Inicio" ? "" : ""
            }`}
          >
            Agustin Pardo Motz
          </span>{" "}
        </Link>

        <ul className="hidden col-start-4 col-span-3 lg:flex content-center space-x-10 ml-11 items-center justify-center pt-2}">
          {nav_links.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className="px-3 font-semibold  font-montserrat tracking-wide text-slate-50  cursor-pointer transition-all hover:font-bold hover:scale-110 select-none "
            >
              <div
                onClick={() => handleLinkClick(link.title)}
                className={`px-3 font-semibold tracking-wide text-slate-50  transition-all hover:font-bold ${
                  selectedEnlace === link.title
                    ? "underline underline-offset-4"
                    : ""
                }`}
              >
                {t(`${link.title}`).toUpperCase()}
              </div>
            </Link>
          ))}
        </ul>
        <div className="col-start-8">
          <LocaleSwitcher />
        </div>

        <div className="lg:hidden col-start-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex h-6 w-6 items-center content-center pt-5">
                <Image src={hamburguesa} alt="nav" height={30} width={30} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-black text-slate-50 border-neutral-800">
              <DropdownMenuLabel>AGUSTÍN PARDO</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuGroup className="bg-black text-slate-50">
                {nav_links.map((link, i) => (
                  <DropdownMenuItem key={i}>
                    <a
                      href={link.href}
                      className="regular-16 px-3  cursor-pointer pb-1.5 transition-all"
                    >
                      {" "}
                      {t(`${link.title}`).toUpperCase()}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}
