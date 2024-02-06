import Home from '@/components/Home';
import Comunidad from '@/components/Comunidad';
import PlaceholderVideosRecientes from '@/components/PlaceholderVideosRecientes';
// import VideosRecientes from "@/components/VideosRecientes";
import Sponsors from '@/components/Sponsors';
import React from 'react';

const Page = () => {
  return (
    <main className='flex flex-col items-center min-h-screen'>
      <Home />
      <h3 className='text-xl md:text-3xl font-semibold items-start w-full max-w-6xl px-4 md:px-10'>
        Videos Recientes
      </h3>
      <PlaceholderVideosRecientes />
      {/* <VideosRecientes /> */}
      <h3 className='text-xl md:text-3xl font-semibold items-start w-full max-w-6xl px-4 md:px-10'>
        Comunidad
      </h3>
      <Comunidad />
      <h3 className='text-xl md:text-3xl font-semibold items-start w-full max-w-6xl px-4 md:px-10'>
        Sponsors
      </h3>
      <Sponsors />
    </main>
  );
};

export default Page;
