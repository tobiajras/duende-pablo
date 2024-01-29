"use client";

import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";

const Sponsor = () => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
  });

  return (
    <section className='max-w-6xl m-10 relative background-blur'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-10'>
          <div className='flex flex-[0_0_33%]'>
            <Link
              className='sponsor-aorus relative'
              href='https://www.aorus.com/es-ar'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='w-full h-full object-cover object-center rounded-xl'
                src='/assets/sponsor/aorus-duende-pablo.webp'
                alt='aorus-sponsor'
                width={1200}
                height={675}
              />
            </Link>
          </div>
          <div className='flex flex-[0_0_33%]'>
            <Link
              href='https://www.elgato.com/us/en'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='w-full h-full object-cover object-center rounded-xl'
                src='/assets/sponsor/elgato-duende-pablo.webp'
                alt='elgato-sponsor'
                width={1200}
                height={675}
              />
            </Link>
          </div>
          <div className='flex flex-[0_0_33%]'>
            <Link
              href='https://row.hyperx.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='w-full h-full object-cover object-center rounded-xl'
                src='/assets/sponsor/hyperx-duende-pablo.webp'
                alt='hyperx-sponsor'
                width={1200}
                height={675}
              />
            </Link>
          </div>
          <div className='flex flex-[0_0_33%]'>
            <Link
              href='https://karate.com/en/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='w-full h-full object-cover object-center rounded-xl'
                src='/assets/sponsor/karatecombat-duende-pablo.webp'
                alt='karatecombat-sponsor'
                width={1200}
                height={675}
              />
            </Link>
          </div>
          <div className='flex flex-[0_0_33%]'>
            <Link
              href='https://www.redbull.com/ar-es/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='w-full h-full object-cover object-center rounded-xl'
                src='/assets/sponsor/redbull-duende-pablo.webp'
                alt='redbull-sponsor'
                width={1200}
                height={675}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
