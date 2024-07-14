"use client";

import React from "react";
import YouTube from "react-youtube";
import { Link as ScrollLink, Element } from "react-scroll";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useComposiciones from "@/constants/composiciones";
import { useTranslations } from "next-intl";

export default function Composicion() {
  const t = useTranslations("Composicion");
  const { composicionesBigBand, composicionesEnsambles } = useComposiciones();

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
    <main className="flex min-h-screen flex-col items-center text-slate-50 pt-10 w-5/6 mx-auto font-montserrat font-normal">
      <h1 className="tracking-widest text-amber-100 text-2xl lg:text-4xl mt-14">
        COMPOSICIONES
      </h1>
      <Separator className="xl:w-1/2 w-5/6 bg-amber-50 mt-8 mb-10" />

      <nav className="text-amber-50 sm:sticky w-full p-4 flex justify-center">
        <ul className="xl:hidden flex flex-col space-y-6 text-lg text-center text-amber-50">
          {scrollLinks.map((link, i) => (
            <li key={i}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline underline-offset-8"
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>

      <Separator className="xl:hidden lg:w-1/2 w-5/6 mb-16 bg-amber-50" />

      {/* Big Band*/}
      <Element name="BigBand" className="mb-8 w-full">
        <h2 className="text-amber-100 text-center justify-center text-2xl mb-10 mt-6">
          BIG BANDS
        </h2>
        <section className="p-6 w-full">
          {composicionesBigBand.map((item, index) => {
            return (
              <div
                key={index}
                className="mb-16 w-full md:flex md:flex-col lg:flex-row lg:space-x-10"
              >
                <div className="w-full lg:w-1/2">
                  <h3 className=" font-semibold text-xl lg:text-lg uppercase text-amber-100 tracking-widest items-center select-none">
                    {item.nombreComposicion}
                  </h3>
                  <Accordion type="single" collapsible className="mb-6">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="tracking-wider">
                        {t("acercaDeTrigger")}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="font-normal text-base tracking-normal text-neutral-300 items-center select-none pb-1">
                          {item.textoAcercaProyexto}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="tracking-wider">
                        {t("instrumentacionTrigger")}
                      </AccordionTrigger>
                      <AccordionContent>
                        {item.instrumentacion.map((item, index) => {
                          return (
                            <div key={index}>
                              <p className="font-normal text-base tracking-normal text-neutral-300 items-center select-none pb-1">
                                <span className="font-semibold">
                                  {item.instrumento}
                                </span>{" "}
                                {" - "} {item.nombre}{" "}
                              </p>
                            </div>
                          );
                        })}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="tracking-wider">
                        {t("masDatostrigger")}
                      </AccordionTrigger>
                      <AccordionContent>
                        {item.masInfo.map((item, index) => {
                          return (
                            <div key={index}>
                              <p className="font-normal text-base tracking-normal text-neutral-300 items-center select-none pb-1">
                                <span className="font-semibold">
                                  {item.titulo}
                                </span>{" "}
                                {" - "} {item.texto}{" "}
                              </p>
                            </div>
                          );
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="hidden 2xl:block">
                    <YouTube videoId={item.idYouTube} opts={optsExtraLarge} />
                  </div>
                  <div className="hidden lg:block 2xl:hidden">
                    <YouTube videoId={item.idYouTube} opts={optsLarge} />
                  </div>
                  <div className="hidden md:block lg:hidden">
                    <YouTube videoId={item.idYouTube} opts={optsMedium} />
                  </div>
                  <div className="md:hidden">
                    <YouTube videoId={item.idYouTube} opts={optsSmall} />
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </Element>

      <Separator className="my-8 bg-amber-50" />

      {/* ENSAMBLES */}
      {/* <Element name="Ensambles" className="mb-8 w-full">
        <h2 className="text-amber-100 text-center justify-center text-2xl mb-10 mt-6">
          ENSAMBLES
        </h2>
        <section className="p-6 w-full">
          {composicionesEnsambles.map((item, index) => {
            return (
              <div
                key={index}
                className="mb-16 w-full md:flex md:flex-col lg:flex-row lg:space-x-10"
              >
                <div className="w-full lg:w-1/2">
                  <h3 className=" font-semibold text-xl lg:text-lg uppercase text-amber-100 tracking-widest items-center select-none">
                    {item.nombreComposicion}
                  </h3>
                  <Accordion type="single" collapsible className="mb-6">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="tracking-wider">
                        {t("trigger1")}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="font-normal text-base tracking-normal text-neutral-300 items-center select-none pb-1">
                          {item.textoAcercaProyexto}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="hidden 2xl:block">
                    <YouTube videoId={item.idYouTube} opts={optsExtraLarge} />
                  </div>
                  <div className="hidden lg:block 2xl:hidden">
                    <YouTube videoId={item.idYouTube} opts={optsLarge} />
                  </div>
                  <div className="hidden md:block lg:hidden">
                    <YouTube videoId={item.idYouTube} opts={optsMedium} />
                  </div>
                  <div className="md:hidden">
                    <YouTube videoId={item.idYouTube} opts={optsSmall} />
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </Element> */}
    </main>
  );
}
