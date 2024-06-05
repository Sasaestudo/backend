# Prática 9

1. Configurar o VSCode para a realização da prática.

a) Abra o aplicativo VSCode. Certifique-se de estar na pasta onde deseja clonar o repositório (ex:. Documents).

b) Clone o seu repositório backend do GitHub, utilizando o terminal do VSCode. Caso o repositório já exista no seu computador, atualize-o com o repositório remoto.  

c) Abra a pasta do repositório clonado no VSCode.

d) Clique com o botão direito sobre a pasta praticas e abra um terminal integrado.

e) No terminal do VSCode, alterne para a ramificação develop. Se não existir, crie essa ramificação e faça um merge com a ramificação main.


2. Criar um projeto Express para uma API REST.

a) Inicie um novo projeto Express usando o comando npx express-generator --no-view pratica09 no terminal do VSCode. Caso apresente erro, execute o comando npm install express-generator e tente novamente.

b) Acesse a pasta do projeto recém-criado digitando o comando cd pratica09 no terminal e instale as dependências do projeto executando o comando npm install.

c) Instale os pacotes mongoose e dotenv para integrar a api com o banco de dados usando o comando npm install mongoose dotenv.

d) Instale os pacotes swagger-ui-express e yaml para facilitar a documentação da api usando o comando npm install swagger-ui-express yaml.

e) Instale os pacotes nodemon, jest e supertest para facilitar o desenvolvimento da api usando o comando npm install --save-dev nodemon jest supertest.

f) Remova a pasta public e crie as pastas controllers, models e tests na pasta pratica09. Adicione também nessa pasta os arquivos .env e swagger.yaml.

g) Remova os arquivos index.js e users.js da pasta routes e adicione os arquivos apidocs.js e produtos.js. 

h) Adicione o arquivo produtos.test.js na pasta tests. Adicione também o arquivo produtos.js nas pastas controllers e models.

i) Abra o arquivo package.json no VS Code e insira os scripts “dev”: “nodemon -e yaml,js ./bin/www” e “test”: “jest --watchAll”. 

j) Abra o arquivo .env e acrescente a constante MONGODB_URL contendo a url de conexão ao banco de dados loja hospedado no MongoDB Altas.

k) Abra o arquivo swagger.yaml e crie a estrutura de um Swagger Document.
openapi: 3.0.0
info:
  title: API Loja Virtual
  version: 0.1
tags:
  - name: produtos
paths:
  /produtos:
  /produtos/{id}:
components:
  schemas:

l) Abra o arquivo apidocs.js da pasta routes e importe os pacotes express, swagger-ui-express, fs e yaml.

m) Crie uma instância de Router a partir da função express().

n) Crie uma instância de File a partir da função fs.readFileSync() que recebe como parâmetros o arquivo ./swagger.yaml e a codificação utf-8.

o) Crie uma instância de SwaggerDocument a partir da função YAML.parse() que recebe como parâmetro a instância de File.

p) Faça a instância de Router usar a função swaggerUI.serve na URL /.

q) Faça a instância de Router responder ao método GET na URL /, devendo chamar a função swaggerUI.setup() que recebe como parâmetro a instância do SwaggerDocument.

r) Exporte a instância de Router para outros módulos do projeto.

s) Abra o arquivo app.js e ajuste o arquivo removendo as linhas de código desnecessárias para o desenvolvimento da API (linhas 2, 6, 7, 15, 17 e 18).

t) Importe o pacote dotenv para carregar as configurações do arquivo .env e o pacote do mongoose para criar uma conexão com o banco de dados.

u) Chame o método mongoose.connect() passando a variável de ambiente MONGODB_URL.

v) Importe o middleware de rotas chamado routerApidocs do arquivo ./routes/apidocs.js.

w) Faça a instância da aplicação Express usar o middleware routerProdutos na URL /api-docs.

x) No terminal do VSCode inicie a execução do projeto usando o comando npm run dev.

y) Abra outro terminal do VSCode e inicie a execução de testes usando o comando npm run test. Verifique se não está passando no teste unitário.

z) Abra o navegador e acesse a URL http://localhost:3000/api-docs. Verifique se está exibindo a página de documentação da API.


3. Criar o endpoint POST /produtos para uma API REST.

a) Abra o arquivo produtos.test.js e importe o pacote do supertest e a instância da aplicação Express a partir do arquivo ../app.js.

b) Crie uma instância de requisição chamando a função supertest() contendo o parâmetro a instância da aplicação Express. Declare uma variável local id inicializando com null.

c) Crie um teste para verificar se uma chamada POST /produtos com um JSON { “nome”: “uva”, “preco”: 20.0 } retorna o status 201 e um conteúdo do tipo JSON contendo as propriedades nome e preco com os valores que foram inseridos (Dica: expect(response.body).toHaveProperty(‘nome’, ‘uva’)). Atribua à variável local id o valor de response.body._id.toString().

d) Abra o arquivo produtos.js da pasta routes e importe o pacote do Express.  Crie uma instância de Router a partir do construtor express.Router().

e) Faça a instância de Router responder ao método POST na URL /produtos chamando a função (req, res) => res.status(201).json({ nome: ‘uva’, preco: 20.0 }) para passar no teste unitário. Exporte a instância de Router para outros módulos do projeto. 

f) Abra o arquivo app.js e importe o middleware de rotas chamado routerProdutos do arquivo ./routes/produtos.js. Faça a instância da aplicação Express usar o middleware routerProdutos na URL /produtos.

g) Abra o arquivo produtos.js da pasta controllers e declare uma função assíncrona criar() contendo os parâmetros req e res. Faça a função executar res.status(201).json({ nome: ‘uva’, preco: 20.0 }).

h) Abra o arquivo produtos.js da pasta routes e importe o controlador controllerProdutos do arquivo ../controllers/produtos.js. Faça a instância de Router chamar a função controllerProdutos.criar() no método POST /produtos. Verifique no terminal do VSCode se o código está passando no teste unitário.

i) Abra o arquivo produtos da pasta models e importe o pacote mongoose. Crie um esquema produtoSchema a partir do construtor mongoose.Schema(). Declare no construtor os atributos nome, do tipo String, e preço, do tipo Number.

j) Exporte uma instância do modelo Mongoose chamado Produto, com o esquema produtoSchema, para outros módulos do projeto.

k) Abra o arquivo produtos da pasta controllers e importe um modelo Produto do arquivo ../models/produtos.js. Faça a função criar() chamar o método assíncrono Produto.create() com o parâmetro req.body salvando o resultado na constante produto. Altere a resposta da função para res.status(201).json(produto) e verifique se continua passando no teste unitário.

l) Abra o arquivo swagger.yaml e adicione o método post para a rota /produtos.

m) Adicione a tag produtos para o método post. Defina o corpo da requisição como um JSON do esquema Produto, e a resposta 201 contendo também um JSON do esquema Produto.

n) Dentro de schemas, crie o esquema Produto do tipo object, onde as propriedades são nome, do tipo string, e preco, do tipo number.

o) Recarregue a página da documentação da API no navegador e teste a chamada ao endpoint POST /produtos.

p) Abra o arquivo produtos.test.js e crie um teste para verificar se uma chamada POST /produtos com um JSON {} retorna o status 422 e um conteúdo do tipo JSON contendo a propriedade msg igual “Dados do produto inválidos”.

q) Abra o arquivo produtos.js da pasta controllers e declare uma função assíncrona validar() contendo os parâmetros req, res e next. Faça a função executar res.status(422).json({ msg: “Dados do produto inválidos” }). Exporte a função para outros módulos do projeto. 

r) Abra o arquivo produtos.js da pasta routes e faça a instância de Router chamar a função controllerProdutos.validar() antes da função controllerProdutos.criar() no método POST /produtos. Verifique no terminal do VSCode se o código está passando no teste unitário.

s) Abra o arquivo produtos.js da pasta controllers e faça a função validar() criar uma instância de Produto com o parâmetro req.body salvando na constante produto. 

t) Na função validar(), tente chamar o método assíncrono produto.validade() e a função next(). Caso lançe uma exceção trate-a executando a função res.status(422).json({ msg: “Dados do produto inválidos” }). Verifique no terminal do VSCode se o código está passando no teste unitário.

u) Abra o arquivo swagger.yaml e adicione a resposta 422 contendo também um JSON do esquema Mensagem no método post.

v) Recarregue a página da documentação da API no navegador e teste a chamada ao endpoint POST /produtos sem corpo.


4. Criar o endpoint GET / para uma API REST.

a) Abra o arquivo produtos.test.js e crie um teste para verificar se uma chamada GET /produtos retorna o status 200 com um conteúdo do tipo JSON contendo um array (Dica: expect(Array.isArray(response.body)).toBe(true)).

b) Abra o arquivo produtos.js da pasta routes e faça a instância de Router responder ao método GET na URL /produtos chamando a função (req, res) => res.json([]) para passar no teste unitário.

c) Abra o arquivo produtos.js da pasta controllers e declare uma função assíncrona listar() contendo os parâmetros req e res. Faça a função executar res.json([]).

d) Abra o arquivo produtos.js da pasta routes e faça a instância de Router chamar a função controllerProdutos.listar() no método GET /produtos. Verifique no terminal do VSCode se o código está passando no teste unitário.

e) Abra o arquivo produtos.js da pasta controllers e faça a função listar() chamar o método assíncrono Produto.find() com o parâmetro {} salvando o resultado na constante produtos. Altere a resposta da função para res.json(produtos) e verifique se continua passando no teste unitário.

f) Abra o arquivo swagger.yaml e adicione o método get para a rota /produtos.

g) Adicione a tag produtos para o método get. Defina a resposta 201 contendo um JSON do esquema ArrayOfProdutos.

h) Dentro de schemas, crie o esquema ArrayOfProdutos do tipo array, onde os itens são do esquema Produto.

i) Recarregue a página da documentação da API no navegador e teste a chamada ao endpoint GET /produtos.


5. Criar o endpoint GET /:id para uma API REST.

a) Abra o arquivo produtos.test.js e crie um teste para verificar se uma chamada GET `/produtos/${id}` retorna o status 200 com um conteúdo do tipo JSON contendo as propriedades nome igual a “uva”, e preco igual a 20.0.

b) Abra o arquivo produtos.js da pasta routes e faça a instância de Router responder ao método GET na URL /produtos/:id chamando a função (req, res) => res.json({nome: ‘uva’, preco: 20.0}) para passar no teste unitário.

c) Abra o arquivo produtos.js da pasta controllers e declare uma função assíncrona obter() contendo os parâmetros req e res. Faça a função executar res.json({nome: ‘uva’, preco: 20.0}).

d) Abra o arquivo produtos.js da pasta routes e faça a instância de Router chamar a função controllerProdutos.obter() no método GET /produtos/:id. Verifique no terminal do VSCode se o código está passando no teste unitário.

e) Abra o arquivo produtos.js da pasta controllers e importe o pacote mongoose.

f) Faça a função obter() criar uma instância de mongoose.Types.ObjectId() com o parâmetro req.params.id salvando em uma constante id. 

g) Na função obter(), chame o método assíncrono Produto.findOne() com o parâmetro { _id: id } salvando o resultado na constante produto. Altere a resposta da função para res.json(produto) e verifique se continua passando no teste unitário.

h) Abra o arquivo swagger.yaml e adicione o método get para a rota /produtos/{id}.

i) Adicione a tag produtos para o método get. Defina a resposta 200 contendo um JSON do esquema ArrayOfProdutos.

j) Dentro de schemas, crie o esquema ArrayOfProdutos do tipo array, onde os itens são do esquema Produto.

k) Recarregue a página da documentação da API no navegador e teste a chamada ao endpoint GET /produtos/{id}.

l) Abra o arquivo produtos.test.js e crie um teste para verificar se uma chamada GET /produtos/000000000000000000000001 retorna o status 404 e um conteúdo do tipo JSON contendo a propriedade msg igual “Produto não encontrado”.

m) Abra o arquivo produtos.js da pasta controllers e declare uma função assíncrona buscar() contendo os parâmetros req, res e next. Faça a função executar res.status(404).json({ msg: “Produto não encontrado” }). Exporte a função para outros módulos do projeto. 

n) Abra o arquivo produtos.js da pasta routes e faça a instância de Router chamar a função controllerProdutos.buscar() antes da função controllerProdutos.obter() no método GET /produtos/:id. Verifique no terminal do VSCode se o código está passando no teste unitário.

o) Abra o arquivo produtos.js da pasta controllers e faça a função buscar() criar uma instância de mongoose.Types.ObjectId() com o parâmetro req.params.id salvando em uma constante id.

p) Na função obter(), chame o método assíncrono Produto.findOne() com o parâmetro { _id: id } salvando o resultado na constante produto. Se o produto for null, faça a função executar res.status(404).json({ msg: “Produto não encontrado” }). Verifique no terminal do VSCode se o código está passando no teste unitário.

q) Abra o arquivo swagger.yaml e adicione a resposta 404 contendo um JSON do esquema Mensagem no método get.

r) Dentro de schemas, crie o esquema Mensagem do tipo object, onde a propriedade msg é do tipo string.

s) Recarregue a página da documentação da API no navegador e teste a chamada ao endpoint GET /produtos/{id} com id 000000000000000000000001.


6. Criar o endpoint PUT /:id para uma API REST.

a) Abra o arquivo produtos.test.js e crie um teste para verificar se uma chamada PUT `/produtos/${id}` com um JSON { “nome”: “uva globo”, “preco”: 25.0 } retorna o status 200 com um conteúdo do tipo JSON contendo as propriedades nome e preco com os valores que foram atualizados.

b) Abra o arquivo produtos.js da pasta routes e faça a instância de Router responder ao método PUT na URL /produtos/:id chamando a função (req, res) => res.json({nome: ‘uva globo’, preco: 25.0}) para passar no teste unitário.

c) Abra o arquivo produtos.js da pasta controllers e declare uma função assíncrona atualizar() contendo os parâmetros req e res. Faça a função executar res.json({nome: ‘uva globo’, preco: 25.0}).

d) Abra o arquivo produtos.js da pasta routes e faça a instância de Router chamar a função controllerProdutos.atualizar() no método PUT /produtos/:id. Verifique no terminal do VSCode se o código está passando no teste unitário.

e) Abra o arquivo produtos.js da pasta controllers e faça a função atualizar() criar uma instância de mongoose.Types.ObjectId() com o parâmetro req.params.id salvando em uma constante id. 

f) Ainda na função remover, chame o método assíncrono Produto.findOneAndUpdate() com os parâmetros { _id: id } e req.body. Verifique se continua passando no teste unitário.

g) Abra o arquivo swagger.yaml e adicione o método put para a rota /produtos/{id}.

h) Adicione a tag produtos para o método put. Defina o corpo da requisição como um JSON do esquema Produto, e a resposta 200 contendo também um JSON do esquema Produto.

i) Recarregue a página da documentação da API no navegador e teste a chamada ao endpoint PUT /produtos/{id}.

j) Abra o arquivo produtos.test.js e crie um teste para verificar se uma chamada PUT `/produtos/${id}` com um JSON {} retorna o status 422 e um conteúdo do tipo JSON contendo a propriedade msg igual “Dados do produto inválidos”.

k) Abra o arquivo produtos.js da pasta routes e faça a instância de Router chamar a função controllerProdutos.validar() antes da função controllerProdutos.atualizar() no método PUT /produtos/:id. Verifique no terminal do VSCode se o código está passando no teste unitário.

l) Abra o arquivo produtos.test.js e crie um teste para verificar se uma chamada PUT /produtos/000000000000000000000001 retorna o status 404 e um conteúdo do tipo JSON contendo a propriedade msg igual “Produto não encontrado”.

m) Abra o arquivo produtos.js da pasta routes e faça a instância de Router chamar a função controllerProdutos.buscar() antes da função controllerProdutos.validar() no método PUT /produtos/:id. Verifique no terminal do VSCode se o código está passando no teste unitário.

o) Abra o arquivo swagger.yaml e adicione as respostas 404 contendo um JSON do esquema Mensagem e 422 também contendo um JSON do esquema Mensagem no método put.

p) Recarregue a página da documentação da API no navegador e teste a chamada ao endpoint PUT /produtos/{id} sem corpo, e depois com id 000000000000000000000001.


7. Criar o endpoint DELETE /:id para uma API REST.

a) Abra o arquivo produtos.test.js e crie um teste para verificar se uma chamada DELETE `/produtos/${id}` retorna o status 204 sem conteúdo.

b) Abra o arquivo produtos.js da pasta routes e faça a instância de Router responder ao método DELETE na URL /produtos/:id chamando a função (req, res) => res.status(204).end() para passar no teste unitário.

c) Abra o arquivo produtos.js da pasta controllers e declare uma função assíncrona remover() contendo os parâmetros req e res. Faça a função executar res.status(204).end().

d) Abra o arquivo produtos.js da pasta routes e faça a instância de Router chamar a função controllerProdutos.remover() no método DELETE /produtos/:id. Verifique no terminal do VSCode se o código está passando no teste unitário.

e) Abra o arquivo produtos.js da pasta controllers e faça a função remover() criar uma instância de mongoose.Types.ObjectId() com o parâmetro req.params.id salvando em uma constante id. 

f) Ainda na função remover, chame o método assíncrono Produto.findOneAndDelete() com o parâmetro { _id: id }. Verifique se continua passando no teste unitário.

g) Abra o arquivo swagger.yaml e adicione o método delete para a rota /produtos/{id}.

h) Adicione a tag produtos para o método delete. Defina a resposta 204.

i) Recarregue a página da documentação da API no navegador e teste a chamada ao endpoint GET /produtos/{id}.

j) Abra o arquivo produtos.test.js e crie um teste para verificar se uma chamada DELETE /produtos/000000000000000000000001 retorna o status 404 e um conteúdo do tipo JSON contendo a propriedade msg igual “Produto não encontrado”.

k) Abra o arquivo produtos.js da pasta routes e faça a instância de Router chamar a função controllerProdutos.buscar() antes da função controllerProdutos.remover() no método DELETE /produtos/:id. Verifique no terminal do VSCode se o código está passando no teste unitário.

l) Abra o arquivo swagger.yaml e adicione as respostas 404 contendo um JSON do esquema Mensagem no método delete.

m) Recarregue a página da documentação da API no navegador e teste a chamada ao endpoint DELETE /produtos/{id} com id 000000000000000000000001.


8. Subir as modificações no GitHub.

a) Adicionar todas as modificações realizadas no projeto no stage.

b) Crie um novo commit com as modificações adicionadas.

c) Enviar o commit para o branch develop do seu repositório no GitHub.


## Deve conter o arquivo ".env" com a constante MONGODB_URL contendo a url de conexão ao banco de dados loja hospedado no MongoDB Altas.

- MONGODB_URL=mongodb+srv://usuario:senha@aula08.lexywrj.mongodb.net/loja
- PORT = 3000