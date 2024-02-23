'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

import MemoriaRamIcon from '@/components/icons/MemoriaRamIcon';
import MouseIcon from '@/components/icons/MouseIcon';
import PlacaMadreIcon from '@/components/icons/PlacaMadreIcon';
import PlacaVideoIcon from '@/components/icons/PlacaVideoIcon';
import ProcesadorIcon from '@/components/icons/ProcesadorIcon';
import TecladoIcon from '@/components/icons/TecladoIcon';
import MicrofonoIcon from '@/components/icons/MicrofonoIcon';
import BrazoIcon from '@/components/icons/BrazoIcon';
import MonitorIcon from '@/components/icons/MonitorIcon';
import StreamDeckIcon from '@/components/icons/StreamDeckIcon';
import CamaraIcon from '@/components/icons/CamaraIcon';
import LenteIcon from '@/components/icons/LenteIcon';
import SillaIcon from '@/components/icons/SillaIcon';

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
          <div className='max-h-48 sm:h-48 sm:max-h-max md:h-56 lg:h-72'>
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
              <div className='flex items-center gap-2 text-sm md:text-lg mt-1 md:mt-3'>
                <PlacaVideoIcon className='w-5 h-5 md:w-6 md:h-6' />
                <span>Placa de Video</span>
              </div>
              <h4 className='text-text-primary md:text-lg font-medium mt-2'>
                ZOTAC GeForce RTX 2070 Super Mini 8GB GDDR6 256-Bit 14Gbps
              </h4>
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
              <div className='flex items-center gap-2 text-sm md:text-lg mt-1 md:mt-3'>
                <ProcesadorIcon className='w-5 h-5 md:w-6 md:h-6' />
                <span>Procesador</span>
              </div>
              <h4 className='text-text-primary md:text-lg font-medium mt-2'>
                Intel Core i9-10900K 10 Cores, up to 5.3 GHz Unlocked
              </h4>
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
              <div className='flex items-center gap-2 text-sm md:text-lg mt-1 md:mt-3'>
                <PlacaMadreIcon className='w-5 h-5 md:w-6 md:h-6' />
                <span>Placa Madre</span>
              </div>
              <h4 className='text-text-primary md:text-lg font-medium mt-2'>
                Gigabyte H470I AORUS PRO AX, Mini ITX/DDR4/WIFI 6
              </h4>
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
              <div className='flex items-center gap-2 text-sm md:text-lg mt-1 md:mt-3'>
                <MemoriaRamIcon className='w-5 h-5 md:w-6 md:h-6' />
                <span>Memoria Ram</span>
              </div>
              <h4 className='text-text-primary md:text-lg font-medium mt-2'>
                Corsair Dominator Platinum RGB 32GB (4x8GB) DDR4 3600
              </h4>
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
              <div className='flex items-center gap-2 text-sm md:text-lg mt-1 md:mt-3'>
                <MemoriaRamIcon className='w-5 h-5 md:w-6 md:h-6' />
                <span>Memoria SSD</span>
              </div>
              <h4 className='text-text-primary md:text-lg font-medium mt-2'>
                1TB WD Blue SN550 NVMe Internal SSD - Gen3 x4 PCIe 8Gb/s
              </h4>
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
          <ul className='grid grid-cols-2 gap-x-4 md:grid-cols-3 lg:grid-cols-4 md:gap-x-10 gap-y-10 md:gap-y-28'>
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
              <div className='flex items-center gap-2 text-sm md:text-lg mt-1 md:mt-3'>
                <MouseIcon className='w-5 h-5 md:w-6 md:h-6' />
                <span>Mouse</span>
              </div>
              <h4 className='text-text-primary md:text-lg font-medium mt-2'>
                Mouse Inalámbrico Logitech G Pro X Superlight
              </h4>
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
              <div className='flex items-center gap-2 text-sm md:text-lg mt-1 md:mt-3'>
                <TecladoIcon className='w-5 h-5 md:w-6 md:h-6' />
                <span>Teclado</span>
              </div>
              <h4 className='text-text-primary md:text-lg font-medium mt-2'>
                Teclado Mecanico Gamer Logitech G Pro X
              </h4>
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
              <div className='flex items-center gap-2 text-sm md:text-lg mt-1 md:mt-3'>
                <MicrofonoIcon className='w-5 h-5 md:w-6 md:h-6' />
                <span>Micrófono</span>
              </div>
              <h4 className='text-text-primary md:text-lg font-medium mt-2'>
                Microfono Shure Sm7b Cardioid Dynamic
              </h4>
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
              <div className='flex items-center gap-2 text-sm md:text-lg mt-1 md:mt-3'>
                <BrazoIcon className='w-5 h-5 md:w-6 md:h-6' />
                <span>Brazo</span>
              </div>
              <h4 className='text-text-primary md:text-lg font-medium mt-2'>
                RODE PSA1 Brazo de estudio profesional
              </h4>
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
              <div className='flex items-center gap-2 text-sm md:text-lg mt-1 md:mt-3'>
                <MonitorIcon className='w-5 h-5 md:w-6 md:h-6' />
                <span>Monitor</span>
              </div>
              <h4 className='text-text-primary md:text-lg font-medium mt-2'>
                Monitor Gamer 27p Asus
              </h4>
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
              <div className='flex items-center gap-2 text-sm md:text-lg mt-1 md:mt-3'>
                <StreamDeckIcon className='w-5 h-5 md:w-6 md:h-6' />
                <span>Stream Deck</span>
              </div>
              <h4 className='text-text-primary md:text-lg font-medium mt-2'>
                Stream Deck Classis - 15 customisable LCD keys
              </h4>
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
              <div className='flex items-center gap-2 text-sm md:text-lg mt-1 md:mt-3'>
                <CamaraIcon className='w-5 h-5 md:w-6 md:h-6' />
                <span>Cámara</span>
              </div>
              <h4 className='text-text-primary md:text-lg font-medium mt-2'>
                Cámara Digital Mirrorless Full Frame ILCE-7C A7C
              </h4>
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
              <div className='flex items-center gap-2 text-sm md:text-lg mt-1 md:mt-3'>
                <LenteIcon className='w-5 h-5 md:w-6 md:h-6' />
                <span>Lente</span>
              </div>
              <h4 className='text-text-primary md:text-lg font-medium mt-2'>
                Lente de zoom gran angular G Master FE 16-35 mm
              </h4>
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
              <div className='flex items-center gap-2 text-sm md:text-lg mt-1 md:mt-3'>
                <SillaIcon className='w-5 h-5 md:w-6 md:h-6' />
                <span>Silla</span>
              </div>
              <h4 className='text-text-primary md:text-lg font-medium mt-2'>
                Silla Gamer Corsair T3 Rush Gris Carbon
              </h4>
            </motion.li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Pc;
