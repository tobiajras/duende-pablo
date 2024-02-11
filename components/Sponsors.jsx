'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import sponsors from '@/data/sponsors.json';

const sponsorsVariants = {
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

const Sponsors = () => {
  return (
    <section className='grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-10 max-w-6xl m-6 sm:m-8 md:m-10 mb-10 lg:mb-20'>
      {sponsors.map((sponsor) => (
        <motion.article
          variants={sponsorsVariants}
          initial='inactive'
          whileInView='active'
          viewport={{
            once: true,
            margin: '0px 0px -200px 0px',
          }}
          key={sponsor.id}
        >
          <div className='h-24 sm:h-40 md:h-48 lg:h-52'>
            <Link href={sponsor.link} target='_blank' rel='noopener noreferrer'>
              <Image
                className='w-full h-full object-cover object-top rounded-md lg:rounded-xl'
                src={sponsor.image}
                alt={sponsor.alt}
                width={300}
                height={100}
              />
            </Link>
          </div>
          <div>
            <h4 className='mt-4 text-text-primary md:text-xl lg:text-2xl font-medium'>
              {sponsor.title}
            </h4>
            <p className='mt-1 text-sm md:text-base lg:text-lg'>
              {sponsor.description}
            </p>
          </div>
        </motion.article>
      ))}
    </section>
  );
};

export default Sponsors;
