class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    toString() {
        return `${this.nome}-${this.preco}`;
    }

}

module.exports = Produto;