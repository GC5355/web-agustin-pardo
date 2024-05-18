"use client";

import Image from "next/image";
import foto from "@/imagenes/portada 2.jpg";
import * as React from "react";
import fotoSection from "@/imagenes/AGU01881.jpg";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("LandingPage");
  return (
    <main className="flex h-max flex-col items-center justify-between">
      <div className="relative w-full h-[500px] ">
        <Image
          src={foto}
          alt="Descripción de la imagen"
          className="object-cover w-full h-full "
          layout="fill"
        />
        <h1 className="font-montserrat font-normal text-2xl md:text-3xl lg:text-6xl tracking-widest text-slate-50 absolute inset-0 flex items-center justify-center select-none">
          AGUSTIN PARDO
        </h1>
      </div>

      <div className="flex content-center justify-center mt-36 ">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 w-4/5">
          <div className=" text-center md:text-left">
            <h2 className="font-montserrat font-normal text-3xl tracking-widest text-slate-50 items-center select-none pb-6">
             {t('Titulo1')}
            </h2>
            <p className="font-montserrat font-normal text-lg tracking-widest text-slate-50  items-center select-none pb-3">
            {t('Texto1')}
            </p>
            <p className="font-montserrat font-normal text-lg tracking-widest text-slate-50  items-center select-none pb-3">
            {t('Texto2')}
            </p>
          </div>
          <Image alt="imagen" src={fotoSection} height={700} width={700} />
        </section>
      </div>
    </main>
  );
}
