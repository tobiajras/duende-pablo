'use client';

import { motion } from 'framer-motion';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';

const videosVariants = {
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

function timeSince(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' años';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' meses';
  }
  interval = seconds / 86400;
  if (interval >= 1) {
    const days = Math.floor(interval);
    if (days === 1) {
      return '1 día';
    } else {
      return days + ' días';
    }
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' horas';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutos';
  }
  return Math.floor(seconds) + ' segundos';
}

const CarouselEmbla = ({ videos, titulo, opcion }) => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
  });

  return (
    <motion.article
      variants={videosVariants}
      initial='inactive'
      whileInView='active'
      viewport={{
        once: true,
      }}
      className='flex flex-col w-full'
    >
      <div className='w-full flex justify-center'>
        <h3 className='w-full text-xl md:text-3xl font-semibold items-start max-w-6xl mx-6 sm:mx-8 md:mx-10'>
          {titulo} -{' '}
          <span className='text-sm sm:text-base md:text-xl'>
            Videos Recientes
          </span>
        </h3>
      </div>
      <div className='flex justify-center w-full p-6 sm:p-8 pb-10 md:p-10 md:pb-20'>
        <div className='overflow-hidden max-w-6xl' ref={emblaRef}>
          <div className='flex gap-4 md:gap-10'>
            {videos.map((video) => (
              <div
                key={video.id}
                className='flex flex-[0_0_40%] md:flex-[0_0_25%]'
              >
                <Link
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='overflow-hidden'>
                    <Image
                      className='rounded-lg carousel-image-animation'
                      src={video.snippet.thumbnails.medium.url}
                      alt={video.snippet.title}
                      width={1200}
                      height={675}
                    />
                  </div>
                  <div className='mt-3'>
                    <h2 className='text-text-primary text-sm md:text-base line-clamp-2 h-10 md:h-12'>
                      {video.snippet.title}
                    </h2>
                  </div>
                  <div className='flex gap-2 items-center mt-2'>
                    <div className='flex items-center gap-2'>
                      {opcion == 1 ? (
                        <>
                          <Image
                            className='rounded-full w-5 h-5'
                            alt='canal-duende-pablo'
                            src='/assets/canal-duende-pablo.webp'
                            width={25}
                            height={25}
                          />
                          <span className='hidden sm:block text-xs md:text-sm'>
                            Duende Pablo
                          </span>
                        </>
                      ) : (
                        <>
                          <Image
                            className='rounded-full w-5 h-5'
                            alt='canal-duende-gaming'
                            src='/assets/canal-duende-gaming.webp'
                            width={25}
                            height={25}
                          />
                          <span className='hidden sm:block text-xs md:text-sm'>
                            Duende Gaming
                          </span>
                        </>
                      )}
                    </div>
                    <span className='text-xs md:text-sm'>
                      • hace {timeSince(video.snippet.publishedAt)}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default CarouselEmbla;
