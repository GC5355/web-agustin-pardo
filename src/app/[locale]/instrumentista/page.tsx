"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { BsYoutube, BsSpotify } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import instrumentalista from "@/constants/instrumentalista";


const Instrumentista = () => {
  const instrumentList = instrumentalista();
  const [proyecto, setProyecto] = useState(instrumentList[0]);

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update proyecto state based on current slide index
    setProyecto(instrumentList[currentIndex]);
  };


  console.log(proyecto);
  
  return (
    <div className="min-h-[80vh] w-10/12 mx-auto flex flex-col justify-center py-12 xl:px-0">
      <div className="xl:mb-32">
        <h1 className="tracking-widest text-amber-100 text-2xl lg:text-4xl lg:mt-14 text-center">
          INSTRUMENTISTA
        </h1>
        <Separator className="mt-8 lg:w-1/2 w-5/6 bg-amber-50 mx-auto" />
      </div>

      <div className="container -my-10 mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* nombre banda */}
              <div className="text-xl leading-none text-amber-100 font-medium uppercase tracking-widest">
                {proyecto.nombreAlbum}
              </div>
              {/* nombre disco */}
              <div className="text-lg leading-none text-slate-50 font-medium tracking-wider">
                {proyecto.nombreAutor}
              </div>

              {/* proyecto descripcion */}
              <p className="text-neutral-400">{proyecto.texto}</p>
              {/* instrumentos */}
              <ul className="flex gap-4">
                {proyecto.instrumentos.map((item, index) => {
                  return (
                    <li key={index} className="text-md tracking-wider text-amber-50">
                      {item.nombre}
                      {/* remove the last comma */}
                      {index !== proyecto.instrumentos.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border w-2/3 border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Boton de spotify */}
                {proyecto.urlSpotify ? (
                  <Link href={proyecto.urlSpotify} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-neutral-900 flex justify-center items-center group">
                          <BsSpotify className="text-white text-2xl group-hover:text-amber-100" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-neutral-100">
                          <p>Ir a Spotify</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <></>
                )}

                {/* Boton de youTube */}
                {proyecto.urlYoutube ? (
                  <Link href={proyecto.urlYoutube} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-neutral-900 flex justify-center items-center group">
                          <BsYoutube className="text-white text-2xl group-hover:text-amber-100" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-neutral-100">
                          <p>Ver video completo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {instrumentList.map((proyecto, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={proyecto.imagen.src}
                          fill
                          className="object-scale-down"
                          alt="Fotos de Agustín como instrumentista"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute left-0 bottom-[calc(50%_-_22px)] z-20 w-full justify-between"
                btnStyles="bg-default hover:bg-amber-100 border-solid border border-neutral-600 text-slate-100 hover:text-neutral-600 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles={undefined}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Instrumentista;
