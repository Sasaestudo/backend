# Comandos utilizados na aula07

## Dentro da pasta "aulas" crie uma estrutura básica de um aplicativo Express sem incluir um mecanismo de visualização e o nomeia como "aula07 por meio do comando: 

    - npx express-generator --no-view aula07

## Entrar na pasta "aula07" e instalar todas as dependências listadas no package.json através do comando:

    - npm install

## Instalar os pacotes swagger-ui-express, yaml e serve que ajudam na documentação e visualização de API:

    - npm install swagger-ui-express yaml

## Instalar a dependência "nodemon":

    - npm install --save-dev nodemon 

## Para iniciar o servidor com Nodemon:

    - npm run dev

## Apagar a seguintes pasta:

    - "public"

## Deletar da pasta "routes" os arquivos:

    - index.js
    - users.js

## Ir na pasta "routes" e criar arquivo:
  
    - "apidocs.js"


## Para descrever detalhadamente os endpoints, parâmetros, respostas e outras informações relacionadas à API é necessáio dentro da pasta "aula07" criar o arquivo:  
 
    - swagger.yaml
   
## No navegador ou por meio de uma ferramenta como o Swagger UI, você poderá visualizar e interagir com a documentação detalhada da sua API, por meio do endpoint 

    - http://localhost:3000/api-docs