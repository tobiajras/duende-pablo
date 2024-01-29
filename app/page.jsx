import Comunidad from "@/components/Comunidad";
import Home from "@/components/Home";
import PlaceholderVideosRecientes from "@/components/PlaceholderVideosRecientes";
import Sponsor from "@/components/Sponsor";
// import VideosRecientes from "@/components/VideosRecientes";
import React from "react";

const Page = () => {
  return (
    <main className='flex flex-col items-center min-h-screen'>
      <Home />
      <h3 className='text-3xl font-semibold items-start'>Videos Recientes</h3>
      <PlaceholderVideosRecientes />
      {/* <VideosRecientes /> */}
      <h3 className='text-3xl font-semibold'>Comunidad</h3>
      <Comunidad />
      <h3 className='text-3xl font-semibold'>Sponsors</h3>
      <Sponsor />
    </main>
  );
};

export default Page;
