import laImbailable from "@/imagenes/laImbailable.jpeg";
import luTrentiniPepe from "@/imagenes/luciaTrentiniPepe.jpg";
import laNonna from "@/imagenes/laNonna.jpg";
import { StaticImageData } from "next/image";

interface Instrumento {
  name: string;
}

interface Banda {
  banda: string;
  nombreDisco: string;
  descripcion: string;
  instrumentos: Instrumento[];
  imagen: StaticImageData;
  discoCompleto: string;
  youtube: string;
}

export const instrumentalista: Banda[] = [
  {
    banda: "La Imbailable Cumbia Orquesta",
    nombreDisco: "La Quinqueña",
    descripcion:
      "Toque con la imbailable en el 2020. Tocan cumbia colombiana y esta muy guay!",
    instrumentos: [{ name: "Guitarra" }],
    imagen: laImbailable,
    discoCompleto:
      "https://open.spotify.com/intl-es/album/7lJrgRP80KcBMpG2MWFoir?si=AclovCIhSsKn_T9MXSsRdw",
    youtube: "https://www.youtube.com/watch?v=zMK7GiA2fEE",
  },
  {
    banda: "Lucía Trentini",
    nombreDisco: "Ya no se",
    descripcion:
      "Filmando en “Espacio cultural Alberto Soriano” ECAS, Montevideo.",
    instrumentos: [
      { name: "Guitarra" },
      { name: "Flauta" },
      { name: "Clarinete" },
      { name: "Bandoneón" },
    ],
    imagen: luTrentiniPepe,
    discoCompleto:
      "https://open.spotify.com/intl-es/artist/58oUUw92iA5bwaNnVo5irI?si=OhNR9R_rT7W-Ipd6LoZK1A",
    youtube: "https://www.youtube.com/watch?v=0peEL7LJAtY",
  },
  {
    banda: "La Nonna",
    nombreDisco: "La Nonna",
    descripcion: "La nonna es una gran banda",
    instrumentos: [{ name: "Guitarra" }],
    imagen: laNonna,
    discoCompleto:
      "https://open.spotify.com/intl-es/artist/5SjKMiIDZ18plsdulpFvpb?si=h_Z5I2hPQmm3S3tYioz6ow",
    youtube:
      "https://www.youtube.com/watch?v=f6QiLbbMdRU&list=PLRWFGPmySWDAKKan7eWl-lMdtmH-hghpk",
  },
];
