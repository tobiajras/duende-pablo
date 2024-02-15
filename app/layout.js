import { Assistant } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ReactQuery from '@/utils/ReactQuery';
import Footer from '@/components/Footer';
import BackgroundBlurs from '@/components/BackgroundBlurs';

// const inter = Inter({ subsets: ["latin"] });
const assistant = Assistant({ subsets: ['latin'] });

export const metadata = {
  metadataBase: 'https://duende-pablo.vercel.app/',
  title: 'Duende Pablo - Streamer Argentino',
  description:
    'Creador de contenido de Twitch y Youtube - Streamer de variedad: IRL, juegos PvP, MOBA - Buenos Aires, Argentina',
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
        className={`${assistant.className} bg-background-primary text-text-secondary relative`}
      >
        <BackgroundBlurs>
          <Navbar />
          <ReactQuery>{children}</ReactQuery>
          <Footer />
        </BackgroundBlurs>
      </body>
    </html>
  );
}
