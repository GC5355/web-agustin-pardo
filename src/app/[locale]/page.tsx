"use client";

import Image from "next/image";

import fotoProli from "@/imagenes/proli1.jpg";
import foto from "@/imagenes/portada 2.jpg";
import fotoSection from "@/imagenes/AGU01881.jpg";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { ReactNode } from "react";

// Definir los tipos de las propiedades
interface TextProps {
  children: ReactNode;
  className?: string;
}

// Componente reutilizable para el texto
const Text: React.FC<TextProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-montserrat font-normal text-lg tracking-widest  select-none pb-3",
      className
    )}
  >
    {children}
  </p>
);

export default function Home() {
  const t = useTranslations("LandingPage");
  return (
    <main className="flex h-max flex-col items-center justify-between text-neutral-50 font-montserrat font-normal">
      <div className="relative w-full h-screen">
        <Image
          src={fotoProli}
          alt="Descripción de la imagen"
          className="object-cover grayscale w-1/2 h-1/2 lg:w-full lg:h-screen"
          layout="fill"
        />
        
            <h1 className="text-amber-300 text-lg md:text-xl lg:text-2xl xl:text-5xl tracking-widest font-medium absolute inset-0 flex items-center justify-center select-none mb-24">
          AGUSTÍN PARDO MOTZ
        </h1>
  
      </div>

      <div className="flex content-center justify-center mt-14">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 w-4/5">
          <div className="text-center md:text-left">
            <h2 className=" text-2xl xl:text-3xl tracking-widest text-amber-100 select-none pb-6">
              {t("Titulo1")}
            </h2>
            <div className="text-neutral-300  font-normal text-base xl:text-lg space-y-4">
              <p>{t("Texto1")}</p>
              <p>{t("Texto2")}</p>
            </div>
          </div>
          <Image alt="imagen" src={fotoSection} height={700} width={700} className="rounded-sm" />
        </section>
      </div>
    </main>
  );
}
