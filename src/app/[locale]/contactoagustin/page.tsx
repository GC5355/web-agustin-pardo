import React from "react";
import Image from "next/image";

import fotoContacto from "@/imagenes/proli6.jpg";
import { Icons } from "@/constants/icons";
import { useTranslations } from "next-intl";

const ContactoAgustin = () => {
  const t = useTranslations("Contacto");
  return (
    <main className="flex flex-col items-center text-slate-50  font-montserrat font-normal">
      <div className="grid md:grid-cols-2 h-screen mx-auto">
        <Image
          alt="Foto contacto"
          src={fotoContacto}
          className="hidden md:block -mt-16 object-cover w-full h-full"
        />
        <div className="text-slate-50 mx-full px-10">
          <h1 className="text-xl lg:text-4xl uppercase  text-amber-100 tracking-tight text-left mt-32 mb-8">
            {t("titulo")}
          </h1>
          <p className="text-lg lg:text-lg tracking-tight text-neutral-300 text-left mb-16">
            {t("texto")}
          </p>
          <div className="flex flex-col  mx-auto space-y-6">
            <div>
              <a
                className="flex items-center hover:text-amber-100 hover:underline hover:underline-offset-4"
                href="mailto:agustin.pardo@utec.edu.uy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.emailGrande  />
                <p className="mx-5 font-montserrat font-normal text-lg">
                  {t("texto1")}
                </p>
              </a>
            </div>
            <div>
              <a
                className="flex items-center hover:text-amber-100 hover:underline hover:underline-offset-4"
                href="https://wa.me/+59898832945"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.whatsapp />
                <p className="mx-5 font-montserrat font-normal text-lg">
                  {t("texto2")}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactoAgustin;
