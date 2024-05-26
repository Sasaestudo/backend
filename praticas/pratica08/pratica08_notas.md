# Prática 8

1. Configurar o VSCode para a realização da prática.

a) Abra o aplicativo VSCode. Certifique-se de estar na pasta onde deseja clonar o repositório (ex:. Documents).

b) Clone o seu repositório backend do GitHub, utilizando o terminal do VSCode. Caso o repositório já exista no seu computador, atualize-o com o repositório remoto.  

c) Abra a pasta do repositório clonado no VSCode.

d) Clique com o botão direito sobre a pasta praticas e abra um terminal integrado.

e) No terminal do VSCode, alterne para a ramificação develop. Se não existir, crie essa ramificação e faça um merge com a ramificação main.


2. Criar um projeto NodeJS.

a) Crie uma pasta chamada praticas, se não existir, e dentro dela crie uma pasta chamada pratica08.

b) No terminal digite o comando cd praticas/pratica08 para alterar a pasta.

c) Inicie um novo projeto NodeJS usando npm init -y para criar um arquivo package.json.

d) Instale o pacote readline-sync para facilitar a interação do usuário usando npm install readline-sync.

e) Instale o pacote mongodb para facilitar a conexão com o banco de dados usando npm install mongodb.

f) Abra o arquivo package.json e acrescente na seção scripts o comando "dev": "node index.js".


3. Criar uma conta no Altas MongoDb. Caso já tenha criado pular para o item 4.

a) Abra seu navegador e vá para o site do MongoDB Atlas (https://mongodb.com).

b) Clique no botão "Start Free" (Comece Grátis) ou "Try Free" (Experimente Grátis) para criar uma conta.

c) Preencha o formulário com seu nome, endereço de e-mail e senha. Clique em "Get Started Free". 

d) Após criar sua conta, você será direcionado para a página de criação de um novo cluster. Escolha a configuração gratuita (Free).

e) Selecione um provedor de nuvem (AWS, Google Cloud ou Azure) e escolha uma região próxima de onde seus aplicativos serão executados. Clique em "Create Deployment".

f) Na guia "Database Access", clique em "Add New Database User" (Adicionar Novo Usuário do Banco de Dados).

g) Preencha o nome de usuário e a senha para o novo usuário. Certifique-se de conceder os privilégios necessários para o usuário (atlas admin). Clique em "Add User" (Adicionar Usuário).

h) Na guia "Network Access", clique em "Add IP Address" (Adicionar Endereço IP). 

i) Você pode adicionar seu endereço IP atual ou permitir o acesso de qualquer endereço IP (não recomendado para produção). Clique em "Confirm" (Confirmar).

j) Na página inicial do MongoDB Atlas, clique em "Databases". Clique no botão "Connect" (Conectar) do cluster que você acabou de criar.

k) Selecione "MongoDb via VS Code". Copie a string de conexão que inclui seu nome de usuário, senha e o nome do banco de dados.


4. Criar um modelo Contato.

a) Crie um arquivo database.js dentro da pasta pratica08.

b) Abra o arquivo database.js e importe a classe MongoClient do pacote mongodb.

c) Declare uma constante url que deve receber a string de conexão gerada pelo MongoDb Atlas.

d) Declare uma variável client que deve receber uma instância de MongoClient passando a constante url no construtor.

e) Declare uma função assíncrona conectarDb sem parâmetros que deve chamar o método client.connect() e retornar client.db(‘agenda’).

f) Exporte a função conectarDb para ser utilizada por outros módulos. 

g) Crie um arquivo modelo.js dentro da pasta pratica08.

h) Abra o arquivo modelo.js e importe a função conectarDb.

i) Declare uma classe Contato.

j) Implemente um construtor para a classe Contato que deve inicializar as propriedades, nome, email e telefone com respectivos valores dos parâmetros passados no construtor. Atribua o valor null à propriedade id.

k) Implemente uma função assíncrona inserir com um parâmetro chamado contato.

l) Dentro da função inserir declare uma constante db inicializando com o retorno da função assíncrona conectarDb.

m) Dentro da função inserir declare uma constante collection com retorno da função db.collection(‘contatos’).

n) Dentro da função inserir chame o método assíncrono collection.insertOne passando o parâmetro o objeto { contato.nome, contato.email, contato.telefone }. Salve o retorno do método na variável result.

o) Dentro da função inserir atribua o valor de result.insertedId à propriedade contato.id.

p) Implemente uma função assíncrona alterar com um parâmetro chamado contato. 

q) Dentro da função alterar declare uma constante db inicializando com o retorno da função assíncrona conectarDb.

r) Dentro da função alterar declare uma constante collection com retorno da função db.collection(‘contatos’).

s) Dentro da função alterar chame o método collection.updateOne passando como parâmetros o objeto { _id: contato.id } e objeto { $set: { nome: contato.nome, email: contato.email, telefone: contato.telefone } }.

t) Implemente uma função assíncrona deletar com um parâmetro chamado contato. 

u) Dentro da função deletar declare uma constante db inicializando com o retorno da função assíncrona conectarDb.

v) Dentro da função deletar declare uma constante collection com retorno da função db.collection(‘contatos’).

w) Dentro da função deletar chame a método collection.deleteOne passando como parâmetro o objeto { nome: contato.nome }.

x) Implemente uma função assíncrona buscar com um parâmetro chamado contato.

y) Dentro da função buscar declare uma constante db inicializando com o retorno da função assíncrona conectarDb.

z) Dentro da função buscar declare uma constante collection com retorno da função db.collection(‘contatos’).

aa) Dentro da função buscar chame o método collection.findOne passando como parâmetro o objeto { nome: contato.nome }. Salve o retorno do método na variável result.

ab) Dentro da função buscar atualize as propriedades de contato com o valor de cada propriedade de result.

ac) Exporte a classe Contato e as funções inserir, alterar, deletar e buscar para serem utilizadas por outros módulos. 


5. Criar um controlador para operações CRUD.

a) Crie um arquivo controlador.js dentro da pasta pratica08.

b) Abra o arquivo controlador.js e importe a classe Contato e as funções inserir, alterar, deletar e buscar do arquivo modelo.js

c) Declare a função adicionarContato() que deve receber os parâmetros nome, email e telefone.

d) Dentro da função crie uma instância de Contato na constante contato passando os valores dos parâmetros nome, email e telefone no construtor da classe.

e) Faça função adicionarContato() chamar a função inserir passando como parâmetro contato.

f) Declare a função buscarContato() que deve receber o parâmetro nome.

h) Dentro da função crie uma instância de Contato na constante contato passando o valor do parâmetro nome no construtor da classe.

i) Faça a função buscarContato() retornar o valor da função buscar().

k) Declare a função atualizarContato() que deve receber os parâmetros nome, email e telefone.

l) Faça a função atualizarContato() chamar a função buscarContato() passando o valor do parâmetro nome e guardar o retorno na constante contato. Se encontrar o contato, altere as propriedades de contato com os valores dos parâmetros.

m) Faça a função atualizarContato() chamar a função alterar passando o parâmetro contato.

n) Declare a função removerContato() que deve receber o parâmetro nome.

o) Faça a função removerContato() chamar a função buscarContato() passando o valor do parâmetro nome e guardar o retorno na constante contato. Se encontrar o contato, chame a função deletar com o parâmetro contato.

p) Exporte todas as funções para serem utilizadas por outros módulos. 


6. Criar um index para chamar o controlador.

a) Crie um arquivo index.js dentro da pasta pratica08.

b) Abra o arquivo index.js e importe o pacote readline-sync na constante readline.

c) Importe o arquivo controlador.js na constante controlador.

d) Declare uma função menu() sem parâmetro. Faça a função imprimir as opções: 1. Adicionar contato; 2 - Buscar contato; 3 - Atualizar contato; 4 - Remover contato; 5 - Sair.

e) Declare a função escolherOpcao() que deve receber o parâmetro opcao.

f) Faça a função escolherOpcao() testar o parâmetro opcao com os valores do menu.

g) Caso a opção seja 1, chame a função readline.question() para ler o nome, email e telefone do contato. Em seguida, chame a função adicionarContato() com os valores lidos.

h) Caso a opção seja 2, chame a função readline.question() para ler o nome do contato. Em seguida, chame a função buscarContato() com o valor lido. Imprima o nome, email e telefone.

i) Caso a opção seja 3, chame a função readline.question() para ler o nome, email e telefone do contato. Em seguida, chame a função atualizarContato() com os valores lidos.

j) Caso a opção seja 4, chame a função readline.question() para ler o nome do contato. Em seguida, chame a função removerContato() com o valor lido.

k) Caso a opção seja 5, chame a função process.exit() para encerrar a execução.

l) Declare a função main() e crie um laço infinito. 

m) Dentro do laço, chame a função readline.question() para ler a opção do menu. Em seguida, chame a função escolherOpcao() com o valor lido.

n) Faça a chamada a função main().

o) Execute o projeto através do comando npm run dev.


7. Subir as modificações no GitHub.

a) Adicionar todas as modificações realizadas no projeto no stage.

b) Crie um novo commit com as modificações adicionadas.

c) Enviar o commit para o branch develop do seu repositório no GitHub.