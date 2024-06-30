import React from "react";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";

const Direccion: React.FC = () => {
  const t = useTranslations("Direccion");

  return (
    <main className="flex min-h-screen flex-col  w-10/12 mx-auto items-center text-neutral-300 pt-10  mb-10 font-montserrat font-normal">
      <h1 className="tracking-widest text-amber-100 text-2xl  lg:text-4xl mt-14 ">
        {t("titulo").toLocaleUpperCase()}
      </h1>
      <Separator className=" mt-8 w-1/2  bg-amber-100" />
    </main>
  );
};

export default Direccion;
