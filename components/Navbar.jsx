import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='flex justify-center'>
      <div className='flex justify-between items-center max-w-6xl w-full h-24 pt-5 mx-5'>
        <div className='h-full'>
          <Link href='/'>
            <Image
              className='h-full w-full'
              src='/assets/duendeLogoSvg.svg'
              alt='duende-pablo-logo'
              width={80}
              height={80}
            />
          </Link>
        </div>
        <nav className='flex justify-center'>
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
