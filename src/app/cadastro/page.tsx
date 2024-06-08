// signup.tsx

import React from 'react';
import SignupForm from './../../components/cadastroForm/cadastroForm'

const SignupPage: React.FC = () => {
  return (
    <div className='flex flex-col gap-5 items-center'>
      <h1 className='text-2xl'>Cadastro de Usuário</h1>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
