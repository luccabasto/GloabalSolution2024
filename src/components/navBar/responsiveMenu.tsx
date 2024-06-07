// ResponsiveMenu.tsx
'use client'
import { useState } from 'react';
import { linksData } from './links/linksData';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import React from 'react';

interface ResponsiveMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div>
      {/* Botão de menu para dispositivos móveis */}
      <button 
        onClick={onClose} // Use onClose para alternar o menu
        className="md:hidden p-2 rounded bg-gray-700 text-white"
        aria-label="Toggle menu"
      >
        <FaBars className="w-6 h-6" />
      </button>

      {/* Navegação em dispositivos móveis (menu dropdown) */}
      <nav className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        {linksData.map(link => (
          <Link key={link.path} href={link.path} passHref>
            <span className="block p-2 text-gray-700 hover:bg-gray-200 rounded" onClick={onClose}>
              {link.title}
            </span>
          </Link>
        ))}
      </nav>

      {/* Navegação em tablets e desktops */}
      <nav className="hidden md:flex md:items-center w-full">
        {linksData.map(link => (
          <Link key={link.path} href={link.path} passHref>
            <span className="block p-2 text-gray-700 hover:bg-gray-200 rounded md:mx-2">
              {link.title}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};
