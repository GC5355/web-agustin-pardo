"use client";

import React from "react";
import YouTube from "react-youtube";

export default function composicion() {
  const opts = {
    height: "390",
    width: "640",

    playerVars: {
      autoplay: 0, // Reproducción automática desactivada
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-10 gap-10 mx-32">
      <h1 className="text-4xl font-montserrat font-normal text-slate-50 tracking-tight lg:text-5xl">
        COMPOSICIONES
      </h1>

      <div className="flex content-center justify-center mt-10 max-w-full ">
        <div className="grid grid-cols-1 gap-16">
          <section className="grid grid-cols-2 gap-6 p-6 border-2 border-neutral-800 rounded-xl ">
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
            <div className="text-slate-50 select-none">
              <YouTube videoId="zZQ21852wV8" opts={opts} />
            </div>
          </section>

          <section className="grid grid-cols-2 gap-6 p-6 border-2 border-neutral-800 rounded-xl">
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
          </section>
        </div>
      </div>
    </main>
  );
}
