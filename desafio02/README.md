# API REST de Usuários

Esta é uma API REST simples, desenvolvida para o desafio de criação de uma API de leitura de usuários em um arquivo JSON.

## 🚀 Tecnologias Utilizadas

-   **Node.js**: Ambiente de execução JavaScript.\
-   **Fastify**: Framework web de alta performance para o Node.js.\
-   **dotenv**: Módulo para carregar variáveis de ambiente de um arquivo `.env`.\
-   **@fastify/cors**: Plugin para habilitar o CORS, permitindo requisições de diferentes origens.

## 📂 Estrutura do Projeto

O projeto é organizado em camadas para garantir a separação de responsabilidades e facilitar a manutenção:

-   `src/controllers/`: Responsável por lidar com as requisições e formatar as respostas.\
-   `src/services/`: Contém a lógica de negócio principal, como a filtragem e a paginação.\
-   `src/routes/`: Define os endpoints e os associa aos controllers.\
-   `data/`: Armazena o arquivo `mock-users.json`, que serve como banco de dados.\
-   `server.js`: O arquivo de entrada que inicializa o servidor Fastify e registra as rotas.

## ▶️ Como Executar a Aplicação

Siga os passos abaixo para configurar e rodar a API localmente:

1.  Clone o repositório do projeto.\

2.  Instale as dependências do projeto:

    ``` bash
    npm install fastify @fastify/cors dotenv
    ```

3.  Se necessário, crie um arquivo de variáveis de ambiente. Na raiz do projeto, crie um arquivo chamado `.env` e adicione a porta do servidor:

    ``` env
    PORT=3000
    ```

4.  Inicie o servidor:

    ``` bash
    npm run start
    ```

O servidor estará disponível em: <http://localhost:3000>

## 📌 Endpoints da API

### 1. `GET /users`

Retorna uma lista de usuários com suporte a paginação e filtros.

**Parâmetros de Query (opcionais):**

-   `page`: O número da página desejada (padrão: 1).\
-   `page_size`: O número de usuários por página (padrão: 10, máximo: 50).\
-   `q`: Termo de busca que será aplicado aos campos `name` e `email`.\
-   `role`: Filtra por função do usuário (`admin`, `manager`, `analyst`, etc.).\
-   `is_active`: Filtra por status de atividade (`true` ou `false`).

**Exemplos de Uso:**

``` bash
# Lista a primeira página com 10 usuários
GET http://localhost:3000/users

# Lista a segunda página com 10 usuários por página
GET http://localhost:3000/users?page=2

# Busca por usuários com "hoffmann" no nome ou e-mail
GET http://localhost:3000/users?q=hoffmann

# Combina paginação e filtros
GET http://localhost:3000/users?page=1&page_size=5&role=analyst&is_active=true
```

------------------------------------------------------------------------

### 2. `GET /users/{id}`

Retorna os detalhes de um único usuário, identificado pelo seu ID.

**Parâmetros de Path:**

-   `id`: O ID numérico do usuário.

**Exemplo de Uso:**

``` bash
#Lista um usuário com ID de valor 5
GET http://localhost:3000/users/5
```

------------------------------------------------------------------------

## 📡 Códigos de Resposta

-   `200 OK`: O usuário foi encontrado e retornado.\
-   `404 Not Found`: O ID do usuário não foi encontrado.

