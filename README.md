# Pokemon Database Project

Este projeto é uma réplica do sistema de gerenciamento do jogo pokémon, utilizando PostgreSQL e Express.js

## Requisitos

- Node.js (versão 22.13.X)
- PostgreSQL (versão 17.4.X)

## Instalação

1. **Clonar o repositório:**

```bash
   git clone https://github.com/MZMS1510/project-pokemon-database.git
   cd project-pokemon-database
```

2. **Instalar as dependências:**

```bash
npm install
```

3. **Configurar o arquivo `.env`:**

Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias, como as configurações do banco de dados PostgreSQL.

## Configuração do Banco de Dados

1. **Criar banco de dados:**

   Crie um banco de dados PostgreSQL com o nome especificado no seu arquivo `.env`.

2. **Executar o script SQL de inicialização:**

```bash
npm run init-db
```

Isso criará todas as tabelas do projeto no seu banco de dados PostgreSQL com UUID como chave primária.

## Funcionalidades

- **Consulta de Pokémons**: É possível buscar pokémons através de seu nome, tipo, status, etc.
- **Registro de Pokémons novos**: É possível atualizar o banco de dados com as informações de um novo pokémon.
- **Criação de times**: É possível criar times personalizados com os pokémon que forem criados.
- **Simulação de gameplay**: É possível simular a gameplay de batalha dos jogos clássicos de pokémon.

## Scripts Disponíveis

- `npm start`: Inicia o servidor Node.js.
- `npm run dev`: Inicia o servidor com reinicialização automática após alterações no código.
- `npm run init-db`: Inicia as tabelas necessárias para o banco de dados.

## Estrutura de Diretórios

- **`assets/`**: Arquivos de imagem utilizados principalmente na documentação.
- **`config/`**: Configurações do banco de dados e outras configurações do projeto.
- **`controllers/`**: Controladores da aplicação (lógica de negócio).
- **`models/`**: Modelos da aplicação (definições de dados e interações com o banco de dados).
- **`routes/`**: Rotas da aplicação.
- **`scripts/`**: Scripts públicos a serem rodados para o setup do projeto.
- **`seeders/`**: Arquivos de população do banco de dados para teste.
- **`services/`**: Conexão entre os modelos do banco de dados e os controladores da aplicação.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT.
