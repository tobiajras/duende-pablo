'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex justify-center w-full fixed top-0 left-0 right-0 bg-background-primary z-50'>
      <div className='flex justify-between items-center max-w-6xl w-full h-20 md:h-24 py-3 mx-6 sm:mx-8 md:mx-10'>
        <div className='h-full'>
          <Link href='/' onClick={() => setIsOpen(false)}>
            <Image
              priority={true}
              className='h-full w-full'
              src='/assets/duendeLogoSvg.svg'
              alt='duende-pablo-logo'
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className='md:hidden relative '>
          {!isOpen ? (
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 20 20'
              aria-hidden='true'
              className='w-9 h-9'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          ) : (
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 512 512'
              className='w-9 h-9'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z'></path>
            </svg>
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
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 1024 1024'
                  className='md:hidden w-6 h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z'></path>
                </svg>
                Inicio
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-text-primary transition-colors flex items-center gap-3'
                href='/eventos'
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 384 512'
                  className='md:hidden w-6 h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z'></path>
                </svg>
                Eventos
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-text-primary transition-colors flex items-center gap-3'
                href='/sobre-mi'
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  className='md:hidden w-6 h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Duende
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-text-primary transition-colors flex items-center gap-3'
                href='/pc'
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 576 512'
                  className='md:hidden w-6 h-6'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z'></path>
                </svg>
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
          } absolute top-64 transition-all duration-[400ms] w-1/2 md:w-auto p-6 md:p-auto md:relative md:flex md:right-auto md:top-auto`}
        >
          <Link
            onClick={() => setIsOpen(false)}
            className='text-text-primary font-medium bg-primary-dark hover:bg-primary transition-colors  rounded py-3 px-5 text-lg w-full flex justify-center md:w-auto'
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
