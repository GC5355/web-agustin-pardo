import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import hamburguesa from "@/imagenes/logos/logo navbar.png";
import { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { nav_links } from "@/constants/nav-links";
import { useTranslations } from "next-intl";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Navigation");

  const handleLinkClick = (enlace: SetStateAction<string>) => {
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {" "}
      <DropdownMenu open={isMenuOpen} onOpenChange={handleMenuToggle}>
        <DropdownMenuTrigger className="h-16 w-16" asChild>
          <div className="flex items-center">
            <Image src={hamburguesa} alt="nav" height={30} width={30} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-black text-amber-50 border-neutral-800">
          <DropdownMenuLabel className="font-montserrat font-semibold tracking-wide text-center text-amber-100">
            AGUSTÍN PARDO
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="bg-black">
            {nav_links.map((link, i) => (
              <DropdownMenuItem key={i}>
                <Link
                  href={link.href}
                  className="block font-montserrat font-normal tracking-wide w-full text-left px-3 py-1.5 cursor-pointer transition-all"
                  onClick={() => handleLinkClick(link.title)}
                >
                  {t(`${link.title}`).toUpperCase()}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;
