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
        <form onSubmit={handleSignup}>
          <div className='relative mb-8' data-twe-input-wrapper-init>

                <label htmlFor="exampleFormControlInput1" className='pointer-events-none absolute top-0 mb-0 max-w[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue :placeholder:opacity-0 '>Usuário: </label>
                <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required className='outiline block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue'/>

          </div>
          <div>
              <label htmlFor="email" className='pointer-events-none left-3 top-0 mb-0 max-w[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue '>Email: </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue  dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0' />

          </div>
          <div>
                <label htmlFor="senha" className='pointer-events-none left-3 top-0 mb-0 max-w[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue :placeholder:opacity-0'>Senha:</label>
                <input
                  type="password"
                  id="senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required className='outiline block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue'/>
          </div>
          <div>
                <label htmlFor="confirmSenha" className='pointer-events-none left-3 top-0 mb-0 max-w[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue :placeholder:opacity-0'>Confirmar Senha:</label>
                <input
                  type="password"
                  id="confirmSenha"
                  value={confirmSenha}
                  onChange={(e) => setConfirmSenha(e.target.value)}
                  required  className='outiline block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue'/>
          </div>
          {/**Endereço info */}
      <div>
        <label htmlFor="cep" className='pointer-events-none left-3 top-0 mb-0 max-w[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue :placeholder:opacity-0'>CEP:</label>
        <input
          type="text"
          id="cep"
          value={cep}
          onChange={handleCepChange}
          required className='outiline block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue'/>
      </div>
      <div>
        <label htmlFor="logradouro" className='pointer-events-none left-3 top-0 mb-0 max-w[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue :placeholder:opacity-0'>Logradouro:</label>
        <input
          type="text"
          id="logradouro"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
          required className='outiline block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue'/>
      </div>
      
      <div>
        <label htmlFor="localidade" className='pointer-events-none left-3 top-0 mb-0 max-w[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue :placeholder:opacity-0'>Localidade:</label>
        <input
          type="localidade"
          id="localidade"
          value={localidade}
          onChange={(e) => setLocalidade(e.target.value)}
          required className='outiline block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue'/>
      </div>
      <div>
        <label htmlFor="UF" className='pointer-events-none left-3 top-0 mb-0 max-w[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue :placeholder:opacity-0'>Estado (UF):</label>
        <input
          type="text"
          id="UF"
          value={UF}
          onChange={(e) => setUf(e.target.value)}
          required className='outiline block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue'/>
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <div className='mb-12 pb-1 pt-1 text-center mt-5'>
        <button type="submit" className='mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-md text-white font-medium uppercase leading-normal shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none dark:shadow-black/30' data-twe-ripple-init data-twe-ripple-color='light' style={{
          background:'linear-gradient(to right, #00f260, #0575e6)'
        }}>Concluir

        </button>
      </div>
    </form>
    </section>
  );
};

export default SignupForm;