'use client'

import React from 'react';
import { DevFooter } from './subComponets/footerData';
///styles imports
import styles from '@/styles/footer.module.scss';


export const  Footer = () => {
    return (
        <footer className={` ${styles.base}`}>
            <div className="flex flex-col justify-between md:flex-row md:justify-between md:items-center sm:px-12 px-4 py-7">
                <div className='hidden'>Logo aqui</div>
                <h1 className='lg:text-3xl lg:leading-normal text-2xl md:mb-0 mb-6 font-semibold'>
                    <span className={styles.spaN}>A-tension</span>, sua solução tecnológica para um 
                    <span className={styles.spaN}> desenvolvimento saudável.</span>
                </h1>
                {/**grupoLinks */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 text-center pt-2 text-xs pb-8 inset'>
                        <DevFooter/>
                        <span>©  2024 A-tension.co solução desenvolvida para GlobalSolution - FIAP/SP.</span>
                    </div>
            </div>
        </footer>
    )
}