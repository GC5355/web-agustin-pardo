import { useTranslations } from "next-intl";

interface Instrumento {
  nombre: string;
}

interface InstrumentalistaType {
  nombreAlbum: string;
  nombreAutor: string;
  fecha: string;
  instrumentos: Instrumento[];
  texto: string;
  urlSpotify: string;
  urlYoutube: string;
  imagen: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

const Instrumentalista = (): InstrumentalistaType[] => {
  const t = useTranslations("Instrumentalista");

  const instrumentalistaArray = t.raw("instrumentalistaItems") as {
    nombreAlbum: string;
    nombreAutor: string;
    fecha: string;
    instrumentos: Instrumento[];
    texto: string;
    urlSpotify: string;
    urlYoutube: string;
    imagen: {
      src: string;
      width: number;
      height: number;
      alt: string;
    };
  }[];

  const instrumentalistaItems: InstrumentalistaType[] = instrumentalistaArray.map(
    (item) => ({
      nombreAlbum: item.nombreAlbum,
      nombreAutor: item.nombreAutor,
      fecha: item.fecha,
      instrumentos: item.instrumentos,
      texto: item.texto,
      urlSpotify: item.urlSpotify,
      urlYoutube: item.urlYoutube,
      imagen: {
        src: item.imagen.src,
        width: item.imagen.width,
        height: item.imagen.height,
        alt: item.imagen.alt
      }
    })
  );

  return instrumentalistaItems;
};

export default Instrumentalista;
