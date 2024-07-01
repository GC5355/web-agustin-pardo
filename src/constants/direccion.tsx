import { useTranslations } from "next-intl";

interface Banda {
  nombreEnsamble: string;
  fecha: string;
  lugar: string;
  imagen: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  youtube: string;
}

const Direcciones = (): Banda[] => {
  const t = useTranslations("Direccion");

  // Obtener el array de ensambles
  const ensambles = t.raw("ensambles") as {
    nombreEnsamble: string;
    fecha: string;
    lugar: string;
    youtube: string;
    foto: {
      src: string;
      width: number;
      height: number;
      alt: string;
    };
  }[];

  const direcciones: Banda[] = ensambles.map((ensamble) => ({
    nombreEnsamble: ensamble.nombreEnsamble,
    fecha: ensamble.fecha,
    lugar: ensamble.lugar,
    imagen: ensamble.foto,
    youtube: ensamble.youtube,
  }));

  return direcciones;
};

export default Direcciones;
