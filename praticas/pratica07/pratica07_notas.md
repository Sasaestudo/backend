# Prática 7

1. Configurar o VSCode para a realização da prática.

a) Abra o aplicativo VSCode. Certifique-se de estar na pasta onde deseja clonar o repositório (ex:. Documents).

b) Clone o seu repositório backend do GitHub, utilizando o terminal do VSCode. Caso o repositório já exista no seu computador, atualize-o com o repositório remoto.  

c) Abra a pasta do repositório clonado no VSCode.

d) Clique com o botão direito sobre a pasta praticas e abra um terminal integrado.

e) No terminal do VSCode, alterne para a ramificação develop. Se não existir, crie essa ramificação e faça um merge com a ramificação main.


2. Criar um projeto Express para uma API REST.

a) Inicie um novo projeto Express usando o comando npx express-generator --no-view pratica07 no terminal do VSCode. Caso apresente erro, execute o comando npm install express-generator, e em seguida, tente novamente.

b) Acesse a pasta do projeto recém-criado digitando o comando cd pratica07 no terminal.

c) Instale as dependências do projeto executando o comando npm install.

d) Instale o pacote nodemon para carregar o projeto no modo desenvolvimento usando o comando npm install --save-dev nodemon

e) Adicione o script “dev”: "nodemon -e yaml,js ./bin/www” no arquivo package.json.

f) Instale os pacotes swagger-ui-express e yaml para facilitar a documentação da api usando o comando npm install swagger-ui-express yaml.

g) Remova a pasta public do projeto e os arquivos da pasta routes.

h) Abra o arquivo app.js e ajuste o arquivo removendo as linhas de código desnecessárias para o desenvolvimento da API.

i) Adicione o arquivo swagger.yaml na pasta pratica07.

j) Adicione o arquivo apidocs.js na pasta routes.

k) Abra o arquivo apidocs.js e importe o pacote do Express, o pacote do Swagger UI, o pacote do FileSystem e o pacote do YAML.

l) Crie uma instância de Router a partir da função express().

m) Crie uma instância de File a partir da função fs.readFileSync() que recebe como parâmetros o arquivo swagger.yaml e a codificação utf8.

n) Crie uma instância de SwaggerDocument a partir da função YAML.parse() que recebe como parâmetro a instância de File.

o) Declare um middleware de rota para a instância de Router usar a função swaggerUI.server na URL /.

p) Declare um middleware de rota para a instância de Router responder ao método GET na URL /, devendo chamar a função swaggerUI.setup() que recebe como parâmetro a instância do SwaggerDocument.

q) Exporte a instância de Router para outros módulos do projeto. 

r) Abra o arquivo app.js e importe a instância de Router do arquivo ./routes/apidocs.js.

s) Declare um middleware de rota para a instância da aplicação Express usar a instância de Router na URL /api-docs.

t) No terminal do VSCode inicie a execução da API usando o comando npm run dev.

u) Abra o navegador e acesse a URL http://localhost:3000/api-docs.


3. Criar um documento Swagger para uma API REST.

a) Abra o arquivo swagger.yaml e crie a estrutura de um Swagger Document.
openapi:
info:
servers:
tags:
paths:
components:

b) Atribua a versão 3.0.0 no elemento openapi.

c) Dentro de info adicione title, description e version. Atribua valores para cada elemento.

d) Adicione um servidor contendo url e description. Atribua os valores ‘http://localhost:3000’ e ‘Ambiente de desenvolvimento’ para esses elementos.

e) Adicione uma tag contendo name igual a produtos.

f) Adicione as rotas /produtos e /produtos/{produtoId}. 

g) Dentro da rota /produtos adicione os métodos get e post.

h) Dentro do método get adicione a tag produtos e a resposta 200.

i) Dentro da resposta 200 adicione description e content. Atribua o valor ‘Uma lista de produtos’ para description.

j) Dentro de content adicione o tipo application/json.

k) Dentro de application/json adicione um esquema que deve referenciar o componente ArrayOfProdutos.

l) Dentro do método post adicione a tag produtos, um corpo da requisição e as respostas 201 e 422.

m) Dentro do corpo da requisição adicione description, required e content. Atribua o valor ‘Um JSON com dados do novo produto’ para description e true para required.

n) Dentro de content adicione o tipo application/json.

o) Dentro de application/json adicione um esquema que deve referenciar o componente Produto.

p) Dentro da resposta 201 adicione description e content. Atribua o valor ‘Produto criado com sucesso’ para description.

q) Dentro de content adicione o tipo application/json.

r) Dentro de application/json adicione um esquema que deve referenciar o componente Produto.

s) Dentro da resposta 422 adicione description. Atribua o valor ‘Nome e preço são obrigatórios’ para description.

t) Dentro da rota /produtos/{produtoId} adicione os métodos get, put e delete.

u) Dentro do método get adicione a tag produtos, parameters e as respostas 200 e 404.

v) Dentro de parameters adicione in do tipo path, name igual a produtoId, o esquema do tipo inteiro, required igual a true e description sendo ‘Id do produto a ser buscado’.

w) Dentro da resposta 200 adicione description e content. Atribua o valor ‘Um JSON com os dados do produto encontrado’ para description.

x) Dentro de content adicione o tipo application/json.

y) Dentro de application/json adicione um esquema que deve referenciar o componente Produto.

z) Dentro da resposta 404 adicione description. Atribua o valor ‘Produto não encontrado’ para description.

aa) Dentro do método put adicione a tag produtos, parameters, corpo da requisição  e as respostas 200, 404 e 422.

ab) Dentro de parameters adicione in do tipo path, name igual a produtoId, o esquema do tipo inteiro, required igual a true e description sendo ‘Id do produto a ser atualizado’.

ac) Dentro do corpo da requisição adicione description, required e content. Atribua o valor ‘Um JSON com dados do novo produto’ para description e true para required.

ad) Dentro de content adicione o tipo application/json.

ae) Dentro de application/json adicione um esquema que deve referenciar o componente Produto.

af) Dentro da resposta 200 adicione description e content. Atribua o valor ‘Produto atualizado com sucesso’ para description.

ag) Dentro de content adicione o tipo application/json.

ah) Dentro de application/json adicione um esquema que deve referenciar o componente Produto.

ai) Dentro da resposta 404 adicione description. Atribua o valor ‘Produto não encontrado’ para description.

aj) Dentro da resposta 422 adicione description. Atribua o valor ‘Nome e preço são obrigatórios’ para description.

al) Dentro do método dele adicione a tag produtos, parameters e as respostas 204 e 404.

am) Dentro de parameters adicione in do tipo path, name igual a produtoId, o esquema do tipo inteiro, required igual a true e description sendo ‘Id do produto a ser removido’.

an) Dentro da resposta 204 adicione description. Atribua o valor ‘Produto removido com sucesso’ para description.

ao) Dentro da resposta 404 adicione description. Atribua o valor ‘Produto não encontrado’ para description.

ap) Dentro de components adicione schemas.

aq) Dentro de schemas adicione ArrayOfProdutos e Produto.

ar) Dentro de ArrayOfProdutos adicione type array e items referenciando o componente Produto.

as) Dentro de Produto adicione o type object e properties id, nome e preco. Adicione, respectivamente, o tipo integer, string e number para cada propriedade.


4. Subir as modificações no GitHub.

a) Adicionar todas as modificações realizadas no projeto no stage.

b) Crie um novo commit com as modificações adicionadas.

c) Enviar o commit para o branch develop do seu repositório no GitHub.