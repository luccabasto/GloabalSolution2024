// signup.tsx

import React from 'react';
import SignupForm from './../../components/cadastroForm/cadastroForm'

const SignupPage: React.FC = () => {
  return (

    <section className='h-full bg-neutral-200 grid place-items-center'>
      <div className='container h-full p-10'>
        <div className='flex h-full flex-wrap items-center justify-center text-neutral-800 '>
          <div className='w-full '>
            <div className='block rounded-lg bg-white shadow-lg'>
              <div className='g-0 lg:flex lg:flex-wrap'>
                {/**formContainer */}
                <div className='px-4 md:px-8 lg:w-6/12'>
                  <div className='md:mx-6 md:p-12'>
                    <div className='text-center'>
                      <img src="/layout_IMG.png" alt="logo" className='mx-auto w-48 pt-5'/>
                      <h4 className='mb-12 mt-1 pb-1 text-xl font-semibold'>Faça parte da solução,  
                        <span className='text-blueGreen hover:text-intenseBlue duration-200 cursor-none'> cadastre-se</span>
                      </h4>
                    </div>
                    <SignupForm />
                  </div>
                </div>
                {/**formConteiner */}
              </div>
            </div>
          </div>

        </div>
    </div>
    </section>
    
  );
};

export default SignupPage;
