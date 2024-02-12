'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import historia from '@/data/historia.json';

const sobreMiRightVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

const sobreMiLeftVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

const SobreMi = () => {
  return (
    <section className='flex flex-col items-center'>
      <div className='flex flex-col items-center max-w-6xl gap-10 md:gap-20 mt-32 mb-20 md:my-40 mx-6 sm:mx-8 md:mx-10'>
        {historia.map((historiaItem, idx) =>
          idx % 2 === 0 ? (
            <motion.article
              key={historiaItem.id}
              variants={sobreMiRightVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true,
                margin: '0px 0px -200px 0px',
              }}
              className='flex flex-col md:flex-row items-center gap-5 lg:gap-10'
            >
              <div className='min-w-[288px] sm:min-w-max sm:w-[450px] md:w-80 lg:w-[450px]'>
                <Image
                  priority={idx < 2 ? true : false}
                  className='w-full h-full object-contain rounded-md md:rounded-xl'
                  src={historiaItem.image}
                  alt={historiaItem.alt}
                  width={400}
                  height={400}
                />
              </div>
              <div className='flex gap-3 md:gap-5'>
                <div className='bg-primary w-1.5 '></div>
                <div className='py-1 md:py-3 max-w-lg'>
                  <h4 className='text-lg md:text-xl lg:text-2xl text-text-primary font-semibold mb-2 md:mb-3'>
                    {historiaItem.title}
                  </h4>
                  {historiaItem.description.map((historiaP, itemIdx) => (
                    <p
                      key={itemIdx}
                      className='mb-1 md:mb-2 text-sm md:text-base lg:text-lg'
                    >
                      {historiaP}
                    </p>
                  ))}
                </div>
              </div>
            </motion.article>
          ) : (
            <motion.article
              key={historiaItem.id}
              variants={sobreMiLeftVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true,
                margin: '0px 0px -200px 0px',
              }}
              className='flex flex-col-reverse md:flex-row items-center gap-5 lg:gap-10'
            >
              <div className='flex gap-3 md:gap-5'>
                <div className='bg-primary w-1.5'></div>
                <div className='py-1 md:py-3 max-w-lg'>
                  <h4 className='text-lg md:text-xl lg:text-2xl text-text-primary font-semibold mb-2 md:mb-3'>
                    {historiaItem.title}
                  </h4>
                  {historiaItem.description.map((historiaP, itemIdx) => (
                    <p
                      key={itemIdx}
                      className='mb-1 md:mb-2 text-sm md:text-base lg:text-lg'
                    >
                      {historiaP}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <Image
                  priority={idx < 2 ? true : false}
                  className='w-full h-full object-contain rounded-xl'
                  src={historiaItem.image}
                  alt={historiaItem.alt}
                  width={400}
                  height={400}
                />
              </div>
            </motion.article>
          )
        )}
      </div>
    </section>
  );
};

export default SobreMi;
