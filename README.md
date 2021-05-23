# bn

Projeto de demonstração de uso do framework serverless, utilizando Node(typescript) para viabilizar ações em uma lista de atividades por usuário. Os dados são salvos através da estrutura de hash do Redis.

<br/><br/><br/>

---

## Descrição da solução

A solução foi criada tendo como base este [template](https://github.com/esteveslima/serverless-template) para desenvolvimento.

([Collection do Postman](resources/postman/bn.postman_collection.json) disponível)

Foram criadas 5 funções Lambda para o CRUD: 

 - **createItem**: cria uma atividade para o usuário
    - (**POST**) https://{{HOST}}/{{STAGE}}/item/:userName
    - entrada: 
      - body: json com dados da atividade
      - pathParameters:
        - userName: nome do usuário
    - saída: mensagem de confirmação ou mensagem de erro
 - **getItem**: busca uma do atividade do usuário
    - (**GET**) https://{{HOST}}/{{STAGE}}/item/:userName/:itemName
    - entrada: 
      - pathParameters:
        - userName: nome do usuário
        - itemName: nome da atividade
    - saída: json com dados da atividade ou erro
 - **updateItem**: atualiza uma do atividade do usuário
    - (**PUT**) https://{{HOST}}/{{STAGE}}/item/:userName/:itemName
    - entrada: 
      - body: json com dados da atividade(exceto nome)
      - pathParameters:
        - userName: nome do usuário
        - itemName: nome da atividade
    - saída: mensagem de confirmação ou mensagem de erro
 - **deleteItem**: remove uma do atividade do usuário
    - (**DELETE**) https://{{HOST}}/{{STAGE}}/item/:userName/:itemName
    - entrada: 
      - pathParameters:
        - userName: nome do usuário
        - itemName: nome da atividade
    - saída: json com dados da atividade ou erro
  - **listItems**: busca a lista de atividades do usuário
    - (**GET**) https://{{HOST}}/{{STAGE}}/items/:userName
    - entrada: 
      - pathParameters:
        - userName: nome do usuário        
    - saída: lista em formato json com todos os dados de atividades ou erro
  
<br/><br/><br/>

---

## Testando a solução

O desenvolvimento foi realizado em ambiente linux, podendo haver conflitos em outros sistemas operacionais

<br/>

### Passos iniciais

 - <s>Devido ao projeto ser apenas para testes locais, não é necessário seguir estes [passos](resources/config/aws/README.md) para configuração de credenciais da AWS.</s>
  
 - Instale todas as dependencias na pasta raíz do projeto: `$ npm install`
    - Obs: 
      - 1. utilizando serverless local do projeto
      - 2. em caso de erro de dependências com o npm, rode o comando `npm install` novamente também dentro da pasta do serviço

<br/>

### Ambiente de desenvolvimento com Docker e plugins para testes locais

Na da pasta raiz do projeto, inicie o container de desenvolvimento e entre em seu ambiente shell:

    $ make up   ou   $ npm run docker:up -> para iniciar os containeres
    $ make sh   ou   $ npm run docker:sh -> para entrar no ambiente shell

Navegue até a pasta do serviço do projeto:

    $ cd packages/services/users-activities 

Para realizar testes locais utilizando plugins do Serverless Framework e o container local do Redis:

    $ npm run offline   ou   $ npm run sls offline

Com isso se iniciará um servidor local para testes. [Collection do Postman](resources/postman/bn.postman_collection.json) para teste dos serviços disponível.

Obs: 
  - teste local fora do ambiente do docker não disponível com as configurações atuais

<br/><br/><br/>

---

## Problemas conhecidos

A implementação possui detalhes que não foram profundamente desenvolvidos para o escopo desse projeto:
 - Testes unitários não foram desenvolvidos(template utilizado não finalizado)
 - Algumas validações de input/output e exploração dos possíveis erros(potencialmente gerando apenas erro padrão)