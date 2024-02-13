import { Assistant } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ReactQuery from '@/utils/ReactQuery';
import Footer from '@/components/Footer';
import Head from 'next/head';

// const inter = Inter({ subsets: ["latin"] });
const assistant = Assistant({ subsets: ['latin'] });

export const metadata = {
  title: 'Duende Pablo - Streamer Argentino',
  description: 'Creador de contenido de Twitch y Youtube - Argentina',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />

        <meta property='og:title' content='Duende Pablo - Streamer Argentino' />
        <meta
          property='og:description'
          content='Creador de contenido de Twitch y Youtube - Argentina'
        />
        <meta property='og:url' content='https://duende-pablo.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/assets/inicio-og-duende.webp' />

        <meta
          property='twitter:site'
          content='https://twitter.com/DuendeGaming'
        />
        <meta
          property='twitter:description'
          content='Creador de contenido de Twitch y Youtube - Argentina'
        />
        <meta
          property='twitter:image'
          content='/assets/inicio-og-duende.webp'
        />
      </Head>
      <body
        className={`${assistant.className} bg-background-primary background-blur text-text-secondary`}
      >
        <Navbar />
        <ReactQuery>{children}</ReactQuery>
        <Footer />
      </body>
    </html>
  );
}
