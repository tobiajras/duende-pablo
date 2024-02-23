import Image from 'next/image';
import React from 'react';

import Link from 'next/link';

import LocationIcon from './icons/LocationIcon';
import TwitchIcon from './icons/TwitchIcon';
import InstagramIcon from './icons/InstagramIcon';
import YoutubeIcon from './icons/YoutubeIcon';
import TiktokIcon from './icons/TiktokIcon';
import TwitterIcon from './icons/TwitterIcon';
import DiscordIcon from './icons/DiscordIcon';

const Home = () => {
  return (
    <section className='flex justify-center max-w-6xl gap-5 md:gap-20 mt-32 mb-10 md:mt-64 md:mb-40 mx-6 sm:mx-8 md:mx-10'>
      <article className=''>
        <div className='flex items-center gap-1 sm:gap-2'>
          <LocationIcon />
          <span className='text-sm md:text-xl font-semibold'>Argentina</span>
        </div>
        <h2 className='text-text-primary text-3xl md:text-5xl lg:text-7xl font-bold'>
          Duende Pablo
        </h2>
        <p className='text-sm sm:text-xl md:text-xl lg:text-2xl mt-2 md:mt-3 font-medium max-w-72 sm:max-w-96 md:max-w-xl'>
          Streamer en Twitch y creador de contenido en Youtube
        </p>
        <div className='flex gap-4 mt-4 md:gap-5 md:mt-10'>
          <Link
            className='hover:text-text-primary transition-colors'
            href='https://www.twitch.tv/duendepablo'
            aria-label='ir a Twitch'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TwitchIcon className='w-5 h-5 md:w-7 md:h-7' />
          </Link>
          <Link
            className='hover:text-text-primary transition-colors'
            href='https://www.instagram.com/duendegaming/'
            aria-label='ir a Instagram'
            target='_blank'
            rel='noopener noreferrer'
          >
            <InstagramIcon className='w-5 h-5 md:w-7 md:h-7' />
          </Link>
          <Link
            className='hover:text-text-primary transition-colors'
            href='https://www.youtube.com/c/DuendeGaming'
            aria-label='ir a Youtube'
            target='_blank'
            rel='noopener noreferrer'
          >
            <YoutubeIcon className='w-5 h-5 md:w-7 md:h-7' />
          </Link>
          <Link
            className='hover:text-text-primary transition-colors'
            href='https://www.tiktok.com/es/'
            aria-label='ir a Tiktok'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TiktokIcon className='w-5 h-5 md:w-7 md:h-7' />
          </Link>
          <Link
            className='hover:text-text-primary transition-colors'
            href='https://twitter.com/DuendeGaming'
            aria-label='ir a Twitter'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TwitterIcon className='w-5 h-5 md:w-7 md:h-7' />
          </Link>
          <Link
            className='hover:text-text-primary transition-colors'
            href='https://discord.com/invite/duende'
            aria-label='ir a Discord'
            target='_blank'
            rel='noopener noreferrer'
          >
            <DiscordIcon className='w-5 h-5 md:w-7 md:h-7' />
          </Link>
        </div>
      </article>
      <article>
        <Image
          priority={true}
          className='w-28 md:w-[200px] md:h-[320px] object-contain'
          src='/assets/personaje-duende.webp'
          alt='funko-duende-pablo'
          width={200}
          height={320}
        />
      </article>
    </section>
  );
};

export default Home;
