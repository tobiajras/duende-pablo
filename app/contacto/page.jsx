const Contacto = () => {
  return (
    <section className='flex justify-center'>
      <div className='max-w-6xl my-40 mx-10'>
        <article>
          <form className='flex flex-col p-20  shadow shadow-neutral-600  rounded-xl '>
            <label className='text-text-primary mb-2' htmlFor='nombre'>
              Nombre
            </label>
            <input
              className='mb-5 text-text-primary py-3 px-5 rounded-md placeholder-text-primary outline-none bg-primary/10'
              type='text'
              id='nombre'
              name='nombre'
            />
            <label className='mb-2 text-text-primary' htmlFor='correo'>
              Correo eletrónico
            </label>
            <input
              className='mb-5 text-text-primary py-3 px-5 rounded-md bg-primary/10 placeholder-text-primary outline-none'
              type='text'
            />
            <label className='mb-2 text-text-primary' htmlFor='mensaje'>
              Mensaje
            </label>
            <textarea
              className='text-text-primary py-3 px-5 rounded-md bg-primary/10 placeholder-text-primary outline-none'
              name='mensaje-form'
              id='mensaje-form'
              cols='30'
              rows='5'
            ></textarea>
            <button
              className='mt-5 text-text-primary py-3 px-5 rounded-md font-semibold bg-primary/10 placeholder-text-primary outline-none'
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
