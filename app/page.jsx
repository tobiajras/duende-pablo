import Home from '@/components/Home';
import Comunidad from '@/components/Comunidad';
import PlaceholderVideosRecientes from '@/components/PlaceholderVideosRecientes';
// import VideosRecientes from "@/components/VideosRecientes";
import Sponsors from '@/components/Sponsors';
import React from 'react';
import Title from '@/components/Title';

const Page = () => {
  return (
    <main className='flex flex-col items-center min-h-screen'>
      <Home />
      <Title sectionTitle='Videos Recientes' />
      <PlaceholderVideosRecientes />
      {/* <VideosRecientes /> */}
      <Title sectionTitle='Comunidad' />
      <Comunidad />
      <Title sectionTitle='Sponsors' />
      <Sponsors />
    </main>
  );
};

export default Page;
