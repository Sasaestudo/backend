const express = require('express');
const app = express();

// Middleware de rota para o método GET na URL '/'
app.get('/', (req, res) => {
  res.send('Você fez uma requisição GET');
});

// Middleware de rota para o método POST na URL '/'
app.post('/', (req, res) => {
  res.status(201).send('Você fez uma requisição POST');
});

// Middleware de rota para o método PUT na URL '/'
app.put('/', (req, res) => {
  res.send('Você fez uma requisição PUT');
});

// Middleware de rota para o método DELETE na URL '/'
app.delete('/', (req, res) => {
  res.sendStatus(204);
});

// Faz a instância da aplicação Express ouvir a porta 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;