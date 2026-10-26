
1. Créer le projet avec Vite

Ouvrez votre terminal, placez-vous dans le dossier de votre choix, puis exécutez la commande suivante :
npm create vite@latest mon-projet-react -- --template react

Si vous préférez utiliser TypeScript (très recommandé pour éviter les bugs), utilisez plutôt ce modèle :
npm create vite@latest mon-projet-react -- --template react-ts


2. Installer les dépendances et lancer le projet

Entrez dans le dossier qui vient d'être créé, installez les packages nécessaires et démarrez le serveur de développement local :
cd mon-projet-react
npm install
npm run dev


3. Ajouter ESLint et Prettier (Recommandé)

Pour garder un code propre dès le départ, installez rapidement Prettier :

npm install --save-dev prettier eslint-config-prettier

Il vous suffira ensuite d'ajouter eslint-config-prettier à la fin de votre fichier eslint.config.js déjà généré automatiquement par Vite.