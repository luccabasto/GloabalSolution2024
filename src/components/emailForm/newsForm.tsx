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
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleInputChange} required />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default EmailForm;
