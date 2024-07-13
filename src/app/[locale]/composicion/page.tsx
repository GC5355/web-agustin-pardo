"use client";

import React from "react";
import YouTube from "react-youtube";
import { Link as ScrollLink, Element } from "react-scroll";
import Image from "next/image";
import fotoProli from "@/imagenes/proli1.jpg";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Composiciones from "@/constants/composiciones";
import { useTranslations } from "next-intl";

export default function Composicion() {
  const t = useTranslations("Composicion");
  const { composicionesBigBandItems, composicionesEnsamblesItems } = Composiciones();

  console.log("composicionesBigBandItems ==> " , composicionesBigBandItems);
  console.log("composicionesEnsamblesItems ==> " , composicionesEnsamblesItems);
  console.log(t("titulo"));
  console.log(t("trigger3"));

  const optsExtraLarge = {
    height: "250",
    width: "450",
    playerVars: {
      autoplay: 0,
    },
  };
  const optsLarge = {
    height: "250",
    width: "350",
    playerVars: {
      autoplay: 0,
    },
  };

  const optsMedium = {
    height: "280",
    width: "400",
    playerVars: {
      autoplay: 0,
    },
  };

  const optsSmall = {
    height: "150",
    width: "290",
    playerVars: {
      autoplay: 0,
    },
  };

  const scrollLinks = [
    { to: "BigBand", label: "BIG BAND" },
    { to: "Ensambles", label: "ENSAMBLES" },
    { to: "Orquesta", label: "ORQUESTA SINFÓNICA" },
    { to: "Cuartetos", label: "CUARTETOS" },
    { to: "MusicaAcademica", label: "MÚSICA ACADÉMICA" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center text-slate-50 pt-10 w-5/6 mx-auto  font-montserrat font-normal">
      <h1 className="tracking-widest text-amber-100 text-2xl  lg:text-4xl mt-14 ">
        COMPOSICIONES
      </h1>
      <Separator className="xl:w-1/2 w-5/6 bg-amber-50 mt-8 mb-10" />

      <nav className=" text-amber-50 sm:sticky  w-full  p-4 flex justify-center">
        <ul className="xl:hidden flex flex-col space-y-6  text-lg text-center text-amber-50">
          {scrollLinks.map((link, i) => (
            <li key={i}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                className="cursor-pointer  hover:underline underline-offset-8"
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>

      <Separator className="xl:hidden lg:w-1/2 w-5/6 mb-16 bg-amber-50 " />

      {/* Big Band*/}
      <Element
        name="BigBand"
        className="border-solid md:border border-neutral-600 rounded-md p-2 mb-8 "
      >
        <h2 className="text-amber-100 text-center justify-center text-2xl mb-10 mt-6">
          BIG BANDS
        </h2>

        <div className="grid grid-cols-1 gap-16">
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-10 p-6">
            <div className="">
              <h3 className="text-amber-50  font-semibold text-xl lg:text-lg tracking-widest items-center select-none pb-4">
                Sin Palabras & Agustín Pardo - SOL XIII
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="tracking-wider">
                    Acerca del Proyecto:
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className=" font-normal text-base  tracking-normal text-neutral-300  items-center select-none pb-1">
                      Este fue un proyecto que estuvo barbaro por varios
                      motivos.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="tracking-wider">
                    Instrumentacion
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="font-normal text-base tracking-normal text-neutral-300  items-center select-none pb-1">
                      <p>
                        <span className="font-semibold ">Bandoneón</span>{" "}
                        Sebastián Mederos
                      </p>
                      <p>
                        <span className="font-semibold">Contrabajo</span> Germán
                        Álvarez
                      </p>
                      <p>
                        <span className="font-semibold">Piano</span> Andrés
                        Antúnez
                      </p>
                      <p>
                        <span className="font-semibold">Guitarra</span> Agustín
                        Pardo
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="tracking-wider">
                    Más info
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="font-normal text-base tracking-normal text-neutral-300 items-center select-none pb-1">
                      <span className="font-bold">Grabación:</span> Gustavo de
                      León Grabado el 14 de octubre de 2020 en estudios Sondor,
                      Montevideo, Uruguay.
                    </p>
                    <p className=" font-normal text-base tracking-normal text-neutral-300  items-center select-none pb-1">
                      <span className="font-bold">Mezcla:</span> Gustavo de León
                    </p>
                    <p className=" font-normal text-base tracking-normal text-neutral-300 items-center select-none pb-1">
                      <span className="font-bold">Edición Sonido:</span> Agustín
                      Pardo
                    </p>
                    <p className=" font-normal text-base tracking-normal text-neutral-300  items-center select-none pb-1">
                      <span className="font-bold">
                        Cámara y Edición de Video:
                      </span>{" "}
                      Germán Cardoso
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="text-slate-50 aspect-video mx-auto">
              <div className="hidden 2xl:block">
                <YouTube videoId="zZQ21852wV8" opts={optsExtraLarge} />
              </div>
              <div className="hidden lg:block 2xl:hidden">
                <YouTube videoId="zZQ21852wV8" opts={optsLarge} />
              </div>
              <div className="hidden md:block lg:hidden">
                <YouTube videoId="zZQ21852wV8" opts={optsMedium} />
              </div>
              <div className="md:hidden">
                <YouTube videoId="zZQ21852wV8" opts={optsSmall} />
              </div>
            </div>
          </section>
        </div>
      </Element>

      <Separator className="md:hidden  mb-16 bg-amber-50 " />

      {/* Ensambles*/}
      {/* <Element
        name="Ensambles"
        className="border-solid md:border border-neutral-600 rounded-md p-2 mb-8 "
      >
        <h2 className="text-center justify-center  text-2xl mb-10 mt-6">
          ENSAMBLES
        </h2>
        <div className="grid grid-cols-1 gap-16">
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-6">
            <div className="text-slate-50">
              <h3 className="font-montserrat font-semibold text-2xl tracking-widest text-slate-50 items-center select-none pb-4">
                William Pequeño
              </h3>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Composición:</span> Agustín Pardo
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Músicos:</span> Gustavo Villalba –
                Saxo Soprano / Agustín Pardo – Piano / Rodrigo Fernández – Bajo
                / Mauricio Ramos – Batería
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Grabación:</span> Gino Maiuri
                Grabado el 23 de diciembre de 2019 en la Escuela Universitaria
                de Música, UdelaR Montevideo, Uruguay
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Mezcla:</span> Nicolás Demczylo
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Edición Sonido:</span> Gino Maiuri &
                Agustín Pardo
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Cámara y Edición de Video:</span>{" "}
                Germán Cardoso
              </p>
            </div>
            <div className="text-slate-50 aspect-video mx-auto">
              <div className="hidden 2xl:block">
                <YouTube videoId="og9skSDNPto" opts={optsExtraLarge} />
              </div>
              <div className="hidden lg:block 2xl:hidden">
                <YouTube videoId="og9skSDNPto" opts={optsLarge} />
              </div>

              <div className="hidden md:block lg:hidden">
                <YouTube videoId="og9skSDNPto" opts={optsMedium} />
              </div>
              <div className="md:hidden">
                <YouTube videoId="og9skSDNPto" opts={optsSmall} />
              </div>
            </div>
          </section>
        </div>
      </Element> */}

      <Separator className="md:hidden  mb-16 bg-amber-50 " />

      {/* CUARTETOS */}
      {/* <Element
        name="Cuartetos"
        className="border-solid md:border border-neutral-600 rounded-md p-2 mb-8 "
      >
        <h2 className="text-center justify-center font-montserrat font-normal text-3xl mb-10 mt-6">
          CUARTETOS
        </h2>
        <div className="grid grid-cols-1 gap-16">
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-6">
            <div className="text-slate-50">
              <h3 className="font-montserrat font-semibold text-3xl tracking-widest text-slate-50 items-center select-none pb-4">
                Candombe de los Mil Años
              </h3>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Composición: </span> Agustín Pardo
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Músicos: </span> Gustavo Villalba -
                Saxo Soprano / Andrea Tejera - Saxo Alto / Gonzalo Levin - Saxo
                Tenor / Alejandra Genta - Saxo Barítono
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Grabación:</span> Gastón Akermann en
                Mastodonte el 19 de setiembre de 2020
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Mezcla:</span> Nicolás Demczylo
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Edición Sonido:</span> Agustín Pardo
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Cámara y Edición de Video:</span>{" "}
                Germán Cardoso
              </p>
            </div>

            <div className="text-slate-50 aspect-video mx-auto">
              <div className="hidden 2xl:block">
                <YouTube videoId="oGXYKgXxJPY" opts={optsExtraLarge} />
              </div>
              <div className="hidden lg:block 2xl:hidden">
                <YouTube videoId="oGXYKgXxJPY" opts={optsLarge} />
              </div>

              <div className="hidden md:block lg:hidden">
                <YouTube videoId="oGXYKgXxJPY" opts={optsMedium} />
              </div>
              <div className="md:hidden">
                <YouTube videoId="oGXYKgXxJPY" opts={optsSmall} />
              </div>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 gap-16">
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-6">
            <div className="text-slate-50 ">
              <h3 className="font-montserrat font-semibold text-3xl tracking-widest text-slate-50 items-center select-none pb-4">
                La Floresta
              </h3>

              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Composición: </span> Agustín Pardo
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Cuarteto de Cuerdas: </span> Violín
                I - Diego Swallow / Violín II - Emilio Sunhary / Viola - Gerardo
                Gramajo / Violonchelo - Pedro Szulak
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Grabación:</span> Grabado el 13 de
                Agosto de 2020 en el Cuarto Tavella por Martín Tavella
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Mezcla:</span> Nicolás Demczylo
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Edición Sonido:</span> Agustín Pardo
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Cámara y Edición de Video:</span>{" "}
                Germán Cardoso
              </p>
            </div>

            <div className="text-slate-50 aspect-video mx-auto">
              <div className="hidden 2xl:block">
                <YouTube videoId="SANbNx12flY" opts={optsExtraLarge} />
              </div>
              <div className="hidden lg:block 2xl:hidden">
                <YouTube videoId="SANbNx12flY" opts={optsLarge} />
              </div>

              <div className="hidden md:block lg:hidden">
                <YouTube videoId="SANbNx12flY" opts={optsMedium} />
              </div>
              <div className="md:hidden">
                <YouTube videoId="SANbNx12flY" opts={optsSmall} />
              </div>
            </div>
          </section>
        </div>
      </Element> */}
    </main>
  );
}
