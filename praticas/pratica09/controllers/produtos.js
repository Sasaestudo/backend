const mongoose = require('mongoose');
const Produto = require('../models/produtos');

async function criar(req, res) {
  const produto = await Produto.create(req.body);
  res.status(201).json(produto);
}

async function validar(req, res, next) {
  const produto = new Produto(req.body);
  try {
    await produto.validate();
    next();
  } catch (error) {
    res.status(422).json({ msg: 'Dados do produto inválidos' });
  }
}


async function listar(req, res) {
  const produtos = await Produto.find({});
  res.json(produtos);
}

async function obter(req, res) {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const produto = await Produto.findOne({ _id: id });
  res.json(produto);
}


async function buscar(req, res, next) {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const produto = await Produto.findOne({ _id: id });
  if (!produto) {
    res.status(404).json({ msg: 'Produto não encontrado' });
  } else {
    next();
  }
}

async function atualizar(req, res) {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const produto = await Produto.findOneAndUpdate({ _id: id }, req.body);
  res.json(produto);
}

async function remover(req, res) {
  const id = new mongoose.Types.ObjectId(req.params.id);
  await Produto.findOneAndDelete({ _id: id });
  res.status(204).end();
}

module.exports = { criar, validar, listar, obter, buscar, atualizar, remover };