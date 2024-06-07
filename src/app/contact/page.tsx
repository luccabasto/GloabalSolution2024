'use client'

import { useState } from 'react';
import Head from 'next/head';

const SACPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sac', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, message }),
      });

      if (response.ok) {
        console.log('Mensagem enviada com sucesso!');
        setMessageSent(true);
        // Limpar os campos do formulário, se necessário
        setFullName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Erro ao enviar a mensagem:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
    }
  };

  return (
    <div>
      <Head>
        <title>Formulário SAC</title>
      </Head>

      <h1>Formulário SAC</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Nome Completo:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {messageSent && (
        <div style={{ marginTop: '20px', color: 'green' }}>
          Mensagem enviada com sucesso!
        </div>
      )}
    </div>
  );
};

export default SACPage;
