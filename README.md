# British Flames

Site du restaurant British Flames à Tanger : best sellers, carte complète avec les prix et filtres par catégorie, couscous du vendredi, plan du quartier.

Site statique (HTML, CSS et JavaScript, sans dépendance à installer).

## Modifier la carte

Tous les plats, prix et best sellers sont dans [`js/menu-data.js`](js/menu-data.js).
Un plat sans prix affiche « Prix à confirmer ».

## Langues

Le site est en français et en anglais, avec un bouton FR / EN dans la barre de navigation.
Le français est écrit dans la page et dans `js/menu-data.js` ; les traductions anglaises sont dans [`js/i18n.js`](js/i18n.js).
Quand vous ajoutez un plat ou un texte, ajoutez aussi sa traduction dans ce fichier, sinon il reste affiché en français.
Un lien terminé par `#en` ouvre directement la version anglaise.

## Lancer en local

```bash
py serve.py
```

Puis ouvrir http://localhost:4173.

## Fichiers

- `index.html` : la page du site
- `css/styles.css` : les styles
- `js/app.js` : la carte, les filtres, la recherche et les animations
- `js/menu-data.js` : les plats et les prix
- `js/i18n.js` : les traductions anglaises et le bouton de langue
- `assets/` : le logo et les photos des plats
- `british-flames.html` : version de la page publiée comme Artifact Claude
