import { HiUser } from 'react-icons/hi2';
import { TbMailFilled } from 'react-icons/tb';
import { BsChatLeftTextFill } from 'react-icons/bs';

const Contacto = () => {
  return (
    <section className='flex justify-center'>
      <div className='max-w-6xl my-40 mx-10'>
        <article>
          <form className='flex flex-col p-20  border border-neutral-800  rounded-xl '>
            <h4 className='text-5xl font-semibold text-text-primary mb-1'>
              Ponerse en <span className='text-primary'>contacto</span>
            </h4>
            <h5 className='text-2xl font-semibold mb-5'>Enviame un mensaje</h5>
            <label className='text-text-primary mb-2' htmlFor='nombre'>
              Nombre
            </label>
            <div className='flex gap-2 items-center mb-5 py-3 px-3 rounded-md bg-[#191B20] border border-neutral-800'>
              <span>
                <HiUser className='w-5 h-5' />
              </span>
              <input
                className=' text-text-primary text-lg bg-[#191B20] outline-none w-full '
                type='text'
                id='nombre'
                name='nombre'
                placeholder='Nombre y apellido'
              />
            </div>
            <label className='mb-2 text-text-primary' htmlFor='correo'>
              Email
            </label>
            <div className='flex gap-2 items-center mb-5 py-3 px-3 rounded-md bg-[#191B20] border border-neutral-800'>
              <span>
                <TbMailFilled className='fill-primary w-5 h-5' />
              </span>
              <input
                className=' text-text-primary text-lg bg-[#191B20] outline-none w-full'
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
                className='w-full h-full text-text-primary text-lg indent-8 spacing py-3 px-2 rounded-md bg-[#191B20] outline-none border border-neutral-800'
                placeholder='Mensaje'
                name='mensaje-form'
                id='mensaje-form'
                cols='30'
                rows='5'
              ></textarea>
              <span className='absolute mx-3 my-5 top-0 left-0 w-5 h-5'>
                <BsChatLeftTextFill className='w-full h-full' />
              </span>
            </div>
            <button
              className='mt-5 text-text-primary text-xl py-3 px-5 rounded-md font-semibold background-gradient placeholder-text-primary outline-none'
              type='submit'
            >
              Enviar
            </button>
          </form>
        </article>
      </div>
    </section>
  );
};

export default Contacto;
