const readline = require('readline-sync');       

const Produto = require('./modelo')

const produtos = [];

function listar() {
    produtos.forEach(produto => 
        console.log(produto.toString()),
        console.log("--------------------"))
}

function criar() {
    const nome = readline.question("Entre com o nome do produto: ")
    const preco = readline.question("Entre com o preco do produto: ")
    const novo = new Produto(nome, preco)
    produtos.push(novo);
}

function buscar() {
    const nome = readline.question("Entre com o nome do produto: ");
    const buscou = produtos.find(produto => produto.nome === nome);
    if(buscou) {
        console.log(buscou.toString())
    }else{
        console.log("Produto não localizado")
    }
}

function atualizar() {
    const nome = readline.question("Entre com o nome do produto: ");
    const buscou = produtos.find(produto => produto.nome === nome);
    if(buscou) {
        const preco = readline.question("Entre com o novo preco: ")
        buscou.preco = preco;
    } else {
        console.log("Produto não localizado")
    }
}

function remover() {
    const nome = readline.question("Entre com o nome do produto: ");
    const posicao =
        produtos.findIndex(produto => produto.nome === nome);
    if(posicao>=0) {
        produtos.splice(posicao, 1);
    } else {
        console.log(`'${nome}' nao encontrado!`)
    }
}

module.exports = { criar, listar, buscar, atualizar, remover };