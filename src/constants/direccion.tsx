import laImbailable from "@/imagenes/laImbailable.jpeg";
import luTrentiniPepe from "@/imagenes/luciaTrentiniPepe.jpg";
import laNonna from "@/imagenes/laNonna.jpg";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

interface Banda {
  nombreEnsamble: string;
  fecha: string;
  lugar: string;
  imagen: StaticImageData;
  discoCompleto: string;
  youtube: string;
  foto: string
}

// Custom hook to get translations and create the constants
const useDirecciones = (): Banda[] => {
  const t = useTranslations("Direccion");

  // Obtener el array de ensambles
  const ensambles = t.raw("ensambles") as { nombreEnsamble: string; fecha: string; lugar: string, videoYoutube: string, foto: string}[];

  const direcciones: Banda[] = ensambles.map((ensamble, index) => ({
    nombreEnsamble: ensamble.nombreEnsamble,
    fecha: ensamble.fecha,
    lugar: ensamble.lugar,
    imagen: laImbailable, // Ajustar
    discoCompleto: "",
    youtube: ensamble.videoYoutube, 
    foto: ensamble.foto
  }));

  return direcciones;
};

export default useDirecciones;
