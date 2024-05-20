# Comandos básicos do GIT


1. Clonar um repositório


```shell
git clone <url_do_repositorio>
```


2. Configurar nome e e-mail


```shell
git config --local user.name "Nome"
```
```shell
git config --local user.email "E-mail"
```


3. Verificar status do git


```shell
git status
```


4. Adicionar ao versionamento


    4.1 Arquivo
     ```shell
     git add <nome_do_arquivo>
     ```
    4.2 Todas alterações
    ```shell
    git add .
    ```


5. Fazer commit das alterações


```shell
git commit -m "Descrição"
```


6. Atualizar o repositório local com as mudanças da branch específica do repositório remoto (GitHub)


```shell
git pull origin <nome_da_branch>
```


7. Enviar alterações para o GitHub


```shell
git push origin <nome_da_branch>
```


8. Cria nova branch e a torna a atual


```shell
git checkout -b <nome_da_nova_branch>
```


9. Muda de branch


```shell
git checkout -b <nome_da_nova_branch>
```
```shell
git checkout < nome_da_branch >
```


10.  Lista as branch's


```shell
git branch
```


11. Fazer merge(mesclar) com outra branch. Combina as alterações de uma branch com outra. Ele combina as alterações feitas em duas branches diferentes e cria um novo commit que incorpora essas alterações.


```shell
git merge branch_comparacao
```


12. Listar as configurações
   
    12.1 Todas configurações


      ```shell
      git config --list
      ```
    12.2 Configurações locais (repositório)
      ```shell
      git config --list --local
      ```
    12.3 Configurações globais (usuário)
      ```shell
      git config --global --list
      ```
    12.4 Configurações do sistema
      ```shell
      git config --system --list
      ```


13. Visualizar as URLs dos repositórios remotos que estão configurados no repositório Git local


```shell
git remote -v
```


### Instalar extensões para melhorar o desenvolvimento no   VS Code


```shell
vscode-icons
```
```shell
Prettier - Code formatter
```
```shell
Express Snippets
```
```shell
REST Client
```
```shell
Swagger Tools
```
```shell
GitLens
```
```shell
Git Graph
```