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
          <Link
            href='https://discord.gg/mFuuqucXdF'
            target='_blank'
            rel='noopener noreferrer'
            className='flex-[0_0_35%] rounded-xl relative comunidad-gradient'
          >
            <div className='h-48 flex justify-center'>
              <div className='w-44 h-44 rounded-full mt-4'>
                <FaDiscord className='fill-text-primary w-full h-full bg-[#7289D9] rounded-full p-7' />
              </div>
            </div>
            <div className='text-text-primary p-6'>
              <h4 className='text-xl font-medium'>
                <span className='text-primary-light mr-1'>#</span>DISCORD
              </h4>
              <p className='mt-2 text-lg'>
                Servidor de Discord para la comunidad, entrá gratis
              </p>
            </div>
          </Link>
          <Link
            href='https://www.minecraft.net/es-es'
            target='_blank'
            rel='noopener noreferrer'
            className='flex-[0_0_35%]  rounded-xl relative comunidad-gradient'
          >
            <div className='h-48'>
              <Image
                className='w-full h-full object-contain object-top rounded-xl drop-shadow-2xl'
                src='/assets/comunidad/minecraft-comunidad-duende.webp'
                alt='minecraft-comunidad'
                width={300}
                height={100}
              />
            </div>
            <div className='text-text-primary p-6'>
              <h4 className='text-xl font-medium'>
                <span className='text-primary-light mr-1'>#</span>MINECRAFT
              </h4>
              <p className='mt-2 text-lg'>
                Servidor de Minecraft para los suscriptores de Twitch
              </p>
            </div>
          </Link>
          <Link
            href='https://store.steampowered.com/app/252490/Rust/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex-[0_0_35%] rounded-xl relative comunidad-gradient'
          >
            <div className='h-48'>
              <Image
                className='w-full h-full object-contain object-top rounded-xl drop-shadow-2xl'
                src='/assets/comunidad/rust-comunidad-duende.webp'
                alt='rust-comunidad'
                width={300}
                height={100}
              />
            </div>
            <div className='text-text-primary p-6'>
              <h4 className='text-xl font-medium'>
                <span className='text-primary-light mr-1'>#</span>RUST
              </h4>
              <p className='mt-2 text-lg'>
                Servidor de Rust para los suscriptores de Twitch
              </p>
            </div>
          </Link>
          <Link
            href='https://es.megamu.net/?gclid=CjwKCAiA_OetBhAtEiwAPTeQZ4gzWBRv9pYp7VL8XLxLNCIPXjInbU5IIeCmwj_lk0BGgbxtXhgigxoCMqMQAvD_BwE'
            target='_blank'
            rel='noopener noreferrer'
            className='flex-[0_0_35%] rounded-xl relative comunidad-gradient'
          >
            <div className='h-48'>
              <Image
                className='w-full h-full object-contain object-top rounded-xl drop-shadow-2xl'
                src='/assets/comunidad/mu-comunidad-duende.webp'
                alt='rust-comunidad'
                width={300}
                height={100}
              />
            </div>
            <div className='text-text-primary p-6'>
              <h4 className='text-xl font-medium'>
                <span className='text-primary-light mr-1'>#</span>MU ONLINE
              </h4>
              <p className='mt-2 text-lg'>
                Servidor de Mu online para los suscriptores de Twitch
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Comunidad;
