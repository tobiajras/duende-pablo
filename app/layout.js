import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ReactQuery from "@/utils/ReactQuery";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-background-primary background-blur text-text-secondary`}
      >
        <Navbar />
        <ReactQuery>{children}</ReactQuery>
      </body>
    </html>
  );
}
