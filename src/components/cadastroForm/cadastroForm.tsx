'use client'

import React, { useState } from 'react';

const SignupForm: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [cep, setCep] = useState('');
  const [UF, setUf] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar se todos os campos obrigatórios estão preenchidos
    if (!nome || !email || !senha || !confirmSenha || !confirmEmail || !logradouro || !cep || !localidade || !UF) {
      setErrorMessage('Todos os campos são obrigatórios.');
      return;
    }

    // Verificar se as senhas coincidem
    if (senha !== confirmSenha) {
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
      nome, 
      email,
      senha,
      logradouro,
      localidade,
      cep,
      UF
    };

    // Enviar os dados do usuário para a API de cadastro
    try {
      const response = await fetch('http://localhost:8080/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      // Verificar se o cadastro foi bem-sucedido
      if (response.ok) {
        // Limpar os campos do formulário
        setNome('');
        setEmail('');
        setSenha('');
        setConfirmSenha('');
        setConfirmEmail('');
        setLogradouro('');
        setCep('');
        setUf('');
        setLocalidade('');
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
      const response = await fetch (`https://viacep.com.br/ws/${value}/json/`);
      if (response.ok) {
        const data = await response.json();
        setCep(data.cep || '');
        setLogradouro(data.logradouro || '');
        setUf(data.uf || '');
        setLocalidade(data.localidade || '')
      }
    } catch (error) {
      console.error('Erro ao consultar CEP:', error);
    }
  };

  return (
    <section className=''>
      <div>
        <div>
        <form onSubmit={handleSignup} className='m-5' >
          <div>
            <label htmlFor="nome" className='mr-5 text-xl'>Usuário:</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required  className='rounded-md text-black'/>

          </div>

          <div>
                <label htmlFor="email" className='mr-5 text-xl'>Email:</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required  className='rounded-md text-black' />
          </div>
          <div>
                <label htmlFor="senha" className='mr-5 text-xl'>Senha:</label>
                <input
                  type="password"
                  id="senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required  className='rounded-md text-black'/>
          </div>
          <div>
              <label htmlFor="confirmSenha" >Confir Senha:</label>
                  <input
                  type="password"
                  id="confirmSenha"
                  value={confirmSenha}
                  onChange={(e) => setConfirmSenha(e.target.value)}
                  required  className='rounded-md text-black' />
          </div>
      <div>
        
      </div>
      <div>
        <label htmlFor="cep"  className='mr-5 text-xl'>CEP:</label>
        <input
          type="text"
          id="cep"
          value={cep}
          onChange={handleCepChange}
          required className='rounded-md text-black'/>
      </div>
      <div>
        <label htmlFor="logradouro"  className='mr-5 text-xl'>Logradouro:</label>
        <input
          type="text"
          id="logradouro"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
          required className='rounded-md text-black'/>
      </div>
      
      <div>
        <label htmlFor="localidade"  className='mr-5 text-xl'>Localidade:</label>
        <input
          type="localidade"
          id="localidade"
          value={localidade}
          onChange={(e) => setLocalidade(e.target.value)}
          required   className='rounded-md text-black'/>
      </div>

      <div>
        <label htmlFor="UF"  className='mr-5 text-xl'>UF:</label>
        <input
          type="text"
          id="UF"
          value={UF}
          onChange={(e) => setUf(e.target.value)}
          required className='rounded-md text-black'/>
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button type="submit"  className='mr-5 text-xl items-center bg-slate-50 text-justGreen rounded-sm p-2'>Concluir</button>
    </form>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;