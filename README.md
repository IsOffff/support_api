# Support API - GitHub Actions CI/CD

![CI](https://github.com/IsOffff/support_api/actions/workflows/ci.yml/badge.svg)
![E2E](https://github.com/IsOffff/support_api/actions/workflows/e2e.yml/badge.svg)

API REST développée en **Node.js** et **MongoDB** pour la gestion des _RequestTypes_.  
Ce projet met en œuvre une **intégration continue (CI)** avec **GitHub Actions**, selon les exigences du TP.

## Installation

```bash
cp .env.example .env
npm install
docker compose up -d
npm run dev

## Tests

npm test
npm run test:e2e

## CI/CD

Le workflow GitHub Actions ci.yml exécute automatiquement :

Le linting et le formatage du code (ESLint + Prettier)

Les tests unitaires avec couverture (Jest)

Les tests E2E avec Playwright (e2e.yml)

La validation automatique des Pull Requests avant 

## Qualité & Git

PR requises (template fourni)

CODEOWNERS pour review obligatoire

Protection de la branche main activée

ESLint + Prettier + Husky + lint-staged

Docker-compose pour l’environnement reproductible

