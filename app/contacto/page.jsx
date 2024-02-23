'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import emailjs from '@emailjs/browser';

import UserIcon from '@/components/icons/UserIcon';
import EmailIcon from '@/components/icons/EmailIcon';
import MessageIcon from '@/components/icons/MessageIcon';

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
  const emailjs_service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const emailjs_template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const emailjs_api_key = process.env.NEXT_PUBLIC_EMAILJS_API_KEY;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        emailjs_service_id,
        emailjs_template_id,
        e.target,
        emailjs_api_key
      )
      .then(clearForm)
      .then(setLoading(false))
      .then(setSent(true))
      .catch((error) => console.log(error));
  };

  return (
    <section className='flex justify-center'>
      <div className='max-w-6xl mt-32 mb-20 md:my-40 mx-6 sm:mx-8 md:mx-10'>
        <motion.article
          variants={contactVariant}
          initial='inactive'
          animate='active'
        >
          <form
            onSubmit={sendEmail}
            className='flex flex-col p-8 sm:p-14 lg:p-20 border border-neutral-800 rounded-xl '
          >
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
                <UserIcon className='w-4 h-4 sm:w-5 sm:h-5' />
              </span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete='off'
                name='user_name'
                className=' text-text-primary text-base sm:text-lg bg-[#191B20] outline-none w-full '
                type='text'
                id='nombre'
                placeholder='Nombre y apellido'
              />
            </div>
            <label className='mb-1 sm:mb-2 text-text-primary' htmlFor='correo'>
              Email
            </label>
            <div className='flex gap-2 items-center mb-3 sm:mb-5 py-3 px-3 rounded-md bg-[#191B20] border border-neutral-800'>
              <span>
                <EmailIcon className='w-4 h-4 sm:w-5 sm:h-5' />
              </span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name='user_email'
                required
                autoComplete='off'
                className=' text-text-primary text-base sm:text-lg bg-[#191B20] outline-none w-full'
                type='email'
                id='email'
                placeholder='Correo electrónico'
              />
            </div>
            <label className='mb-2 text-text-primary' htmlFor='mensaje'>
              Mensaje
            </label>
            <div className='relative'>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name='user_message'
                required
                autoComplete='off'
                className='w-full h-full text-text-primary text-base sm:text-lg indent-8 spacing py-3 px-2 rounded-md bg-[#191B20] outline-none border border-neutral-800'
                placeholder='Mensaje'
                cols='30'
                rows='5'
              ></textarea>
              <span className='absolute mx-3 my-5 top-0 left-0 w-4 h-4 sm:w-5 sm:h-5'>
                <MessageIcon className='w-full h-full' />
              </span>
            </div>
            <button
              disabled={sent && true}
              className={`${
                sent && ' opacity-80'
              } mt-5 text-text-primary text-lg sm:text-xl py-3 px-5 rounded-md font-semibold bg-primary-dark hover:bg-primary transition-colors placeholder-text-primary outline-none`}
              type='submit'
            >
              {loading ? 'Enviando...' : sent ? 'Enviado!' : 'Enviar'}
            </button>
          </form>
        </motion.article>
      </div>
    </section>
  );
};

export default Contacto;
