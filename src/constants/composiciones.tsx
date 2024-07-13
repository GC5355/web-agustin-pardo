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

const Composiciones = (): { composicionesBigBandItems: Composicion[], composicionesEnsamblesItems: Composicion[] } => {
  const t = useTranslations("Composicion");

  const composicionesBigBandItems = t.raw("composicionesBigBandItems") as Composicion[];
  const composicionesEnsamblesItems = t.raw("composicionesEnsamblesItems") as Composicion[];

  return { composicionesBigBandItems, composicionesEnsamblesItems };
};

export default Composiciones;
