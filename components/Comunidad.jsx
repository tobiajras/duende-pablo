"use client";

import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";

import { FaDiscord } from "react-icons/fa";

const Comunidad = () => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
  });

  return (
    <section className='max-w-6xl m-10 mb-20 background-blur'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-10'>
          <article className='flex-[0_0_35%] h-72 rounded-xl relative'>
            <div className='bg-[#7289D9] h-48 flex items-center justify-center gap-3 rounded-xl'>
              <FaDiscord className='fill-text-primary w-16 h-16' />
              <span className='text-text-primary text-4xl font-bold'>
                Discord
              </span>
            </div>
            <div>
              <h4 className='mt-4 text-text-primary text-xl font-medium'>
                La Comarca Discord
              </h4>
              <p className='mt-1 text-lg'>
                Servidor de Discord para los suscriptores de Twitch
              </p>
            </div>
          </article>
          <article className='flex-[0_0_35%] h-72 rounded-xl relative'>
            <div className='h-48'>
              <Image
                className='w-full h-full object-cover object-top rounded-xl'
                src='/assets/juegos-comunidad/minecraft-duende-pablo.webp'
                alt='minecraft-comunidad'
                width={300}
                height={100}
              />
            </div>
            <div>
              <h4 className='mt-4 text-text-primary text-xl font-medium'>
                La Comarca Minecraft
              </h4>
              <p className='mt-1 text-lg'>
                Servidor de Minecraft para los suscriptores de Twitch
              </p>
            </div>
          </article>
          <article className='flex-[0_0_35%] h-72 rounded-xl relative'>
            <div className='h-48'>
              <Image
                className='w-full h-full object-cover object-top rounded-xl'
                src='/assets/juegos-comunidad/rust-duende-pablo.webp'
                alt='rust-comunidad'
                width={300}
                height={100}
              />
            </div>
            <div>
              <h4 className='mt-4 text-text-primary text-xl font-medium'>
                La Comarca Rust
              </h4>
              <p className='mt-1 text-lg'>
                Servidor de Rust para los suscriptores de Twitch
              </p>
            </div>
          </article>
          <article className='flex-[0_0_35%] h-72 rounded-xl relative'>
            <div className='h-48'>
              <Image
                className='w-full h-full object-cover object-top rounded-xl'
                src='/assets/juegos-comunidad/mu-duende-pablo.webp'
                alt='rust-comunidad'
                width={300}
                height={100}
              />
            </div>
            <div>
              <h4 className='mt-4 text-text-primary text-xl font-medium'>
                La Comarca Mu
              </h4>
              <p className='mt-1 text-lg'>
                Servidor de Mu online para los suscriptores de Twitch
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Comunidad;
