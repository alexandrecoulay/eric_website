# eric_web
Eric website official Repo

# Commands

## Initialiser ou mettre à jour avec Traefik - Docker - Docker-compose :

**Créer un réseau docker qui s'apelle `botericproxy` :**
```
docker network create botericproxy
```

**On crée l'image sous le tag `boteric-web` :**
```
docker build . -t boteric-web
```

**On tag l'image en staging pour l'utiliser dans docker-compose sous `boteric-web:staging` :**
```
docker tag boteric-web:latest boteric-web:staging
```

**On lance le container :**
```
docker-compose up -d
```

**Stop le container :**
```
docker-compose stop
```

## Autre :

**Récupérer un fichier dans le container :**
```
docker cp trender-web:/app/logs/access.log ./access.log
```