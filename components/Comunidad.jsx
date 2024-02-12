'use client';

import Image from 'next/image';
import Link from 'next/link';

import comunidad from '@/data/comunidad.json';

import useEmblaCarousel from 'embla-carousel-react';

import { motion } from 'framer-motion';

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
      className='flex flex-col items-center w-full'
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
      <article className='flex justify-center background-blur w-full p-6 sm:p-8 md:p-10 pb-10 md:pb-20'>
        <div className='overflow-hidden max-w-6xl' ref={emblaRef}>
          <div className='flex gap-4 md:gap-10'>
            {comunidad.map((comunidadItem) => (
              <div
                key={comunidadItem.id}
                className='flex-[0_0_55%] sm:flex-[0_0_35%] md:flex-[0_0_35%] rounded-md md:rounded-xl relative comunidad-gradient'
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
                        className='w-full h-full object-contain object-top drop-shadow-2xl'
                        src={comunidadItem.image}
                        alt={comunidadItem.alt}
                        width={300}
                        height={100}
                      />
                    </div>
                  ) : (
                    <div className='flex justify-center'>
                      <div className='md:mt-4'>
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          stroke-width='0'
                          viewBox='0 0 640 512'
                          class='fill-text-primary h-20 sm:h-28 md:h-36 lg:h-44 w-20 sm:w-28 md:w-36 lg:w-44 bg-[#7289D9] rounded-full p-4 md:p-7'
                          height='1em'
                          width='1em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z'></path>
                        </svg>
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
