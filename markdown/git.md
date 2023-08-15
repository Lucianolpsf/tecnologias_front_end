# **INTRODUÇÃO  GIT** #
---
Olá esse projeto foi criado para aprendizado e ensino do uso basico de GIT.

### **O que é GIT?** ###
---

O Git é um repositório de controle de versão de arquivos, utilizado para controlar versões de códigos-fonte e desenvolvimento colaborativo. Podendo assim controlar todas as versões de um projeto, sendo possivel ate mesmo rastrear a data e autoria das alterações.

### **INSTALAÇÃO** ###
---

**Ubuntu:** 


Abra o seu terminal e use os comandos a seguir
```
sudo apt update
sudo apt install git
```

**Windows ou Mac:**

- [Download](https://git-scm.com/downloads)

Apos o download basta seguir o passo a passo da instalação que o assistente lhes informar.

### **TERMOS COMUNS DE GIT** ###
---
**Bash** => Janela de comandos git

**Branch** => Esse termo é usado para definir uma das linhas do tempo do projeto, uma ramificação do versionamento.

**Main** ou **Master** => Termos usados para nomear a Branch principal do protejo

**Commit** => Termo que se refere a consolidação das alteração de um projeto, atribuindo as alterações a uma branch

**Push** => Termo usado para migrar as alterações locais para o repositório remoto

### **COMANDOS BÁSICOS** ###
---
Para iniciar, clique com o botão direito do mouse na pasta\repositório do projeto deseja começar o versionamento com o git.

|Comando|descrição|
|-|-|
|`git init`|inicia o uso do git em um projeto, permindo assim o versionamento do repositorio|
|`git config --global user.name "usuario"`|configura um usuario de forma global para realizar os commits|
|`git config --global user.email "usuario@email.com"`|configura um email de usuario global para realizar os commits|
|`git config --global --unset-all user.name`|remove configuração de user.name|
|`git config --global --unset-all user.email`|remove configuração de user.email|
|`git config --list`| lista as configurações atuais do git|
|`git add arquivo.algumaCoisa`|prepara um arquivo para ser publicado|
|`git add .`|prepara todos os arquivos do repositorio para serem publicados|
|`git status`|mostra se existe algum(a) item\alguma coisa a  ser publicada, e em qual branch esta sendo trabalhada no momento|
|`git commit -m "titulo da publicação"`|atualiza as alterações do projeto, "commitando"|
|`git commit --amend`|utilizado para corrigir pequenos erros no mesmo commit.|
|`git checkout -b "nome-da-branch"`|cria uma nova branch que não altera a original|
|`git checkout nome-da-branch`|escolha em qual branch você ira trabalhar no momento|
|`git merge nome-da-branch`|mescla em uma só a branch informada no comando, com a branch ao qual o comando foi dado|
|`git remote add origin https://link-do-repositório`| conecta o projeto local com um repositorio remoto|
|`git push -u origin main`|publica as alterações do projeto no repositorio remoto conectado|
|`git pull`|Sincroniza rempositorio local atribuindo as ultimas modificação do repositorio remoto|
|`git log`|mostra historico de commits do projeto|
|`git log -p -2`|mostra historico de commits do projeto incluindo as diferenças de um para o outro, somente dos ultimos 2 commits|
|`git log --pretty=format:"%h %s" --graph`|historico de commits com graficos, hash abreviada e comentario|
|`clear`|limpa os comandos da bash|


[![voltar](../imagens/icons8-voltar-50.png)](../README.md)