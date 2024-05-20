# PRÁTICA 1


1. Criação de Repositório no GitHub.

a) Abra seu navegador e acesse o site do GitHub (https://github.com/).

b) Faça login na sua conta do GitHub. Se ainda não tiver uma conta, crie uma seguindo as instruções fornecidas.

c) Após o login, clique no ícone "+" no canto superior direito da página inicial do GitHub.

d) No menu suspenso, escolha a opção "New repository".

e) Na página de criação de repositório, preencha o nome do repositório (ex.: pratica01), escolha a visibilidade pública, selecione a opção "Add a README file" para inicializar o repositório com um arquivo README e selecione Node como template para adicionar o arquivo .gitignore. Role para baixo e clique no botão verde "Create repository".

f) Copie o link do repositório. Na parte superior da página, clique no botão verde "Code" e copie a URL fornecida.


2. Clonagem do Repositório Remoto.

a) Abra o Visual Studio Code (VSCode) no seu computador.

b) No canto superior esquerdo, clique em "File" (Arquivo) e selecione "Open Folder" (Abrir Pasta).

c) Escolha a pasta onde deseja clonar o repositório. Clique em "Select Folder" (Selecionar Pasta).

d) Abra o terminal no VSCode. Você pode fazer isso clicando em "View" (Visualizar) no menu superior e escolhendo "Terminal".

e) No terminal do VSCode, use o comando git para clonar a partir da URL do repositório remoto. ```git clone https://github.com/Sasaestudo/banckend.git```

f)  No canto superior esquerdo, clique em "File" (Arquivo) e selecione "Open Folder" (Abrir Pasta).  

g) Escolha a pasta do repositório clonado. Clique em "Select Folder" (Selecionar Pasta).

h) Abra outro terminal no VSCode. ```Ctrl + Shift + ‘```

i) Execute o comando git para configurar localmente seu nome de usuário no Git. ```git config --local user.name "Nome"```

j) Execute o comando git para configurar localmente seu e-mail de usuário no Git. ```git config --local user.email "Email"```

k) Execute o comando git config para verificar as configurações realizadas. ```git config```


3. Adição e Commit de Alterações Locais.

a) Crie um arquivo "package.json" executando comando npm init -y. ```npm init -y```

b) Execute o comando git para verificar o status do seu repositório local. ```git status```

c) Execute o comando git para adicionar o arquivo "package.json" ao stage. ```git add package.json```

d) Execute novamente o comando git para verificar o status do seu repositório local. ```git status```

e) Faça o commit das alterações com uma mensagem descritiva "Adição do arquivo: package.json". ```git commit -m “Inserção do arquivo package.json”```


4. Envio de Alterações Locais para Repositório Remoto.

a) Execute o comando git para verificar o status do seu repositório local. ```git status```

b) Execute o comando git para listar as configurações dos repositórios remotos. ```git remote -v```

c) Execute o comando git para atualizar o repositório local com as mudanças na branch main do repositório remoto. ```git pull origin main```

d) Execute o comando git para enviar as alterações na branch "main” para o repositório remoto. ```git push origin main```

e) Atualize a página do repositório remoto no navegador para verificar se as alterações foram enviadas. ```F5 na página do repositório no GitHub.```


5. Ramificação e Mesclagem Local.

a) Execute o comando git para criar uma nova branch chamada "develop". ```git switch develop```

b) Execute o comando git para mudar para a nova branch. ```git checkout develop```

c) Execute o comando npm install nodemon --save-dev para instalar o pacote "nodemon" como dependência de desenvolvimento. ```npm install nodemon --save-dev```. Cria a pasta "node_modules" e arquivo package-lock.json e adiciona dependências no "package.json".

d) Execute o comando git para verificar o status do seu repositório local. A pasta node_modules foi exibida como uma alteração no repositório local? ```git status```. Foi criada a pasta “node_modules” e o arquivo “package-lock.json”, e acrescentado dependências ao arquivo “package.json”.

e) Execute o comando git para adicionar as alterações ao stage. ```git add .```

f) Faça o commit das alterações na branch "develop" com uma mensagem descritiva "Adição de uma dependência no package.json". ```git commit -m "Inserção de uma dependência no package.json"```

g) Execute o comando git para enviar as alterações na branch "develop" para o repositório remoto. ```git push origin develop```

h) Atualize a página do repositório remoto no navegador para verificar se as alterações foram enviadas. ```F5 na página do repositório no GitHub.```

i) Execute o comando git para mudar para a branch "main". ```git checkout main```

j) Execute o comando git para mesclar a branch "develop" na branch "main". ```git merge develop```

k) Execute o comando git para enviar as alterações na branch "main" para o repositório remoto. ```git push origin main```

l) Atualize a página do repositório remoto no navegador para verificar se as alterações foram enviadas. ```F5 na página do repositório no GitHub.```


6. Resolução de Conflitos na Mesclagem Local.

a) Execute o comando git para mudar para a branch "develop". ```git checkout develop```

b) Faça uma alteração no arquivo "package.json" nos valores dos campos "name" e "version". ```"name": "develop"``` ```"version": "develop"```

c) Faça o commit das alterações na branch "develop" com uma mensagem descritiva "Ajuste do nome do projeto e versão no package.json". ```git commit -m "Ajuste do nome (develop) do projeto e versão (develop) no package.json"```

d) Execute o comando git para mudar para a branch "main". ```git checkout main```

e) Faça uma alteração no arquivo "package.json" nos valores dos campos "name" e "version" de modo que sejam diferentes da branch "develop". ```"name": "main" _  "version": "main"```

f) Faça o commit das alterações na branch "main" com uma mensagem descritiva "Ajuste do nome do projeto e versão no package.json". ```git commit -m "Ajuste do nome (main) do projeto e versão (main) no package.json"```

g) Execute o comando git para mesclar a branch "develop" na branch "main". ```git merge develop```

h) Abra o arquivo "package.json" no VSCode e localize as seções marcadas como "<<<<<<< HEAD", "=======" e ">>>>>>> develop".

i) Aceite as mudanças vindas da branch "develop" da clicando em "Accept incomming".

j) Execute o comando git para adicionar as alterações ao stage. ```git add .```

k) Faça o commit das alterações na branch "main" com uma mensagem descritiva "Correção dos conflitos no package.json". ```git commit -m "Correção dos conflitos no package.json"```

l) Execute o comando git para enviar as alterações na branch "main" para o repositório remoto. ```git push origin main```


7. Colaboração em Equipe.

a) Vá para a página inicial do seu repositório no GitHub.

b) Clique em "Settings" (Configurações) e, em seguida, em "Manage access" (Gerenciar acesso).

c) Convide um colega para colaborar, fornecendo o nome de usuário do GitHub ou o endereço de e-mail associado à conta dele. Conceda acesso de escrita ao seu repositório.

d) Colega: acesse seu e-mail para aceitar o convite enviado pelo GitHub.

e) Colega: no menu principal do VSCode, clique em "File" (Arquivo) e selecione "Open Folder" (Abrir Pasta).

f) Colega: : escolha a pasta onde o repositório do seu colega será clonado. Clique em "Select Folder" (Selecionar Pasta).

g) Colega: no terminal do VSCode, execute o comando git para clonar a partir da URL do repositório remoto do colega.

h) Colega: no menu principal do VSCode, clique em "File" (Arquivo) e selecione "Open Folder" (Abrir Pasta).

i) Colega: escolha a pasta do repositório clonado. Clique em "Select Folder" (Selecionar Pasta).

j) Colega: : no terminal do VSCode, execute o comando git para mudar para a branch "develop". ```git checkout develop```

k) Colega: crie um arquivo index.js contendo a instrução console.log("Olá").```index.js```

l) Colega: execute o comando git para verificar o status do seu repositório local. ```git status```

m) Colega: execute o comando git para adicionar as alterações ao stage. ```git add .```

n) Colega: faça o commit das alterações na branch "develop" com uma mensagem descritiva "inserção do arquivo index.js". ```git commit -m “Inserção do arquivo index.js"```

o) Colega: execute o comando git para enviar as alterações na branch "develop" para o repositório remoto do seu colega. ```git push origin develop```

p) Vá para a página inicial do repositório do seu no GitHub e selecione a aba "Pull Request". Clique no botão "New Pull Request".

q) Selecione a branch "main" como base e a branch "develop" como comparação. Clique no botão "Create pull resquest".

r) Informe um título "Aplicar alterações da develop na main" para o pull request. Clique no botão "Create pull resquest".

s) Colega: vá para a página inicial do seu repositório no GitHub e selecione a aba "Pull Request". Clique no título do pull request enviado.

t) Colega: se não houver conflitos no pull request, clique no botão "Merge pull request” e depois no botão "Confirm merge”.

u) Execute o comando git para atualizar seu repositório local com as mudanças na branch main do GitHub. ```git pull origin main```