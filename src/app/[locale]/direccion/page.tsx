"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import Direcciones from "@/constants/direccion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaYoutube } from "react-icons/fa";

const Direccion: React.FC = () => {
  const t = useTranslations("Direccion");
  const direcciones = Direcciones();

  return (
    <main className="flex min-h-screen flex-col w-10/12 mx-auto items-center text-neutral-300 pt-10 mb-10 font-montserrat font-normal">
      <h1 className="tracking-widest text-amber-100 text-2xl lg:text-4xl xl:mt-14">
        {t("titulo").toLocaleUpperCase()}
      </h1>
      <Separator className="xl:w-1/2 bg-amber-100 mt-4 xl:mt-8 xl:mb-10" />

      <div className="grid lg:grid-cols-2 lg:gap-16">
        {direcciones.map((item, index) => (
          <div
            key={index}
            className="relative mx-auto p-2 max-w-[500px] mt-4 xl:mt-12 transition-all hover:scale-105"
          >
            <h2
              key={index}
              className="text-amber-100 text-center justify-center text-2xl mb-4 xl:mb-10 mt-6"
            >
              {item.nombreEnsamble}
            </h2>

            <p>{item.fecha}</p>
            <p>{item.lugar}</p>

            <div className="relative h-[300px]">
              <Image
                src={item.imagen.src}
                width={item.imagen.width}
                height={item.imagen.height}
                alt={item.nombreEnsamble}
                className="mx-auto mt-3 rounded-sm object-cover h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <span className="text-white text-lg">Ver videoooooooooooooooooooooo</span>
              </div>
              <Link
                href={item.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-5 md:hidden"
              >
                <Button variant={"default"} className="flex items-center">
                  <FaYoutube className="text-2xl" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Direccion;
