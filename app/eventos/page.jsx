import Image from "next/image";

import { FaLocationDot } from "react-icons/fa6";

const Eventos = () => {
  return (
    <section className='flex justify-center'>
      <div className='max-w-6xl my-40 mx-10 grid grid-cols-2 gap-20'>
        <article className='max-w-md'>
          <div>
            <Image
              className='w-full h-full object-cover rounded-xl'
              src='/assets/eventos/coscuawards-eventos-duende.webp'
              alt='coscuawards-eventos'
              width={450}
              height={300}
            />
          </div>
          <h4 className='mt-5 text-2xl text-text-primary font-semibold'>
            Coscu Army Awards 2020
          </h4>
          <p className='mt-2 text-lg'>
            El evento de streamers más grande de Argentina, con un pico de más
            de 1.000.000 de espectadores.
          </p>
          <div className='mt-2 flex gap-2 items-center text-lg'>
            <FaLocationDot />
            <span>Argentina</span>
          </div>
          <ul className='flex gap-5 mt-3'>
            <li className='text-primary font-semibold bg-primary/25 py-2 px-5 rounded'>
              Gaming
            </li>
            <li className='text-primary font-semibold bg-primary/25 py-2 px-5 rounded'>
              Stream
            </li>
            <li className='text-primary font-semibold bg-primary/25 py-2 px-5 rounded'>
              Premios
            </li>
          </ul>
        </article>
        <article className='max-w-md'>
          <div>
            <Image
              className='w-full h-full object-cover rounded-xl'
              src='/assets/eventos/fornite-eventos-duende.webp'
              alt='fornite-eventos'
              width={450}
              height={300}
            />
          </div>
          <h4 className='mt-5 text-2xl text-text-primary font-semibold'>
            Stars Battle Royale 2019
          </h4>
          <p className='mt-2 text-lg'>
            +100 youtubers, influencers y jugadores profesionales para competir
            por el trofeo.
          </p>
          <div className='mt-2 flex gap-2 items-center text-lg'>
            <FaLocationDot />
            <span>Estados Unidos</span>
          </div>
          <ul className='flex gap-5 mt-3'>
            <li className='text-primary font-semibold bg-primary/25 py-2 px-5 rounded'>
              Gaming
            </li>
            <li className='text-primary font-semibold bg-primary/25 py-2 px-5 rounded'>
              Torneo
            </li>
            <li className='text-primary font-semibold bg-primary/25 py-2 px-5 rounded'>
              Fornite
            </li>
          </ul>
        </article>
        <article className='max-w-md'>
          <div>
            <Image
              className='w-full h-full object-cover rounded-xl'
              src='/assets/eventos/blizzcon-eventos-duende.webp'
              alt='fornite-eventos'
              width={450}
              height={300}
            />
          </div>
          <h4 className='mt-5 text-2xl text-text-primary font-semibold'>
            Blizzcon 2018
          </h4>
          <p className='mt-2 text-lg'>
            Convención celebrada por Blizzard Entertainment para celebrar sus
            franquicias más importantes.
          </p>
          <div className='mt-2 flex gap-2 items-center text-lg'>
            <FaLocationDot />
            <span>Estados Unidos</span>
          </div>
          <ul className='flex gap-5 mt-3'>
            <li className='text-primary font-semibold bg-primary/25 py-2 px-5 rounded'>
              Gaming
            </li>
            <li className='text-primary font-semibold bg-primary/25 py-2 px-5 rounded'>
              Warcraft
            </li>
            <li className='text-primary font-semibold bg-primary/25 py-2 px-5 rounded'>
              Comunidad
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Eventos;
