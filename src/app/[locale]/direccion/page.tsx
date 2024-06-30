"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import useDirecciones from "@/constants/direccion"; // ajusta la ruta según tu estructura de archivos
import Image from "next/image";

const Direccion: React.FC = () => {
  const t = useTranslations("Direccion");
  const direcciones = useDirecciones(); // Llama al hook para obtener las direcciones

  return (
    <main className="flex min-h-screen flex-col w-10/12 mx-auto items-center text-neutral-300 pt-10 mb-10 font-montserrat font-normal">
      <h1 className="tracking-widest text-amber-100 text-2xl lg:text-4xl mt-14">
        {t("titulo").toLocaleUpperCase()}
      </h1>
      <Separator className="mt-8 w-1/2 bg-amber-100" />

      <div className="border-solid md:border border-neutral-600 rounded-md p-2 mb-8">
        {direcciones.map((item, index) => (
          <div key={index}>
            <h2
              key={index}
              className="text-amber-100 text-center justify-center text-2xl mb-10 mt-6"
            >
              {item.nombreEnsamble}
            </h2>
            <Image alt="Imagenes de ensambles que fueron dirigidos por Agustín Pardo" src={item.imagen} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Direccion;
