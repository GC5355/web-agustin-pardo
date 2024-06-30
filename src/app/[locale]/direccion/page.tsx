'use client'

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import useDirecciones from "@/constants/direccion";

const Direccion: React.FC = () => {
  const t = useTranslations("Direccion");
  const direcciones = useDirecciones();  // Llama al hook o función
  const [direccion, setDireccion] = useState(direcciones[0]);

  return (
    <main className="flex min-h-screen flex-col w-10/12 mx-auto items-center text-neutral-300 pt-10 mb-10 font-montserrat font-normal">
      <h1 className="tracking-widest text-amber-100 text-2xl lg:text-4xl mt-14 ">
        {t("titulo").toLocaleUpperCase()}
      </h1>
      <Separator className="mt-8 w-1/2 bg-amber-100" />

      <div className="border-solid md:border border-neutral-600 rounded-md p-2 mb-8">
        <h2 className="text-amber-100 text-center justify-center text-2xl mb-10 mt-6">
          {direccion.ensamble}
        </h2>

        <div className="grid grid-cols-1 gap-16">
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-6">
            <div>
              <h3 className="text-amber-50 font-semibold text-xl lg:text-lg tracking-widest items-center select-none pb-4">
                {/* Aquí puedes poner el contenido que desees */}
              </h3>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Direccion;
