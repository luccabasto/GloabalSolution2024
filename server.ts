// server.ts

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // Importa a função fileURLToPath

const app = express();
const PORT = 3001;
const JWT_SECRET = 'secret_key';

app.use(cors());
app.use(bodyParser.json());

interface User {
    id: number;
    username: string;
    password: string;
};
// Interface para os dados do SAC
interface SACData {
    mensagem: string;
};

const users: User[] = [];
const __filename = fileURLToPath(import.meta.url); // Converte a URL do arquivo atual para o caminho do arquivo
const __dirname = path.dirname(__filename); // Obtém o diretório atual do arquivo
const sacFilePath = path.join(__dirname, 'sac.json');


// Rota para cadastro de usuários
app.post('/api/signup', (req, res) => {
    const { username, password } = req.body;

    // Verifica se o usuário já existe
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'Usuário já existe' });
    }

    // Criptografa a senha antes de salvar no banco de dados
    const hashedPassword = bcrypt.hashSync(password, 8);

    // Adiciona o usuário à lista de usuários
    users.push({ id: users.length + 1, username, password: hashedPassword });

    return res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
});

// Rota para login de usuários
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Encontra o usuário pelo nome de usuário
    const user = users.find(u => u.username === username);

    // Verifica se o usuário existe e se a senha está correta
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(400).json({ message: 'Usuário ou senha inválidos' });
    }

    // Gera um token JWT para o usuário
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({ message: 'Login bem-sucedido', token });
});
// Rota para listar todos os usuários cadastrados
app.get('/api/users', (req, res) => {
    return res.status(200).json(users);
});
// Nova rota para receber dados do formulário SAC
app.post('/api/faq', (req, res) => {
    const { mensagem }: SACData = req.body;

    try {
        // Aqui você pode salvar os dados em um banco de dados ou em qualquer outro local de armazenamento adequado
        // Por enquanto, vamos apenas retornar os dados recebidos na resposta

        res.status(200).json({ mensagem, message: 'Dados do SAC recebidos com sucesso' });
    } catch (error) {
        console.error('Erro ao salvar os dados do SAC:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.listen(PORT, () => {
    console.log(`O Server está rodando na porta ${PORT}`);
});
