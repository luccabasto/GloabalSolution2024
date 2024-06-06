'use client';

import styles from '@/styles/navLink.module.scss'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Assumindo que usePathname é uma função válida

interface itemProps {
    path: string;
    title: string
}

export const NavLink: React.FC<{item:itemProps}> = ({item}) => {
    const pathname = usePathname(); // Usando usePathname para obter o caminho atual

    return (
        <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`} passHref>
            {item.title}
        </Link>
    ); 
}
