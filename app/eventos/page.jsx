import Image from 'next/image';

import { FaLocationDot } from 'react-icons/fa6';

import eventos from '@/data/eventos.json';

const Eventos = () => {
  return (
    <section className='flex justify-center'>
      <div className='max-w-6xl my-20 md:my-40 mx-6 sm:mx-8 md:mx-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20'>
        {eventos.map((evento, idx) => (
          <article key={evento.id} className='max-w-md'>
            <div className=''>
              <Image
                priority={idx < 2 ? true : false}
                className='h-52 sm:h-72 md:h-60 lg:h-72 object-cover object-center rounded-md md:rounded-xl'
                src={evento.image}
                alt={evento.alt}
                width={450}
                height={400}
              />
            </div>
            <h4 className='mt-3 md:mt-5 text-lg md:text-2xl text-text-primary font-semibold'>
              {evento.title}
            </h4>
            <p className='mt-1 md:mt-2 text-sm md:text-lg'>
              {evento.description}
            </p>
            <div className='mt-1 sm:mt-2 flex gap-1 md:gap-2 items-center text-sm md:text-lg'>
              <FaLocationDot />
              <span>{evento.location}</span>
            </div>
            <ul className='flex gap-3 md:gap-5 mt-2 md:mt-3'>
              {evento.tags.map((tag, eventoIdx) => (
                <li
                  key={eventoIdx}
                  className='text-primary font-semibold text-sm md:text-base bg-primary/25 py-1 md:py-2 px-3 md:px-5 rounded'
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Eventos;
