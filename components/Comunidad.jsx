'use client';

import Image from 'next/image';
import Link from 'next/link';

import comunidad from '@/data/comunidad.json';

import useEmblaCarousel from 'embla-carousel-react';

import { motion } from 'framer-motion';

import DiscordIcon from './icons/DiscordIcon';

const comunidadVariants = {
  inactive: {
    opacity: 0,
    y: 30,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

const Comunidad = () => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
  });

  return (
    <motion.section
      className='flex flex-col items-center w-full relative'
      variants={comunidadVariants}
      initial='inactive'
      whileInView='active'
      viewport={{
        once: true,
        margin: '0px 0px -200px 0px',
      }}
    >
      <div className='w-full flex justify-center'>
        <h3 className='w-full text-xl md:text-3xl font-semibold items-start max-w-6xl mx-6 sm:mx-8 md:mx-10'>
          Comunidad
        </h3>
      </div>
      <article className='flex justify-center w-full p-6 sm:p-8 md:p-10 pb-10 md:pb-20'>
        <div className='overflow-hidden max-w-6xl' ref={emblaRef}>
          <div className='flex gap-4 md:gap-10'>
            {comunidad.map((comunidadItem) => (
              <div
                key={comunidadItem.id}
                className='flex-[0_0_55%] sm:flex-[0_0_35%] md:flex-[0_0_35%] rounded-md md:rounded-xl relative comunidad-gradient comunidad-card-animation'
              >
                <Link
                  href={comunidadItem.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className=''
                >
                  {comunidadItem.image ? (
                    <div className='h-20 sm:h-28 md:h-36 lg:h-44'>
                      <Image
                        className='w-full h-full object-contain object-top drop-shadow-2xl '
                        src={comunidadItem.image}
                        alt={comunidadItem.alt}
                        width={300}
                        height={100}
                      />
                    </div>
                  ) : (
                    <div className='flex justify-center'>
                      <div>
                        <DiscordIcon className='fill-text-primary h-20 sm:h-28 md:h-36 lg:h-44 w-20 sm:w-28 md:w-36 lg:w-44 bg-[#7289D9] rounded-full p-4 md:p-7' />
                      </div>
                    </div>
                  )}
                  <div className='text-text-primary p-3 sm:p-5 md:p-6'>
                    <h4 className='text-base md:text-xl lg:text-2xl font-medium'>
                      <span className='text-primary-light mr-1'>#</span>
                      {comunidadItem.title}
                    </h4>
                    <p className='mt-1 md:mt-2 text-sm md:text-base lg:text-lg'>
                      {comunidadItem.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </article>
    </motion.section>
  );
};

export default Comunidad;
