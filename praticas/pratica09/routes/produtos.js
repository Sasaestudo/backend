const express = require('express');
const controllerProdutos = require('../controllers/produtos');
const router = express.Router();

router.post('/', controllerProdutos.validar, controllerProdutos.criar);


router.get('/', controllerProdutos.listar);


router.get('/:id', controllerProdutos.buscar, controllerProdutos.obter);


router.put('/:id', controllerProdutos.buscar, controllerProdutos.validar, controllerProdutos.atualizar);


router.delete('/:id', controllerProdutos.buscar, controllerProdutos.remover);

module.exports = router;
