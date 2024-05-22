const express = require('express');
const router = express.Router();

let produtos = [];

router.get('/', (req, res) => {
  res.status(200).json(produtos);
});

router.get('/:produtoId', (req, res) => {
  const produtoId = parseInt(req.params.produtoId);
  const produto = produtos.find(p => p.id === produtoId);
  if (produto) {
    res.status(200).json(produto);
  } else {
    res.status(404).json({ msg: 'Produto não encontrado' });
  }
});

router.post('/', (req, res) => {
  const { nome, preco } = req.body;
  if (nome && preco) {
    const novoProduto = { id: produtos.length + 1, nome, preco };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
  } else {
    res.status(422).json({ msg: 'Nome e/ou preço do produto não informados' });
  }
});

router.put('/:produtoId', (req, res) => {
  const produtoId = parseInt(req.params.produtoId);
  const { nome, preco } = req.body;
  const produtoIndex = produtos.findIndex(p => p.id === produtoId);
  if (produtoIndex !== -1) {
    produtos[produtoIndex] = { id: produtoId, nome, preco };
    res.status(200).json(produtos[produtoIndex]);
  } else {
    res.status(404).json({ msg: 'Produto não encontrado' });
  }
});

router.delete('/:produtoId', (req, res) => {
  const produtoId = parseInt(req.params.produtoId);
  const produtoIndex = produtos.findIndex(p => p.id === produtoId);
  if (produtoIndex !== -1) {
    produtos.splice(produtoIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ msg: 'Produto não encontrado' });
  }
});

module.exports = router;