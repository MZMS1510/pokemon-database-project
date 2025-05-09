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

### 3.1. Modelagem do banco de dados (Semana 3)

![Diagrama relacional do banco de dados](../assets/database-diagram.jpeg)

Arquivo de modelagem física do banco de dados: [initDB.sql](../scripts/initDB.sql)

### 3.1.1 BD e Models (Semana 5)

_Descreva aqui os Models implementados no sistema web_

### 3.2. Arquitetura (Semana 5)

_Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário._

**Instruções para criação do diagrama de arquitetura**

- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.

_Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View._

### 3.3. Wireframes (Semana 03 - opcional)

_Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização)._

### 3.4. Guia de estilos (Semana 05 - opcional)

_Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução._

### 3.5. Protótipo de alta fidelidade (Semana 05 - opcional)

_Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização)._

### 3.6. WebAPI e endpoints (Semana 05)

_Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema._

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
