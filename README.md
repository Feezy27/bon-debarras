# Site Main Forte, débarras & trouvailles

Site statique, sans installation. Il fonctionne tel quel sur GitHub Pages.

## Mettre en ligne
1. Dépôt GitHub : Settings, Pages, Source « Deploy from a branch », branche `main`, dossier `/ (root)`.
2. Le site est servi à `https://<compte>.github.io/<dépôt>/`.
3. Domaine .ch : Settings, Pages, Custom domain, puis les enregistrements DNS indiqués par GitHub.

## À personnaliser avant de publier
- `config.js` : nom, téléphone, e-mail (trois valeurs marquées À REMPLACER), `boutiqueOuverte`.
- `images/philippe.jpg` : ta photo, puis remplacer le bloc `.portrait` dans `index.html` par `<img src="images/philippe.jpg" alt="Philippe devant son fourgon">`.
- `data/produits.json` : contient 6 objets d'exemple (`"exemple": true`). Les remplacer par le fichier exporté depuis `gestion.html`.

## Pages
- `index.html` : accueil, services, tarifs, contact, estimateur de prix.
- `boutique.html` : « Le coin des bonnes affaires », lit `data/produits.json`.
- `gestion.html` : outil interne (devis par cubage, registre des objets et de leur provenance, export de la boutique). Non référencé, mais accessible à qui connaît l'adresse : il ne contient aucune donnée, tout reste dans ton navigateur.
- `logos.html` : les trois pistes de logo.

## Mettre la boutique à jour
1. Photos dans `images/` (nom = référence, par ex. `mf-0007.jpg`).
2. `gestion.html`, onglet Objets : saisir l'objet, puis « Télécharger produits.json ».
3. Remplacer `data/produits.json` dans le dépôt.

Les prix se changent dans `config.js` (estimateur) et dans le tableau de `index.html`.
