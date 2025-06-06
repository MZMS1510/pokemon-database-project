# Web Application Document - Projeto Individual - Módulo 2 - Inteli

## Project Pokemon Database

#### Marcos V. M. S.

## Sumário

1. [Introdução](#c1)
2. [Visão Geral da Aplicação Web](#c2)
3. [Projeto Técnico da Aplicação Web](#c3)
4. [Desenvolvimento da Aplicação Web](#c4)
5. [Referências](#c5)

<br>

## <a name="c1"></a>1. Introdução

O Projeto Pokemon Database é uma aplicação web desenvolvida para gerenciar uma base de dados inspirada no universo Pokémon. Utilizando tecnologias como Express.js, PostgreSQL e Sequelize, o sistema possibilita o cadastro, consulta e gerenciamento de Pokémons, suas espécies e tipos, bem como a administração de equipes e itens associados.

A aplicação adota uma arquitetura clara e modular, separando a lógica de negócio (Models e Controllers) da interface de acesso (Rotas). Essa estrutura permite não apenas uma manutenção facilitada, mas também a escalabilidade do sistema conforme novas funcionalidades sejam implementadas. Além disso, o projeto contempla scripts específicos para a inicialização do banco de dados e populações de teste, garantindo um ambiente pronto para desenvolvimento e demonstração.

Ideal para entusiastas do universo Pokémon e desenvolvedores que buscam aprofundar seus conhecimentos em desenvolvimento web e gerenciamento de bancos de dados, este projeto alia conceitos teóricos e práticos em um cenário real de aplicação. Através desta plataforma, espera-se oferecer uma experiência interativa e enriquecedora, servindo tanto como ferramenta de aprendizado quanto de entretenimento.

Este documento apresenta, de forma detalhada, a modelagem do banco de dados, a arquitetura da aplicação e os principais endpoints que possibilitam a interação com o sistema, estabelecendo uma base sólida para futuras melhorias e expansões.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01 - opcional)

_Posicione aqui sua(s) Persona(s) em forma de texto markdown com imagens, ou como imagem de template preenchido. Atualize esta seção ao longo do módulo se necessário._

### 2.2. User Stories (Semana 01 - opcional)

_Posicione aqui a lista de User Stories levantadas para o projeto. Siga o template de User Stories e utilize a referência USXX para numeração (US01, US02, US03, ...). Indique todas as User Stories mapeadas, mesmo aquelas que não forem implementadas ao longo do projeto. Não se esqueça de explicar o INVEST de 1 User Storie prioritária._

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados

![Diagrama relacional do banco de dados](../assets/database-diagram.jpeg)

<p align="center">Figura 1 - Diagrama de Entidade Relacional do banco de dados</p>

Arquivo de modelagem física do banco de dados: [initDB.sql](../scripts/initDB.sql)

Este diagrama de Entidade-Relacionamento (DER) descreve um banco de dados projetado para gerenciar informações relacionadas a um universo similar ao de Pokémon. Ele permite o rastreamento de treinadores, seus Pokémon (tanto os da equipe ativa quanto os armazenados), e os itens que possuem, além de catalogar as espécies de Pokémon e os tipos de itens.

A estrutura do banco de dados é composta pelas seguintes tabelas principais:

- **`trainer` (Treinador):** Armazena informações sobre os treinadores, incluindo um ID único (`pk`, tipo UUID), nome (`name`, VARCHAR), o número de insígnias (`badges`, INT) e a quantidade de dinheiro (`money`, INT) que possuem.
- **`team` (Equipe):** Representa a equipe ativa de Pokémon de um treinador. Contém um ID único (`pk`, UUID), o ID do treinador ao qual a equipe pertence (`trainer_id`, UUID), e os IDs dos seis Pokémon que compõem a equipe (`poke1` a `poke6`, todos UUID). Há uma relação de um-para-um com `trainer` (uma equipe por treinador) e relações de muitos-para-um com a tabela `pokemon` (cada slot de equipe aponta para um Pokémon individual).
- **`box` (Caixa):** Permite armazenar Pokémon que não estão na equipe ativa de um treinador. É uma tabela de ligação que conecta um `trainer_id` (UUID) a um `poke_id` (UUID), indicando quais Pokémon estão guardados por qual treinador.
- **`pokemon` (Pokémon Individual):** Contém os dados de um Pokémon específico possuído por um treinador. Inclui um ID único (`pk`, UUID), o ID da espécie (`species`, UUID), um apelido (`nickname`, VARCHAR), nível (`level`, INT), pontos de vida atuais e máximos (`hp`, `max_hp`, INT), estatísticas de ataque, defesa, ataque especial, defesa especial e velocidade (`atk`, `def`, `spatk`, `spdef`, `speed`, todos INT), experiência (`exp`, INT) e um indicador booleano se é shiny (`shiny`, BOOL). Esta tabela se relaciona com `pokemon_species`.
- **`pokemon_species` (Espécie de Pokémon):** Descreve as características base de uma espécie de Pokémon. Possui um ID único (`pk`, UUID), nome da espécie (`name`, VARCHAR), e IDs para seus tipos (`type1`, `type2`, ambos UUID). Também armazena as estatísticas base (`base_hp`, `base_atk`, `base_def`, `base_spatk`, `base_spdef`, `base_speed`, todos INT) e o ID da próxima estágio evolutivo (`next_stage_id`, UUID), permitindo encadear evoluções.
- **`pokemon_types` (Tipos de Pokémon):** Uma tabela de referência para os tipos de Pokémon (ex: Água, Fogo, Grama). Contém um ID único (`pk`, UUID) e o nome do tipo (`name`, VARCHAR).
- **`item` (Item Individual):** Representa um item específico que um treinador possui. Inclui um ID único (`pk`, UUID), o ID do tipo de item (`type`, UUID) e o ID do treinador que possui o item (`trainer_id`, UUID).
- **`item_type` (Tipo de Item):** Define as características de um tipo de item. Contém um ID único (`pk`, UUID), o ID da categoria do item (`category_id`, UUID), uma descrição (`description`, VARCHAR) e o efeito do item (`effect`, VARCHAR).
- **`item_category` (Categoria de Item):** Classifica os tipos de itens em categorias mais amplas (ex: Pokébolas, Poções, Itens Chave). Possui um ID único (`pk`, UUID), nome da categoria (`name`, VARCHAR) e uma descrição mais longa (`description`, TEXT).

**Relacionamentos Chave:**

- Um **`trainer`** pode possuir muitos **`item`s**, e um **`item`** pertence a um **`trainer`**.
- Um **`trainer`** possui uma única **`team`**, e uma **`team`** pertence a um **`trainer`**.
- Um **`trainer`** pode ter muitos **`pokemon`** armazenados em **`box`**, e um **`pokemon`** na **`box`** está associado a um **`trainer`**.
- Um **`team`** é composto por até seis **`pokemon`** individuais.
- Um **`pokemon`** (individual) é de uma **`pokemon_species`**, e uma **`pokemon_species`** pode ter muitos **`pokemon`** (indivíduo).
- Uma **`pokemon_species`** pode ter até dois **`pokemon_types`**, e um **`pokemon_type`** pode ser associado a muitas **`pokemon_species`**.
- Um **`item`** (individual) é de um **`item_type`**, e um **`item_type`** pode gerar muitos **`item`s** (indivíduos).
- Um **`item_type`** pertence a uma **`item_category`**, e uma **`item_category`** pode ter muitos **`item_type`s**.

Este design de banco de dados é flexível e extensível, permitindo adicionar novas funcionalidades como trocas, batalhas, e outras mecânicas de jogo, mantendo a integridade e organização dos dados.

### 3.1.1 BD e Models

garantindo a integração entre a camada de persistência e a lógica de negócio. Cada modelo Sequelize representa uma tabela do banco de dados e está localizado na pasta `models/`. Abaixo, segue a relação entre os arquivos JavaScript responsáveis pela definição dos modelos e as respectivas tabelas do banco de dados:

- [**`models/Trainer.js`**](../models/trainerModel.js): Define o modelo `Trainer`, correspondente à tabela `trainer`.
- [**`models/Team.js`**](../models/teamModel.js): Define o modelo `Team`, correspondente à tabela `team`.
- [**`models/Box.js`**](../models/boxModel.js): Define o modelo `Box`, correspondente à tabela `box`.
- [**`models/Pokemon.src/models/Pokemon.js`**](../models/pokemonModel.js): Define o modelo `Pokemon`, correspondente à tabela `pokemon`.
- [**`models/PokemonSpecies.js`**](../models/pokemonSpeciesModel.js): Define o modelo `PokemonSpecies`, correspondente à tabela `pokemon_species`.
- [**`models/PokemonType.js`**](../models/pokemonTypeModel.js): Define o modelo `PokemonType`, correspondente à tabela `pokemon_types`.
- [**`models/Item.js`**](../models/itemModel.js): Define o modelo `Item`, correspondente à tabela `item`.
- [**`models/ItemType.js`**](../models/itemTypeModel.js): Define o modelo `ItemType`, correspondente à tabela `item_type`.
- [**`models/ItemCategory.js`**](../models/itemCategoryModel.js): Define o modelo `ItemCategory`, correspondente à tabela `item_category`.

Esses arquivos são importados e utilizados nos controllers localizados em `controllers/`, que implementam a lógica de acesso e manipulação dos dados via API. Dessa forma, a estrutura do projeto mantém uma separação clara entre definição dos dados (models), regras de negócio (controllers) e rotas de acesso (routes), promovendo organização, reutilização e facilidade de manutenção.

### 3.2. Arquitetura (Semana 5)

![Diagrama de arquitetura da aplicação](../assets/architecture-diagram-2.png)

O diagrama acima ilustra a arquitetura da aplicação, que segue o padrão MVC (Model-View-Controller) e está dividida em duas camadas principais: **Front-end** e **Back-end**.

#### **Front-end**

- **HTML, CSS e JS**: São as tecnologias base para a construção da interface do usuário.
- **React**: Biblioteca JavaScript utilizada para criar interfaces de usuário dinâmicas e reativas.
- **Vite**: Ferramenta de build que otimiza o desenvolvimento e a entrega do front-end.
- **Axios**: Biblioteca para realizar requisições HTTP, conectando o front-end ao back-end.

#### **Back-end**

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express.js**: Framework para criar a API RESTful que gerencia as requisições e respostas.
- **Sequelize**: ORM (Object-Relational Mapping) que facilita a interação com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar as informações da aplicação.
- **Supabase**: Ferramenta que complementa o PostgreSQL, oferecendo funcionalidades adicionais como autenticação e armazenamento.

#### **Fluxo de Dados**

1. O usuário interage com a interface no navegador (HTML, CSS, JS).
2. As ações do usuário são processadas pelo React, que utiliza o Axios para enviar requisições HTTP para a API.
3. A API, construída com Express.js, recebe as requisições e as encaminha para os controllers.
4. Os controllers processam as requisições, interagindo com os models definidos no Sequelize.
5. O Sequelize traduz as operações para comandos SQL, que são executados no banco de dados PostgreSQL.
6. Os dados retornam pelo mesmo caminho, sendo enviados do banco para os models, dos models para os controllers, e dos controllers para o front-end, onde são exibidos ao usuário.

Essa arquitetura modular promove a separação de responsabilidades, facilitando a manutenção, escalabilidade e testes da aplicação.

### 3.3. Wireframes (Semana 03 - opcional)

_Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização)._

### 3.4. Guia de estilos (Semana 05 - opcional)

_Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução._

### 3.5. Protótipo de alta fidelidade (Semana 05 - opcional)

_Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização)._

### 3.6. WebAPI e endpoints (Semana 05)

A API REST do Pokemon Database oferece endpoints completos para gerenciar todas as entidades do sistema. Todos os endpoints seguem os padrões REST e retornam dados em formato JSON.

**Base URL:** `http://localhost:3000`

#### 3.6.1. Trainers (Treinadores)

| Método | Endpoint        | Descrição                  | Parâmetros                           | Response                  |
| ------ | --------------- | -------------------------- | ------------------------------------ | ------------------------- |
| GET    | `/trainers`     | Lista todos os treinadores | -                                    | Array de objetos Trainer  |
| GET    | `/trainers/:id` | Busca treinador por ID     | `id` (UUID)                          | Objeto Trainer            |
| POST   | `/trainers`     | Cria novo treinador        | Body: `{name, money?, badges?}`      | Objeto Trainer criado     |
| PUT    | `/trainers/:id` | Atualiza treinador         | `id` (UUID), Body: dados a atualizar | Objeto Trainer atualizado |
| DELETE | `/trainers/:id` | Remove treinador           | `id` (UUID)                          | Mensagem de confirmação   |

**Exemplo de resposta Trainer:**

```json
{
  "id": "uuid-v4",
  "name": "Ash Ketchum",
  "money": 5000,
  "badges": 8,
  "createdAt": "2025-05-25T10:00:00.000Z",
  "updatedAt": "2025-05-25T10:00:00.000Z"
}
```

#### 3.6.2. Pokémons

| Método | Endpoint        | Descrição               | Parâmetros                                                                                | Response                  |
| ------ | --------------- | ----------------------- | ----------------------------------------------------------------------------------------- | ------------------------- |
| GET    | `/pokemons`     | Lista todos os pokémons | -                                                                                         | Array de objetos Pokemon  |
| GET    | `/pokemons/:id` | Busca pokémon por ID    | `id` (UUID)                                                                               | Objeto Pokemon            |
| POST   | `/pokemons`     | Cria novo pokémon       | Body: `{species_id, level, nickname?, hp, atk, def, sp_atk, sp_def, speed, exp?, shiny?}` | Objeto Pokemon criado     |
| PUT    | `/pokemons/:id` | Atualiza pokémon        | `id` (UUID), Body: dados a atualizar                                                      | Objeto Pokemon atualizado |
| DELETE | `/pokemons/:id` | Remove pokémon          | `id` (UUID)                                                                               | Mensagem de confirmação   |

#### 3.6.3. Espécies de Pokémon

| Método | Endpoint               | Descrição               | Parâmetros                                                                                             | Response                         |
| ------ | ---------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------- |
| GET    | `/pokemon-species`     | Lista todas as espécies | -                                                                                                      | Array de objetos PokemonSpecies  |
| GET    | `/pokemon-species/:id` | Busca espécie por ID    | `id` (UUID)                                                                                            | Objeto PokemonSpecies            |
| POST   | `/pokemon-species`     | Cria nova espécie       | Body: `{name, type1_id, type2_id?, base_hp, base_atk, base_def, base_sp_atk, base_sp_def, base_speed}` | Objeto PokemonSpecies criado     |
| PUT    | `/pokemon-species/:id` | Atualiza espécie        | `id` (UUID), Body: dados a atualizar                                                                   | Objeto PokemonSpecies atualizado |
| DELETE | `/pokemon-species/:id` | Remove espécie          | `id` (UUID)                                                                                            | Mensagem de confirmação          |

#### 3.6.4. Tipos de Pokémon

| Método | Endpoint     | Descrição            | Parâmetros                           | Response                |
| ------ | ------------ | -------------------- | ------------------------------------ | ----------------------- |
| GET    | `/types`     | Lista todos os tipos | -                                    | Array de objetos Type   |
| GET    | `/types/:id` | Busca tipo por ID    | `id` (UUID)                          | Objeto Type             |
| POST   | `/types`     | Cria novo tipo       | Body: `{name}`                       | Objeto Type criado      |
| PUT    | `/types/:id` | Atualiza tipo        | `id` (UUID), Body: dados a atualizar | Objeto Type atualizado  |
| DELETE | `/types/:id` | Remove tipo          | `id` (UUID)                          | Mensagem de confirmação |

#### 3.6.5. Equipes (Teams)

| Método | Endpoint     | Descrição              | Parâmetros                                                     | Response                |
| ------ | ------------ | ---------------------- | -------------------------------------------------------------- | ----------------------- |
| GET    | `/teams`     | Lista todas as equipes | -                                                              | Array de objetos Team   |
| GET    | `/teams/:id` | Busca equipe por ID    | `id` (UUID)                                                    | Objeto Team             |
| POST   | `/teams`     | Cria nova equipe       | Body: `{trainerId, pokemon1Id, pokemon2Id?, ..., pokemon6Id?}` | Objeto Team criado      |
| PUT    | `/teams/:id` | Atualiza equipe        | `id` (UUID), Body: dados a atualizar                           | Objeto Team atualizado  |
| DELETE | `/teams/:id` | Remove equipe          | `id` (UUID)                                                    | Mensagem de confirmação |

#### 3.6.6. Caixas de Armazenamento (Boxes)

| Método | Endpoint                       | Descrição                         | Parâmetros                                  | Response                |
| ------ | ------------------------------ | --------------------------------- | ------------------------------------------- | ----------------------- |
| GET    | `/boxes`                       | Lista todas as caixas             | -                                           | Array de objetos Box    |
| GET    | `/boxes/:trainerId/:pokemonId` | Busca entrada específica na caixa | `trainerId` (UUID), `pokemonId` (UUID)      | Objeto Box              |
| POST   | `/boxes`                       | Adiciona pokémon à caixa          | Body: `{trainerId, pokemonId}`              | Objeto Box criado       |
| PUT    | `/boxes/:trainerId/:pokemonId` | Atualiza entrada na caixa         | IDs nos parâmetros, Body: dados a atualizar | Objeto Box atualizado   |
| DELETE | `/boxes/:trainerId/:pokemonId` | Remove pokémon da caixa           | `trainerId` (UUID), `pokemonId` (UUID)      | Mensagem de confirmação |

#### 3.6.7. Itens

| Método | Endpoint     | Descrição            | Parâmetros                           | Response                |
| ------ | ------------ | -------------------- | ------------------------------------ | ----------------------- |
| GET    | `/items`     | Lista todos os itens | -                                    | Array de objetos Item   |
| GET    | `/items/:id` | Busca item por ID    | `id` (UUID)                          | Objeto Item             |
| POST   | `/items`     | Cria novo item       | Body: `{ownerId, typeId}`            | Objeto Item criado      |
| PUT    | `/items/:id` | Atualiza item        | `id` (UUID), Body: dados a atualizar | Objeto Item atualizado  |
| DELETE | `/items/:id` | Remove item          | `id` (UUID)                          | Mensagem de confirmação |

#### 3.6.8. Categorias de Itens

| Método | Endpoint               | Descrição                 | Parâmetros                           | Response                       |
| ------ | ---------------------- | ------------------------- | ------------------------------------ | ------------------------------ |
| GET    | `/item-categories`     | Lista todas as categorias | -                                    | Array de objetos ItemCategory  |
| GET    | `/item-categories/:id` | Busca categoria por ID    | `id` (UUID)                          | Objeto ItemCategory            |
| POST   | `/item-categories`     | Cria nova categoria       | Body: `{name, description?}`         | Objeto ItemCategory criado     |
| PUT    | `/item-categories/:id` | Atualiza categoria        | `id` (UUID), Body: dados a atualizar | Objeto ItemCategory atualizado |
| DELETE | `/item-categories/:id` | Remove categoria          | `id` (UUID)                          | Mensagem de confirmação        |

#### 3.6.9. Tipos de Itens

| Método | Endpoint          | Descrição                     | Parâmetros                                      | Response                   |
| ------ | ----------------- | ----------------------------- | ----------------------------------------------- | -------------------------- |
| GET    | `/item-types`     | Lista todos os tipos de itens | -                                               | Array de objetos ItemType  |
| GET    | `/item-types/:id` | Busca tipo de item por ID     | `id` (UUID)                                     | Objeto ItemType            |
| POST   | `/item-types`     | Cria novo tipo de item        | Body: `{name, description?, effect?, category}` | Objeto ItemType criado     |
| PUT    | `/item-types/:id` | Atualiza tipo de item         | `id` (UUID), Body: dados a atualizar            | Objeto ItemType atualizado |
| DELETE | `/item-types/:id` | Remove tipo de item           | `id` (UUID)                                     | Mensagem de confirmação    |

#### 3.6.10. Códigos de Status HTTP

A API utiliza os seguintes códigos de status HTTP:

- **200 OK**: Operação realizada com sucesso (GET, PUT)
- **201 Created**: Recurso criado com sucesso (POST)
- **404 Not Found**: Recurso não encontrado
- **500 Internal Server Error**: Erro interno do servidor

#### 3.6.11. Tratamento de Erros

Todos os endpoints retornam erros no formato JSON:

```json
{
  "error": "Mensagem de erro descritiva"
}
```

#### 3.6.12. Relacionamentos

A API suporta associações entre entidades através do sistema Sequelize implementado. As relações incluem:

- **Trainer** possui muitos **Pokémon** (através de Team e Box)
- **Pokémon** pertence a uma **PokemonSpecies**
- **PokemonSpecies** possui tipos primário e secundário (**Type**)
- **Item** pertence a um **Trainer**, **ItemCategory** e **ItemType**
- **Team** conecta **Trainer** com até 6 **Pokémon**
- **Box** armazena **Pokémon** de um **Trainer**

Para detalhes sobre como utilizar as associações, consulte o [Guia de Associações](../documents/others/ASSOCIATIONS_GUIDE.md).

### 3.7 Interface e Navegação (Semana 07)

_Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar._

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

_VIDEO: Insira o link do vídeo demonstrativo nesta seção_
_Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar._

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

_Indique pontos fortes e pontos a melhorar de maneira geral._
_Relacione também quaisquer outras ideias que você tenha para melhorias futuras._

## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que o leitor possa consultar caso ele se interessar em aprofundar._<br>

---

---
