'use client'
import React from "react";
import { link } from "fs";
import { FaGithub } from "react-icons/fa";
import {Link, ItemsTypes} from '@/components/footer/subComponets/interface';


export const DevFooter = () =>{
    return (
        <div className="grid place-items-center">
            <Items links={DEVTEAM} title='Equipe DEV'/>
            <Items links={repo} title={undefined}/>
        </div>
    )
}

export const DEVTEAM: Link[] = [
    {
        name:"Lucca Basto", RM: '- 553771', link: 'https://www.linkedin.com/in/lucas-basto/'
    },
    {
        name:"Thais Ribeiro", RM: '- 553870', link: 'https://github.com/ThaiisRibeiro'
    },
    {
        name:"Vitor Lucas Mattos", RM: '- 553029', link: 'https://github.com/fiapvitor'
    },
]

export const repo: Link[] = [
    { link:'https://github.com/luccabasto/GloabalSolution2024', icon:FaGithub

    }
]

export const Items = ({ links, title }:ItemsTypes) => {
    return (
        <>
            <ul className="">
                {title && <h1 className="mb-1 font-semibold">{title}</h1>}
                {links.map((link) => (
                    <li key={link.name}>
                        <a href={link.link} target="_blank" className="hover:text-justGreen duration-300 cursor-pointer">
                            {link.name}
                        </a>
                        {link.RM && <a className="cursor-none">{link.RM}</a>}
                    </li>
                ))}
            </ul>
            {/* Renderizando o ícone do Github */}
            {links.map((link) => (
                link.icon && (
                    <ul className="flex items-center mt-5">
                        <li key={`${link.name}-icon`}>
                            <a href={link.link} target="_blank" className="p-2 cursor-pointer inline-flex items-center rounded-full bg-justGreen mx-1.5 text-xl hover:text-gray-100 duration-300">
                                <link.icon />
                            </a>
                        </li>
                    </ul>
                )
            ))}
        </>
    )
}



