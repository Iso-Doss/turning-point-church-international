# Site — Turning Point Church International (Cotonou · Lomé)

Site vitrine bilingue (français / anglais) avec mode clair et sombre, en React + Vite.
Pages : Accueil, L'Église, Nos sites, Cultes & messages, Contact.

## Modifier les textes

Tous les textes sont dans **`src/content.js`** :

- `CHURCH` : téléphones, email, liens Facebook / YouTube / Instagram / TikTok / Google Maps.
- `CONTENT.fr` et `CONTENT.en` : les textes de chaque page, en français et en anglais.

Les éléments entre `[crochets]` sont à compléter.
Pour ajouter un message (vidéo, audio ou écrit), ajoutez une ligne dans `messages`, en français **et** en anglais.

Le logo est dans `public/logo-tpci.png`.

### Ajouter des photos à la Galerie

1. Déposer la photo dans `public/galerie/` (format JPG, idéalement 1600 px de large maximum).
2. Dans `src/content.js`, liste `gallery` : renseigner `src: 'galerie/nom-de-la-photo.jpg'`,
   l'album (`cultes`, `evenements` ou `vie`) et la légende en français et en anglais.

### Ajouter un document (PDF)

1. Déposer le PDF dans `public/documents/` et une image d'aperçu dans `public/documents/apercus/`.
2. Dans `src/content.js`, liste `documents` : ajouter une ligne (fichier, aperçu, langue, format, taille en Ko),
   puis son titre et sa description dans `CONTENT.fr.documents.items` et `CONTENT.en.documents.items`.

## Voir le site sur son ordinateur

Il faut [Node.js](https://nodejs.org) (version 20 ou plus).

```bash
npm install
npm run dev
```

Puis ouvrir l'adresse affichée (par exemple http://localhost:5173).

## Mettre le site en ligne sur GitHub Pages

1. Créer un dépôt sur GitHub (par exemple `site-tpci`).
2. Envoyer ce dossier sur la branche `main` :

   ```bash
   git init
   git add .
   git commit -m "Site TPCI"
   git branch -M main
   git remote add origin https://github.com/<votre-compte>/site-tpci.git
   git push -u origin main
   ```

3. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
4. Attendre 1 à 2 minutes (onglet **Actions**). Le site est en ligne à l'adresse
   `https://<votre-compte>.github.io/site-tpci/`.

Ensuite, chaque modification envoyée sur `main` met le site à jour automatiquement.

### Nom de domaine (facultatif)

Pour utiliser une adresse comme `www.tpci-cotonou.org`, ajoutez-la dans **Settings → Pages → Custom domain**
et créez le fichier `public/CNAME` contenant uniquement ce nom de domaine.

## Détails techniques

- Navigation par adresses `#/…` : fonctionne sur GitHub Pages sans configuration supplémentaire.
- Le choix de langue et de thème est mémorisé dans le navigateur du visiteur.
  À la première visite, le site suit la langue et le thème de l'appareil.
- Le formulaire de contact ouvre l'application email du visiteur avec un message prérempli
  (pas de serveur nécessaire). Pour recevoir les réponses directement, on pourra brancher plus tard
  un service comme Formspree.
