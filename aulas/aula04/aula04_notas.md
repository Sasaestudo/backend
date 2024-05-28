# Comandos utilizados na aula04


## Criar um novo arquivo chamado "package.json" no diretório atual

    npm init -y

## Instalar o pacote Express e suas dependências

    npm install express

## Instalar o Jest, Nodemon e Supertest como dependências de desenvolvimento do projeto "Node.js"

    npm install --save-dev jest nodemon supertest

 ## Abrir o arquivo "package.json" e adicionar os scripts "dev" e "start" com os seguintes dados

    "start": "node index.js"
    "dev": "nodemon index.js"

## Abrir o arquivo "package.json" e alterar o comando “test” para:

    "jest --watchAll"

## Iniciar o servidor com o Nodemon

    npm run dev

## Executar os testes com o Jest

    npm run test

## Interromper a execução dos testes pressionando no terminal

    "q"

## Executar o script "start" definido no "package.json" como "node index.js"

    npm start

### Rodar em terminais separados os comandos: "npm run dev" e "npm run test" 