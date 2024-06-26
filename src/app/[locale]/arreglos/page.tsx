"use client";

import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Image from "next/image";
import fotoPartitura from "@/imagenes/partitura.jpeg";
import ReactAudioPlayer from "react-audio-player";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Composicion() {
  const scrollLinks = [
    { to: "Ensambles", label: "ENSAMBLES" },
    { to: "Cuerdas", label: "CUERDAS" },
    { to: "Vientos", label: "VIENTOS" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center text-slate-50 pt-10 w-5/6 mx-auto">
      <h1 className="tracking-widest text-amber-100 text-2xl  lg:text-4xl mt-14 ">
        ARREGLOS
      </h1>
      <Separator className=" mt-8 lg:w-1/2 w-5/6 bg-amber-50 " />

      <nav className=" text-amber-50 sm:sticky  w-full my-10 p-4 flex justify-center">
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

      {/*Ensamles*/}
      <Element
        name="Ensambles"
        className="border-solid border border-neutral-600 rounded-md p-2 mb-8 "
      >
        <h2 className="text-amber-100 text-center justify-center text-2xl mb-6 mt-6">
          ENSAMBLES
        </h2>

        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-2 lg:p-6">
          <div className="text-neutral-300 ">
            <h3 className="text-xl tracking-widest  font-semibold items-center select-none pb-4">
              Zita
            </h3>
            <p className="font-montserrat font-normal text-base tracking-normalitems-center select-none pb-1">
              <span className="font-semibold">Arreglo:</span> Agustín Pardo
            </p>

            <ReactAudioPlayer
              src="https://pub-11d873aa0eb4407dad2effa87772616b.r2.dev/Zita.mp3"
              controls
              className="lg:my-10 my-3"
              
            />
            <Link
              href="https://www.youtube.com/watch?v=1IAs7SytyTg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={"default"}>Ver video completo</Button>
            </Link>
          </div>
          <div className="text-slate-50 aspect-video mx-auto">
            <Image
              alt="imagen"
              src={fotoPartitura}
              height={500}
              width={500}
              className="rounded-sm"
            />
          </div>
        </section>
      </Element>

      {/*Ensamles*/}
      <Element
        name="Cuerdas"
        className="border-solid border border-neutral-600 rounded-md p-2 mb-8 "
      >
        <h2 className="text-amber-100 text-center justify-center text-2xl mb-6 mt-6">
          CUERDAS
        </h2>
        <div className="grid grid-cols-1 gap-16">
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-2 lg:p-6">
            <div className="text-neutral-300 ">
              <h3 className="text-xl tracking-widest  font-semibold items-center select-none pb-4">
                Otro arreglo
              </h3>
              <p className="font-montserrat font-normal text-lg tracking-normalitems-center select-none pb-1">
                <span className="font-semibold">Arreglo:</span> Agustín Pardo
              </p>

              <ReactAudioPlayer
                src="https://pub-11d873aa0eb4407dad2effa87772616b.r2.dev/Zita.mp3"
                controls
                className="lg:my-10 my-3"
              />
            </div>
            <div className="text-slate-50 aspect-video mx-auto">
              <Image
                alt="imagen"
                src={fotoPartitura}
                height={500}
                width={500}
              />
            </div>
          </section>
        </div>
      </Element>

      {/*Ensamles*/}
      <Element
        name="Vientos"
        className="border-solid border border-neutral-600 rounded-md p-2 mb-8 "
      >
        <h2 className="text-amber-100 text-center justify-center text-2xl mb-6 mt-6">
          VIENTOS
        </h2>
        <div className="grid grid-cols-1 gap-16">
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-2 lg:p-6">
            <div className="text-neutral-300 ">
              <h3 className="text-base tracking-widest  font-semibold items-center select-none pb-4">
                Algun otro arreglo
              </h3>
              <p className="font-montserrat font-normal text-lg tracking-normalitems-center select-none pb-1">
                <span className="font-semibold">Arreglo:</span> Agustín Pardo
              </p>

              <ReactAudioPlayer
                src="https://pub-11d873aa0eb4407dad2effa87772616b.r2.dev/Zita.mp3"
                controls
                className="lg:my-10 my-3"
              />
            </div>
            <div className="text-slate-50 aspect-video mx-auto">
              <Image
                alt="imagen"
                src={fotoPartitura}
                height={500}
                width={500}
              />
            </div>
          </section>
        </div>
      </Element>
    </main>
  );
}
