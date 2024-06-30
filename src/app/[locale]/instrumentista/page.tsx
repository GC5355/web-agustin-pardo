"use client";

import React, { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import fotoContacto from "@/imagenes/proli6.jpg";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsYoutube, BsSpotify } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    banda: "La Imbailable Cumbia Orquesta",
    nombreDisco: "La Quinqueña",
    descripcion:
      "Toque con la imbailable en el 2020. Tocan cumbia colombiana y esta muy guay!",
    unstrumentos: [{ name: "Guitarra" }],
    imagen: fotoContacto,
    discoCompleto:
      "https://open.spotify.com/intl-es/album/7lJrgRP80KcBMpG2MWFoir?si=AclovCIhSsKn_T9MXSsRdw",
    youtube: "https://www.youtube.com/watch?v=zMK7GiA2fEE",
  },
  {
    banda: "Lucía Trentini",
    nombreDisco: " Ya no se",
    descripcion:
      "Filmando en “Espacio cultural Alberto Soriano” ECAS, Montevideo.",
    unstrumentos: [
      { name: "Guitarra" },
      { name: "Flauta" },
      { name: "Clarinete" },
    ],
    imagen: fotoContacto,
    discoCompleto: "",
    youtube: "",
  },
  {
    banda: "03",
    nombreDisco: "project 3",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
    unstrumentos: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    imagen: fotoContacto,
    discoCompleto: "",
    youtube: "",
  },
];
const Instrumentista = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: any }) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <div className=" min-h-[80vh] w-10/12 mx-auto flex flex-col justify-center py-12 xl:px-0">
      <div className="mb-32">
        <h1 className="tracking-widest text-amber-100 text-2xl  lg:text-4xl mt-14  text-center ">
          INSTRUMENTISTA
        </h1>
        <Separator className=" mt-8 lg:w-1/2 w-5/6 bg-amber-50 mx-auto" />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* nombre banda */}
              <div className="text-xl leading-none text-amber-100 font-medium uppercase tracking-widest ">
                {project.banda}
              </div>

              {/* nombre cancion */}
              <div className="text-lg leading-none text-slate-50  font-medium tracking-wider ">
                {project.nombreDisco}
              </div>

              {/* project descripcion */}
              <p className="text-neutral-400">{project.descripcion}</p>
              {/* instrumentos */}
              <ul className="flex gap-4">
                {project.unstrumentos.map((item, index) => {
                  return (
                    <li key={index} className="text-md tracking-wider">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.unstrumentos.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* discoCompleto project button */}
                <Link
                  href={project.discoCompleto}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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

                {/* youtube button */}
                <Link
                  href={project.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/5 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.imagen}
                          fill
                          className="object-cover rounded-sm"
                          alt="Fotos de Agustín como instrumentista"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute left-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-default hover:bg-amber-100 border-solid border border-neutral-600  text-slate-100 hover:text-neutral-600 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
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
