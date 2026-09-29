# BuildForge - Guide Déploiement Vercel

## 🚀 Installation Rapide

### 1. Prérequis
- Compte Vercel (gratuit)
- Compte MongoDB Atlas (gratuit)
- Ce repo GitHub

### 2. MongoDB Atlas
1. Va sur [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas)
2. Crée un cluster M0 (gratuit)
3. Crée un utilisateur et une base de données
4. Copie la connection string

### 3. Déployer sur Vercel

```bash
# Cloner le repo
git clone https://github.com/Blue965/BuildForge.git
cd BuildForge

# Installer les dépendances
npm install

# Tester localement (optionnel)
npm run dev
```

Ou directement via Vercel :

1. Va sur [vercel.com](https://vercel.com)
2. Clique sur "New Project"
3. Connecte ton repo GitHub
4. Configure les variables d'environnement :
   - `MONGODB_URI` = ta connection string MongoDB
   - `JWT_SECRET` = une clé aléatoire forte (ex: `openssl rand -hex 32`)
   - `PORT` = 3000

### 4. Variables d'environnement Vercel

Va dans le projet Vercel → Settings → Environment Variables et ajoute :

```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/buildforge
JWT_SECRET=ta_cle_secrete_ici
PORT=3000
```

### 5. C'est prêt !

Ta BuildForge est maintenant live à :
`https://buildforge-xxxx.vercel.app`

## 📝 Structure Vercel

```
BuildForge/
├── api/              # Serverless Functions
│   ├── server.js
│   ├── auth.js
│   ├── projects.js
│   └── users.js
├── models/           # MongoDB Schemas
├── middleware/       # Auth Middleware
├── public/           # Frontend Static
│   ├── index.html
│   ├── styles.css
│   └── app.js
└── vercel.json       # Config Vercel
```

## 🔧 Commandes

```bash
npm install      # Installer les packages
npm run dev      # Mode développement
npm start        # Production
```

## 🎉 Done!

BuildForge est maintenant une vraie app en production avec :
- ✅ Frontend optimisé
- ✅ Backend serverless
- ✅ Base de données MongoDB
- ✅ Authentification JWT
- ✅ Déploiement automatique

Bon coding! 🚀
