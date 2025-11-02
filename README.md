# Support API (Node.js + MongoDB)

API REST pour gérer des **RequestTypes**

## Démarrage

```bash
cp .env.example .env
npm install
docker compose up -d
npm run dev
```

- API: http://localhost:3000
- mongo-express: http://localhost:8081

## Endpoints

- GET /health
- GET /api/request-types
- GET /api/request-types/:id
- POST /api/request-types

## Tests & Couverture (>= 70%)

```bash
npm test
```

## CI/CD

Workflow `ci.yml`: lint + format + tests (service Mongo) + artefact coverage.

## Git/Qualité (grille)

- PR requises (template fourni)
- CODEOWNERS pour review obligatoire
- ESLint + Prettier + Husky + lint-staged
- Docker-compose pour reproductibilité
