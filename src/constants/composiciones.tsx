import { useTranslations } from "next-intl";

interface Instrumentos { 
  instrumento: string,
  nombre: string
}

interface MasInfo { 
  titulo: string,
  texto: string
}

interface Composicion {
  nombreComposicion: string;
  textoAcercaProyexto: string;
  instrumentacion: Instrumentos[];
  masInfo: MasInfo[];
  idYouTube: string;
  imagen: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

interface ComposicionesData {
  composicionesBigBand: Composicion[];
  composicionesEnsambles: Composicion[];
}

const useComposiciones = (): ComposicionesData => {
  const t = useTranslations("Composicion");

  const composicionesBigBand = t.raw("bigBandItems") as Composicion[];
  const composicionesEnsambles = t.raw("ensamblesItems") as Composicion[];

  return { composicionesBigBand, composicionesEnsambles };
};

export default useComposiciones;
