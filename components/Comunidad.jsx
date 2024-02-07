'use client';

import Image from 'next/image';
import Link from 'next/link';

import comunidad from '@/data/comunidad.json';

import useEmblaCarousel from 'embla-carousel-react';

import { FaDiscord } from 'react-icons/fa';

const Comunidad = () => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
  });

  return (
    <section className='flex justify-center background-blur w-full p-4 md:p-10 pb-10 md:pb-20'>
      <div className='overflow-hidden max-w-6xl' ref={emblaRef}>
        <div className='flex gap-4 md:gap-10'>
          {comunidad.map((comunidadItem) => (
            <Link
              key={comunidadItem.id}
              href={comunidadItem.link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-[0_0_55%] md:flex-[0_0_35%] rounded-md md:rounded-xl relative comunidad-gradient'
            >
              {comunidadItem.image ? (
                <div className='h-24 md:h-48'>
                  <Image
                    className='w-full h-full object-contain object-top drop-shadow-2xl'
                    src={comunidadItem.image}
                    alt={comunidadItem.alt}
                    width={300}
                    height={100}
                  />
                </div>
              ) : (
                <div className='flex justify-center'>
                  <div className='h-24 md:h-44 rounded-full md:mt-4'>
                    <FaDiscord className='fill-text-primary w-full h-full bg-[#7289D9] rounded-full p-4 md:p-7' />
                  </div>
                </div>
              )}
              <div className='text-text-primary p-4 md:p-6'>
                <h4 className='text-base md:text-xl font-medium'>
                  <span className='text-primary-light mr-1'>#</span>
                  {comunidadItem.title}
                </h4>
                <p className='mt-1 md:mt-2 text-xs md:text-lg'>
                  {comunidadItem.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comunidad;
