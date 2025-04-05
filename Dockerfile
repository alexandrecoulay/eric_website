# Utiliser une image Node.js stable
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier tout le code source dans le conteneur
COPY . .

# Installer toutes les dépendances (production et développement)
RUN yarn install

# Construire l'application Next.js
RUN yarn build

# Exposer le port 3000 (facultatif, mais utile pour documentation)
EXPOSE 3000

# Démarrer l'application
CMD ["yarn", "start"]
