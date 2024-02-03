import Link from "next/link";

const Navbar = () => {
  return (
    <header className='flex justify-center'>
      <div className='flex justify-between items-center max-w-6xl w-full h-24 pt-5 mx-5'>
        <div className='text-2xl'>
          <Link className='hover:text-text-primary transition-colors' href='/'>
            Duende Pablo
          </Link>
        </div>
        <nav className='flex justify-center'>
          <ul className='flex gap-8 text-text-secondary text-lg'>
            <li className=''>
              <Link
                className='hover:text-text-primary transition-colors'
                href='/'
              >
                INICIO
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-text-primary transition-colors'
                href='/eventos'
              >
                EVENTOS
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-text-primary transition-colors'
                href='/sobre-mi'
              >
                DUENDE
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-text-primary transition-colors'
                href='/pc'
              >
                PC
              </Link>
            </li>
          </ul>
        </nav>
        <div className=''>
          <Link
            className='text-text-primary font-medium background-gradient rounded py-3 px-5 text-lg'
            href='/contacto'
          >
            CONTACTO
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
