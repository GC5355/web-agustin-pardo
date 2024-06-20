import React from "react";
import Link from "next/link";
import { Icons } from "@/constants/icons";
import LocaleSwitcher from "./LocaleSwitcher";

const Footer = () => {
  return (
    <div className="flex justify-between lg:content-center conten items-center z-50 bg-neutral-950 py-8 px-5 mt-8">
      <div className="flex pl-4">
        <div className="lg:hidden">
          <LocaleSwitcher />
        </div>
      </div>
      <div className="flex space-x-6 gap-1 justify-center items-center mr-10">
        <Link
          className="hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/agus_pardo_motz/"
        >
          <Icons.instagram />
        </Link>
        <Link
          className="hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/@agustinpardomotz405"
        >
          <Icons.youtube />
        </Link>
        <a className="hover:scale-110" href="mailto:agustin.pardo@utec.edu.uy">
          <Icons.email />
        </a>
        <Link
          className="hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          href="https://open.spotify.com/intl-es/artist/1X2qrkyb7rO4HeIqraB5jM?si=uOg1bkneQbmGjbhIXWve7A"
        >
          <Icons.spotify />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
