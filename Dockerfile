# Utiliser une image Node.js stable
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires pour installer les dépendances
COPY package.json yarn.lock ./

# Installer toutes les dépendances (production et développement)
RUN yarn install

# Copier tout le code source dans le conteneur
COPY . .

# Construire l'application Next.js
RUN yarn build

# Exposer le port 3000 (facultatif, mais utile pour documentation)
EXPOSE 3000

# Démarrer l'application
CMD ["yarn", "start"]
