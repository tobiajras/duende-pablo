import Image from 'next/image';

import historia from '@/data/historia.json';

const SobreMi = () => {
  return (
    <section className='flex flex-col items-center'>
      <div className='flex flex-col items-center max-w-6xl gap-20 my-40 mx-10'>
        {historia.map((historiaItem, idx) =>
          idx % 2 === 0 ? (
            <article
              key={historiaItem.id}
              className='flex flex-col md:flex-row items-center gap-10'
            >
              <div className=''>
                <Image
                  className='w-full h-full object-contain grayscale hover:grayscale-0 transition duration-500 rounded-xl'
                  src={historiaItem.image}
                  alt={historiaItem.alt}
                  width={400}
                  height={400}
                />
              </div>
              <div className='flex gap-5'>
                <div className='bg-primary w-1.5 rounded-full'></div>
                <div className='py-3 max-w-lg'>
                  <h4 className='text-xl text-text-primary font-semibold mb-3'>
                    {historiaItem.title}
                  </h4>
                  {historiaItem.description.map((historiaP, idx) => (
                    <p key={idx} className='mb-2'>
                      {historiaP}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ) : (
            <article className='flex items-center gap-10'>
              <div className='flex gap-4'>
                <div className='bg-primary w-1.5 rounded-full'></div>
                <div className='py-3 max-w-lg'>
                  <h4 className='text-xl text-text-primary font-semibold mb-3'>
                    Carrera y Aficiones
                  </h4>
                  <p className='mb-2'>
                    A pesar de estudiar y trabajar en medicina, Pablo mantuvo
                    sus pasatiempos, como Magic, el arte y los juegos
                    competitivos.
                  </p>
                  <p>
                    Su primer salario como médico lo invirtió en una
                    computadora, con la que mejoró en juegos como &ldquo;League
                    of Legends&ldquo; y &ldquo;Magic&ldquo;.
                  </p>
                </div>
              </div>
              <div className=''>
                <Image
                  className='w-full h-full object-contain grayscale hover:grayscale-0 transition duration-500 rounded-xl'
                  src='/assets/sobre-mi/img2-sobremi-duende.webp'
                  alt='img1-sobremi'
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
