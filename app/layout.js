import { Josefin_Sans as Inter } from "next/font/google";
import Navigation from "./_components/Navigation";
import "./globals.css";
// import "@/app/_styles/globals.css";
import wpaper from "@/public/wpaper.jpg";
import Image from "next/image";
import { PharmaProvider } from "./PharmaProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "PharmaView %s",
    default: "PharmaSearch"
  },
  icons: {
    icon: '/favicon.png',
  },
  description: "Information about Pharmaceuticals - By Samanth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-wallpaper`}>
        {/* <Image objectFit="cover" objectRepeat="repeat-y" src={wpaper} fill alt="wallpaper of page" placeholder="blur" className="object-fill -z-20" /> */}
        <div>
          <Navigation />
        </div>
        <div>
          <PharmaProvider>
            {children}
          </PharmaProvider>
        </div>
      </body>
    </html>
  );
}
