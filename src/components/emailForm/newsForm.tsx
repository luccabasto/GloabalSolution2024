'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

function EmailForm() {
  const [email, setEmail] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    try {
      const response = await axios.post('https://sua-api.com/endpoint', { email });
      console.log('Email enviado com sucesso:', response.data);
      setSuccessMessage('Email enviado com sucesso!');
      setErrorMessage('');
      setEmail('');
    } catch (error) {
      console.error('Erro ao enviar o email:', error);
      setSuccessMessage('');
      setErrorMessage('Erro ao enviar o email. Por favor, tente novamente mais tarde.');
    }
  }

  return (
    <div>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit} className='flex flex-row gap-3 justify-center items-center md:flex ,md:flex-col'>
        <label className='pointer-events-none left-3 top-0 mb-0 max-w[90%] origin-[0_0] pt-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue :placeholder:opacity-0'>
          Email:
        </label>
        <input type="email" value={email} onChange={handleInputChange} required className='outiline block min-h-[auto] w-full rounded border-solid border-2 border-gray-500 bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-intenseBlue' />

        <button type="submit" className='inline-block rounded px-6 pb-2 pt-2.5 text-md text-white font-medium uppercase leading-normal shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none dark:shadow-black/30' data-twe-ripple-init data-twe-ripple-color='light' style={{
          background:'linear-gradient(to right, #00f260, #0575e6)'
        }}>Enviar</button>
      </form>
    </div>
  );
}

export default EmailForm;
