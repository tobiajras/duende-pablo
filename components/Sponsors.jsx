import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sponsors = () => {
  return (
    <section className='grid grid-cols-3 gap-10 max-w-6xl m-10 mb-20'>
      <article className='sponsor-gradient rounded-xl'>
        <div className='h-56'>
          <Image
            className='w-full h-full object-contain object-center rounded-xl p-5'
            src='/assets/sponsor/aorus-sponsor-duende.webp'
            alt='aorus-sponsor'
            width={1200}
            height={675}
          />
        </div>
        <div>
          <h4 className='mt-4 text-text-primary text-xl font-medium'>Aorus</h4>
          <p className='mt-1 text-lg'>
            Usa el codigo #Duende-pablo para obtener 15% de descuento
          </p>
        </div>
        {/* <Link
          className=''
          href='https://www.aorus.com/es-ar'
          target='_blank'
          rel='noopener noreferrer'
        >
          
        </Link> */}
      </article>
      <article className='sponsor-gradient rounded-xl'>
        <div className='h-56'>
          <Image
            className='w-full h-full object-contain object-center rounded-xl p-5'
            src='/assets/sponsor/elgato-sponsor-duende.webp'
            alt='aorus-sponsor'
            width={1200}
            height={675}
          />
        </div>
        <div>
          <h4 className='mt-4 text-text-primary text-xl font-medium'>Elgato</h4>
          <p className='mt-1 text-lg'>
            Usa el codigo #Duende-pablo para obtener 15% de descuento
          </p>
        </div>
      </article>
      <article className='sponsor-gradient rounded-xl'>
        <div className='h-56'>
          <Image
            className='w-full h-full object-contain object-center rounded-xl p-5'
            src='/assets/sponsor/hyperx-sponsor-duende.webp'
            alt='rust-comunidad'
            width={300}
            height={100}
          />
        </div>
        <div>
          <h4 className='mt-4 text-text-primary text-xl font-medium'>HyperX</h4>
          <p className='mt-1 text-lg'>
            Usa el codigo #Duende-pablo para obtener 15% de descuento
          </p>
        </div>
      </article>
      <article className='sponsor-gradient rounded-xl'>
        <div className='h-56'>
          <Image
            className='w-full h-full object-contain object-center rounded-xl p-5'
            src='/assets/sponsor/karatecombat-sponsor-duende.webp'
            alt='mu-comunidad'
            width={300}
            height={100}
          />
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
      <article className='sponsor-gradient rounded-xl'>
        <div className='h-56'>
          <Image
            className='w-full h-full object-contain object-center rounded-xl p-5'
            src='/assets/sponsor/redbull-sponsor-duende.webp'
            alt='mu-comunidad'
            width={300}
            height={100}
          />
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
