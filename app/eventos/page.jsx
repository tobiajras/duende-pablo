'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import eventos from '@/data/eventos.json';
import { useEffect, useRef, useState } from 'react';

const Eventos = () => {
  const [isVisible, setIsVisible] = useState(eventos.map(() => false));
  const eventRefs = useRef([]);

  const eventVariants = {
    active: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 * custom, ease: 'easeInOut' },
    }),
    inactive: {
      y: 30,
      opacity: 0,
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = eventRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setIsVisible((prev) =>
              prev.map((state, i) =>
                i === index ? entry.isIntersecting : state
              )
            );
          }
        });
      },
      { threshold: 0.9 }
    );

    eventRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      eventRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className='flex justify-center'>
      <div className='max-w-6xl mt-32 mb-20 md:my-40 mx-6 sm:mx-8 md:mx-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20'>
        {eventos.map((evento, idx) => (
          <article
            ref={(el) => (eventRefs.current[idx] = el)}
            key={evento.id}
            className='max-w-md'
          >
            <motion.div
              variants={eventVariants}
              initial='inactive'
              animate={isVisible[idx] && 'active'}
            >
              <Image
                priority={idx < 2 ? true : false}
                className='h-52 sm:h-72 md:h-60 lg:h-72 object-cover object-center rounded-md md:rounded-xl'
                src={evento.image}
                alt={evento.alt}
                width={450}
                height={400}
              />
            </motion.div>
            <motion.h4
              custom={0.1}
              variants={eventVariants}
              initial='inactive'
              animate={isVisible[idx] && 'active'}
              className='mt-3 md:mt-5 text-lg md:text-2xl text-text-primary font-semibold lg:h-8'
            >
              {evento.title}
            </motion.h4>
            <motion.p
              custom={0.2}
              variants={eventVariants}
              initial='inactive'
              animate={isVisible[idx] && 'active'}
              className='mt-1 md:mt-2 text-sm md:text-lg md:h-28 lg:h-24'
            >
              {evento.description}
            </motion.p>
            <motion.div
              custom={0.3}
              variants={eventVariants}
              initial='inactive'
              animate={isVisible[idx] && 'active'}
              className='mt-1 sm:mt-2 flex gap-1 md:gap-2 items-center text-sm md:text-lg'
            >
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 384 512'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z'></path>
              </svg>
              <span>{evento.location}</span>
            </motion.div>
            <motion.ul
              custom={0.4}
              variants={eventVariants}
              initial='inactive'
              animate={isVisible[idx] && 'active'}
              className='flex gap-3 md:gap-5 mt-2 md:mt-3'
            >
              {evento.tags.map((tag, eventoIdx) => (
                <li
                  key={eventoIdx}
                  className='text-primary font-semibold text-sm md:text-base bg-primary/25 py-1 md:py-2 px-3 md:px-5 rounded'
                >
                  {tag}
                </li>
              ))}
            </motion.ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Eventos;
