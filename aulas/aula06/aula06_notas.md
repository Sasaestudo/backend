# Comandos utilizados na aula06

## Dentro da pasta "aulas" crie uma estrutura básica de um aplicativo Express sem incluir um mecanismo de visualização e o nomeia como "aula06 por meio do comando: 

    - npx express-generator --no-view aula06

## Se der erro instale:
    - npm install express-generator
    - repita o npx express-generator --no-view aula06

## Entrar na pasta "aula06" e instalar todas as dependências listadas no package.json através do comando:

    - npm install

## Apagar a seguintes pasta:

    - "public"

## Deletar da pasta "routes" os arquivos:

    - index.js
    - users.js

## Executa o script start definido no package.json como "node index.js":

    - npm start
    
## Dentro da pasta "aula06" criar a pasta: 

    - "controllers"

## Dentros da pasta "routes" criar arquivo:

    - produtos.js 

## Inserir no arquivo app.js a lógica:

    const produtosRouter = require('./routes/produtos');
    app.use('/produtos', produtosRouter);

## Ir na pasta "controllers" e criar o arquivo:

    - controller_produto.js

## Para testar todas as rotas da sua API e verificar se as funções estão funcionando corretamente usar o:

    - Thunder Client

## Instalar a dependência "nodemon":

    - npm install --save-dev nodemon 

## Ir no package.json em "scripts" e acrescentar: 

    - "dev": "nodemon ./bin/www"

## Para iniciar o servidor com Nodemon:

    - npm run dev

## Instalação do Jest e Supertest como dependências de desenvolvimento do projeto Node.js: 

    - npm install --save-dev jest supertest

## Para aguarda os teste crie a pasta:

    - test

## Ir no package.json em "scripts" e acrescentar: 

    - "test": "jest --watchAll"

## Ir na pasta tests e criar arquivo:
  
    - "produtos.test.js"

## Para executar os testes com Jest:

    - npm run test



#### GET: recupera dados do servidor, onde lista todos os recursos ou um recurso específico.

    O método GET é usado para solicitar dados de um recurso específico no servidor.
    Quando você faz uma solicitação GET, você está pedindo ao servidor para enviar os dados associados a um determinado URI (Uniform Resource Identifier).
    Os parâmetros GET são incluídos na URL como uma string de consulta, após o caractere "?", e são usados principalmente para recuperar dados do servidor.
    As solicitações GET devem ser seguras e idempotentes, o que significa que elas não devem alterar o estado do servidor e fazer a mesma solicitação repetidamente deve retornar o mesmo resultado.
    Ex: imagine que você está navegando na internet e quer ver uma página. Você usa um navegador (cliente) para enviar um pedido GET para o servidor que hospeda essa página. O servidor então envia de volta a página solicitada para você ver. É como pedir um livro emprestado da biblioteca e apenas lê-lo, sem alterar nada.

#### POST: envia dados ao servidor para criar um novo recurso.

    O método POST é usado para enviar dados para serem processados por um recurso específico no servidor.
    É comumente usado para enviar dados de um formulário HTML para o servidor, mas também pode ser usado para enviar dados JSON ou XML.
    As solicitações POST geralmente resultam em uma mudança no estado do servidor, como a criação de um novo recurso ou a atualização de dados existentes.
    Ao contrário das solicitações GET, as solicitações POST não são idempotentes, o que significa que fazer a mesma solicitação repetidamente pode ter efeitos diferentes no servidor.
    Ex: agora, imagine que você quer enviar uma mensagem para um amigo. Você escreve a mensagem em um pedaço de papel (dados) e envia para o seu amigo (servidor) usando um mensageiro (cliente). Seu amigo recebe a mensagem e pode decidir o que fazer com ela, como lê-la, respondê-la ou descartá-la. É usado para enviar dados para o servidor, como enviar um formulário online.

#### PUT: envia dados ao servidor para "atualizar" um recurso existente.

    O método PUT é usado para atualizar um recurso específico no servidor com os dados fornecidos na solicitação.
    Ele substitui completamente o recurso existente com os dados fornecidos na solicitação.
    As solicitações PUT são idempotentes, o que significa que fazer a mesma solicitação repetidamente terá o mesmo efeito no servidor.
    Ex: suponha que você tem um quadro branco (recurso) e deseja atualizar o que está escrito nele. Você pega um marcador e escreve uma nova informação no quadro (dados), substituindo o que estava lá antes. PUT é como atualizar o conteúdo de um recurso existente no servidor. Você envia os dados atualizados para o servidor e ele os substitui no recurso correspondente.

#### DELETE: remove um recurso do servidor: 

    O método DELETE é usado para remover um recurso específico do servidor.
    Quando uma solicitação DELETE é feita para um recurso, esse recurso é removido do servidor.
    As solicitações DELETE também são idempotentes, o que significa que fazer a mesma solicitação repetidamente terá o mesmo efeito no servidor.
    Esses métodos HTTP são usados para permitir que aplicativos cliente interajam com servidores da web de maneira significativa, realizando operações como recuperar dados, enviar dados, atualizar recursos e excluir recursos.
    Ex: agora, imagine que você tem um brinquedo que não quer mais. Você joga fora esse brinquedo na lixeira. DELETE é como jogar fora um recurso no servidor. Você solicita ao servidor para remover um recurso específico e ele o exclui.