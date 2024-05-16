"use client";

import Image from "next/image";
import foto from "@/imagenes/portada 2.jpg";
import * as React from "react";
import fotoSection from "@/imagenes/AGU01881.jpg";

export default function Home() {
  return (
    <main className="flex h-max flex-col items-center justify-between">
      <div className="relative w-full h-[500px]"> 
        <Image
          src={foto}
          alt="Descripción de la imagen"
          className="object-cover w-full h-full"
          layout="fill"
        />
        <h1 className="font-montserrat font-normal text-6xl tracking-widest text-slate-50 absolute inset-0 flex items-center justify-center select-none">
          AGUSTIN PARDO
        </h1>
      </div>

      

   
        <div className="flex content-center justify-center mt-16  ">
          <section className="grid grid-cols-2 gap-12 w-4/5">
            <div>
              <h2 className="font-montserrat font-normal text-3xl tracking-widest text-slate-50  items-center select-none">
                Bienvenidos a mi pagina web
              </h2>
              <p className="font-montserrat font-normal text-lg tracking-widest text-slate-50  items-center select-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi repudiandae nemo deserunt nihil. Tempora laborum,
                error ipsum nobis possimus nemo totam hic ipsa vero maiores
                consectetur aperiam adipisci, quis dolore.
              </p>
            </div>
            <Image alt="imagen" src={fotoSection} height={500} width={500} />
          </section>
        </div>

    </main>
  );
}
