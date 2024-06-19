"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import foto1 from "@/imagenes/pepe guitarra.jpg";
import foto2 from "@/imagenes/fotopepe1.jpg";
import foto3 from "@/imagenes/riendo.jpg";
import foto4 from "@/imagenes/oficina/pepeOficina2.jpg";

import { useTranslations } from "next-intl";

export default function Bio() {
  const t = useTranslations("Bio");
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );
  return (
    <main className="flex min-h-screen flex-col items-center text-slate-50 pt-10 w-5/6 mx-auto mb-10">
      <h1 className="text-4xl font-montserrat font-normal tracking-tight lg:text-5xl mt-5">
        {t("titulo").toLocaleUpperCase()}
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-2  gap-10 justify-center mt-28 text-gray-200">
        <Image
          src={foto1}
          className="hidden sm:inline-block object-cover rounded-sm"
          alt="foto agustín en su oficina"
        />
        <div className="font-montserrat font-normal text-xl tracking-normal  indent-5 leading-relaxed space-y-10 text-justify">
          <p>{t("texto1")}</p>
          <p>{t("texto2")}</p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2  gap-10 justify-center mt-28 text-gray-200">
        <Image
          src={foto2}
          className="hidden sm:inline-block lg:hidden object-cover rounded-sm"
          alt="foto agustín en su oficina"
        />
        <div className=" font-montserrat font-normal text-xl tracking-normal col-start-1 indent-5 leading-relaxed space-y-10 text-justify">
          <p>{t("texto3")}</p>
          <p>{t("texto4")}</p>
        </div>
        <Image
          src={foto2}
          className="hidden lg:inline-block object-cover rounded-sm"
          alt="foto agustín en su oficina"
        />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2  lg:gap-10 justify-center mt-28 text-gray-200">
        <Image
          src={foto3}
          className="hidden lg:inline-block object-cover rounded-sm"
          alt="foto agustín en su oficina"
        />
        <div className="col-start-2 font-montserrat font-normal text-xl tracking-normal  indent-5 leading-relaxed space-y-10 text-justify">
          <p>{t("texto5")}</p>
          <p>{t("texto6")}</p>
          <p>{t("texto7")}</p>
        </div>
      </section>

      {/* carousel */}
      <section>
        {/* 
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="select-none">
         
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-0 " >
                      <Image className="object-cover  rounded h-96 w-96" src={foto1} alt={"foto"} />
                    </CardContent>
                  </Card>
                </div>
                
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-0">
                      <Image className="object-cover  rounded h-96 w-96" src={foto2} alt={"foto"} />
                    </CardContent>
                  </Card>
                </div>
                
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-0">
                      <Image className="object-cover  rounded h-96 w-96" src={foto3} alt={"foto"} />
                    </CardContent>
                  </Card>
                </div>
                
              </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
      </section>
    </main>
  );
}
