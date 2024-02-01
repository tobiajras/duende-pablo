import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sponsors = () => {
  return (
    <section className='grid grid-cols-3 gap-10 max-w-6xl m-10 mb-20'>
      <article>
        <div className='h-48'>
          <Link
            href='https://www.aorus.com/es-ar'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='w-full h-full object-cover object-top rounded-xl'
              src='/assets/sponsor/aorus-sponsor-duende.webp'
              alt='aorus-sponsor'
              width={300}
              height={100}
            />
          </Link>
        </div>
        <div>
          <h4 className='mt-4 text-text-primary text-xl font-medium'>Aorus</h4>
          <p className='mt-1 text-lg'>
            Usa el codigo #Duende-pablo para obtener 15% de descuento
          </p>
        </div>
      </article>
      <article>
        <div className='h-48'>
          <Link
            href='https://www.elgato.com/es/es'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='w-full h-full object-cover object-top rounded-xl'
              src='/assets/sponsor/elgato-sponsor-duende.webp'
              alt='elgato-sponsor'
              width={300}
              height={100}
            />
          </Link>
        </div>
        <div>
          <h4 className='mt-4 text-text-primary text-xl font-medium'>Elgato</h4>
          <p className='mt-1 text-lg'>
            Usa el codigo #Duende-pablo para obtener 15% de descuento
          </p>
        </div>
      </article>
      <article>
        <div className='h-48'>
          <Link
            href='https://row.hyperx.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='w-full h-full object-cover object-top rounded-xl'
              src='/assets/sponsor/hyperx-sponsor-duende.webp'
              alt='hyperx-sponsor'
              width={300}
              height={100}
            />
          </Link>
        </div>
        <div>
          <h4 className='mt-4 text-text-primary text-xl font-medium'>HyperX</h4>
          <p className='mt-1 text-lg'>
            Usa el codigo #Duende-pablo para obtener 15% de descuento
          </p>
        </div>
      </article>
      <article>
        <div className='h-48'>
          <Link
            href='https://karate.com/en/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='w-full h-full object-cover object-top rounded-xl'
              src='/assets/sponsor/karatecombat-sponsor-duende.webp'
              alt='karatecombat-sponsor'
              width={300}
              height={100}
            />
          </Link>
        </div>
        <div>
          <h4 className='mt-4 text-text-primary text-xl font-medium'>
            Karate Combat
          </h4>
          <p className='mt-1 text-lg'>
            Usa el codigo #Duende-pablo para obtener 15% de descuento
          </p>
        </div>
      </article>
      <article>
        <div className='h-48'>
          <Link
            href='https://www.redbull.com/ar-es/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='w-full h-full object-cover object-top rounded-xl'
              src='/assets/sponsor/redbull-sponsor-duende.webp'
              alt='redbull-sponsor'
              width={300}
              height={100}
            />
          </Link>
        </div>
        <div>
          <h4 className='mt-4 text-text-primary text-xl font-medium'>
            Redbull
          </h4>
          <p className='mt-1 text-lg'>
            Usa el codigo #Duende-pablo para obtener 15% de descuento
          </p>
        </div>
      </article>
    </section>
  );
};

export default Sponsors;
