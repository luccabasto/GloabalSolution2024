'use client'

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const NavigationTestPage = () =>{
    //Client side nav

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const q = searchParams.get('q');

    console.log(q)

    const handleClick = () =>{
        console.log('Clicado, funcionou')
        router.push('/') // Altere '/outra-rota' para a rota para a qual você deseja redirecionar
    }

    return(
        <div>
            <Link href='/' prefetch={false}>Clica aqui</Link>
            <button onClick={handleClick}>Escreva e redirecione</button>
        </div>
    )
}
