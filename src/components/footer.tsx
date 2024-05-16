import React from "react";

import Link from "next/link";
//import {logoIg} from '../../../public'
import { Icons } from "@/constants/icons";

const footer = () => {
  return (
    <div className=" grid grid-cols-5 bottom-0  py-8 pr-5 mt-12">
      <div className="flex pl-4 ">
        <span className="flex grow justify-center  space-x-7">
          <h3 className=" font-normal text-slate-50 text-lg font-montserrat hover:scale-110 hover:font-semibold select-none">
            ESP
          </h3>
          <h3 className=" font-normal text-slate-50 text-lg font-montserrat hover:scale-110 hover:font-semibold select-none">
            ENG
          </h3>
        </span>
      </div>

      <div className="flex space-x-4   col-start-5 justify-center content-center mr-11">
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

        <a className="hover:scale-110" href="mailto:agustin.pardo@utec.edu.uy ">
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
      <div></div>
    </div>
  );
};

export default footer;
