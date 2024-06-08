'use client'

import { useRouter } from 'next/dist/client/components/navigation';
import router from 'next/dist/shared/lib/router/router';
import React, { useState } from 'react';


const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verificar se o usuário e a senha correspondem aos valores de teste
    if (username === 'testuser' && password === 'testpassword') {
      // Se os dados de login estiverem corretos, redirecione para a página de destino
      router.push('/userPage');
      alert('Acesso autorizado');
    } else {
      // Caso contrário, exiba uma mensagem de erro
      setErrorMessage('Usuário ou senha incorretos');
    }
  };

  return (
    <div>
      <h1 className='mb-4'>Acesse sua conta</h1>
      <form onSubmit={handleLogin}>
        <div className='relative mb-8'data-twe-input-wrapper-init>
          {/**Login layout */}
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} 
          className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue  dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0' placeholder='Usuário' />
          <label htmlFor="exampleFormControlInput1"
          className='pointer-events-none absolute left-3 top-0
          mb-0 max-w[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'>
            Usuário:
          </label>
        </div>
      {/**Senha layout */}
        <div className='relative mb-4' data-twe-input-wrapper-init>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
            className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue  dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0' placeholder='Senha' />
          <label htmlFor="exampleFormControlInput11"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-intenseBlue transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
              Senha:
            </label>
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <div className='mb-12 pb-1 pt-1 text-center'>
          <button type="submit" 
            className='mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong' data-twe-ripple-init
            data-twe-ripple-color="light"style={{ 
              background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
          }}>
              Entrar
            </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
