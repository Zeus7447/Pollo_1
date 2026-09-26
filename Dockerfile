FROM node:22-alpine AS build

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# Coolify injects the application Build Variables through these arguments.
ARG DIRECTUS_URL
ARG DIRECTUS_TOKEN
ARG DIRECTUS_BUSINESS_ID=8

ENV DIRECTUS_URL=${DIRECTUS_URL}
ENV DIRECTUS_TOKEN=${DIRECTUS_TOKEN}
ENV DIRECTUS_BUSINESS_ID=${DIRECTUS_BUSINESS_ID}

RUN pnpm run build

FROM nginx:1.31-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
