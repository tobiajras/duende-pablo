'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import { useState } from 'react';

import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

import { FaAward } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi2';
import { FaDisplay } from 'react-icons/fa6';

const navVariants = {
  inactive: {
    opacity: 0,
    right: -100,
    transition: {
      duration: 0.3,
    },
  },
  active: {
    opacity: 1,
    right: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex justify-center fixed top-0 left-0 right-0 bg-background-primary z-50'>
      <div className='flex justify-between items-center max-w-6xl w-full h-24 py-3 mx-6 sm:mx-8 md:mx-10'>
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
            <HiMenu className='w-8 h-8' />
          ) : (
            <IoClose className='w-8 h-8' />
          )}
        </div>
        <motion.nav
          variants={navVariants}
          initial='inactive'
          animate={!isOpen && window.innerWidth < 768 ? 'inactive' : 'active'}
          className={`${
            !isOpen && 'hidden md:block'
          } absolute md:relative top-24 right-0 bg-background-primary p-6 md:p-auto md:top-auto md:right-auto h-screen w-1/2 md:w-auto md:h-auto flex md:justify-center`}
        >
          <ul className='flex flex-col gap-3 md:flex-row md:gap-8 text-text-secondary text-xl md:text-lg'>
            <li className=''>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-text-primary transition-colors flex items-center gap-3'
                href='/'
              >
                <AiFillHome className='md:hidden w-6 h-6' />
                Inicio
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-text-primary transition-colors flex items-center gap-3'
                href='/eventos'
              >
                <FaAward className='md:hidden w-6 h-6' />
                Eventos
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-text-primary transition-colors flex items-center gap-3'
                href='/sobre-mi'
              >
                <HiUser className='md:hidden w-6 h-6' />
                Duende
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-text-primary transition-colors flex items-center gap-3'
                href='/pc'
              >
                <FaDisplay className='md:hidden w-6 h-6' />
                Pc
              </Link>
            </li>
          </ul>
        </motion.nav>
        <motion.div
          variants={navVariants}
          initial='inactive'
          animate={!isOpen && window.innerWidth < 768 ? 'inactive' : 'active'}
          className={`${
            !isOpen && 'hidden md:block'
          } absolute top-[275px] right-0 w-1/2 md:w-auto p-6 md:p-auto md:relative md:flex md:top-auto`}
        >
          <Link
            onClick={() => setIsOpen(false)}
            className='text-text-primary font-medium background-gradient rounded py-3 px-5 text-lg w-full flex justify-center md:w-auto'
            href='/contacto'
          >
            Contacto
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
