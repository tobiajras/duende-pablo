'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

const pcVariants = {
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

const Pc = () => {
  return (
    <section className='flex justify-center'>
      <div className='max-w-6xl mt-32 mb-20 md:my-40 mx-6 sm:mx-8 md:mx-10 flex flex-col items-center gap-10 md:gap-20'>
        <article className='flex justify-center gap-5 sm:gap-10 md:gap-20'>
          <div className='flex flex-col justify-center '>
            <h3 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium'>
              ¿Con qué PC streameo?
            </h3>
            <h3 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 text-text-primary font-semibold whitespace-nowrap'>
              Hardware y Periféricos
            </h3>
          </div>
          <div className='max-h-48 md:max-h-56 lg:max-h-72'>
            <Image
              priority={true}
              className='h-full w-full object-contain'
              src='/assets/pccomponentes/foto-pc-duende.webp'
              alt='foto-pc'
              width={300}
              height={300}
            />
          </div>
        </article>
        <article>
          <motion.h4
            variants={pcVariants}
            initial='inactive'
            whileInView='active'
            viewport={{
              once: true,
            }}
            className='text-xl md:text-3xl font-semibold mb-4 md:mb-10'
          >
            Componentes
          </motion.h4>
          <ul className='grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-10 md:grid-cols-3 md:gap-x-10 md:gap-y-28 lg:grid-cols-4'>
            <motion.li
              variants={pcVariants}
              initial='inactive'
              whileInView='active'
              viewport={{
                once: true,
                margin: '0px 0px -100px 0px',
              }}
            >
              <div className='h-32 md:h-44 p-3 md:p-5'>
                <Image
                  priority={true}
                  className='w-full h-full object-contain'
                  src='/assets/pccomponentes/placavideo-pc-duende.webp'
                  alt='placavideo-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-1 md:mt-3 text-text-primary md:text-lg font-medium'>
                ZOTAC GeForce RTX 2070 Super Mini 8GB GDDR6 256-Bit 14Gbps
              </h4>
              <div className='flex items-center gap-2 text-sm md:text-lg mt-2'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 16 16'
                  class='w-5 h-5 md:w-6 md:h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z'></path>
                  <path d='M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5Zm5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z'></path>
                  <path d='M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1Zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z'></path>
                </svg>
                <span>Placa de Video</span>
              </div>
            </motion.li>
            <motion.li
              variants={pcVariants}
              initial='inactive'
              whileInView='active'
              viewport={{
                once: true,
                margin: '0px 0px -100px 0px',
              }}
            >
              <div className='h-32 md:h-44 p-3 md:p-5'>
                <Image
                  priority={true}
                  className='w-full h-full object-contain'
                  src='/assets/pccomponentes/procesador-pc-duende.webp'
                  alt='procesador-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-1 md:mt-3 text-text-primary md:text-lg font-medium'>
                Intel Core i9-10900K 10 Cores, up to 5.3 GHz Unlocked
              </h4>
              <div className='flex items-center gap-2 text-sm md:text-lg mt-2'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 16 16'
                  class='w-5 h-5 md:w-6 md:h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z'></path>
                  <path d='M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z'></path>
                </svg>
                <span>Procesador</span>
              </div>
            </motion.li>
            <motion.li
              variants={pcVariants}
              initial='inactive'
              whileInView='active'
              viewport={{
                once: true,
                margin: '0px 0px -100px 0px',
              }}
            >
              <div className='h-32 md:h-44 p-3 md:p-5'>
                <Image
                  priority={true}
                  className='w-full h-full object-contain'
                  src='/assets/pccomponentes/placamadre-pc-duende.webp'
                  alt='placamadre-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-1 md:mt-3 text-text-primary md:text-lg font-medium'>
                Gigabyte H470I AORUS PRO AX, Mini ITX/DDR4/WIFI 6
              </h4>
              <div className='flex items-center gap-2 text-sm md:text-lg mt-2'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 16 16'
                  class='w-5 h-5 md:w-6 md:h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M5 7h3V4H5v3Z'></path>
                  <path d='M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM4 4h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 0-1 1Zm7 7.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Z'></path>
                </svg>
                <span>Placa Madre</span>
              </div>
            </motion.li>
            <motion.li
              variants={pcVariants}
              initial='inactive'
              whileInView='active'
              viewport={{
                once: true,
                margin: '0px 0px -100px 0px',
              }}
            >
              <div className='h-32 md:h-44 p-3 md:p-5'>
                <Image
                  priority={true}
                  className='w-full h-full object-contain'
                  src='/assets/pccomponentes/ram-pc-duende.webp'
                  alt='ram-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-1 md:mt-3 text-text-primary md:text-lg font-medium'>
                Corsair Dominator Platinum RGB 32GB (4x8GB) DDR4 3600
              </h4>
              <div className='flex items-center gap-2 text-sm md:text-lg mt-2'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 640 512'
                  class='w-5 h-5 md:w-6 md:h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M640 130.94V96c0-17.67-14.33-32-32-32H32C14.33 64 0 78.33 0 96v34.94c18.6 6.61 32 24.19 32 45.06s-13.4 38.45-32 45.06V320h640v-98.94c-18.6-6.61-32-24.19-32-45.06s13.4-38.45 32-45.06zM224 256h-64V128h64v128zm128 0h-64V128h64v128zm128 0h-64V128h64v128zM0 448h64v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h64v-96H0v96z'></path>
                </svg>
                <span>Memoria Ram</span>
              </div>
            </motion.li>
            <motion.li
              variants={pcVariants}
              initial='inactive'
              whileInView='active'
              viewport={{
                once: true,
                margin: '0px 0px -200px 0px',
              }}
            >
              <div className='h-32 md:h-44 p-3 md:p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pccomponentes/ssd-pc-duende.webp'
                  alt='ssd-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-1 md:mt-3 text-text-primary md:text-lg font-medium'>
                1TB WD Blue SN550 NVMe Internal SSD - Gen3 x4 PCIe 8Gb/s
              </h4>
              <div className='flex items-center gap-2 text-sm md:text-lg mt-2'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 16 16'
                  class='w-5 h-5 md:w-6 md:h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12.5 0H5.914a1.5 1.5 0 0 0-1.06.44L2.439 2.853A1.5 1.5 0 0 0 2 3.914V14.5A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 12.5 0Zm-7 2.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm2 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm2.75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1.5 0Zm1.25-.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z'></path>
                </svg>
                <span>Memoria SSD</span>
              </div>
            </motion.li>
          </ul>
        </article>
        <article>
          <motion.h4
            variants={pcVariants}
            initial='inactive'
            whileInView='active'
            viewport={{
              once: true,
              margin: '0px 0px -240px 0px',
            }}
            className='text-xl md:text-3xl font-semibold mb-4 md:mb-10'
          >
            Periféricos
          </motion.h4>
          <ul className='grid grid-cols-2 gap-x-4 md:grid-cols-4 md:gap-x-10 gap-y-10 md:gap-y-28'>
            <motion.li
              variants={pcVariants}
              initial='inactive'
              whileInView='active'
              viewport={{
                once: true,
                margin: '0px 0px -200px 0px',
              }}
            >
              <div className='h-32 md:h-44 p-3 md:p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/mouse-pc-duende.webp'
                  alt='mouse-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-1 md:mt-3 text-text-primary md:text-lg font-medium'>
                Mouse Inalámbrico Logitech G Pro X Superlight
              </h4>
              <div className='flex items-center gap-2 text-sm md:text-lg mt-2'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 16 16'
                  class='w-5 h-5 md:w-6 md:h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V5zm5.5-1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z'></path>
                </svg>
                <span>Mouse</span>
              </div>
            </motion.li>
            <motion.li
              variants={pcVariants}
              initial='inactive'
              whileInView='active'
              viewport={{
                once: true,
                margin: '0px 0px -200px 0px',
              }}
            >
              <div className='h-32 md:h-44 p-3 md:p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/teclado-pc-duende.webp'
                  alt='teclado-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-1 md:mt-3 text-text-primary md:text-lg font-medium'>
                Teclado Mecanico Gamer Logitech G Pro X
              </h4>
              <div className='flex items-center gap-2 text-sm md:text-lg mt-2'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 16 16'
                  class='w-5 h-5 md:w-6 md:h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm13 .25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25zM2.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 8.75v-.5A.25.25 0 0 0 2.75 8h-.5zM4 8.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 5 8.75v-.5A.25.25 0 0 0 4.75 8h-.5a.25.25 0 0 0-.25.25zM6.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 7 8.75v-.5A.25.25 0 0 0 6.75 8h-.5zM8 8.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 9 8.75v-.5A.25.25 0 0 0 8.75 8h-.5a.25.25 0 0 0-.25.25zM13.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5zm-3-2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-1.5zm.75 2.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25zM11.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5zM9 6.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5A.25.25 0 0 0 9.75 6h-.5a.25.25 0 0 0-.25.25zM7.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 8 6.75v-.5A.25.25 0 0 0 7.75 6h-.5zM5 6.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 6 6.75v-.5A.25.25 0 0 0 5.75 6h-.5a.25.25 0 0 0-.25.25zM2.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h1.5A.25.25 0 0 0 4 6.75v-.5A.25.25 0 0 0 3.75 6h-1.5zM2 10.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25zM4.25 10a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-5.5z'></path>
                </svg>
                <span>Teclado</span>
              </div>
            </motion.li>
            <motion.li
              variants={pcVariants}
              initial='inactive'
              whileInView='active'
              viewport={{
                once: true,
                margin: '0px 0px -200px 0px',
              }}
            >
              <div className='h-32 md:h-44 p-3 md:p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/microfono-pc-duende.webp'
                  alt='microfono-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-1 md:mt-3 text-text-primary md:text-lg font-medium'>
                Microfono Shure Sm7b Cardioid Dynamic
              </h4>
              <div className='flex items-center gap-2 text-sm md:text-lg mt-2'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 352 512'
                  class='w-5 h-5 md:w-6 md:h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z'></path>
                </svg>
                <span>Micrófono</span>
              </div>
            </motion.li>
            <motion.li
              variants={pcVariants}
              initial='inactive'
              whileInView='active'
              viewport={{
                once: true,
                margin: '0px 0px -200px 0px',
              }}
            >
              <div className='h-32 md:h-44 p-3 md:p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/rode-pc-duende.webp'
                  alt='rode-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-1 md:mt-3 text-text-primary md:text-lg font-medium'>
                RODE PSA1 Brazo de estudio profesional
              </h4>
              <div className='flex items-center gap-2 text-sm md:text-lg mt-2'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 24 24'
                  class='w-5 h-5 md:w-6 md:h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path fill='none' d='M0 0h24v24H0V0z'></path>
                  <path d='m17 16-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z'></path>
                </svg>
                <span>Brazo</span>
              </div>
            </motion.li>
            <motion.li
              variants={pcVariants}
              initial='inactive'
              whileInView='active'
              viewport={{
                once: true,
                margin: '0px 0px -200px 0px',
              }}
            >
              <div className='h-32 md:h-44 p-3 md:p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/monitor-pc-duende.webp'
                  alt='monitor-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-1 md:mt-3 text-text-primary md:text-lg font-medium'>
                Monitor Gamer 27p Asus
              </h4>
              <div className='flex items-center gap-2 text-sm md:text-lg mt-2'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 576 512'
                  class='w-5 h-5 md:w-6 md:h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z'></path>
                </svg>
                <span>Monitor</span>
              </div>
            </motion.li>
            <motion.li
              variants={pcVariants}
              initial='inactive'
              whileInView='active'
              viewport={{
                once: true,
                margin: '0px 0px -200px 0px',
              }}
            >
              <div className='h-32 md:h-44 p-3 md:p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/streamdeck-pc-duende.webp'
                  alt='streamdeck-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-1 md:mt-3 text-text-primary md:text-lg font-medium'>
                Stream Deck Classis - 15 customisable LCD keys
              </h4>
              <div className='flex items-center gap-2 text-sm md:text-lg mt-2'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 24 24'
                  class='w-5 h-5 md:w-6 md:h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path d='M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 12v2H5v-2h2zm-2-2V8h2v2H5zm6 2v2H9v-2h2zm-2-2V8h2v2H9zm7 6v1H8v-1h8zm-1-4v2h-2v-2h2zm-2-2V8h2v2h-2zm4 4v-2h2v2h-2zm2-4h-2V8h2v2z'></path>
                </svg>
                <span>Stream Deck</span>
              </div>
            </motion.li>
            <motion.li
              variants={pcVariants}
              initial='inactive'
              whileInView='active'
              viewport={{
                once: true,
                margin: '0px 0px -200px 0px',
              }}
            >
              <div className='h-32 md:h-44 p-3 md:p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/camara-pc-duende.webp'
                  alt='camara-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-1 md:mt-3 text-text-primary md:text-lg font-medium'>
                Cámara Digital Mirrorless Full Frame ILCE-7C A7C
              </h4>
              <div className='flex items-center gap-2 text-sm md:text-lg mt-2'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 512 512'
                  class='w-5 h-5 md:w-6 md:h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='256' cy='272' r='64'></circle>
                  <path d='M456 144h-83c-3 0-6.72-1.94-9.62-5L336.1 96.2C325 80 320 80 302 80h-92c-18 0-24 0-34.07 16.21L148.62 139c-2.22 2.42-5.34 5-8.62 5v-16a8 8 0 0 0-8-8H92a8 8 0 0 0-8 8v16H56a24 24 0 0 0-24 24v240a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V168a24 24 0 0 0-24-24zM260.51 367.9a96 96 0 1 1 91.39-91.39 96.11 96.11 0 0 1-91.39 91.39z'></path>
                </svg>
                <span>Cámara</span>
              </div>
            </motion.li>
            <motion.li
              variants={pcVariants}
              initial='inactive'
              whileInView='active'
              viewport={{
                once: true,
                margin: '0px 0px -200px 0px',
              }}
            >
              <div className='h-32 md:h-44 p-3 md:p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/lente-pc-duende.webp'
                  alt='lente-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-1 md:mt-3 text-text-primary md:text-lg font-medium'>
                Lente de zoom gran angular G Master FE 16-35 mm
              </h4>
              <div className='flex items-center gap-2 text-sm md:text-lg mt-2'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 24 24'
                  class='w-5 h-5 md:w-6 md:h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path d='m9.4 10.5 4.77-8.26a9.984 9.984 0 0 0-8.49 2.01l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25A9.91 9.91 0 0 0 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75A9.958 9.958 0 0 0 2.2 14h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0-3.9 6.76a9.984 9.984 0 0 0 8.49-2.01l-3.66-6.35-.93 1.6z'></path>
                </svg>
                <span>Lente</span>
              </div>
            </motion.li>
            <motion.li
              variants={pcVariants}
              initial='inactive'
              whileInView='active'
              viewport={{
                once: true,
                margin: '0px 0px -200px 0px',
              }}
            >
              <div className='h-44 pb-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/silla-pc-duende.webp'
                  alt='silla-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-1 md:mt-3 text-text-primary md:text-lg font-medium'>
                Silla Gamer Corsair T3 Rush Gris Carbon
              </h4>
              <div className='flex items-center gap-2 text-sm md:text-lg mt-2'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 256 256'
                  class='w-5 h-5 md:w-6 md:h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M248,128a8,8,0,0,1-8,8H223.33A48.08,48.08,0,0,1,176,176H136v24h24a32,32,0,0,1,32,32,8,8,0,0,1-16,0,16,16,0,0,0-16-16H136v16a8,8,0,0,1-16,0V216H96a16,16,0,0,0-16,16,8,8,0,0,1-16,0,32,32,0,0,1,32-32h24V176H80a48.08,48.08,0,0,1-47.33-40H16a8,8,0,0,1,0-16H40a8,8,0,0,1,8,8,32,32,0,0,0,32,32h96a32,32,0,0,0,32-32,8,8,0,0,1,8-8h24A8,8,0,0,1,248,128ZM80,144h96a16,16,0,0,0,15.84-18.26l-13.72-96A16.08,16.08,0,0,0,162.28,16H93.72A16.08,16.08,0,0,0,77.88,29.74l-13.72,96A16,16,0,0,0,80,144Z'></path>
                </svg>
                <span>Silla</span>
              </div>
            </motion.li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Pc;
