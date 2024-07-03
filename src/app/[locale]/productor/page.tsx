import React from "react";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Image from "next/image";
import foto from "@/imagenes/AGU01886.jpg";
import Producciones from "@/constants/productor";
import Link from "next/link";

const Productor = () => {
  const t = useTranslations("Produccion");
  const producciones = Producciones();
  console.log(producciones);

  return (
    <main className="flex min-h-screen flex-col w-10/12 mx-auto items-center text-neutral-300 pt-10 mb-10 font-montserrat font-normal">
      <h1 className="tracking-widest text-amber-100 text-2xl lg:text-4xl xl:mt-14">
        {t("titulo").toLocaleUpperCase()}
      </h1>
      <Separator className="xl:w-1/2 bg-amber-100 mt-4 xl:mt-8 xl:mb-10" />

      <div className="w-full flex justify-center mx-auto mt-10 xl:mt-10">
        <div className="grid xl:grid-cols-3 grid-cols-1 xl:w-2/3 gap-8">
          {producciones.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-all hover:scale-105 ease-in duration-75 group"
            >
              <div className="relative w-full h-[200px]">
                <Image
                  src={item.imagen.src}
                  width={item.imagen.width}
                  height={item.imagen.height}
                  alt={item.imagen.alt}
                  className="w-full h-full object-fill absolute inset-0 "
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-white text-lg">Ir al albúm</span>
                </div>
              </div>
              <h2 className="break-words text-amber-100 mt-2">{item.nombreAlbum}</h2>
              <p>{item.nombreAutor}</p>
              <p>{item.fecha}</p>
            </Link>
          ))}

        </div>
      </div>
    </main>
  );
};

export default Productor;
