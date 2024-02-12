'use client';

import { motion } from 'framer-motion';

const contactVariant = {
  inactive: {
    opacity: 0,
    y: 30,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

const Contacto = () => {
  return (
    <section className='flex justify-center'>
      <div className='max-w-6xl mt-32 mb-20 md:my-40 mx-6 sm:mx-8 md:mx-10'>
        <motion.article
          variants={contactVariant}
          initial='inactive'
          animate='active'
        >
          <form className='flex flex-col p-8 sm:p-14 lg:p-20 border border-neutral-800  rounded-xl '>
            <h4 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary mb-1'>
              Ponerse en <span className='text-primary'>contacto</span>
            </h4>
            <h5 className='text-base sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-5'>
              Enviame un mensaje
            </h5>
            <label className='text-text-primary mb-1 sm:mb-2' htmlFor='nombre'>
              Nombre
            </label>
            <div className='flex gap-2 items-center mb-3 sm:mb-5 py-3 px-3 rounded-md bg-[#191B20] border border-neutral-800'>
              <span>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  class='w-4 h-4 sm:w-5 sm:h-5'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </span>
              <input
                className=' text-text-primary text-base sm:text-lg bg-[#191B20] outline-none w-full '
                type='text'
                id='nombre'
                name='nombre'
                placeholder='Nombre y apellido'
              />
            </div>
            <label className='mb-1 sm:mb-2 text-text-primary' htmlFor='correo'>
              Email
            </label>
            <div className='flex gap-2 items-center mb-3 sm:mb-5 py-3 px-3 rounded-md bg-[#191B20] border border-neutral-800'>
              <span>
                <svg
                  stroke='currentColor'
                  fill='none'
                  stroke-width='2'
                  viewBox='0 0 24 24'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='w-4 h-4 sm:w-5 sm:h-5'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path
                    d='M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z'
                    stroke-width='0'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z'
                    stroke-width='0'
                    fill='currentColor'
                  ></path>
                </svg>
              </span>
              <input
                className=' text-text-primary text-base sm:text-lg bg-[#191B20] outline-none w-full'
                type='email'
                id='email'
                name='email'
                placeholder='Correo electrónico'
              />
            </div>
            <label className='mb-2 text-text-primary' htmlFor='mensaje'>
              Mensaje
            </label>
            <div className='relative'>
              <textarea
                className='w-full h-full text-text-primary text-base sm:text-lg indent-8 spacing py-3 px-2 rounded-md bg-[#191B20] outline-none border border-neutral-800'
                placeholder='Mensaje'
                name='mensaje-form'
                id='mensaje-form'
                cols='30'
                rows='5'
              ></textarea>
              <span className='absolute mx-3 my-5 top-0 left-0 w-4 h-4 sm:w-5 sm:h-5'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 16 16'
                  class='w-full h-full'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z'></path>
                </svg>
              </span>
            </div>
            <button
              className='mt-5 text-text-primary text-lg sm:text-xl py-3 px-5 rounded-md font-semibold background-gradient placeholder-text-primary outline-none'
              type='submit'
            >
              Enviar
            </button>
          </form>
        </motion.article>
      </div>
    </section>
  );
};

export default Contacto;
