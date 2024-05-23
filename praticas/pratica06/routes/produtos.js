const express = require('express');
const router = express.Router();
const controllerProdutos = require('../controllers/controller_produto');

// Middleware de rota para responder ao método GET na URL /produtos
router.get('/produtos', controllerProdutos.listarTodos);

// Middleware de rota para responder ao método GET na URL /produtos/:produtoId
router.get('/produtos/:produtoId', controllerProdutos.buscarPeloId);

// Middleware de rota para responder ao método POST na URL /produtos
router.post('/produtos', controllerProdutos.criar);

// Middleware de rota para responder ao método PUT na URL /produtos/:produtoId
router.put('/produtos/:produtoId', controllerProdutos.atualizar);

// Middleware de rota para responder ao método DELETE na URL /produtos/:produtoId
router.delete('/produtos/:produtoId', controllerProdutos.remover);

module.exports = router;
