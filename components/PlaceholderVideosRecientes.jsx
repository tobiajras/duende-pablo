'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';

import videos from '@/data/placeholderVideos.json';

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
  if (interval > 1) {
    return Math.floor(interval) + ' días';
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

const PlaceholderVideosRecientes = () => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
  });

  return (
    <div className='flex justify-center w-full p-6 sm:p-8 pb-10 md:p-10 md:pb-20'>
      <div className='overflow-hidden max-w-6xl' ref={emblaRef}>
        <div className='flex gap-4 md:gap-10'>
          {videos.map((video, idx) => (
            <div
              key={video.id.videoId}
              className='flex flex-[0_0_40%] md:flex-[0_0_25%]'
            >
              <Link
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  priority={idx < 4 ? true : false}
                  className=' object-cover object-center rounded-lg'
                  src={video.snippet.thumbnails.default.url}
                  alt={video.snippet.title}
                  width={1200}
                  height={675}
                />
                <div className='mt-3'>
                  <h2 className='text-text-primary text-xs sm:text-sm md:text-base line-clamp-2'>
                    {video.snippet.title}
                  </h2>
                </div>
                <div className='flex gap-2 items-center mt-2'>
                  <div className='flex items-center gap-2'>
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
                  </div>
                  <span className='text-xs md:text-sm'>
                    • hace {timeSince(video.snippet.publishTime)}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceholderVideosRecientes;
