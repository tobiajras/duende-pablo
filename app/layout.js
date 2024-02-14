import { Assistant } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ReactQuery from '@/utils/ReactQuery';
import Footer from '@/components/Footer';
import Head from 'next/head';

// const inter = Inter({ subsets: ["latin"] });
const assistant = Assistant({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Duende Pablo - Streamer Argentino',
//   description: 'Creador de contenido de Twitch y Youtube - Argentina',
//   openGraph: {
//     title: 'Duende Pablo - Streamer Argentino',
//     description: 'Creador de contenido de Twitch y Youtube - Argentina',
//     url: 'https://duende-pablo.vercel.app/',
//     images: '/opengraph-image.png',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Duende Pablo - Streamer Argentino',
//     description: 'Creador de contenido de Twitch y Youtube - Argentina',
//     images: ['/twitter-image.png'],
//   },
// };

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Duende Pablo - Streamer Argentino</title>
        <meta
          name='description'
          content='Creador de contenido de Twitch y Youtube - Argentina'
        />
        <meta property='og:title' content='Duende Pablo - Streamer Argentino' />
        <meta
          property='og:description'
          content='Creador de contenido de Twitch y Youtube - Argentina'
        />
        <meta property='og:url' content='https://duende-pablo.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/opengraph-image.png' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Duende Pablo - Streamer Argentino'
        />
        <meta
          name='twitter:description'
          content='Creador de contenido de Twitch y Youtube - Argentina'
        />
        <meta name='twitter:image' content='/twitter-image.png' />
      </Head>
      <html lang='en'>
        <body
          className={`${assistant.className} bg-background-primary background-blur text-text-secondary`}
        >
          <Navbar />
          <ReactQuery>{children}</ReactQuery>
          <Footer />
        </body>
      </html>
    </>
  );
}
