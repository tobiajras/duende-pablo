import { Assistant } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ReactQuery from '@/utils/ReactQuery';
import Footer from '@/components/Footer';

// const inter = Inter({ subsets: ["latin"] });
const assistant = Assistant({ subsets: ['latin'] });

// title: 'Duende Pablo - Streamer Argentino',
// description: 'Creador de contenido de Twitch y Youtube - Argentina',

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
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
