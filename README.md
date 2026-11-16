# British Flames

Site du restaurant British Flames à Tanger : best sellers, carte complète avec les prix et filtres par catégorie, couscous du vendredi, plan du quartier.

Site statique (HTML, CSS et JavaScript, sans dépendance à installer).

## Modifier la carte

Tous les plats, prix et best sellers sont dans [`js/menu-data.js`](js/menu-data.js).
Un plat sans prix affiche « Prix à confirmer ».

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
- `assets/` : le logo et les photos des plats
- `british-flames.html` : version de la page publiée comme Artifact Claude
