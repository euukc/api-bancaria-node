# Digital Banking API

A robust backend API built with Node.js to simulate digital banking operations. This project is developed with a strong focus on software engineering best practices, emphasizing container orchestration with Docker, database migrations, infrastructure security, and automated testing.

The primary goal of this repository is to solidify and showcase advanced backend infrastructure concepts, ensuring that the application runs identically in both local development and production environments through a complete CI/CD pipeline.

# Key Learnings & Achievements

Throughout the development of this project, I implemented and mastered core architectural and DevOps concepts:

Docker & Advanced Orchestration: Multi-container setup and integration. Implemented automated healthchecks to prevent race conditions, ensuring the database is fully initialized and healthy before dependent services attempt to connect.

Database Migrations (Flyway): Integrated Flyway to manage database schema evolution safely and in a controlled manner, eliminating risks of structural inconsistency.

Security & Environment Management: Complete isolation of sensitive credentials using .env files, masking infrastructure data (DB_USER, DB_PASS), and ensuring no confidential information is exposed in version control (GitHub).

Test Automation (CI/CD): Configured a GitHub Actions pipeline that provisions a virtual Linux machine, installs Node ecosystem dependencies, and executes the full test suite automatically on every git push.

Integration Testing: Developed rigorous integration tests using Jest and Supertest to validate routes, controllers, business rules, and HTTP response contracts.

# Technologies & Tools

Runtime Environment: Node.js with TypeScript

Database: PostgreSQL

Migration Tool: Flyway

Containerization: Docker & Docker Compose

Testing Framework: Jest & Supertest

CI/CD Pipeline: GitHub Actions

# Architecture & Container Workflow

The project's ecosystem is structured into three main services that interact seamlessly:

postgres-bancario: The core relational database of the application, isolated and persisted through a private Docker volume.

flyway-migrations: An ephemeral container that waits for PostgreSQL's health signal to execute and validate the SQL scripts located at ./src/database/migrations.

api-bancaria: The main TypeScript application running on `http://localhost.com/3000`.
