import Image from 'next/image';
import Link from 'next/link';

import TwitchIcon from './icons/TwitchIcon';
import YoutubeIcon from './icons/YoutubeIcon';
import InstagramIcon from './icons/InstagramIcon';
import TiktokIcon from './icons/TiktokIcon';
import TwitterIcon from './icons/TwitterIcon';
import DiscordIcon from './icons/DiscordIcon';

const Footer = () => {
  return (
    <footer className='flex flex-col md:justify-center border-t-[1px] bg-background-primary border-neutral-800'>
      <div className='p-6 sm:p-8 md:p-10 w-full'>
        <section className='flex flex-col md:flex-row justify-center gap-4 md:gap-10 lg:gap-20 '>
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
                aria-label='ir a Twitch'
                target='_blank'
                rel='noopener noreferrer'
              >
                <TwitchIcon className='w-6 h-6' />
              </Link>
              <Link
                className='hover:text-text-primary transition-colors'
                href='https://www.instagram.com/duendegaming/'
                aria-label='ir a Instagram'
                target='_blank'
                rel='noopener noreferrer'
              >
                <InstagramIcon className='w-6 h-6' />
              </Link>
              <Link
                className='hover:text-text-primary transition-colors'
                href='https://www.youtube.com/c/DuendeGaming'
                aria-label='ir a Instagram'
                target='_blank'
                rel='noopener noreferrer'
              >
                <YoutubeIcon className='w-6 h-6' />
              </Link>
              <Link
                className='hover:text-text-primary transition-colors'
                href='https://www.tiktok.com/es/'
                aria-label='ir a Tiktok'
                target='_blank'
                rel='noopener noreferrer'
              >
                <TiktokIcon className='w-6 h-6' />
              </Link>
              <Link
                className='hover:text-text-primary transition-colors'
                href='https://twitter.com/DuendeGaming'
                aria-label='ir a Twitter'
                target='_blank'
                rel='noopener noreferrer'
              >
                <TwitterIcon className='w-6 h-6' />
              </Link>
              <Link
                className='hover:text-text-primary transition-colors'
                href='https://discord.com/invite/duende'
                aria-label='ir a Discord'
                target='_blank'
                rel='noopener noreferrer'
              >
                <DiscordIcon className='w-6 h-6' />
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
                  href='mailto:infoduendegaming@gmail.com'
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
      <div className='bg-black text-base py-2 flex gap-2 justify-center'>
        <span>Desarrollado por:</span>
        <Link
          className='hover:text-text-primary transition-colors'
          href='https://tobiasajras.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Tobias Ajras
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
