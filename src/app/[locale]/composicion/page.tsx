"use client";

import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import { Link as ScrollLink, Element } from "react-scroll";
import Image from "next/image";
import fotoProli from "@/imagenes/proli1.jpg";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export default function Composicion() {
  const t = useTranslations("Composicion");
  const optsExtraLarge = {
    height: "250",
    width: "450",
    playerVars: {
      autoplay: 0,
      origin: window.location.origin,
    },
  };
  const optsLarge = {
    height: "250",
    width: "350",
    playerVars: {
      autoplay: 0,
      origin: window.location.origin,
    },
  };

  const optsMedium = {
    height: "280",
    width: "400",
    playerVars: {
      autoplay: 0,
      origin: window.location.origin,
    },
  };

  const optsSmall = {
    height: "150",
    width: "290",
    playerVars: {
      autoplay: 0,
      origin: window.location.origin,
    },
  };

  const scrollLinks = [
    { to: "BigBand", label: "BIG BAND" },
    { to: "Ensambles", label: "ENSAMBLES" },
    { to: "Orquesta", label: "ORQUESTA SINFÓNICA" },
    { to: "Cuartetos", label: "CUARTETOS" },
    { to: "MusicaAcademica", label: "MÚSICA ACADÉMICA" },
  ];

  const [isLoaded, setIsLoaded] = useState(false);
  const [videosReady, setVideosReady] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleVideoReady = (id: string) => {
    setVideosReady((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center text-slate-50 pt-10 w-5/6 mx-auto  font-montserrat font-normal">
      <h1 className="tracking-widest text-amber-100 text-2xl  lg:text-4xl mt-14 ">
        {t('titulo').toUpperCase()}
      </h1>
      <Separator className="xl:w-1/2 w-5/6 bg-amber-50 mt-8 mb-10" />


      {/* Big Band*/}
      <Element
        name="BigBand"
        className="border-solid md:border border-neutral-600 rounded-md p-2 mb-8 "
      >
        <div className="grid grid-cols-1 gap-16">
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-6">
            <div className="relative text-slate-50 aspect-video mx-auto w-full">
              {!videosReady["zZQ21852wV8"] && (
                <div className="absolute inset-0 bg-neutral-800 animate-pulse rounded-md" />
              )}
              {isLoaded && (
                <>
                  <div className="hidden 2xl:block">
                    <YouTube videoId="zZQ21852wV8" opts={optsExtraLarge} onReady={() => handleVideoReady("zZQ21852wV8")} />
                  </div>
                  <div className="hidden lg:block 2xl:hidden">
                    <YouTube videoId="zZQ21852wV8" opts={optsLarge} onReady={() => handleVideoReady("zZQ21852wV8")} />
                  </div>
                  <div className="hidden md:block lg:hidden">
                    <YouTube videoId="zZQ21852wV8" opts={optsMedium} onReady={() => handleVideoReady("zZQ21852wV8")} />
                  </div>
                  <div className="md:hidden">
                    <YouTube videoId="zZQ21852wV8" opts={optsSmall} onReady={() => handleVideoReady("zZQ21852wV8")} />
                  </div>
                </>
              )}
            </div>
            <div className="">
              <p className=" font-normal text-base  tracking-normal text-neutral-300  items-center select-none pb-1">
                <span className="font-bold ">{t('labels.composicion')}:</span> {t('items.item1.composicion')}
              </p>
              <p className="font-normal text-base tracking-normal text-neutral-300  items-center select-none pb-1">
                <span className="font-bold text-neutral-300 ">{t('labels.musicos')}:</span>{" "}
                {t('items.item1.musicos')}
              </p>
              <p className="font-normal text-base tracking-normal text-neutral-300 items-center select-none pb-1">
                <span className="font-bold">{t('labels.grabacion')}:</span> {t('items.item1.grabacion')}
              </p>
              <p className=" font-normal text-base tracking-normal text-neutral-300  items-center select-none pb-1">
                <span className="font-bold">{t('labels.mezcla')}:</span> {t('items.item1.mezcla')}
              </p>
              <p className=" font-normal text-base tracking-normal text-neutral-300 items-center select-none pb-1">
                <span className="font-bold">{t('labels.edicion_sonido')}:</span> {t('items.item1.edicion_sonido')}
              </p>
              <p className=" font-normal text-base tracking-normal text-neutral-300  items-center select-none pb-1">
                <span className="font-bold">{t('labels.camara')}:</span>{" "}
                {t('items.item1.camara')}
              </p>
            </div>
          </section>
        </div>
      </Element>

      <Separator className="md:hidden  mb-16 bg-amber-50 " />

      {/* Ensambles*/}
      <Element
        name="Ensambles"
        className="border-solid md:border border-neutral-600 rounded-md p-2 mb-8 "
      >
        <div className="grid grid-cols-1 gap-16">
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-6">
            <div className="text-slate-50">
              <p className=" font-normal text-base  tracking-normal text-neutral-300  items-center select-none pb-1">
                <span className="font-bold">{t('labels.composicion')}:</span> {t('items.item2.composicion')}
              </p>
              <p className="font-normal text-base tracking-normal text-neutral-300  items-center select-none pb-1">
                <span className="font-bold">{t('labels.musicos')}:</span> {t('items.item2.musicos')}
              </p>
              <p className="font-normal text-base tracking-normal text-neutral-300 items-center select-none pb-1">
                <span className="font-bold">{t('labels.grabacion')}:</span> {t('items.item2.grabacion')}
              </p>
              <p className=" font-normal text-base tracking-normal text-neutral-300  items-center select-none pb-1">
                <span className="font-bold">{t('labels.mezcla')}:</span> {t('items.item2.mezcla')}
              </p>
              <p className=" font-normal text-base tracking-normal text-neutral-300 items-center select-none pb-1">
                <span className="font-bold">{t('labels.edicion_sonido')}:</span> {t('items.item2.edicion_sonido')}
              </p>
              <p className=" font-normal text-base tracking-normal text-neutral-300  items-center select-none pb-1">
                <span className="font-bold">{t('labels.camara')}:</span>{" "}
                {t('items.item2.camara')}
              </p>
            </div>
            <div className="relative text-slate-50 aspect-video mx-auto w-full">
              {!videosReady["og9skSDNPto"] && (
                <div className="absolute inset-0 bg-neutral-800 animate-pulse rounded-md" />
              )}
              <div className="hidden 2xl:block">
                <YouTube videoId="og9skSDNPto" opts={optsExtraLarge} onReady={() => handleVideoReady("og9skSDNPto")} />
              </div>
              <div className="hidden lg:block 2xl:hidden">
                <YouTube videoId="og9skSDNPto" opts={optsLarge} onReady={() => handleVideoReady("og9skSDNPto")} />
              </div>

              <div className="hidden md:block lg:hidden">
                <YouTube videoId="og9skSDNPto" opts={optsMedium} onReady={() => handleVideoReady("og9skSDNPto")} />
              </div>
              <div className="md:hidden">
                <YouTube videoId="og9skSDNPto" opts={optsSmall} onReady={() => handleVideoReady("og9skSDNPto")} />
              </div>
            </div>
          </section>
        </div>
      </Element>

      <Separator className="md:hidden  mb-16 bg-amber-50 " />

      {/* CUARTETOS */}
      <Element
        name="Cuartetos"
        className="border-solid md:border border-neutral-600 rounded-md p-2 mb-8 "
      >
        <div className="grid grid-cols-1 gap-16">
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-6">
            <div className="relative text-slate-50 aspect-video mx-auto w-full">
              {!videosReady["oGXYKgXxJPY"] && (
                <div className="absolute inset-0 bg-neutral-800 animate-pulse rounded-md" />
              )}
              <div className="hidden 2xl:block">
                <YouTube videoId="oGXYKgXxJPY" opts={optsExtraLarge} onReady={() => handleVideoReady("oGXYKgXxJPY")} />
              </div>
              <div className="hidden lg:block 2xl:hidden">
                <YouTube videoId="oGXYKgXxJPY" opts={optsLarge} onReady={() => handleVideoReady("oGXYKgXxJPY")} />
              </div>
              <div className="hidden md:block lg:hidden">
                <YouTube videoId="oGXYKgXxJPY" opts={optsMedium} onReady={() => handleVideoReady("oGXYKgXxJPY")} />
              </div>
              <div className="md:hidden">
                <YouTube videoId="oGXYKgXxJPY" opts={optsSmall} onReady={() => handleVideoReady("oGXYKgXxJPY")} />
              </div>
            </div>
            <div className="text-slate-50">
              <p className=" font-normal text-base  tracking-normal text-neutral-300  items-center select-none pb-1">
                <span className="font-bold">{t('labels.composicion')}: </span> {t('items.item3.composicion')}
              </p>
              <p className="font-normal text-base tracking-normal text-neutral-300  items-center select-none pb-1">
                <span className="font-bold">{t('labels.musicos')}: </span> {t('items.item3.musicos')}
              </p>
              <p className="font-normal text-base tracking-normal text-neutral-300 items-center select-none pb-1">
                <span className="font-bold">{t('labels.grabacion')}:</span> {t('items.item3.grabacion')}
              </p>
              <p className=" font-normal text-base tracking-normal text-neutral-300  items-center select-none pb-1">
                <span className="font-bold">{t('labels.mezcla')}:</span> {t('items.item3.mezcla')}
              </p>
              <p className=" font-normal text-base tracking-normal text-neutral-300 items-center select-none pb-1">
                <span className="font-bold">{t('labels.edicion_sonido')}:</span> {t('items.item3.edicion_sonido')}
              </p>
              <p className=" font-normal text-base tracking-normal text-neutral-300  items-center select-none pb-1">
                <span className="font-bold">{t('labels.camara')}:</span>{" "}
                {t('items.item3.camara')}
              </p>
            </div>
          </section>
        </div>
      </Element>

      <Separator className="md:hidden mb-16 bg-amber-50 " />

      <Element
        name="LaFloresta"
        className="border-solid md:border border-neutral-600 rounded-md p-2 mb-8 "
      >
        <div className="grid grid-cols-1 gap-16">
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-6">
            <div className="text-slate-50 ">

              <p className=" font-normal text-base  tracking-normal text-neutral-300  items-center select-none pb-1">
                <span className="font-bold">{t('labels.composicion')}: </span> {t('items.item4.composicion')}
              </p>
              <p className="font-normal text-base tracking-normal text-neutral-300  items-center select-none pb-1">
                <span className="font-bold">{t('labels.cuarteto_cuerdas')}: </span> {t('items.item4.cuarteto_cuerdas')}
              </p>
              <p className="font-normal text-base tracking-normal text-neutral-300 items-center select-none pb-1">
                <span className="font-bold">{t('labels.grabacion')}:</span> {t('items.item4.grabacion')}
              </p>
              <p className=" font-normal text-base tracking-normal text-neutral-300  items-center select-none pb-1">
                <span className="font-bold">{t('labels.mezcla')}:</span> {t('items.item4.mezcla')}
              </p>
              <p className=" font-normal text-base tracking-normal text-neutral-300 items-center select-none pb-1">
                <span className="font-bold">{t('labels.edicion_sonido')}:</span> {t('items.item4.edicion_sonido')}
              </p>
              <p className=" font-normal text-base tracking-normal text-neutral-300  items-center select-none pb-1">
                <span className="font-bold">{t('labels.camara')}:</span>{" "}
                {t('items.item4.camara')}
              </p>
            </div>

            <div className="relative text-slate-50 aspect-video mx-auto w-full">
              {!videosReady["SANbNx12flY"] && (
                <div className="absolute inset-0 bg-neutral-800 animate-pulse rounded-md" />
              )}
              <div className="hidden 2xl:block">
                <YouTube videoId="SANbNx12flY" opts={optsExtraLarge} onReady={() => handleVideoReady("SANbNx12flY")} />
              </div>
              <div className="hidden lg:block 2xl:hidden">
                <YouTube videoId="SANbNx12flY" opts={optsLarge} onReady={() => handleVideoReady("SANbNx12flY")} />
              </div>
              <div className="hidden md:block lg:hidden">
                <YouTube videoId="SANbNx12flY" opts={optsMedium} onReady={() => handleVideoReady("SANbNx12flY")} />
              </div>
              <div className="md:hidden">
                <YouTube videoId="SANbNx12flY" opts={optsSmall} onReady={() => handleVideoReady("SANbNx12flY")} />
              </div>
            </div>
          </section>
        </div>
      </Element>
    </main>
  );
}
