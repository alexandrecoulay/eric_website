#!/bin/bash

# Vérifier si le numéro de version est passé en paramètre
if [ $# -eq 0 ]; then
  echo "Veuillez spécifier le numéro de version en tant que paramètre."
  exit 1
fi

# Récupérer le numéro de version du paramètre
VERSION=$1

# Construire l'image Docker
docker build . -t boteric-web:$VERSION

# Taguer l'image Docker avec une autre version
docker tag boteric-web:$VERSION boteric-web:staging

# Démarrer les conteneurs Docker en utilisant Docker Compose
docker-compose up -d
