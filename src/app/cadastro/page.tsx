// signup.tsx

import React from 'react';
import SignupForm from './../../components/cadastroForm/cadastroForm'

const SignupPage: React.FC = () => {
  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
