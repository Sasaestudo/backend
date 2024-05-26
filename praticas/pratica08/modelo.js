// Importar a função conectarDb
const conectarDb = require('./database');

// Declaração da classe Contato
class Contato {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.id = null; // Atribui null ao ID por padrão
    }
}

// Função assíncrona para inserir um contato
async function inserir(contato) {
    try {
        // Conexão com o banco de dados
        const db = await conectarDb();
        
        // Acesso à coleção 'contatos'
        const collection = db.collection('contatos');
        
        // Inserção do contato na coleção
        const result = await collection.insertOne({
            nome: contato.nome,
            email: contato.email,
            telefone: contato.telefone
        });
        
        // Atribuição do ID gerado ao contato
        contato.id = result.insertedId;

        return contato; // Retorna o contato inserido
    } catch (error) {
        throw new Error('Erro ao inserir contato: ' + error.message);
    }
}

// Função assíncrona para alterar um contato
async function alterar(contato) {
    try {
        // Conexão com o banco de dados
        const db = await conectarDb();
        
        // Acesso à coleção 'contatos'
        const collection = db.collection('contatos');
        
        // Atualização do contato na coleção
        await collection.updateOne(
            { _id: contato.id },
            { $set: { 
                nome: contato.nome,
                email: contato.email,
                telefone: contato.telefone 
            }}
        );

        return true; // Retorna verdadeiro se a operação foi bem-sucedida
    } catch (error) {
        throw new Error('Erro ao alterar contato: ' + error.message);
    }
}

// Função assíncrona para deletar um contato
async function deletar(contato) {
    try {
        // Conexão com o banco de dados
        const db = await conectarDb();
        
        // Acesso à coleção 'contatos'
        const collection = db.collection('contatos');
        
        // Remoção do contato na coleção
        await collection.deleteOne({ nome: contato.nome });

        return true; // Retorna verdadeiro se a operação foi bem-sucedida
    } catch (error) {
        throw new Error('Erro ao deletar contato: ' + error.message);
    }
}

// Função assíncrona para buscar um contato
async function buscar(contato) {
    try {
        // Conexão com o banco de dados
        const db = await conectarDb();
        
        // Acesso à coleção 'contatos'
        const collection = db.collection('contatos');
        
        // Busca do contato na coleção
        const result = await collection.findOne({ nome: contato.nome });

        // Se o contato existir, atualiza as propriedades do objeto contato
        if (result) {
            contato.nome = result.nome;
            contato.email = result.email;
            contato.telefone = result.telefone;
        }

        return result; // Retorna o resultado da busca
    } catch (error) {
        throw new Error('Erro ao buscar contato: ' + error.message);
    }
}

// Exportar a classe Contato e as funções inserir, alterar, deletar e buscar
module.exports = { Contato, inserir, alterar, deletar, buscar };
