'use client';
///Criando o component Login
import {login} from '@/lib/action';
import { useFormState } from 'react-dom';
import Link from 'next/link';

export const LoginForm = () =>{
    const [state, formAction] = useFormState(login, undefined);
    return (
        <form action={formAction} className='flex flex-col text-center gap-[30px]'>

            <input type="text" placeholder='Usuário' name='username' className='p-[20] bg-orange-500 text-stone-50 border-none rounded-md'/>

            <input type="text" placeholder='Senha' name='password'  className='p-[20] bg-orange-500 text-stone-50 border-none rounded-md'/>

            <button className='p-[20px] bg-slate-950 cursor-pointer text-stone-50 font-bold border-none rounded-md'>
                Login</button>
            {state?.error}
            <Link href='/register'>
            {"Você ainda não possui uma conta?"} <b>Register</b>
            </Link>
        </form>
    )
}