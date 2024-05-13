'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import foto1 from '@/imagenes/foto1jpg.jpg';
import foto2 from '@/imagenes/redondaRecurso 1.png';
import foto3 from '@/imagenes/foto3.jpeg';


export default function Bio() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  )
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Pagina de bio
          </h1>

      
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="select-none">
         
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-0 " >
                      <Image className="object-cover  rounded h-96 w-96" src={foto1} alt={"foto"} />
                    </CardContent>
                  </Card>
                </div>
                
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-0">
                      <Image className="object-cover  rounded h-96 w-96" src={foto2} alt={"foto"} />
                    </CardContent>
                  </Card>
                </div>
                
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-0">
                      <Image className="object-cover  rounded h-96 w-96" src={foto3} alt={"foto"} />
                    </CardContent>
                  </Card>
                </div>
                
              </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>
      </main>
    );
  }
  