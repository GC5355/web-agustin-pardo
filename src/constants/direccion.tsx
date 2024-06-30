import laImbailable from "@/imagenes/laImbailable.jpeg";
import luTrentiniPepe from "@/imagenes/luciaTrentiniPepe.jpg";
import laNonna from "@/imagenes/laNonna.jpg";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

interface Instrumento {
  name: string;
}

interface Banda {
  ensamble: string;
  fecha: string;
  lugar: string;
  imagen: StaticImageData;
  discoCompleto: string;
  youtube: string;
}

// Custom hook to get translations and create the constants
const useDirecciones = (): Banda[] => {
  const t = useTranslations("Direccion");

  // Obtener el array de ensamble1
  const ensamble1 = t.raw("ensamble1") as { titulo: string; texto1: string }[];

  const direcciones: Banda[] = [
    {
      ensamble: ensamble1[0].titulo,
      fecha: "20/07/2022",
      lugar: 'Hamburg, Alemania',
      imagen: laImbailable,
      discoCompleto:
        "https://open.spotify.com/intl-es/album/7lJrgRP80KcBMpG2MWFoir?si=AclovCIhSsKn_T9MXSsRdw",
      youtube: "https://www.youtube.com/watch?v=zMK7GiA2fEE",
    },
  ];

  return direcciones;
};

export default useDirecciones;
