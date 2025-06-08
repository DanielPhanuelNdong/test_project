

# # Étape 1 : Utiliser une image légère de Node.js
# FROM node:23-alpine

# # Étape 2 : Définir le répertoire de travail
# WORKDIR /app

# # Étape 3 : Copier uniquement package.json et package-lock.json
# COPY package*.json ./

# # Étape 4 : Installer les dépendances
# RUN npm install

# # Étape 5 : Copier le reste du projet
# COPY . .

# # Étape 6 : Exposer le port utilisé par Vite (normalement 5173)
# EXPOSE 5174

# # Étape 7 : Démarrer l’application Vite
# CMD ["npm", "run", "dev", "--", "--host"]


# Étape 1 : Construction de l'application
FROM node:23-alpine  AS build

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Serveur Nginx pour héberger les fichiers statiques
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

VOLUME ["/etc/nginx/conf.d"]

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# # Étape de build
# FROM node:23-alpine AS build

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# # Étape de déploiement avec Nginx
# FROM nginx:alpine AS production

# COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
# VOLUME ["/etc/nginx/conf.d"]

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
