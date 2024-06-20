"use client";

import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Image from "next/image";
import fotoPartitura from "@/imagenes/partitura.jpeg";
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Composicion() {
  const [loading, setLoading] = useState(true);

  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await fetch(
          "https://pub-11d873aa0eb4407dad2effa87772616b.r2.dev/Presupuesto.pdf"
        );
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
        console.log(url);

        //       // Aquí puedes hacer lo que desees con el archivo de audio,
        //       // como reproducirlo en un reproductor de audio en tu aplicación.

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchPdf();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center text-slate-50 pt-10 w-5/6 mx-auto">
      <h1 className="text-4xl font-montserrat font-normal text-slate-50 tracking-tight lg:text-5xl mt-16 mb-8">
        ARREGLOS
      </h1>
      <nav className="md:sticky md:top-24 w-full my-14 p-4 flex justify-center z-10 ">
        <ul className="xl:hidden flex flex-col space-y-6 font-montserrat font-normal text-2xl text-center">
          <li>
            <ScrollLink
              to="Ensambles"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:underline underline-offset-8"
            >
              ENSAMBLES
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="Vientos"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:underline underline-offset-8"
            >
              CUERDAS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="Cuerdas"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:underline underline-offset-8"
            >
              VIENTOS
            </ScrollLink>
          </li>
        </ul>
      </nav>

      {/*Ensamles*/}
      <Element
        name="Ensambles"
        className="border-solid border border-neutral-600 rounded-md p-2 mb-8 "
      >
        <h2 className="text-center justify-center font-montserrat font-normal text-3xl mb-10 mt-6">
          ENSAMBLES
        </h2>
        <div className="grid grid-cols-1 gap-16">
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-6">
            <div className="text-slate-50">
              <h3 className="font-montserrat font-semibold text-2xl tracking-widest text-slate-50 items-center select-none pb-4">
                Zita
              </h3>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Arreglo:</span> Agustín Pardo
              </p>

              <ReactAudioPlayer
                src="https://pub-11d873aa0eb4407dad2effa87772616b.r2.dev/Zita.mp3"
                controls
                className="xl:m-10 my-3"
                
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

      {/*Cuerdas*/}
      <Element
        name="Cuerdas"
        className="border-solid border border-neutral-600 rounded-md p-2 mb-8 "
      >
        <h2 className="text-center justify-center font-montserrat font-normal text-3xl mb-10 mt-6">
          CUERDAS
        </h2>
        <div className="grid grid-cols-1 gap-16">
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-6">
            <div className="text-slate-50">
              <h3 className="font-montserrat font-semibold text-2xl tracking-widest text-slate-50 items-center select-none pb-4">
                Un arreglite
              </h3>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Arreglo:</span> Agustín Pardo
              </p>

              <ReactAudioPlayer
                src="https://pub-11d873aa0eb4407dad2effa87772616b.r2.dev/Zita.mp3"
                controls
                className="xl:m-10 my-3"
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

            {/*vIENTOS*/}
            <Element
        name="Vientos"
        className="border-solid border border-neutral-600 rounded-md p-2 mb-8 "
      >
        <h2 className="text-center justify-center font-montserrat font-normal text-3xl mb-10 mt-6">
          VIENTOS
        </h2>
        <div className="grid grid-cols-1 gap-16">
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-6">
            <div className="text-slate-50">
              <h3 className="font-montserrat font-semibold text-2xl tracking-widest text-slate-50 items-center select-none pb-4">
                Un arreglito 
              </h3>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50 items-center select-none pb-1">
                <span className="font-bold">Arreglo:</span> Agustín Pardo
              </p>
           
       

              <ReactAudioPlayer
                src="https://pub-11d873aa0eb4407dad2effa87772616b.r2.dev/Zita.mp3"
                
                controls
                className="xl:m-10 my-3"
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
