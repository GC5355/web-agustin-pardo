"use client";

import React from "react";
import { Hammer } from "lucide-react";

export default function Docencia() {
  return (
    <main className="flex min-h-screen flex-col items-center text-slate-50 w-5/6 mx-auto">
      <div className="flex-1 flex flex-col items-center justify-start space-y-6 pt-32 pb-20">
        <div className="bg-neutral-800/50 p-8 rounded-full border border-neutral-700 animate-pulse">
          <Hammer className="w-16 h-16 text-amber-100/80" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-amber-50 text-3xl font-montserrat tracking-widest font-light">
            Sección en construcción
          </h2>
          <p className="text-neutral-400 text-lg font-montserrat">
            Estamos trabajando para traerte lo mejor de mi trabajo pronto.
          </p>
        </div>
      </div>
    </main>
  );
}