import Image from "next/image";
import React from "react";

import { FaDiscord } from "react-icons/fa";

const Comunidad = () => {
  return (
    <section className='grid grid-cols-3 gap-10 max-w-6xl m-10'>
      <article>
        <div className='bg-[#7289D9] h-56 flex items-center justify-center gap-3 rounded-xl'>
          <FaDiscord className='fill-text-primary w-16 h-16' />
          <span className='text-text-primary text-4xl font-bold'>Discord</span>
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
      <article>
        <div className='h-56'>
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
      <article>
        <div className='h-56'>
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
      <article>
        <div className='h-56'>
          <Image
            className='w-full h-full object-cover object-top rounded-xl'
            src='/assets/juegos-comunidad/mu-duende-pablo.webp'
            alt='mu-comunidad'
            width={300}
            height={100}
          />
        </div>
        <div>
          <h4 className='mt-4 text-text-primary text-xl font-medium'>
            La Comarca Mu
          </h4>
          <p className='mt-1 text-lg'>
            Servidor de Mu Online para los suscriptores de Twitch
          </p>
        </div>
      </article>
    </section>
  );
};

export default Comunidad;
