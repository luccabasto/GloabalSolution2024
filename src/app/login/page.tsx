'use client'
// login/page.tsx
import React from 'react';
import Login from '../../components/loginForm/login';


const LoginPage = () => {
  return (
    <section className=''>
         <section className="gradient-form h-full bg-neutral-200">
            <div className="container h-full p-10">
                <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                <div className="w-full">
                    <div className="block rounded-lg bg-white shadow-lg">
                    <div className="g-0 lg:flex lg:flex-wrap">
                        {/**Container a esquerda */}
                        <div className="px-4 md:px-0 lg:w-6/12">
                        <div className="md:mx-6 md:p-12">
                            {/**Logo aqui */}
                            <div className="text-center">
                                <img
                                className="mx-auto w-48 pt-5"
                                src="/logo.png"
                                alt="logo" />
                                <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold text-blueGreen"> Nós somos a <span className='text-intenseBlue'>A-tension.co</span> </h4>
                            </div> {/**Logo */}
                            <Login/>
                            {/**Ainda não tem cadastro? */}
                            <div className="flex items-center justify-between pb-6 text-blueGreen">
                                <p className="mb-0 me-2 cursor-none">Você ainda não possui uma conta?</p>
                                <button type="button"
                                    className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-justGreen dark:hover:text-white"
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light">
                                    <a href="/cadastro">Cadastrar</a>
                                </button>
                            </div> {/**Ainda não tem cadastro? */}
                        </div>
                    </div>

                        {/** */} 
                        <div
                        className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                        style={{
                            background:'linear-gradient(to right, #00f260, #0575e6)'
                          }}>
                        <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                            <h4 className="mb-6 text-xl font-semibold">
                            Fazemos parte da solução para desenvolvimento sustentável 
                            </h4>
                            <p className="text-md">
                            Queremos que todos façam parte da solução para um desenvolvimento amigável com a nossa Terra e Mar, desde o cidadão da cidade grande até os interior. Afinal, a casa é de todos e para todos, precisamos ir além do consumo, precisamos reestrutrar o que já foi extraido em larga escala, repor o que foi utilizado e através da tecnologia criar soluções que nos permita ter um desenvolvimento benéfico e saudável.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </section>
  );
};

export default LoginPage;
