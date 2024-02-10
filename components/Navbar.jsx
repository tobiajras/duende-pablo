import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='flex justify-center fixed top-0 left-0 right-0 bg-background-primary z-50'>
      <div className='flex justify-between items-center max-w-6xl w-full h-24 py-3 mx-6 sm:mx-8 md:mx-10'>
        <div className='h-full'>
          <Link href='/'>
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
        <nav className='hidden md:flex justify-center'>
          <ul className='flex gap-8 text-text-secondary text-lg'>
            <li className=''>
              <Link
                className='hover:text-text-primary transition-colors'
                href='/'
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-text-primary transition-colors'
                href='/eventos'
              >
                Eventos
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-text-primary transition-colors'
                href='/sobre-mi'
              >
                Duende
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-text-primary transition-colors'
                href='/pc'
              >
                Pc
              </Link>
            </li>
          </ul>
        </nav>
        <div className=''>
          <Link
            className='text-text-primary font-medium background-gradient rounded py-3 px-5 text-lg'
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
