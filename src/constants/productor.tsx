import { useTranslations } from "next-intl";

interface Productor {
  nombreAlbum: string;
  nombreAutor: string;
  fecha: string;
  url: string;
  imagen: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

const Producciones = (): Productor[] => {
  const t = useTranslations("Produccion");

  const rawProducciones = t.raw("producciones");
  console.log("Raw producciones data:", rawProducciones);


  const produccionArray = rawProducciones as {
    nombreAlbum: string;
    nombreAutor: string;
    fecha: string;
    url: string;
    imagen: {
      src: string;
      width: number;
      height: number;
      alt: string;
    };
  }[];

  const producciones: Productor[] = produccionArray.map((item) => ({
    nombreAlbum: item.nombreAlbum,
    nombreAutor: item.nombreAutor,
    fecha: item.fecha,
    url: item.url,
    imagen: item.imagen,
  }));

  return producciones;
};

export default Producciones;
