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
const Productor = () => {
  const t = useTranslations("Produccion");
  return (
    <main className="flex min-h-screen flex-col w-10/12 mx-auto items-center text-neutral-300 pt-10 mb-10 font-montserrat font-normal">
      <h1 className="tracking-widest text-amber-100 text-2xl lg:text-4xl xl:mt-14">
        {t("titulo").toLocaleUpperCase()}
      </h1>
      <Separator className="xl:w-1/2 bg-amber-100 mt-4 xl:mt-8 xl:mb-10" />

      <div className="w-full flex justify-center mx-auto xl:mt-10">
        <div className="grid xl:grid-cols-3 grid-cols-1 xl:w-1/2 gap-7">
          <div className="">
            <div className="relative w-full h-[200px]">
              <Image
                src={foto}
                alt="Album cover"
                className="w-full h-full object-cover absolute inset-0"
              />
               <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <span className="text-white text-lg">Ir al albúm</span>
              </div>
            </div>
            <h2 className="break-words">Nombre Album</h2>
            <p>Nombre banda, autor</p>
            <p>Año</p>
          </div>

          <div className="bg-slate-400 w-[200px] h-[200px]">hola</div>
          <div className="bg-slate-400 w-[200px] h-[200px]">hola</div>
          <div className="bg-slate-400 w-[200px] h-[200px]">hola</div>
          <div className="bg-slate-400 w-[200px] h-[200px]">hola</div>
          <div className="bg-slate-400 w-[200px] h-[200px]">hola</div>
          <div className="bg-slate-400 w-[200px] h-[200px]">hola</div>
        </div>
      </div>
    </main>
  );
};

export default Productor;
