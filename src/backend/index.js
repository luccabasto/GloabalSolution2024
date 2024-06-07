const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

const usersFilePath = path.join(__dirname, 'users.json');

// Ler usuários do arquivo JSON
const readUsersFromFile = () => {
  try {
    const data = fs.readFileSync(usersFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Erro ao ler o arquivo users.json:', err);
    return [];
  }
};

// Escrever usuários no arquivo JSON
const writeUsersToFile = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

// Endpoint de cadastro de usuários
app.post('/api/signup', (req, res) => {
  const newUser = req.body;
  const users = readUsersFromFile();
  users.push(newUser);
  writeUsersToFile(users);
  res.status(201).json({ message: 'Usuário cadastrado com sucesso', user: newUser });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

