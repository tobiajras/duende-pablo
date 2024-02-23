'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import HamburguerIcon from './icons/HamburguerIcon';
import CloseIcon from './icons/CloseIcon';
import HomeIcon from './icons/HomeIcon';
import EventosIcon from './icons/EventosIcon';
import PerfilIcon from './icons/PerfilIcon';
import PcIcon from './icons/PcIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex md:justify-center w-full fixed top-0 left-0 right-0 bg-background-primary z-50'>
      <div className='flex justify-between items-center max-w-6xl w-full h-20 md:h-24 py-3 mx-6 sm:mx-8 md:mx-10'>
        <div className='h-full w-full flex justify-start md:w-auto'>
          <Link className='w-full' href='/' onClick={() => setIsOpen(false)}>
            <Image
              priority={true}
              className='h-full w-full object-contain object-left'
              src='/assets/duendeLogoSvg.svg'
              alt='duende-pablo-logo'
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='w-full flex justify-end md:w-auto md:hidden relative'
        >
          {!isOpen ? (
            <HamburguerIcon className='w-9 h-9' />
          ) : (
            <CloseIcon className='w-9 h-9' />
          )}
        </div>
        <nav
          className={`${
            !isOpen
              ? '-right-full opacity-0 md:opacity-100'
              : 'right-0 opacity-100'
          } absolute md:relative top-20 transition-all duration-[400ms] bg-background-primary p-6 md:p-auto md:top-auto md:right-auto h-screen w-1/2 md:w-auto md:h-auto md:flex md:justify-center`}
        >
          <ul className='flex flex-col gap-3 md:flex-row md:gap-8 text-text-secondary text-xl md:text-lg'>
            <li className=''>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-text-primary transition-colors flex items-center gap-3'
                href='/'
              >
                <HomeIcon className='md:hidden w-6 h-6' />
                Inicio
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-text-primary transition-colors flex items-center gap-3'
                href='/eventos'
              >
                <EventosIcon className='md:hidden w-6 h-6' />
                Eventos
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-text-primary transition-colors flex items-center gap-3'
                href='/sobre-mi'
              >
                <PerfilIcon className='md:hidden w-6 h-6' />
                Duende
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-text-primary transition-colors flex items-center gap-3'
                href='/pc'
              >
                <PcIcon className='md:hidden w-6 h-6' />
                Pc
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`${
            !isOpen
              ? '-right-full opacity-0 md:opacity-100'
              : 'right-0 opacity-100'
          } absolute top-64 transition-all duration-[400ms] w-1/2 md:w-auto p-6 md:p-0 md:relative md:flex md:right-auto md:top-auto`}
        >
          <Link
            onClick={() => setIsOpen(false)}
            className='text-text-primary font-medium bg-primary-dark hover:bg-primary transition-colors rounded py-3 px-5 text-lg w-full flex justify-center md:w-auto'
            href='/contacto'
          >
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
