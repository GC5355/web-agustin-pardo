"use client";

import Image from "next/image";
import foto1 from "@/imagenes/foto1jpg.jpg";
import * as React from "react";
import Bio from "@/app/bio/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24 ">
      <div className="bg-cover bg-center h-screen">
        <Image src={foto1} alt="foto" className="bg-blend-multiply" />
      </div>

      <h1 className="font-montserrat font-normal text-6xl tracking-widest text-slate-50 absolute items-center  pt-64 select-none">
        HOLA PEPE
      </h1>

      <div className="pt-14">
        <Bio />
      </div>
    </main>
  );
}
