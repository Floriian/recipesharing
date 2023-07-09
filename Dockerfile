# BASE IMAGE

FROM node:18-alpine AS base

RUN npm i -g pnpm

# Developer image

FROM base AS dev

WORKDIR /recipeshareing app

COPY package.json .
COPY pnpm-workspace.yaml .

RUN pnpm install

CMD [ "pnpm", "dev" ]
