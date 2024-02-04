import Image from 'next/image';

const SobreMi = () => {
  return (
    <section className='flex flex-col items-center'>
      <div className='flex flex-col items-center max-w-6xl gap-20 my-40 mx-10'>
        <article className='flex items-center gap-10'>
          <div className=''>
            <Image
              className='w-full h-full object-contain grayscale hover:grayscale-0 transition duration-500 rounded-xl'
              src='/assets/sobre-mi/img1-sobremi-duende.webp'
              alt='img1-sobremi'
              width={400}
              height={400}
            />
          </div>
          <div className='flex gap-5'>
            <div className='bg-primary w-1.5 rounded-full'></div>
            <div className='py-3 max-w-lg'>
              <h4 className='text-xl text-text-primary font-semibold mb-3'>
                Inicios y Pasión por los Videojuegos
              </h4>
              <p className='mb-2'>
                Pablo Bayón, más conocido como &ldquo;el Duende&ldquo;, nació en
                Buenos Aires en 1986. Desde niño, desarrolló una pasión por los
                videojuegos, iniciándose con la Super Nintendo.
              </p>
              <p>
                A lo largo de su infancia y adolescencia, se interesó en el
                rock, el arte y, por supuesto, los videojuegos, destacando en
                títulos como &ldquo;El diablo&ldquo; y &ldquo;Counter Strike
                1.6&ldquo;.
              </p>
            </div>
          </div>
        </article>
        <article className='flex items-center gap-10'>
          <div className='flex gap-4'>
            <div className='bg-primary w-1.5 rounded-full'></div>
            <div className='py-3 max-w-lg'>
              <h4 className='text-xl text-text-primary font-semibold mb-3'>
                Carrera y Aficiones
              </h4>
              <p className='mb-2'>
                A pesar de estudiar y trabajar en medicina, Pablo mantuvo sus
                pasatiempos, como Magic, el arte y los juegos competitivos.
              </p>
              <p>
                Su primer salario como médico lo invirtió en una computadora,
                con la que mejoró en juegos como &ldquo;League of Legends&ldquo;
                y &ldquo;Magic&ldquo;.
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
        <article className='flex items-center gap-10'>
          <div className=''>
            <Image
              className='w-full h-full object-contain grayscale hover:grayscale-0 transition duration-500 rounded-xl'
              src='/assets/sobre-mi/img3-sobremi-duende.webp'
              alt='img1-sobremi'
              width={400}
              height={400}
            />
          </div>
          <div className='flex gap-4'>
            <div className='bg-primary w-1.5 rounded-full'></div>
            <div className='py-3 max-w-lg'>
              <h4 className='text-xl text-text-primary font-semibold mb-3'>
                Inmersión en el Streaming
              </h4>
              <p className='mb-2'>
                Al encontrarse jugando solo, Pablo comenzó a explorar el mundo
                del streaming, influenciado por Twitch y los torneos de
                &ldquo;League of Legends&ldquo;.
              </p>
              <p>
                En 2015, comenzó a transmitir en su canal &ldquo;Duende
                Gaming&ldquo;, donde jugaba &ldquo;Hearthstone&ldquo; y otros
                títulos, al tiempo que interaccionaba con su creciente
                comunidad.
              </p>
            </div>
          </div>
        </article>
        <article className='flex items-center gap-10'>
          <div className='flex gap-4'>
            <div className='bg-primary w-1.5 rounded-full'></div>
            <div className='py-3 max-w-lg'>
              <h4 className='text-xl text-text-primary font-semibold mb-3'>
                Crecimiento y Reconocimiento en Twitch
              </h4>
              <p className='mb-2'>
                Pablo tomó la decisión de dedicarse a tiempo completo al
                streaming en 2016. Su canal creció significativamente,
                destacando en juegos como &ldquo;H1Z1&ldquo;, &ldquo;Dead by
                Daylight&ldquo; y &ldquo;PUBG&ldquo;.
              </p>
              <p>
                Con su estilo de juego agresivo y su habilidad, se convirtió en
                uno de los streamers más reconocidos de Argentina.
              </p>
            </div>
          </div>
          <div className=''>
            <Image
              className='w-full h-full object-contain grayscale hover:grayscale-0 transition duration-500 rounded-xl'
              src='/assets/sobre-mi/img4-sobremi-duende.webp'
              alt='img1-sobremi'
              width={400}
              height={400}
            />
          </div>
        </article>
        <article className='flex items-center gap-10'>
          <div className=''>
            <Image
              className='w-full h-full object-contain grayscale hover:grayscale-0 transition duration-500 rounded-xl'
              src='/assets/sobre-mi/img5-sobremi-duende.webp'
              alt='img1-sobremi'
              width={400}
              height={400}
            />
          </div>
          <div className='flex gap-4'>
            <div className='bg-primary w-1.5 rounded-full'></div>
            <div className='py-3 max-w-lg'>
              <h4 className='text-xl text-text-primary font-semibold mb-3'>
                Expansión y Éxito Continuo
              </h4>
              <p className='mb-2'>
                Hacia 2017 y 2018, Pablo experimentó un crecimiento notable,
                diversificando su contenido con juegos como
                &ldquo;Fortnite&ldquo; y &ldquo;Realm Royale&ldquo;, y
                estableciéndose como una figura destacada tanto en Twitch como
                en YouTube.
              </p>
              <p>
                Su comunidad, conocida como &ldquo;La Comarca&ldquo;, se
                expandió rápidamente, reflejando su éxito y popularidad.
              </p>
            </div>
          </div>
        </article>
        <article className='flex items-center gap-10'>
          <div className='flex gap-4'>
            <div className='bg-primary w-1.5 rounded-full'></div>
            <div className='py-3 max-w-lg'>
              <h4 className='text-xl text-text-primary font-semibold mb-3'>
                Consolidación y Nuevas Iniciativas
              </h4>
              <p className='mb-2'>
                Durante 2019 y 2020, Pablo &ldquo;el Duende&ldquo; consolidó su
                presencia en el mundo del streaming. Experimentó con nuevos
                formatos y colaboraciones, ampliando su alcance más allá de los
                videojuegos.
              </p>
              <p>
                Su carisma y habilidad para entretener a su audiencia lo
                llevaron a participar en eventos y proyectos más amplios,
                reforzando su posición como un influencer prominente en el mundo
                digital.
              </p>
            </div>
          </div>
          <div className=''>
            <Image
              className='w-full h-full object-contain grayscale hover:grayscale-0 transition duration-500 rounded-xl'
              src='/assets/sobre-mi/img6-sobremi-duende.webp'
              alt='img1-sobremi'
              width={400}
              height={400}
            />
          </div>
        </article>
        <article className='flex items-center gap-10'>
          <div className=''>
            <Image
              className='w-full h-full object-contain grayscale hover:grayscale-0 transition duration-500 rounded-xl'
              src='/assets/sobre-mi/img7-sobremi-duende.webp'
              alt='img1-sobremi'
              width={400}
              height={400}
            />
          </div>
          <div className='flex gap-4'>
            <div className='bg-primary w-1.5 rounded-full'></div>
            <div className='py-3 max-w-lg'>
              <h4 className='text-xl text-text-primary font-semibold mb-3'>
                Adaptación y Evolución
              </h4>
              <p className='mb-2'>
                En los años siguientes, Pablo adaptó su contenido a las
                tendencias cambiantes y a las demandas de su audiencia. A pesar
                de los desafíos del entorno digital, mantuvo su relevancia y
                popularidad, explorando nuevas plataformas y géneros de juegos.
              </p>
              <p>
                Su habilidad para innovar y mantenerse auténtico lo ayudó a
                seguir siendo una figura respetada y querida en la comunidad de
                streaming.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SobreMi;
