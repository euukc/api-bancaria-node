#  API de Banco Digital

Uma API de backend robusta desenvolvida em Node.js para simular operações bancárias digitais. Este projeto está sendo desenvolvido com foco total nas melhores práticas de engenharia de software, enfatizando a **orquestração de containers com Docker, migrações de banco de dados, segurança de infraestrutura e testes automatizados**.

O objetivo principal deste repositório é consolidar e demonstrar conhecimentos avançados em infraestrutura de backend, garantindo que a aplicação rode de forma idêntica tanto no ambiente de desenvolvimento local quanto em produção através de uma esteira completa de CI/CD.

---

## Principais Aprendizados e Conquistas

Durante o desenvolvimento deste projeto, implementei e dominei conceitos fundamentais de arquitetura e DevOps:

* **Docker e Orquestração Avançada:** Configuração de múltiplos containers integrados. Implementação de `healthchecks` automatizados para evitar condições de corrida (*race conditions*), garantindo que o banco de dados esteja totalmente inicializado e saudável antes que os serviços dependentes tentem se conectar.
* **Migrações de Banco de Dados (Flyway):** Integração do Flyway para gerenciar a evolução do esquema do banco de dados de forma segura e controlada, eliminando riscos de inconsistência estrutural.
* **Segurança e Gestão de Ambiente:** Isolamento completo de credenciais sensíveis através de arquivos `.env`, mascarando dados de infraestrutura (`DB_USER`, `DB_PASS`) e garantindo que nenhuma informação confidencial seja exposta no controle de versão (GitHub).
* **Automação de Testes (CI/CD):** Configuração de uma esteira de **GitHub Actions** que provisiona uma máquina Linux virtual, instala as dependências do ecossistema Node e executa toda a suíte de testes automaticamente a cada `git push`.
* **Testes de Integração:** Desenvolvimento de testes de integração rigorosos utilizando Jest e Supertest para validar rotas, controllers, regras de negócio e contratos de respostas HTTP.

---

## Tecnologias e Ferramentas Utilizadas

* **Ambiente de Execução:** Node.js com TypeScript
* **Banco de Dados:** PostgreSQL
* **Ferramenta de Migração:** Flyway
* **Conteinerização:** Docker & Docker Compose
* **Framework de Testes:** Jest & Supertest
* **Esteira de CI/CD:** GitHub Actions

---

## Arquitetura e Fluxo dos Containers

O ecossistema do projeto está estruturado em três serviços principais que cooperam de forma integrada:

1.  **`postgres-bancario`**: O banco de dados relacional core da aplicação, isolado e persistido através de um volume privado do Docker.
2.  **`flyway-migrations`**: Um container efêmero que aguarda o sinal de saúde do Postgres para injetar e validar os scripts SQL localizados em `./src/database/migrations`.
3.  **`api-bancaria`**: A aplicação principal em TypeScript rodando na porta `http://localhost:3000`.


