"use client";

import React from "react";
import YouTube from "react-youtube";

export default function composicion() {
  const optsLarge = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0, // Reproducción automática activada
    },
  };

  const optsSmall = {
    height: '195',
    width: '320',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-10 gap-10 mx-3 md:mx-32">
      <h1 className="text-4xl font-montserrat font-normal text-slate-50 tracking-tight lg:text-5xl">
        COMPOSICIONES
      </h1>

      <div className="flex content-center justify-center mt-10 max-w-full ">
        <div className="grid grid-cols-1 gap-16">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 border-2 border-neutral-800 rounded-xl ">
            <div className="text-slate-50">
              <h3 className="font-montserrat font-semibold text-3xl tracking-widest text-slate-50 items-center select-none pb-4">
                Sin Palabras & Agustín Pardo - SOL XIII
              </h3>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50  items-center select-none pb-1">
                <span className="font-bold">Composición:</span> Agustín Pardo
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50  items-center select-none pb-1">
                <span className="font-bold">Músicos:</span> Sebastián Mederos -
                Bandoneón Germán Álvarez - Contrabajo Andrés Antúnez - Piano &
                Agustín Pardo - Guitarra
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50  items-center select-none pb-1">
                <span className="font-bold">Grabación:</span> Gustavo de León
                Grabado el 14 de octubre de 2020 en estudios Sondor, Montevideo,
                Uruguay.
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50  items-center select-none pb-1">
                <span className="font-bold">Mezcla:</span> Gustavo de León
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50  items-center select-none pb-1">
                <span className="font-bold">Edición Sonido:</span> Agustín Pardo
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50  items-center select-none pb-1">
                <span className="font-bold">Cámara y Edición de Video:</span>{" "}
                Germán Cardoso
              </p>
            </div>
            {/* <div className="text-slate-50 select-none object-cover w-full h-full">
              <YouTube videoId="zZQ21852wV8"  opts={height: '300'} />
            </div> */}
            <div className="text-slate-50 aspect-video">
              {/* Renderiza el reproductor de YouTube con diferentes tamaños dependiendo del tamaño de la pantalla */}
              <div className="hidden lg:block">
                <YouTube videoId='zZQ21852wV8' opts={optsLarge} />
              </div>
              <div className="block lg:hidden">
                <YouTube videoId='zZQ21852wV8' opts={optsSmall} />
              </div>
            </div>
          </section>

          {/* <section className="grid grid-cols-2 gap-6 p-6 border-2 border-neutral-800 rounded-xl">
            <div className="text-slate-50 select-none">
              <YouTube videoId="SANbNx12flY" opts={opts} />
            </div>
            <div className="text-slate-50">
              <h3 className="font-montserrat font-semibold text-3xl tracking-widest text-slate-50 items-center select-none pb-4">
              La Floresta
              </h3>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50  items-center select-none pb-1">
                <span className="font-bold">Composición:</span> Agustín Pardo
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50  items-center select-none pb-1">
                <span className="font-bold">Músicos:</span> Sebastián Mederos -
                Bandoneón Germán Álvarez - Contrabajo Andrés Antúnez - Piano &
                Agustín Pardo - Guitarra
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50  items-center select-none pb-1">
                <span className="font-bold">Grabación:</span> Gustavo de León
                Grabado el 14 de octubre de 2020 en estudios Sondor, Montevideo,
                Uruguay.
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50  items-center select-none pb-1">
                <span className="font-bold">Mezcla:</span> Gustavo de León
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50  items-center select-none pb-1">
                <span className="font-bold">Edición Sonido:</span> Agustín Pardo
              </p>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50  items-center select-none pb-1">
                <span className="font-bold">Cámara y Edición de Video:</span>{" "}
                Germán Cardoso
              </p>
            </div>
          </section> */}
        </div>
      </div>
    </main>
  );
}
