# Pokemon Database Project

Este projeto é uma réplica do sistema de gerenciamento do jogo pokémon, utilizando PostgreSQL e Express.js

## Arquitetura

O projeto utiliza uma arquitetura MVC (Model-View-Controller) com Sequelize ORM para gerenciar as associações entre as entidades do banco de dados. As associações foram otimizadas para evitar conflitos de nomenclatura e permitir queries eficientes.

### Sistema de Associações

- **Centralizadas**: Todas as associações estão definidas em `models/associations.js`
- **Aliases únicos**: Cada associação possui um alias único para evitar conflitos
- **Carregamento lazy**: Use `include` para carregar dados relacionados conforme necessário

Para mais detalhes sobre como usar as associações, consulte o arquivo `documents/others/ASSOCIATIONS_GUIDE.md`.

## Requisitos

- Node.js (versão 22.13.X)
- PostgreSQL (versão 17.4.X)

## Instalação

1. **Clonar o repositório:**

```bash
   git clone https://github.com/MZMS1510/pokemon-database-project.git
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

## Configuração do Frontend

O projeto inclui uma interface web React que consome a API do backend.

1. **Navegar para o diretório do frontend:**

```bash
cd views
```

2. **Instalar as dependências do frontend:**

```bash
npm install
```

3. **Executar o frontend em modo de desenvolvimento:**

```bash
npm run dev
```

O frontend será iniciado em `http://localhost:5173` por padrão.

4. **Voltar para o diretório raiz:**

```bash
cd ..
```

**Nota**: Certifique-se de que o backend esteja rodando antes de iniciar o frontend para que a aplicação funcione corretamente.

## Funcionalidades

- **Consulta de Pokémons**: É possível buscar pokémons através de seu nome, tipo, status, etc.
- **Registro de Pokémons novos**: É possível atualizar o banco de dados com as informações de um novo pokémon.
- **Criação de times**: É possível criar times personalizados com os pokémon que forem criados.
- **Simulação de gameplay**: É possível simular a gameplay de batalha dos jogos clássicos de pokémon.

## Scripts Disponíveis

### Backend

- `npm start`: Inicia o servidor Node.js.
- `npm run dev`: Inicia o servidor com reinicialização automática após alterações no código.
- `npm run init-db`: Inicia as tabelas necessárias para o banco de dados.

### Frontend (no diretório `views/`)

- `npm run dev`: Inicia o servidor de desenvolvimento do frontend com Vite.
- `npm run build`: Gera a build de produção do frontend.
- `npm run preview`: Visualiza a build de produção localmente.
- `npm run lint`: Executa o linter ESLint no código do frontend.

## Estrutura de Diretórios

- **`assets/`**: Arquivos de imagem utilizados principalmente na documentação.
- **`config/`**: Configurações do banco de dados e outras configurações do projeto.
- **`controllers/`**: Controladores da aplicação (lógica de negócio).
- **`models/`**: Modelos da aplicação (definições de dados e interações com o banco de dados).
- **`routes/`**: Rotas da aplicação.
- **`scripts/`**: Scripts públicos a serem rodados para o setup do projeto.
- **`seeders/`**: Arquivos de população do banco de dados para teste.
- **`services/`**: Conexão entre os modelos do banco de dados e os controladores da aplicação.
- **`views/`**: Interface web React (frontend) que consome a API do backend.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT.
