# BASE IMAGE

FROM node:18-alpine AS base

RUN npm i -g pnpm

# Developer image

FROM base AS dev

WORKDIR /app

COPY package.json .
COPY pnpm-workspace.yaml .

RUN pnpm install

RUN pnpm build

CMD ["node", "apps/api/dist/main.js"]
