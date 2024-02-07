import Image from 'next/image';

import historia from '@/data/historia.json';

const SobreMi = () => {
  return (
    <section className='flex flex-col items-center'>
      <div className='flex flex-col items-center max-w-6xl gap-10 md:gap-20 my-20 md:my-40 mx-4 md:mx-10'>
        {historia.map((historiaItem, idx) =>
          idx % 2 === 0 ? (
            <article
              key={historiaItem.id}
              className='flex flex-col md:flex-row items-center gap-5 md:gap-10'
            >
              <div>
                <Image
                  priority={idx < 2 ? true : false}
                  className='w-full h-full object-contain grayscale hover:grayscale-0 transition duration-500 rounded-md md:rounded-xl'
                  src={historiaItem.image}
                  alt={historiaItem.alt}
                  width={400}
                  height={400}
                />
              </div>
              <div className='flex gap-3 md:gap-5'>
                <div className='bg-primary w-1.5 rounded-full'></div>
                <div className='py-1 md:py-3 max-w-lg'>
                  <h4 className='md:text-xl text-text-primary font-semibold mb-2 md:mb-3'>
                    {historiaItem.title}
                  </h4>
                  {historiaItem.description.map((historiaP, idx) => (
                    <p key={idx} className='mb-1 md:mb-2 text-sm sm:text-base'>
                      {historiaP}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ) : (
            <article className='flex flex-col-reverse md:flex-row items-center gap-5 md:gap-10'>
              <div className='flex gap-3 md:gap-5'>
                <div className='bg-primary w-1.5 rounded-full'></div>
                <div className='py-1 md:py-3 max-w-lg'>
                  <h4 className='md:text-xl text-text-primary font-semibold mb-2 md:mb-3'>
                    {historiaItem.title}
                  </h4>
                  {historiaItem.description.map((historiaP, idx) => (
                    <p key={idx} className='mb-1 md:mb-2 text-sm sm:text-base'>
                      {historiaP}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <Image
                  priority={idx < 2 ? true : false}
                  className='w-full h-full object-contain grayscale hover:grayscale-0 transition duration-500 rounded-xl'
                  src={historiaItem.image}
                  alt={historiaItem.alt}
                  width={400}
                  height={400}
                />
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default SobreMi;
