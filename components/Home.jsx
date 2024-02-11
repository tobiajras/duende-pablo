import Image from 'next/image';
import React from 'react';

import Link from 'next/link';

import { FaTwitch } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaDiscord } from 'react-icons/fa';

const Home = () => {
  return (
    <section className='flex justify-center max-w-6xl gap-5 md:gap-20 mt-32 mb-20 md:my-40 mx-6 sm:mx-8 md:mx-10'>
      <article className=''>
        <div>
          <span className='text-sm md:text-xl font-semibold'>La Comarca</span>
        </div>
        <h2 className='text-text-primary text-3xl md:text-7xl font-bold'>
          Duende Pablo
        </h2>
        <p className='text-sm sm:text-xl md:text-2xl mt-2 md:mt-3 font-medium max-w-72 sm:max-w-96 md:max-w-xl'>
          Streamer Argentino en Twitch y creador de contenido en Youtube
        </p>
        <div className='flex gap-4 mt-4 md:gap-5 md:mt-10'>
          <Link
            className='hover:text-text-primary transition-colors'
            href='https://www.twitch.tv/duendepablo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitch className='w-5 h-5 md:w-7 md:h-7' />
          </Link>
          <Link
            className='hover:text-text-primary transition-colors'
            href='https://www.instagram.com/duendegaming/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <RiInstagramFill className='w-5 h-5 md:w-7 md:h-7' />
          </Link>
          <Link
            className='hover:text-text-primary transition-colors'
            href='https://www.youtube.com/c/DuendeGaming'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaYoutube className='w-5 h-5 md:w-7 md:h-7' />
          </Link>
          <Link
            className='hover:text-text-primary transition-colors'
            href='https://www.tiktok.com/es/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTiktok className='w-5 h-5 md:w-7 md:h-7' />
          </Link>
          <Link
            className='hover:text-text-primary transition-colors'
            href='https://twitter.com/DuendeGaming'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaXTwitter className='w-5 h-5 md:w-7 md:h-7' />
          </Link>
          <Link
            className='hover:text-text-primary transition-colors'
            href='https://discord.com/invite/duende'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaDiscord className='w-5 h-5 md:w-7 md:h-7' />
          </Link>
        </div>
      </article>
      <article>
        <Image
          priority={true}
          className='w-28 md:w-[200px] md:h-[300px] object-contain'
          src='/assets/funko-duende-pablo.webp'
          alt='funko-duende-pablo'
          width={200}
          height={300}
        />
      </article>
    </section>
  );
};

export default Home;
