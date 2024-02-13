import Home from '@/components/Home';
import Comunidad from '@/components/Comunidad';
// import PlaceholderVideosRecientes from '@/components/PlaceholderVideosRecientes';
import VideosRecientes from '@/components/VideosRecientes';
import Sponsors from '@/components/Sponsors';
import React from 'react';

const Page = () => {
  return (
    <main className='flex flex-col items-center min-h-screen'>
      <Home />
      {/* <PlaceholderVideosRecientes /> */}
      <VideosRecientes />
      <Comunidad />
      <Sponsors />
    </main>
  );
};

export default Page;
