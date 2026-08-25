# ---- Build ----------------------------------------------------------------
# Node 22 : sass >= 1.103 exige Node >= 20.19, et node-sass (qui plafonnait à
# Node 18) a été retiré des dépendances.
FROM node:22-slim AS builder

WORKDIR /app

# Les dépendances d'abord : cette couche n'est reconstruite que si package.json
# ou le lockfile changent.
COPY package.json yarn.lock ./

# --frozen-lockfile : le build installe exactement les versions du lockfile.
# Sans lui, chaque build refaisait une résolution fraîche et pouvait tirer une
# version incompatible sans qu'aucun fichier du dépôt n'ait changé.
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# ---- Runtime --------------------------------------------------------------
FROM node:22-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Sortie standalone : serveur + seules les dépendances atteintes par le build.
# distDir vaut 'build' (next.config.js), d'où les chemins ci-dessous.
COPY --from=builder /app/build/standalone ./
COPY --from=builder /app/build/static ./build/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
