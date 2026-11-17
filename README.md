# British Flames

Site du restaurant British Flames à Tanger : best sellers, carte complète avec les prix et filtres par catégorie, couscous du vendredi, plan du quartier.

Site statique (HTML, CSS et JavaScript, sans dépendance à installer).

## Modifier la carte

Tous les plats, prix et best sellers sont dans [`js/menu-data.js`](js/menu-data.js).
Un plat sans prix affiche « Prix à confirmer ».

## Langues

Le site est en français, en anglais et en espagnol, avec un bouton FR / EN / ES dans la barre de navigation.
Le changement de langue se fait sur place, sans recharger la page.
Le français est écrit dans la page et dans `js/menu-data.js` ; les traductions anglaises (`EN`) et espagnoles (`ES`) sont dans [`js/i18n.js`](js/i18n.js).
Quand vous ajoutez un plat ou un texte, ajoutez aussi sa traduction dans les deux listes, sinon il reste affiché en français.
Un lien terminé par `#en` ou `#es` ouvre directement la version anglaise ou espagnole.

## Lancer en local

```bash
py serve.py
```

Puis ouvrir http://localhost:4173.

## Fichiers

- `index.html` : la page du site
- `css/styles.css` : les styles
- `js/app.js` : la carte, les filtres, la recherche et les animations
- `js/cursor-fire.js` : la flamme qui suit le curseur sur ordinateur, et son bouton pour l'allumer ou l'éteindre
- `js/menu-data.js` : les plats et les prix
- `js/i18n.js` : les traductions anglaises et espagnoles et le bouton de langue
- `assets/` : le logo et les photos des plats
- `british-flames.html` : version de la page publiée comme Artifact Claude
