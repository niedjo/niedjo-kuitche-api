# Niedjo Kuitche API

**Niedjo Kuitche API** est une API RESTful développée en **Node.js** et **TypeScript** avec une architecture **MVC** (Modèle-Vue-Contrôleur). Cette API permet d'effectuer des opérations CRUD pour le portfolio de Niedjo Kuitche, y compris la gestion des projets, des expériences et des commentaires. Les fichiers (images, etc.) sont stockés dans **Firebase Storage**.

## Fonctionnalités

- **CRUD complet** : Création, Lecture, Mise à jour et Suppression des projets, expériences, et commentaires.
- **Stockage de fichiers** : Utilisation de **Firebase Storage** pour stocker les fichiers associés aux projets, expériences, et profils utilisateurs.
- **Architecture MVC** : L'API est structurée selon une architecture Modèle-Vue-Contrôleur, ce qui la rend facile à maintenir et à évoluer.
- **Sécurité avec JWT** : Utilisation de **JSON Web Tokens (JWT)** pour sécuriser les opérations sensibles.

## Structure du Projet

Le projet est organisé comme suit :

```
|-- src/
|   |-- config/
|   |-- controllers/
|   |-- middleware/
|   |-- models/
|   |-- routes/
|   |-- services/
|   |-- index.ts
|-- .env
|-- nodemon.json
|-- package.json
|-- tsconfig.json
|-- README.md
```

- **src/config/** : Contient les configurations pour la base de donne mongodb.
- **src/controllers/** : Contient les contrôleurs pour gérer les requêtes HTTP.
- **src/middleware/** : Contient le middleware pour gérer les tokens.
- **src/models/** : Contient les modèles Mongoose pour la structure des données.
- **src/routes/** : Définit les routes de l'API.
- **src/services/** : Contient les services pour la logique métier, y compris l'intégration avec Firebase.
- **src/index.ts** : Point d'entrée principal de l'application.

## Installation

### Prérequis

- **Node.js** version 16 ou supérieure
- **TypeScript** installé globalement (`npm install -g typescript`)
- **MongoDB** pour la base de données
- **Firebase** configuré pour le stockage de fichiers

### Étapes d'installation

1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/niedjo/niedjo-kuitche-api.git
   cd niedjo-kuitche-api
   ```

2. **Installez les dépendances** :
   ```bash
   npm install
   ```

3. **Configurez les variables d'environnement** :
   Créez un fichier `.env` à la racine du projet avec les informations suivantes :
   ```
   MONGO_URI=<votre_uri_mongodb>
   JWT_SECRET=<votre_cle_secrete_jwt>
   FIREBASE_API_KEY=<votre_cle_api_firebase>
   FIREBASE_AUTH_DOMAIN=<votre_domaine_auth_firebase>
   FIREBASE_PROJECT_ID=<votre_id_projet_firebase>
   FIREBASE_STORAGE_BUCKET=<votre_bucket_firebase>
   FIREBASE_MESSAGING_SENDER_ID=<votre_sender_id_firebase>
   FIREBASE_APP_ID=<votre_app_id_firebase>
   ```

4. **Compilez le code TypeScript** :
   ```bash
   npm run build
   ```

5. **Lancez l'application** :
   ```bash
   npm start
   ```

## Utilisation

### Endpoints de l'API

- **Projets**
  - `GET /api/projects` : Récupère tous les projets.
  - `POST /api/projects` : Crée un nouveau projet.
  - `PUT /api/projects/:id` : Met à jour un projet existant.
  - `DELETE /api/projects/:id` : Supprime un projet.

- **Expériences**
  - `GET /api/experiences` : Récupère toutes les expériences.
  - `POST /api/experiences` : Crée une nouvelle expérience.
  - `PUT /api/experiences/:id` : Met à jour une expérience existante.
  - `DELETE /api/experiences/:id` : Supprime une expérience.

- **Commentaires**
  - `GET /api/comments` : Récupère tous les commentaires.
  - `POST /api/comments` : Crée un nouveau commentaire.
  - `PUT /api/comments/:id` : Met à jour un commentaire existant.
  - `DELETE /api/comments/:id` : Supprime un commentaire.

### Modèles de Données

#### Commentaire

```typescript
{
    peopleName: string;
    peopleWorkstation: string;
    comment: string;
    profileUrl?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
```

#### Expérience

```typescript
{
    imgUrlOfExperiance: string;
    experianceName: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}
```

#### Projet

```typescript
{
    imgUrlOfProjet: string;
    projectName: string;
    description: string;
    fullDescription: string;
    technologie: string[];
    urlOfSite?: string;
    downloadUrl?: string;
    githubUrl?: string;
    demoUrl?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
```

## Technologies Utilisées

- **Node.js** : Pour le backend de l'API.
- **TypeScript** : Pour une meilleure gestion des types et de la maintenabilité du code.
- **Express** : Framework pour créer le serveur web.
- **Mongoose** : Pour la gestion des données MongoDB.
- **Firebase** : Pour le stockage des fichiers.
- **JWT** : Pour l'authentification sécurisée.

## License

Ce projet est sous licence ISC.