FROM node:lts-alpine as base

ARG NPM_TOKEN
ENV NPM_TOKEN ${NPM_TOKEN}

RUN npm install -g pnpm
WORKDIR /app
COPY . .

FROM base as prod-dependencies
RUN pnpm install --frozen-lockfile --prod

FROM base as build
RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM base
COPY --from=prod-dependencies /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
ENV PORT 7777
EXPOSE ${PORT}
CMD [ "pnpm", "start" ]
