# Support API - GitHub Actions CI/CD

![CI](https://github.com/IsOffff/support_api/workflows/CI%20-%20Support%20API/badge.svg)
![E2E](https://github.com/IsOffff/support_api/workflows/E2E%20-%20Support%20API%20(Playwright)/badge.svg)

API REST développée en **Node.js** et **MongoDB** pour la gestion des *RequestTypes*.  
Ce projet met en œuvre une **intégration continue (CI)** avec **GitHub Actions**, selon les exigences du TP.


##  Installation

```bash
cp .env.example .env
npm install
docker compose up -d
npm run dev
