'use client'

import React, { useState } from 'react';

const SignupForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar se todos os campos obrigatórios estão preenchidos
    if (!username || !email || !password || !confirmPassword || !confirmEmail || !logradouro || !cep || !uf) {
      setErrorMessage('Todos os campos são obrigatórios.');
      return;
    }

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem.');
      return;
    }

    // Verificar se os emails coincidem
    if (email !== confirmEmail) {
      setErrorMessage('Os emails não coincidem.');
      return;
    }

    // Criar um objeto de usuário com os dados do formulário
    const newUser = { 
      username, 
      email,
      password,
      logradouro,
      cep,
      uf
    };

    // Enviar os dados do usuário para a API de cadastro
    try {
      const response = await fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      // Verificar se o cadastro foi bem-sucedido
      if (response.ok) {
        // Limpar os campos do formulário
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setConfirmEmail('');
        setLogradouro('');
        setCep('');
        setUf('');
        setErrorMessage('');

        // Exibir uma mensagem de sucesso (opcional)
        alert('Cadastro realizado com sucesso! Você já pode fazer login.');
      } else {
        // Exibir uma mensagem de erro se o cadastro falhar
        const data = await response.json();
        setErrorMessage(data.message || 'Erro desconhecido ao cadastrar usuário.');
      }
    } catch (error) {
      console.error('Erro ao enviar requisição de cadastro:', error);
      setErrorMessage('Erro ao enviar requisição de cadastro. Por favor, tente novamente mais tarde.');
    }
  };

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCep(value);

    // Realizar a consulta do CEP na API de consulta pública (opcional)
    try {
      const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
      if (response.ok) {
        const data = await response.json();
        setLogradouro(data.logradouro || '');
        setUf(data.uf || '');
      }
    } catch (error) {
      console.error('Erro ao consultar CEP:', error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmEmail">Confirmar Email:</label>
        <input
          type="email"
          id="confirmEmail"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirmar Senha:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="logradouro">Logradouro:</label>
        <input
          type="text"
          id="logradouro"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="cep">CEP:</label>
        <input
          type="text"
          id="cep"
          value={cep}
          onChange={handleCepChange}
          required
        />
      </div>
      <div>
        <label htmlFor="uf">UF:</label>
        <input
          type="text"
          id="uf"
          value={uf}
          onChange={(e) => setUf(e.target.value)}
          required
        />
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button type="submit">Concluir</button>
    </form>
  );
};

export default SignupForm;
