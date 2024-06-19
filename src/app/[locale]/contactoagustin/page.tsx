import React from "react";
import Image from "next/image";

import fotoContacto from "@/imagenes/proli6.jpg";
import { Icons } from "@/constants/icons";
import { useTranslations } from "next-intl";

const ContactoAgustin = () => {
  const t = useTranslations("Contacto");
  return (
    <main className="flex flex-col items-center text-slate-50">
      <div className="grid md:grid-cols-2 h-screen mx-auto">
        <Image
          alt="Foto contacto"
          src={fotoContacto}
          className="hidden md:block object-cover w-full h-full"
        />
        <div className="text-slate-50 mx-full">
          <h1 className="text-4xl font-montserrat font-normal text-slate-50 tracking-tight lg:text-5xl text-center mt-32 mb-16">
            {t("titulo")}
          </h1>
          <p className="text-lg lg:text-xl font-montserrat font-normal text-neutral-400 tracking-tight text-center my-16">
          {t("texto")}
          </p>
          <div className="w-1/2 mx-auto space-y-12">
            <div className="flex items-center">
              <a
                className="flex items-center hover:scale-105"
                href="mailto:agustin.pardo@utec.edu.uy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.emailGrande />
                <p className="mx-10 font-montserrat font-normal text-xl">
                  {" "}
                  {t("texto1")}
                </p>
              </a>
            </div>
            <div className="flex items-center">
              <a
                className="flex items-center hover:scale-105"
                href="https://wa.me/+59898832945"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.whatsapp />
                <p className="mx-10 font-montserrat font-normal text-xl">
                  {" "}
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
