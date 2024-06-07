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
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuário:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm;
