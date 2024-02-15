import { Assistant } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ReactQuery from '@/utils/ReactQuery';
import Footer from '@/components/Footer';

// const inter = Inter({ subsets: ["latin"] });
const assistant = Assistant({ subsets: ['latin'] });

export const metadata = {
  metadataBase: 'https://duende-pablo.vercel.app/',
  title: 'Duende Pablo - Streamer Argentino',
  description: 'Creador de contenido de Twitch y Youtube - Argentina',
  openGraph: {
    title: 'Duende Pablo - Streamer Argentino',
    description: 'Creador de contenido de Twitch y Youtube - Argentina',
    url: 'https://duende-pablo.vercel.app/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duende Pablo - Streamer Argentino',
    description: 'Creador de contenido de Twitch y Youtube - Argentina',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body
        className={`${assistant.className} bg-background-primary text-text-secondary background-blur`}
      >
        <Navbar />
        <ReactQuery>{children}</ReactQuery>
        <Footer />
      </body>
    </html>
  );
}
