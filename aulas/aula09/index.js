require('dotenv').config();
const mongoose = require('mongoose');
const Produto = require("./modelo");

const url = process.env.MONGODB_URL;

async function main() { 
  try {
    await mongoose.connect(url);
    console.log("Conectado ao MongoDB");
  } catch (err) {
    console.log("Deu ruim!", err.message);
  }

  // Inserir 1 produto
  const produto = new Produto({
    nome: "uva",
    preco: 12,
    quantidade: 5
  });

  try {
    await produto.save();
    console.log(produto);
  } catch (err) {
    for (let key in err.errors) {
      console.log(err.errors[key].message);
    }
  }

  /*
  // Inserir 1 produto
  const produto = new Produto({
    nome: "banana",
    preco: 12,
    quantidade: 5
  });
  await produto.save();
  console.log(produto);

  const produto = await Produto.create({
    nome: "uva",
    preco: 32.5,
    quantidade: 10
  });
  console.log(produto);

  // Inserir N produtos
  const produtos = await Produto.insertMany([
    { nome: "maça", preco: 20.7, quantidade: 8 },
    { nome: "pera", preco: 12.5, quantidade: 18 },
    { nome: "laranja", preco: 25.6, quantidade: 28 },
  ]);
  console.log(produtos);

  // Consultar 1 produto
  const produto = await Produto.findOne({ nome: "banana" });
  console.log(produto);

  // Consultar N produtos
  const produtos = await Produto.find({ nome: "banana" });
  console.log(produtos);

  // Atualizar 1 produto
  const produto = await Produto.findOneAndUpdate(
    { nome: "banana" },
    { nome: "banana nanica", preco: 15.0, quantidade: 20 }
  );
  console.log(produto);

  const result = await Produto.updateOne(
    { nome: "uva" },
    { nome: "uva globo", preco: 19.0, quantidade: 11 }
  );
  console.log(result);

  // Remover 1 produto
  const produto = await Produto.findOneAndDelete({ nome: "uva" });
  console.log(produto);

  // Remover N produtos
  const produto = await Produto.deleteMany({ nome: "uva" });
  console.log(produto);
  */
  
  await mongoose.disconnect();
}

main();
