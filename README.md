# 📌 GES-TODOLIST-REACT

Une application de gestion de tâches (To-Do List) développée avec **React (frontend)** et **Node.js (backend)**.  
Elle permet d'ajouter, lister, modifier et supprimer des tâches, avec un système de connexion pour sécuriser l'accès.

---

## 🚀 Fonctionnalités

- ✅ Connexion utilisateur (avec accessToken)
- ✅ Affichage de la liste des tâches
- ✅ Ajout d'une nouvelle tâche
- ✅ Modification d'une tâche existante
- ✅ Suppression d'une tâche
- ✅ Filtrage et gestion du statut (en attente, en cours, terminé)

---

## 🛠️ Stack Technique

### Frontend
- [React](https://react.dev/) (Vite)
- [Tailwind CSS](https://tailwindcss.com/) pour le design
- [Lucide Icons](https://lucide.dev/) pour les icônes
- Gestion des API avec `fetch`

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/) pour l’API REST
- JSON comme base de données (db.json)

---

## 📂 Structure du projet

GES-TODOLIST-REACT/
│── public/ # Fichiers publics
│── src/
│ ├── api/ # Appels à l'API backend
│ │ └── api.jsx
│ ├── assets/ # Images, icônes
│ ├── components/ # Composants React (Connexion, Formulaire, Modal, etc.)
│ ├── context/ # Contexte React (gestion globale des tâches)
│ ├── data/ # db.json (mock data si backend JSON)
│ ├── App.jsx # Composant racine
│ ├── main.jsx # Point d’entrée
│ └── index.css # Styles globaux
│
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md


---

## ⚙️ Installation

### 1. Cloner le projet
```bash
git clone https://github.com/ton-compte/GES-TODOLIST-REACT.git
cd GES-TODOLIST-REACT

2. Installer les dépendances

Frontend :
cd frontend
npm install

Backend:
cd backend
npm install


3. Lancer le projet

Démarrer le backend (Node.js) :

npm start
# API disponible sur http://localhost:Port

Démarrer le frontend (React) :
npm run dev
# Application disponible sur http://localhost:Port

🔗 API Backend

GET /taches → récupérer toutes les tâches

GET /taches/:id → récupérer une tâche par ID

POST /taches → ajouter une tâche

PUT /taches/:id → modifier une tâche

DELETE /taches/:id → supprimer une tâche

POST /login → connexion et retour d’un accessToken

📸 Aperçu

✨ Améliorations possibles

Ajouter un système d’inscription

Persistance avec une vraie base de données (MongoDB / PostgreSQL)

Gestion des utilisateurs et rôles

Déploiement sur Vercel (frontend) et Render/Heroku (backend)

👩‍💻 Auteur

Projet développé par Khadidiatou Fall
📧 Contact : fallkhadidiatou0103@gmail.com

