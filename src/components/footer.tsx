import React from 'react'

import Link from 'next/link'
//import {logoIg} from '../../../public'
import { Icons } from '@/constants/icons';


const footer = () => {
  return (
    <div className=' grid grid-cols-5 bottom-0 bg-slate-100 border-2 drop-shadow-md py-4 pr-5'>
      <div className='flex pl-4 '>
        <span className='flex grow justify-center  space-x-7'>
          <Icons.espanol />
          <Icons.ingles />
        </span>
      </div>

      <div className='flex space-x-4 col-start-5 justify-center content-center'>
        <Link target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/agus_pardo_motz/'>
          <Icons.instagram />
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/@agustinpardomotz405'>
          <Icons.youtube />
        </Link>
        <a href='mailto:agustin.pardo@utec.edu.uy '>
          <Icons.email />
        </a>
        <Link target="_blank" rel="noopener noreferrer" href='https://open.spotify.com/intl-es/artist/1X2qrkyb7rO4HeIqraB5jM?si=uOg1bkneQbmGjbhIXWve7A'>
          <Icons.spotify />
        </Link>
      </div>
      <div>
      </div>
    </div>


  )
}

export default footer