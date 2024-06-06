'use client';
///

import { title } from "process";
import { linksData } from "./linksData";
import { NavLink } from "./navLink/navLink";
import { useState } from "react";
import Image from 'next/image';

///Styles?
import styles from '@/styles/links.module.scss';


///dataTemporario
const session = true;
const isAdmin = true;

//README 
//Criei uma condição para a visualização dos botões de admin e login, ou seja, se você for um usuário comum, não deverá ver o botão 'admin' e for um usuário válido deverá ver o botão de sair.

export const Links = ({session}) =>{

    const [open, setOpen] = useState(false);

    return(
        <div className={styles.container}>
        <div className='flex items-center gap-[10px] links'>
          {linksData.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          {session?.user ? (
            <>
              {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
              <form action={handleLogout}>
                <button className='p-[10px] cursor-pointer font-bold'>Logout</button>
              </form>
            </>
          ) : (
            <NavLink item={{ title: "Login", path: "/login" }} />
          )}
        </div>
        <Image
          className='hidden'
          src="/menu.png"
          alt=""
          width={30}
          height={30}
          onClick={() => setOpen((prev) => !prev)}
        />
        {open && (
          <div className='hidden'>
            {linksData.map((link) => (
              <NavLink item={link} key={link.title} />
            ))}
          </div>
        )}
      </div>
    );
};

