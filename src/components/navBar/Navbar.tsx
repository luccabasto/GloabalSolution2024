// Navbar.tsx
'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ResponsiveMenu } from '@/components/navBar/responsiveMenu';

const LogoLink = () => (
  <Link href="/" passHref>
    <div className="lg:flex lg:justify-center lg:flex-row md:flex md:flex-col md:items-center">
      <Image src="/logo.png" alt="Logo" width={75} height={50} />
      <h6 className="lg:pl-[10px] hidden lg:block text-xl font-semibold">NatuCoin</h6>
    </div>
  </Link>
);

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="h-auto w-auto text-center">
          <LogoLink />
        </div>
        <ResponsiveMenu isOpen={menuOpen} onClose={toggleMenu} />
      </div>
     
    </header>
  );
};
