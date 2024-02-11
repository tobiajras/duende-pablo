import React from 'react';

const Title = ({ sectionTitle }) => {
  return (
    <div className='flex justify-center w-full'>
      <h3 className='w-full text-xl md:text-3xl font-semibold items-start max-w-6xl mx-6 sm:mx-8 md:mx-10'>
        {sectionTitle}
      </h3>
    </div>
  );
};

export default Title;
