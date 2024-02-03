import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaTiktok, FaTwitch, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className='flex justify-center'>
      <div className='max-w-6xl m-10'>
        <section className='flex gap-20 '>
          <article className='flex flex-col items-center'>
            <div>
              <Image
                className='w-32'
                src='/assets/duendeLogoSvg.svg'
                alt='duende-logo'
                width={80}
                height={80}
              />
            </div>
            <div className='flex gap-4 mt-3'>
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
            <h6 className='text-text-primary mb-1'>SPONSORS</h6>
            <ul>
              <li>
                <Link
                  href='https://www.aorus.com/es-ar'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  AORUS
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.elgato.com/es/es'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ELGATO
                </Link>
              </li>
              <li>
                <Link
                  href='https://row.hyperx.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  HYPERX
                </Link>
              </li>
              <li>
                <Link
                  href='https://karate.com/en/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  KARATECOMBAT
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.redbull.com/ar-es/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  REDBULL
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <h6 className='text-text-primary mb-1'>MENÚ</h6>
            <ul>
              <li>
                <Link href='/' target='_blank' rel='noopener noreferrer'>
                  INICIO
                </Link>
              </li>
              <li>
                <Link href='/eventos' target='_blank' rel='noopener noreferrer'>
                  EVENTOS
                </Link>
              </li>
              <li>
                <Link
                  href='/sombre-mi'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  DUENDE
                </Link>
              </li>
              <li>
                <Link href='contacto' target='_blank' rel='noopener noreferrer'>
                  CONTACTO
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <h6 className='text-text-primary mb-1'>DUENDE</h6>
            <ul>
              <li>
                <Link href='/' target='_blank' rel='noopener noreferrer'>
                  SOBRE MÍ
                </Link>
              </li>
              <li>
                <Link href='/eventos' target='_blank' rel='noopener noreferrer'>
                  PC
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
