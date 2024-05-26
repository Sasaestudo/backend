// Importar o pacote readline-sync para leitura do terminal
const readline = require('readline-sync');

// Importar o controlador com as operações CRUD dos contatos
const controlador = require('./controlador');

// Função para exibir o menu de opções
function menu() {
    console.log('1 - Adicionar contato');
    console.log('2 - Buscar contato');
    console.log('3 - Atualizar contato');
    console.log('4 - Remover contato');
    console.log('5 - Sair');
    console.log(); // Adicionando uma linha em branco para separar as opções do resultado
}

// Função para escolher e executar uma opção do menu
async function escolherOpcao(opcao) {
    switch (opcao) {
        case '1':
            const nomeAdicionar = readline.question('Nome: ');
            const emailAdicionar = readline.question('Email: ');
            const telefoneAdicionar = readline.question('Telefone: ');
            await controlador.adicionarContato(nomeAdicionar, emailAdicionar, telefoneAdicionar);
            console.log('Contato adicionado com sucesso!');
            break;
        case '2':
            const nomeBuscar = readline.question('Nome: ');
            const contatoBuscar = await controlador.buscarContato(nomeBuscar);
            if (contatoBuscar) {
                console.log(`Nome: ${contatoBuscar.nome}`);
                console.log(`Email: ${contatoBuscar.email}`);
                console.log(`Telefone: ${contatoBuscar.telefone}`);
            } else {
                console.log('Contato não encontrado.');
            }
            break;
        case '3':
            const nomeAtualizar = readline.question('Nome: ');
            const emailAtualizar = readline.question('Email: ');
            const telefoneAtualizar = readline.question('Telefone: ');
            await controlador.atualizarContato(nomeAtualizar, emailAtualizar, telefoneAtualizar);
            console.log('Contato atualizado com sucesso!');
            break;
        case '4':
            const nomeRemover = readline.question('Nome: ');
            await controlador.removerContato(nomeRemover);
            console.log('Contato removido com sucesso!');
            break;
        case '5':
            console.log('Saindo...');
            process.exit();
            break;
        default:
            console.log('Opção inválida, tente novamente.');
    }
    console.log(); // Adicionando uma linha em branco após a resposta
}

// Função principal
async function main() {
    while (true) {
        // Exibir o menu de opções
        menu();
        // Ler a opção do usuário
        const opcao = readline.question('Escolha uma opcao: ');
        // Executar a opção escolhida
        await escolherOpcao(opcao);
    }
}

// Chamar a função principal para iniciar o programa
main();
