import Image from 'next/image';

import { FaLocationDot } from 'react-icons/fa6';

import eventos from '@/data/eventos.json';

const Eventos = () => {
  return (
    <section className='flex justify-center'>
      <div className='max-w-6xl my-20 md:my-40 mx-4 md:mx-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20'>
        {eventos.map((evento) => (
          <article key={evento.id} className='max-w-md'>
            <div className='h-44 md:h-72'>
              <Image
                className='w-full h-full object-cover rounded-md md:rounded-xl'
                src={evento.image}
                alt={evento.alt}
                width={450}
                height={300}
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
              {evento.tags.map((tag, idx) => (
                <li
                  key={idx}
                  className='text-primary font-semibold text-sm sm:text-base bg-primary/25 py-1 sm:py-2 px-3 sm:px-5 rounded'
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
