const express = require('express');
const routerProdutos = require('./router');

const app = express();

app.use(express.json()); // Middleware para parsing de JSON
app.use('/produtos', routerProdutos);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

module.exports = app;
