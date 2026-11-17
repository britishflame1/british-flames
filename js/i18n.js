/*
  British Flames : langues du site.

  Le français est écrit dans la page et dans menu-data.js. Ce fichier contient
  l'anglais (EN) et l'espagnol (ES) : chaque ligne associe le texte français exact
  à sa traduction. Pour corriger une traduction, modifier la partie droite. Un texte
  français absent de ces listes reste affiché en français.

  Le changement de langue se fait sans recharger la page : la page et la carte sont
  retraduites depuis le français, puis app.js redessine ce qu'il a construit.

  Ce script s'exécute après menu-data.js et avant app.js.
*/
(() => {
  "use strict";

  const EN = {
    /* ----- Navigation ----- */
    "Aller au contenu": "Skip to content",
    "British Flames, retour en haut de page": "British Flames, back to top",
    "Navigation principale": "Main navigation",
    "Navigation mobile": "Mobile navigation",
    "Best sellers": "Best sellers",
    "La carte": "Menu",
    "Couscous": "Couscous",
    "Bon à savoir": "Good to know",
    "Contact": "Contact",
    "Voir le menu": "See the menu",
    "Ouvrir le menu de navigation": "Open the navigation menu",
    "Fermer le menu de navigation": "Close the navigation menu",
    "Langue": "Language",

    /* ----- Hero ----- */
    "Burgers, tacos, pizzas, fish & chips": "Burgers, tacos, pizzas, fish & chips",
    "Le goût qui fait": "The taste that makes",
    "la différence": "all the difference",
    "Burgers, tacos français, pizzas, shawarma, poulet rôti et un vrai fish & chips. Toute la carte British Flames, avec les prix, au même endroit.":
      "Burgers, French tacos, pizzas, shawarma, roast chicken and proper fish & chips. The full British Flames menu, with prices, in one place.",
    "La carte en chiffres": "The menu in numbers",
    "plats à la carte": "dishes on the menu",
    "familles de plats": "menu categories",
    "couscous chaque vendredi": "couscous every Friday",
    "Triple burger British Flames, trois steaks, cheddar fondu et bacon": "British Flames triple burger with three patties, melted cheddar and bacon",
    "Chaud": "Piping",
    "devant": "hot",

    /* ----- Tagline ----- */
    "Notre promesse": "Our promise",
    "Du feu sous le grill. Du croustillant dans chaque bouchée. Le goût qui fait la différence.":
      "Fire under the grill. Crunch in every bite. The taste that makes all the difference.",

    /* ----- Best sellers ----- */
    "Les plus demandés": "Most ordered",
    "Les best sellers": "Best sellers",
    "Quatre plats pour une première visite. Si vous hésitez, commencez par là.": "Four dishes for a first visit. If you can't decide, start here.",
    "Plat précédent": "Previous dish",
    "Plat suivant": "Next dish",
    "Best sellers, faites défiler horizontalement": "Best sellers, scroll sideways",
    "Numéro {n} des best sellers": "Best seller number {n}",
    "Best seller": "Best seller",

    /* ----- Carte ----- */
    "Choisissez et savourez": "Choose and enjoy",
    "Filtrez par famille ou cherchez un plat par son nom. Les prix sont en dirhams.": "Filter by category or search for a dish by name. Prices are in dirhams.",
    "Chercher un plat": "Search for a dish",
    "Chercher un plat : tacos, cheddar, poulet": "Search for a dish: tacos, cheddar, chicken",
    "Filtrer la carte par famille": "Filter the menu by category",
    "Catégorie": "Category",
    "Toute la carte": "Full menu",
    "toute la carte": "full menu",
    "Tout": "All",
    "Changer de catégorie. Actuellement : {name}": "Change category. Current: {name}",
    "Choisir une catégorie": "Choose a category",
    "Fermer": "Close",
    "Essayez un autre mot, ou revenez à la carte complète.": "Try another word, or go back to the full menu.",
    "Afficher toute la carte": "Show the full menu",
    "Aucun plat ne correspond à « {q} »": "No dish matches “{q}”",
    "{count} pour « {q} » dans : {scope}": "{count} for “{q}” in: {scope}",
    "{scope} : {count}": "{scope}: {count}",
    "plat": "dish",
    "plats": "dishes",
    "Prix à confirmer": "Price to be confirmed",
    "Seul": "On its own",
    "En menu": "As a meal",
    "3 pièces": "3 pieces",
    "5 pièces": "5 pieces",
    "6 pièces": "6 pieces",

    /* ----- Couscous ----- */
    "Chaque vendredi": "Every Friday",
    "Disponible aujourd'hui": "Available today",
    "Le vendredi, c'est couscous": "Friday is couscous day",
    "Trois recettes, servies uniquement le vendredi.": "Three recipes, served on Fridays only.",
    "Couscous au poulet servi dans un plat en terre cuite": "Chicken couscous served in a clay dish",

    /* ----- Bon à savoir ----- */
    "Menus, formules et suppléments": "Meals, deals and extras",
    "Que comprend la formule menu ?": "What does the meal deal include?",
    "Des frites et une boisson pour 15 DH de plus. La formule existe pour les tacos, les sandwichs shawarma et kebab, et les sandwichs baguette.":
      "Fries and a drink for 15 DH more. The deal is available for tacos, shawarma and kebab sandwiches, and baguette sandwiches.",
    "Le couscous, c'est quel jour ?": "Which day is couscous served?",
    "Le vendredi uniquement. Légumes à 59 DH, poulet à 65 DH, bœuf à 69 DH.": "Fridays only. Vegetable 59 DH, chicken 65 DH, beef 69 DH.",
    "Que contient un menu enfant ?": "What is in a kids' meal?",
    "Des frites, un jus et une surprise, avec au choix un mini burger, 4 nuggets ou 2 tenders. De 39 à 45 DH.":
      "Fries, a juice and a surprise, with a choice of mini burger, 4 nuggets or 2 tenders. From 39 to 45 DH.",
    "Avec quoi sont servis les menus poulet rôti ?": "What comes with the roast chicken meals?",
    "Avec des frites, une salade et une sauce au choix. Le menu quart est à 45 DH, le menu demi à 65 DH et le menu familial poulet entier à 119 DH.":
      "Fries, a salad and a sauce of your choice. The quarter chicken meal is 45 DH, the half chicken meal 65 DH and the whole chicken family meal 119 DH.",
    "Quels suppléments sont possibles ?": "Which extras can I add?",
    "Du fromage sur les pommes de terre au four pour 5 DH, et du poulet dans les salades pour 10 DH.":
      "Cheese on baked potatoes for 5 DH, and chicken in salads for 10 DH.",
    "Quels sont les jus frais ?": "Which fresh juices do you have?",
    "Orange, citron, carotte, pomme ou mixte, selon la saison. 18 DH le verre.": "Orange, lemon, carrot, apple or mixed, depending on the season. 18 DH a glass.",

    /* ----- Contact ----- */
    "Où nous trouver": "Where to find us",
    "Adresse": "Address",
    "Desserte Qur Golf, Tanger": "Desserte Qur Golf, Tangier",
    "Itinéraire vers British Flames": "Directions to British Flames",
    "Téléphone et WhatsApp": "Phone and WhatsApp",
    "À compléter : numéro pour commander": "To be added: number for orders",
    "Horaires": "Opening hours",
    "À compléter : jours et heures d'ouverture": "To be added: opening days and hours",
    "Plan du quartier autour de British Flames, Tanger": "Map of the area around British Flames, Tangier",
    "British Flames se trouve sur la Desserte Qur Golf, entre la Pharmacie Al Madina et le rond-point El Moujahidine, au sud du Royal Golf de Tanger.":
      "British Flames is on Desserte Qur Golf, between Pharmacie Al Madina and the El Moujahidine roundabout, south of the Royal Golf de Tanger.",
    "Ouvrir dans Google Maps": "Open in Google Maps",

    /* ----- Pied de page ----- */
    "Le goût qui fait la différence.": "The taste that makes all the difference.",
    "Liens du pied de page": "Footer links",
    "© 2026 British Flames. Tous droits réservés.": "© 2026 British Flames. All rights reserved.",

    /* ----- Familles de la carte ----- */
    "Burgers": "Burgers",
    "Nos burgers": "Our burgers",
    "Tacos": "Tacos",
    "Tacos français": "French tacos",
    "Pizzas": "Pizzas",
    "Nos pizzas": "Our pizzas",
    "Hot-dogs": "Hot dogs",
    "Hot-dogs briochés": "Brioche hot dogs",
    "Poulet croustillant": "Crispy chicken",
    "Poulet croustillant & box": "Crispy chicken & boxes",
    "Shawarma & kebab": "Shawarma & kebab",
    "Baguettes": "Baguettes",
    "Sandwichs baguette": "Baguette sandwiches",
    "Poulet rôti": "Roast chicken",
    "Fish & chips": "Fish & chips",
    "Pommes de terre": "Baked potatoes",
    "Pommes de terre au four": "Baked potatoes",
    "Salades": "Salads",
    "Frites & snacks": "Fries & snacks",
    "Enfants": "Kids",
    "Menus enfants": "Kids' meals",
    "Couscous du vendredi": "Friday couscous",
    "Desserts": "Desserts",
    "Boissons": "Drinks",

    /* ----- Notes des familles ----- */
    "Menu tacos : frites et boisson pour 15 DH de plus": "Tacos meal: fries and a drink for 15 DH more",
    "Menu sandwich : frites et boisson pour 15 DH de plus": "Sandwich meal: fries and a drink for 15 DH more",
    "Menus servis avec frites, salade et sauce au choix": "Meals served with fries, salad and a sauce of your choice",
    "Supplément fromage : 5 DH": "Extra cheese: 5 DH",
    "Supplément poulet : 10 DH": "Extra chicken: 10 DH",
    "Chaque menu comprend : frites, jus et surprise": "Every meal includes fries, a juice and a surprise",
    "Disponible chaque vendredi": "Available every Friday",

    /* ----- Plats ----- */
    "Burger classique": "Classic burger",
    "Cheeseburger": "Cheeseburger",
    "Double cheeseburger": "Double cheeseburger",
    "Triple burger": "Triple burger",
    "Burger poulet grillé": "Grilled chicken burger",
    "Burger poulet croustillant": "Crispy chicken burger",
    "Tacos Poulet": "Chicken tacos",
    "Tacos Viande Hachée": "Minced beef tacos",
    "Tacos Poulet Croustillant": "Crispy chicken tacos",
    "Tacos Cordon Bleu": "Cordon bleu tacos",
    "Tacos Mixte": "Mixed tacos",
    "Tacos Spécial British Flames": "British Flames special tacos",
    "Margherita": "Margherita",
    "Poulet": "Chicken",
    "Thon": "Tuna",
    "Viande Hachée": "Minced beef",
    "Quatre Fromages": "Four cheese",
    "Spéciale British Flames": "British Flames special",
    "Pizza Spéciale British Flames": "British Flames special pizza",
    "Pepperoni halal": "Halal pepperoni",
    "Jambon de dinde & Fromage": "Turkey ham & cheese",
    "Hot-dog classique": "Classic hot dog",
    "Hot-dog cheddar": "Cheddar hot dog",
    "Hot-dog gourmand": "Loaded hot dog",
    "Hot-dog épicé": "Spicy hot dog",
    "Hot-dog croustillant": "Crispy hot dog",
    "Tenders de poulet": "Chicken tenders",
    "Ailes de poulet": "Chicken wings",
    "Nuggets": "Nuggets",
    "Crunchy Box": "Crunchy Box",
    "Box Mixte": "Mixed box",
    "Sandwich Shawarma Poulet": "Chicken shawarma sandwich",
    "Sandwich Kebab Bœuf": "Beef kebab sandwich",
    "Sandwich Shawarma Mixte": "Mixed shawarma sandwich",
    "Assiette Shawarma Poulet": "Chicken shawarma plate",
    "Assiette Kebab Bœuf": "Beef kebab plate",
    "Assiette Mixte": "Mixed plate",
    "Poulet Grillé": "Grilled chicken",
    "Merguez": "Merguez",
    "Mixte": "Mixed",
    "Spécial British Flames": "British Flames special",
    "Quart de Poulet": "Quarter chicken",
    "Demi-Poulet": "Half chicken",
    "Poulet Entier": "Whole chicken",
    "Menu Quart de Poulet": "Quarter chicken meal",
    "Menu Demi-Poulet": "Half chicken meal",
    "Menu Familial Poulet Entier": "Whole chicken family meal",
    "Fish & Chips": "Fish & chips",
    "Poisson pané croustillant, frites dorées et sauce": "Crispy breaded fish, golden fries and sauce",
    "Nature": "Plain",
    "Cheddar": "Cheddar",
    "Salade Composée": "Mixed salad",
    "Salade Thon": "Tuna salad",
    "Salade Poulet Grillé": "Grilled chicken salad",
    "Salade César": "Caesar salad",
    "Frites classiques": "Classic fries",
    "Frites cheddar": "Cheddar fries",
    "Frites gourmandes": "Loaded fries",
    "Rondelles d'oignon": "Onion rings",
    "Bâtonnets de mozzarella": "Mozzarella sticks",
    "Mini Burger": "Mini burger",
    "4 Nuggets": "4 nuggets",
    "2 Tenders": "2 tenders",
    "Couscous aux Légumes": "Vegetable couscous",
    "Couscous au Poulet": "Chicken couscous",
    "Couscous au Bœuf": "Beef couscous",
    "Tiramisu Classique": "Classic tiramisu",
    "Tiramisu Oreo": "Oreo tiramisu",
    "Tiramisu Lotus": "Lotus tiramisu",
    "Cheesecake Fraise": "Strawberry cheesecake",
    "Cheesecake Chocolat": "Chocolate cheesecake",
    "Mousse au Chocolat": "Chocolate mousse",
    "Sodas": "Soft drinks",
    "Canette 33 cl. Coca-Cola, Pepsi, 7up, Mirinda, Orangina, Hawaï, Schweppes": "33 cl can. Coca-Cola, Pepsi, 7up, Mirinda, Orangina, Hawaï, Schweppes",
    "Jus frais": "Fresh juice",
    "Selon saison. Orange, citron, carotte, pomme ou mixte": "Depending on the season. Orange, lemon, carrot, apple or mixed",
    "Red Bull": "Red Bull",
    "Lipton Ice Tea": "Lipton Ice Tea",
    "Cappy": "Cappy",
    "Oulmès": "Oulmès",
    "Sidi Ali": "Sidi Ali"
  };

  const ES = {
    /* ----- Navigation ----- */
    "Aller au contenu": "Ir al contenido",
    "British Flames, retour en haut de page": "British Flames, volver arriba",
    "Navigation principale": "Navegación principal",
    "Navigation mobile": "Navegación móvil",
    "Best sellers": "Más vendidos",
    "La carte": "La carta",
    "Couscous": "Cuscús",
    "Bon à savoir": "Info útil",
    "Contact": "Contacto",
    "Voir le menu": "Ver la carta",
    "Ouvrir le menu de navigation": "Abrir el menú de navegación",
    "Fermer le menu de navigation": "Cerrar el menú de navegación",
    "Langue": "Idioma",

    /* ----- Hero ----- */
    "Burgers, tacos, pizzas, fish & chips": "Hamburguesas, tacos, pizzas, fish & chips",
    "Le goût qui fait": "El sabor que marca",
    "la différence": "la diferencia",
    "Burgers, tacos français, pizzas, shawarma, poulet rôti et un vrai fish & chips. Toute la carte British Flames, avec les prix, au même endroit.":
      "Hamburguesas, tacos franceses, pizzas, shawarma, pollo asado y un auténtico fish & chips. Toda la carta de British Flames, con precios, en un solo lugar.",
    "La carte en chiffres": "La carta en cifras",
    "plats à la carte": "platos en la carta",
    "familles de plats": "categorías",
    "couscous chaque vendredi": "cuscús cada viernes",
    "Triple burger British Flames, trois steaks, cheddar fondu et bacon": "Hamburguesa triple British Flames, con tres carnes, cheddar fundido y bacon",
    "Chaud": "Recién",
    "devant": "hecho",

    /* ----- Tagline ----- */
    "Notre promesse": "Nuestra promesa",
    "Du feu sous le grill. Du croustillant dans chaque bouchée. Le goût qui fait la différence.":
      "Fuego bajo la parrilla. Crujiente en cada bocado. El sabor que marca la diferencia.",

    /* ----- Best sellers ----- */
    "Les plus demandés": "Los más pedidos",
    "Les best sellers": "Los más vendidos",
    "Quatre plats pour une première visite. Si vous hésitez, commencez par là.": "Cuatro platos para una primera visita. Si dudas, empieza por aquí.",
    "Plat précédent": "Plato anterior",
    "Plat suivant": "Plato siguiente",
    "Best sellers, faites défiler horizontalement": "Los más vendidos, desliza en horizontal",
    "Numéro {n} des best sellers": "Número {n} de los más vendidos",
    "Best seller": "Top ventas",

    /* ----- Carte ----- */
    "Choisissez et savourez": "Elige y disfruta",
    "Filtrez par famille ou cherchez un plat par son nom. Les prix sont en dirhams.": "Filtra por categoría o busca un plato por su nombre. Los precios están en dírhams.",
    "Chercher un plat": "Buscar un plato",
    "Chercher un plat : tacos, cheddar, poulet": "Buscar un plato: tacos, cheddar, pollo",
    "Filtrer la carte par famille": "Filtrar la carta por categoría",
    "Catégorie": "Categoría",
    "Toute la carte": "Toda la carta",
    "toute la carte": "toda la carta",
    "Tout": "Todo",
    "Changer de catégorie. Actuellement : {name}": "Cambiar de categoría. Ahora: {name}",
    "Choisir une catégorie": "Elegir una categoría",
    "Fermer": "Cerrar",
    "Essayez un autre mot, ou revenez à la carte complète.": "Prueba con otra palabra o vuelve a la carta completa.",
    "Afficher toute la carte": "Ver toda la carta",
    "Aucun plat ne correspond à « {q} »": "Ningún plato coincide con «{q}»",
    "{count} pour « {q} » dans : {scope}": "{count} para «{q}» en: {scope}",
    "{scope} : {count}": "{scope}: {count}",
    "plat": "plato",
    "plats": "platos",
    "Prix à confirmer": "Precio por confirmar",
    "Seul": "Solo",
    "En menu": "En menú",
    "3 pièces": "3 piezas",
    "5 pièces": "5 piezas",
    "6 pièces": "6 piezas",

    /* ----- Couscous ----- */
    "Chaque vendredi": "Cada viernes",
    "Disponible aujourd'hui": "Disponible hoy",
    "Le vendredi, c'est couscous": "Los viernes, cuscús",
    "Trois recettes, servies uniquement le vendredi.": "Tres recetas, solo los viernes.",
    "Couscous au poulet servi dans un plat en terre cuite": "Cuscús de pollo servido en un plato de barro",

    /* ----- Bon à savoir ----- */
    "Menus, formules et suppléments": "Menús, ofertas y extras",
    "Que comprend la formule menu ?": "¿Qué incluye el menú?",
    "Des frites et une boisson pour 15 DH de plus. La formule existe pour les tacos, les sandwichs shawarma et kebab, et les sandwichs baguette.":
      "Patatas fritas y una bebida por 15 DH más. El menú está disponible para los tacos, los bocadillos de shawarma y kebab y los bocadillos de baguette.",
    "Le couscous, c'est quel jour ?": "¿Qué día hay cuscús?",
    "Le vendredi uniquement. Légumes à 59 DH, poulet à 65 DH, bœuf à 69 DH.": "Solo los viernes. Verduras a 59 DH, pollo a 65 DH, ternera a 69 DH.",
    "Que contient un menu enfant ?": "¿Qué lleva el menú infantil?",
    "Des frites, un jus et une surprise, avec au choix un mini burger, 4 nuggets ou 2 tenders. De 39 à 45 DH.":
      "Patatas fritas, un zumo y una sorpresa, a elegir con una mini hamburguesa, 4 nuggets o 2 tenders. De 39 a 45 DH.",
    "Avec quoi sont servis les menus poulet rôti ?": "¿Con qué se sirven los menús de pollo asado?",
    "Avec des frites, une salade et une sauce au choix. Le menu quart est à 45 DH, le menu demi à 65 DH et le menu familial poulet entier à 119 DH.":
      "Con patatas fritas, ensalada y una salsa a elegir. El menú de cuarto de pollo cuesta 45 DH, el de medio pollo 65 DH y el menú familiar de pollo entero 119 DH.",
    "Quels suppléments sont possibles ?": "¿Qué extras puedo añadir?",
    "Du fromage sur les pommes de terre au four pour 5 DH, et du poulet dans les salades pour 10 DH.":
      "Queso en las patatas al horno por 5 DH y pollo en las ensaladas por 10 DH.",
    "Quels sont les jus frais ?": "¿Qué zumos naturales hay?",
    "Orange, citron, carotte, pomme ou mixte, selon la saison. 18 DH le verre.": "Naranja, limón, zanahoria, manzana o mixto, según la temporada. 18 DH el vaso.",

    /* ----- Contact ----- */
    "Où nous trouver": "Dónde encontrarnos",
    "Adresse": "Dirección",
    "Desserte Qur Golf, Tanger": "Desserte Qur Golf, Tánger",
    "Itinéraire vers British Flames": "Cómo llegar a British Flames",
    "Téléphone et WhatsApp": "Teléfono y WhatsApp",
    "À compléter : numéro pour commander": "Por completar: número para pedidos",
    "Horaires": "Horario",
    "À compléter : jours et heures d'ouverture": "Por completar: días y horas de apertura",
    "Plan du quartier autour de British Flames, Tanger": "Plano del barrio alrededor de British Flames, Tánger",
    "British Flames se trouve sur la Desserte Qur Golf, entre la Pharmacie Al Madina et le rond-point El Moujahidine, au sud du Royal Golf de Tanger.":
      "British Flames está en la Desserte Qur Golf, entre la Pharmacie Al Madina y la rotonda El Moujahidine, al sur del Royal Golf de Tánger.",
    "Ouvrir dans Google Maps": "Abrir en Google Maps",

    /* ----- Pied de page ----- */
    "Le goût qui fait la différence.": "El sabor que marca la diferencia.",
    "Liens du pied de page": "Enlaces del pie de página",
    "© 2026 British Flames. Tous droits réservés.": "© 2026 British Flames. Todos los derechos reservados.",

    /* ----- Familles de la carte ----- */
    "Burgers": "Hamburguesas",
    "Nos burgers": "Nuestras hamburguesas",
    "Tacos": "Tacos",
    "Tacos français": "Tacos franceses",
    "Pizzas": "Pizzas",
    "Nos pizzas": "Nuestras pizzas",
    "Hot-dogs": "Perritos",
    "Hot-dogs briochés": "Perritos en pan brioche",
    "Poulet croustillant": "Pollo crujiente",
    "Poulet croustillant & box": "Pollo crujiente y boxes",
    "Shawarma & kebab": "Shawarma y kebab",
    "Baguettes": "Baguettes",
    "Sandwichs baguette": "Bocadillos de baguette",
    "Poulet rôti": "Pollo asado",
    "Fish & chips": "Fish & chips",
    "Pommes de terre": "Patatas al horno",
    "Pommes de terre au four": "Patatas al horno",
    "Salades": "Ensaladas",
    "Frites & snacks": "Patatas y snacks",
    "Enfants": "Niños",
    "Menus enfants": "Menús infantiles",
    "Couscous du vendredi": "Cuscús del viernes",
    "Desserts": "Postres",
    "Boissons": "Bebidas",

    /* ----- Notes des familles ----- */
    "Menu tacos : frites et boisson pour 15 DH de plus": "Menú tacos: patatas y bebida por 15 DH más",
    "Menu sandwich : frites et boisson pour 15 DH de plus": "Menú bocadillo: patatas y bebida por 15 DH más",
    "Menus servis avec frites, salade et sauce au choix": "Menús servidos con patatas, ensalada y salsa a elegir",
    "Supplément fromage : 5 DH": "Extra de queso: 5 DH",
    "Supplément poulet : 10 DH": "Extra de pollo: 10 DH",
    "Chaque menu comprend : frites, jus et surprise": "Cada menú incluye patatas, zumo y sorpresa",
    "Disponible chaque vendredi": "Disponible cada viernes",

    /* ----- Plats ----- */
    "Burger classique": "Hamburguesa clásica",
    "Cheeseburger": "Hamburguesa con queso",
    "Double cheeseburger": "Hamburguesa doble con queso",
    "Triple burger": "Hamburguesa triple",
    "Burger poulet grillé": "Hamburguesa de pollo a la parrilla",
    "Burger poulet croustillant": "Hamburguesa de pollo crujiente",
    "Tacos Poulet": "Tacos de pollo",
    "Tacos Viande Hachée": "Tacos de carne picada",
    "Tacos Poulet Croustillant": "Tacos de pollo crujiente",
    "Tacos Cordon Bleu": "Tacos cordon bleu",
    "Tacos Mixte": "Tacos mixtos",
    "Tacos Spécial British Flames": "Tacos especial British Flames",
    "Margherita": "Margarita",
    "Poulet": "Pollo",
    "Thon": "Atún",
    "Viande Hachée": "Carne picada",
    "Quatre Fromages": "Cuatro quesos",
    "Spéciale British Flames": "Especial British Flames",
    "Pizza Spéciale British Flames": "Pizza especial British Flames",
    "Pepperoni halal": "Pepperoni halal",
    "Jambon de dinde & Fromage": "Jamón de pavo y queso",
    "Hot-dog classique": "Perrito clásico",
    "Hot-dog cheddar": "Perrito con cheddar",
    "Hot-dog gourmand": "Perrito gourmet",
    "Hot-dog épicé": "Perrito picante",
    "Hot-dog croustillant": "Perrito crujiente",
    "Tenders de poulet": "Tenders de pollo",
    "Ailes de poulet": "Alitas de pollo",
    "Nuggets": "Nuggets",
    "Crunchy Box": "Crunchy Box",
    "Box Mixte": "Box mixto",
    "Sandwich Shawarma Poulet": "Bocadillo de shawarma de pollo",
    "Sandwich Kebab Bœuf": "Bocadillo de kebab de ternera",
    "Sandwich Shawarma Mixte": "Bocadillo de shawarma mixto",
    "Assiette Shawarma Poulet": "Plato de shawarma de pollo",
    "Assiette Kebab Bœuf": "Plato de kebab de ternera",
    "Assiette Mixte": "Plato mixto",
    "Poulet Grillé": "Pollo a la parrilla",
    "Merguez": "Merguez",
    "Mixte": "Mixto",
    "Spécial British Flames": "Especial British Flames",
    "Quart de Poulet": "Cuarto de pollo",
    "Demi-Poulet": "Medio pollo",
    "Poulet Entier": "Pollo entero",
    "Menu Quart de Poulet": "Menú cuarto de pollo",
    "Menu Demi-Poulet": "Menú medio pollo",
    "Menu Familial Poulet Entier": "Menú familiar pollo entero",
    "Fish & Chips": "Fish & chips",
    "Poisson pané croustillant, frites dorées et sauce": "Pescado empanado crujiente, patatas doradas y salsa",
    "Nature": "Natural",
    "Cheddar": "Cheddar",
    "Salade Composée": "Ensalada mixta",
    "Salade Thon": "Ensalada de atún",
    "Salade Poulet Grillé": "Ensalada de pollo a la parrilla",
    "Salade César": "Ensalada César",
    "Frites classiques": "Patatas fritas clásicas",
    "Frites cheddar": "Patatas fritas con cheddar",
    "Frites gourmandes": "Patatas fritas gourmet",
    "Rondelles d'oignon": "Aros de cebolla",
    "Bâtonnets de mozzarella": "Palitos de mozzarella",
    "Mini Burger": "Mini hamburguesa",
    "4 Nuggets": "4 nuggets",
    "2 Tenders": "2 tenders",
    "Couscous aux Légumes": "Cuscús de verduras",
    "Couscous au Poulet": "Cuscús de pollo",
    "Couscous au Bœuf": "Cuscús de ternera",
    "Tiramisu Classique": "Tiramisú clásico",
    "Tiramisu Oreo": "Tiramisú de Oreo",
    "Tiramisu Lotus": "Tiramisú de Lotus",
    "Cheesecake Fraise": "Tarta de queso con fresa",
    "Cheesecake Chocolat": "Tarta de queso con chocolate",
    "Mousse au Chocolat": "Mousse de chocolate",
    "Sodas": "Refrescos",
    "Canette 33 cl. Coca-Cola, Pepsi, 7up, Mirinda, Orangina, Hawaï, Schweppes": "Lata de 33 cl. Coca-Cola, Pepsi, 7up, Mirinda, Orangina, Hawaï, Schweppes",
    "Jus frais": "Zumo natural",
    "Selon saison. Orange, citron, carotte, pomme ou mixte": "Según la temporada. Naranja, limón, zanahoria, manzana o mixto",
    "Red Bull": "Red Bull",
    "Lipton Ice Tea": "Lipton Ice Tea",
    "Cappy": "Cappy",
    "Oulmès": "Oulmès",
    "Sidi Ali": "Sidi Ali"
  };

  const DICTS = { en: EN, es: ES };
  const LANGS = ["fr", "en", "es"];
  const TITLES = {
    fr: "British Flames | Burgers, tacos, pizzas et fish & chips",
    en: "British Flames | Burgers, tacos, pizzas and fish & chips",
    es: "British Flames | Hamburguesas, tacos, pizzas y fish & chips"
  };
  const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);

  /* ---------- Choix de la langue au chargement ---------- */
  const KEY = "bf-lang";
  let lang = null;
  try { lang = localStorage.getItem(KEY); } catch (err) { /* stockage indisponible */ }
  // Un lien terminé par #fr, #en ou #es impose la langue (pratique pour partager une version).
  const fromHash = window.location.hash.slice(1);
  if (LANGS.includes(fromHash)) lang = fromHash;
  if (!LANGS.includes(lang)) {
    const nav = (navigator.language || "fr").toLowerCase();
    lang = nav.startsWith("en") ? "en" : nav.startsWith("es") ? "es" : "fr";
  }

  // t("texte {n}", { n: 3 }) : traduit dans la langue en cours puis remplace les {variables}.
  const t = (text, vars) => {
    const dict = DICTS[lang];
    let out = dict && has(dict, text) ? dict[text] : text;
    if (vars) Object.keys(vars).forEach((k) => { out = out.split(`{${k}}`).join(vars[k]); });
    return out;
  };
  window.BF_T = t;

  /* ---------- Texte français d'origine ----------
     On garde une copie du français de la page et de la carte : chaque changement
     de langue repart de là, sans recharger la page. */
  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const parent = node.parentElement;
    if (!parent || parent.closest("script, style, .map-svg text")) continue;
    const raw = node.nodeValue;
    const key = raw.trim();
    if (key && has(EN, key)) textNodes.push({ node, raw, key });
  }
  const attrs = [];
  ["aria-label", "placeholder", "alt"].forEach((attr) => {
    document.querySelectorAll(`[${attr}]`).forEach((el) => {
      const key = el.getAttribute(attr);
      if (has(EN, key)) attrs.push({ el, attr, key });
    });
  });
  // La phrase d'accroche est découpée en mots par app.js : il lui faut le français d'origine.
  const tagline = document.getElementById("tagline");
  if (tagline) tagline.dataset.fr = tagline.textContent.trim();

  const MENU = window.BF_MENU || [];
  MENU.forEach((cat) => {
    cat.fr = { label: cat.label, title: cat.title, note: cat.note };
    cat.items.forEach((it) => {
      it.fr = { n: it.n, bn: it.bn, d: it.d, p: Array.isArray(it.p) ? it.p.map((row) => row.slice()) : it.p };
    });
  });

  /* ---------- Application d'une langue ---------- */
  function translatePage() {
    document.documentElement.lang = lang;
    document.querySelectorAll("body > div[lang]").forEach((el) => { el.lang = lang; });
    if (/\|/.test(document.title) || Object.values(TITLES).includes(document.title)) document.title = TITLES[lang];

    textNodes.forEach(({ node, raw, key }) => { node.nodeValue = raw.replace(key, t(key)); });
    attrs.forEach(({ el, attr, key }) => el.setAttribute(attr, t(key)));

    // Carte : familles, plats, précisions et formats (les objets restent les mêmes pour app.js)
    MENU.forEach((cat) => {
      cat.label = t(cat.fr.label);
      cat.title = t(cat.fr.title);
      cat.note = cat.fr.note ? t(cat.fr.note) : cat.fr.note;
      cat.items.forEach((it) => {
        it.n = t(it.fr.n);
        it.bn = it.fr.bn ? t(it.fr.bn) : it.fr.bn;
        it.d = it.fr.d ? t(it.fr.d) : it.fr.d;
        it.p = Array.isArray(it.fr.p) ? it.fr.p.map(([label, price]) => [t(label), price]) : it.fr.p;
      });
    });

    document.querySelectorAll(".lang").forEach((group) => {
      group.setAttribute("aria-label", t("Langue"));
      group.querySelectorAll("button[data-lang]").forEach((btn) => {
        btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
      });
    });
    window.BF_LANG = lang;
  }

  function setLang(next) {
    if (!LANGS.includes(next) || next === lang) return;
    lang = next;
    try { localStorage.setItem(KEY, lang); } catch (err) { /* stockage indisponible */ }
    // Une ancienne langue dans l'adresse (#en…) ne doit pas reprendre le dessus au prochain chargement.
    if (LANGS.includes(window.location.hash.slice(1))) {
      try { history.replaceState(null, "", window.location.pathname + window.location.search + "#" + lang); } catch (err) { /* adresse non modifiable */ }
    }
    translatePage();
    // app.js redessine la carte, les best sellers et la phrase d'accroche.
    document.dispatchEvent(new CustomEvent("bf:lang", { detail: { lang } }));
  }
  window.BF_SET_LANG = setLang;

  if (lang !== "fr") translatePage();
  else window.BF_LANG = lang;

  /* ---------- Boutons de langue ---------- */
  document.querySelectorAll(".lang").forEach((group) => {
    group.setAttribute("aria-label", t("Langue"));
    group.querySelectorAll("button[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
  });
})();
