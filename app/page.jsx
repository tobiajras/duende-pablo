import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@/components/Home'));
const Comunidad = dynamic(() => import('@/components/Comunidad'), {
  ssr: false,
});
const PlaceholderVideosRecientes = dynamic(() =>
  import('@/components/PlaceholderVideosRecientes')
);
const VideosRecientes = dynamic(() => import('@/components/VideosRecientes'));
const Sponsors = dynamic(() => import('@/components/Sponsors'), { ssr: false });

const Page = () => {
  return (
    <main className='flex flex-col items-center min-h-screen'>
      <Home />
      <PlaceholderVideosRecientes />
      {/* <VideosRecientes /> */}
      <Comunidad />
      <Sponsors />
    </main>
  );
};

export default Page;
