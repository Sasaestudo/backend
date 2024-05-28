# Comandos utilizados na aula03


## Instar a biblioteca "json-server" 

    npm install json-server

## Criar o arquivo 

    db.json

## Executar o servidor JSON utilizando o "json-server" com o arquivo "db.json"

    npx json-server db.json

## Instalar a extensão para testar APIs chamada de

    Thunder Client

## Para criar uma nova requisição, clique no ícone do Thunder Client e selecione a opção

    New Request

## Colar a URL no navegador

    http://localhost:3000/produtos

## Testar no Thunder Client os métodos

    GET, POST, PUT e DELETE

## Testar o GET:

    - Ao colar a URL anterior no GET, o conteúdo da resposta será uma lista com todos os produtos lançados no arquivo db.json e fornece status "200 OK".
    - Para pesquisar o produto pelo seu id. Ex.: http://localhost:3000/produtos/1, fornece status "200 OK".
    - Para pesquisar um produto de id não existe. Ex: http://localhost:3000/produtos/99, fornece o status "404 Not Found".

## Testar o POST:

    - Na aba "Body", selecione JSON e adicione um novo produto:
        {
        "nome": " ",
        "preco": 0
        }
    - fornece status "201 Created"

## Testar o PUT:

    - Selecione um id do produto que deseja atualizar e na aba "Body", selecione JSON e insira a atualização. Ex: http://localhost:3000/produtos/1, < {"nome": "banana", "preco": 10} >, fornece a atualização com status "200 OK".

## Testar o DELET:

    - insira a url com id do produto que deseja deletar. Ex: http://localhost:3000/produtos/c230, fornece status  "200 OK".