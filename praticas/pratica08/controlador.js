// Importar a classe Contato e as funções CRUD do arquivo modelo.js
const { Contato, inserir, alterar, deletar, buscar } = require('./modelo');

// Função para adicionar um novo contato
async function adicionarContato(nome, email, telefone) {
    try {
        // Criar uma instância de Contato com os valores fornecidos
        const contato = new Contato(nome, email, telefone);
        
        // Chamar a função inserir do modelo para adicionar o contato
        return await inserir(contato);
    } catch (error) {
        throw new Error('Erro ao adicionar contato: ' + error.message);
    }
}

// Função para buscar um contato pelo nome
async function buscarContato(nome) {
    try {
        // Criar uma instância de Contato com o nome fornecido
        const contato = new Contato(nome);
        
        // Chamar a função buscar do modelo para buscar o contato
        return await buscar(contato);
    } catch (error) {
        throw new Error('Erro ao buscar contato: ' + error.message);
    }
}

// Função para atualizar um contato
async function atualizarContato(nome, email, telefone) {
    try {
        // Buscar o contato pelo nome
        const contatoExistente = await buscarContato(nome);
        
        // Se o contato existir, atualiza as propriedades e chama a função de alterar
        if (contatoExistente) {
            contatoExistente.nome = nome;
            contatoExistente.email = email;
            contatoExistente.telefone = telefone;
            return await alterar(contatoExistente);
        } else {
            throw new Error('Contato não encontrado.');
        }
    } catch (error) {
        throw new Error('Erro ao atualizar contato: ' + error.message);
    }
}

// Função para remover um contato
async function removerContato(nome) {
    try {
        // Buscar o contato pelo nome
        const contatoExistente = await buscarContato(nome);
        
        // Se o contato existir, chama a função de deletar
        if (contatoExistente) {
            return await deletar(contatoExistente);
        } else {
            throw new Error('Contato não encontrado.');
        }
    } catch (error) {
        throw new Error('Erro ao remover contato: ' + error.message);
    }
}

// Exportar todas as funções para serem utilizadas por outros módulos
module.exports = { adicionarContato, buscarContato, atualizarContato, removerContato };
