import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaDiscord, FaTiktok, FaTwitch, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className='flex md:justify-center border-t-[1px] bg-background-primary border-neutral-800 '>
      <div className='max-w-6xl m-6 sm:m-8 md:m-10 w-full'>
        <section className='flex flex-col md:flex-row gap-4 md:gap-20 '>
          <article className='flex flex-col items-center'>
            <div>
              <Image
                className='w-24 md:w-32'
                src='/assets/duendeLogoSvg.svg'
                alt='duende-logo'
                width={80}
                height={80}
              />
            </div>
            <div className='flex gap-4 mt-5'>
              <Link
                className='hover:text-text-primary transition-colors'
                href='https://www.twitch.tv/duendepablo'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTwitch className='w-6 h-6' />
              </Link>
              <Link
                className='hover:text-text-primary transition-colors'
                href='https://www.instagram.com/duendegaming/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <RiInstagramFill className='w-6 h-6' />
              </Link>
              <Link
                className='hover:text-text-primary transition-colors'
                href='https://www.youtube.com/c/DuendeGaming'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaYoutube className='w-6 h-6' />
              </Link>
              <Link
                className='hover:text-text-primary transition-colors'
                href='https://www.tiktok.com/es/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTiktok className='w-6 h-6' />
              </Link>
              <Link
                className='hover:text-text-primary transition-colors'
                href='https://twitter.com/DuendeGaming'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaXTwitter className='w-6 h-6' />
              </Link>
              <Link
                className='hover:text-text-primary transition-colors'
                href='https://discord.com/invite/duende'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaDiscord className='w-6 h-6' />
              </Link>
            </div>
          </article>
          <article>
            <h6 className='text-text-primary mb-1'>Menú</h6>
            <ul>
              <li>
                <Link
                  className='hover:text-text-primary transition-colors'
                  href='/'
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  className='hover:text-text-primary transition-colors'
                  href='/eventos'
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  className='hover:text-text-primary transition-colors'
                  href='/sobre-mi'
                >
                  Duende
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <h6 className='text-text-primary mb-1'>Duende</h6>
            <ul>
              <li>
                <Link
                  className='hover:text-text-primary transition-colors'
                  href='/sobre-mi'
                >
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link
                  className='hover:text-text-primary transition-colors'
                  href='/pc'
                >
                  Pc
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <h6 className='text-text-primary mb-1'>Contacto</h6>
            <ul>
              <li>
                <Link
                  className='hover:text-text-primary transition-colors'
                  href='https://gmail.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Ponerse en contacto
                </Link>
              </li>
              <li>
                <Link
                  className='hover:text-text-primary transition-colors'
                  href='https://gmail.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  infoduendegaming@gmail.com
                </Link>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
