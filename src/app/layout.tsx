import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./../components/navBar/Navbar";
import { Footer } from "@/components/footer/Footer";

//Styles
import styles from '@/styles/global.module.scss'


export const metadata: Metadata = {
  title: "NatuCoin - Sua moeda natural",
  description: "Solução desenvolvida pra Global Solution 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
        <body className={styles.body}>
          <div className='w-full min-h-screen flex flex-col justify-between'>
            <Navbar/>
            {children}
            <Footer/>
            </div>
        </body>
      
    </html>
  );
}
