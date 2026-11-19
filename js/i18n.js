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

    /* ----- Flamme du curseur ----- */
    "Flamme curseur : activée": "Cursor flame: on",
    "Flamme curseur : désactivée": "Cursor flame: off",

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
    "Sidi Ali": "Sidi Ali",

    /* ----- Nouvelle carte (British_Flames_Impression_Big_Tasty) ----- */
    "Offres": "Offers",
    "Offres d'ouverture": "Opening offers",
    "Frites et sauce incluses, soda pour 8 DH de plus. Offre limitée.": "Fries and sauce included, soda for 8 DH more. Limited-time offer.",
    "Formules famille": "Family deals",
    "Formules à partager": "Deals to share",
    "Pour 2 : 2 × ¼ poulet Peri-Peri, 2 portions de frites, 2 boissons, 2 sauces": "For 2: 2 × ¼ Peri-Peri chicken, 2 portions of fries, 2 drinks, 2 sauces",
    "Pour 3 à 4 : 1 poulet entier Peri-Peri, grandes frites, salade, 4 boissons, sauces": "For 3 to 4: 1 whole Peri-Peri chicken, large fries, salad, 4 drinks, sauces",
    "Pour 3 à 4 : 3 pizzas au choix, grandes frites, 4 boissons": "For 3 to 4: 3 pizzas of your choice, large fries, 4 drinks",
    "Pour 4 : 2 cheeseburgers, 2 wraps döner ou poulet, 5 chicken wings, 2 grandes frites, 4 boissons, sauces": "For 4: 2 cheeseburgers, 2 döner or chicken wraps, 5 chicken wings, 2 large fries, 4 drinks, sauces",
    "Peri-Peri": "Peri-Peri",
    "Peri-Peri, poulet grillé à la flamme": "Peri-Peri flame-grilled chicken",
    "Grillades servies avec frites, salade et sauce. Wings avec frites et sauce. Sauces : citron et herbes, doux, medium, hot, extra hot.":
      "Grills come with fries, salad and sauce. Wings come with fries and sauce. Sauces: lemon and herb, mild, medium, hot, extra hot.",
    "¼ Poulet Peri-Peri": "¼ Peri-Peri chicken",
    "½ Poulet Peri-Peri": "½ Peri-Peri chicken",
    "Poulet entier Peri-Peri": "Whole Peri-Peri chicken",
    "Filet de poulet grillé": "Grilled chicken fillet",
    "3 Pilons de poulet": "3 chicken drumsticks",
    "5 Chicken Wings": "5 chicken wings",
    "Chicken Wings": "Chicken wings",
    "7 pièces": "7 pieces",
    "10 pièces": "10 pieces",
    "Wrap poulet Peri-Peri": "Peri-Peri chicken wrap",
    "Burger poulet Peri-Peri": "Peri-Peri chicken burger",
    "Grillades": "Grills",
    "Bœuf grillé à la flamme": "Flame-grilled beef",
    "Cheeseburger Flame Grilled": "Flame-grilled cheeseburger",
    "Double Flame Grilled Burger": "Double flame-grilled burger",
    "Burger Döner Bœuf": "Beef döner burger",
    "Assiette kefta grillée": "Grilled kofta plate",
    "Assiette brochettes de bœuf": "Beef skewer plate",
    "Mixed Grill Poulet & Bœuf": "Chicken & beef mixed grill",
    "Burgers & smash burgers": "Burgers & smash burgers",
    "Menu : frites et boisson pour 15 DH de plus": "Meal: fries and a drink for 15 DH more",
    "British Big Tasty": "British Big Tasty",
    "Bœuf frais 150 g, fromage, salade, tomate, oignon et sauce Big Tasty": "150 g fresh beef, cheese, lettuce, tomato, onion and Big Tasty sauce",
    "Smash Burger": "Smash burger",
    "Double Smash Burger": "Double smash burger",
    "British Flames Signature Burger": "British Flames signature burger",
    "Double burger poulet croustillant": "Double crispy chicken burger",
    "Tacos Nuggets": "Nugget tacos",
    "Tacos Döner": "Döner tacos",
    "Tacos XL": "XL tacos",
    "Végétarienne": "Vegetarian",
    "Thon & Maïs": "Tuna & sweetcorn",
    "Poulet Peri-Peri": "Peri-Peri chicken",
    "Shawarma Poulet": "Chicken shawarma",
    "Döner Bœuf": "Beef döner",
    "Meat Feast": "Meat feast",
    "Offre 3 pizzas au choix": "Any 3 pizzas deal",
    "American Hot Dog": "American hot dog",
    "Crispy Onion Hot Dog": "Crispy onion hot dog",
    "British Flames Hot Dog": "British Flames hot dog",
    "Crispy Chicken Box": "Crispy chicken box",
    "Double Crispy Chicken Box": "Double crispy chicken box",
    "Nuggets Box": "Nugget box",
    "Cordon Bleu Box": "Cordon bleu box",
    "Döner & shawarma": "Döner & shawarma",
    "Mini Döner Bœuf": "Mini beef döner",
    "Sandwich Döner Bœuf": "Beef döner sandwich",
    "Wrap Döner Bœuf": "Beef döner wrap",
    "Wrap Döner + frites": "Döner wrap + fries",
    "Assiette Döner Bœuf": "Beef döner plate",
    "Wrap mixte poulet & bœuf": "Mixed chicken & beef wrap",
    "Mini Shawarma Poulet": "Mini chicken shawarma",
    "Shawarma Poulet + frites": "Chicken shawarma + fries",
    "Sandwichs": "Sandwiches",
    "Sandwichs marocains": "Moroccan sandwiches",
    "Sandwich Poulet": "Chicken sandwich",
    "Sandwich Kefta": "Kofta sandwich",
    "Sandwich Thon": "Tuna sandwich",
    "Sandwich Mixte": "Mixed sandwich",
    "Sandwich Saucisses": "Sausage sandwich",
    "Paninis": "Paninis",
    "Paninis grillés": "Grilled paninis",
    "Panini Poulet": "Chicken panini",
    "Panini Viande Hachée": "Minced beef panini",
    "Panini Thon": "Tuna panini",
    "Panini Dinde Fumée": "Smoked turkey panini",
    "Panini Mixte": "Mixed panini",
    "Panini Döner": "Döner panini",
    "Beurre": "Butter",
    "Fromage": "Cheese",
    "Thon, mayonnaise & maïs": "Tuna, mayonnaise & sweetcorn",
    "Poulet grillé & fromage": "Grilled chicken & cheese",
    "Shawarma & fromage": "Shawarma & cheese",
    "Döner Bœuf & fromage": "Beef döner & cheese",
    "Salade mixte": "Mixed salad",
    "Salade Poulet Peri-Peri": "Peri-Peri chicken salad",
    "Grandes frites": "Large fries",
    "Frites Peri-Peri": "Peri-Peri fries",
    "Loaded Fries Poulet": "Chicken loaded fries",
    "Loaded Fries Kefta": "Kofta loaded fries",
    "Loaded Fries Döner": "Döner loaded fries",
    "Pasticcio": "Pasticcio",
    "Pasticcio Poulet": "Chicken pasticcio",
    "Pasticcio Viande Hachée": "Minced beef pasticcio",
    "Pasticcio Mixte": "Mixed pasticcio",
    "Frites et boisson incluses": "Fries and a drink included",
    "Kids Nuggets Box": "Kids nugget box",
    "Kids Mini Pizza Box": "Kids mini pizza box",
    "Kids Cheeseburger Box": "Kids cheeseburger box",
    "Kids Crispy Chicken Box": "Kids crispy chicken box",
    "Spécialités marocaines": "Moroccan specialities",
    "Le dimanche : plat du jour selon disponibilité, prix à confirmer": "Sunday: dish of the day depending on availability, price to be confirmed",
    "Tajine Viande": "Meat tagine",
    "Tajine Poulet": "Chicken tagine",
    "Tajine Kefta & œufs": "Kofta & egg tagine",
    "Tajine Kebda": "Liver tagine",
    "Le lundi": "Monday",
    "Le mardi": "Tuesday",
    "Le mercredi": "Wednesday",
    "Le jeudi": "Thursday",
    "Le vendredi": "Friday",
    "Flan Royale": "Flan royale",
    "Canette. Coca-Cola, Pepsi, 7Up, Hawaï, Pom's, Mirinda, Orangina": "Can. Coca-Cola, Pepsi, 7Up, Hawaï, Pom's, Mirinda, Orangina",
    "Tonic": "Tonic",
    "25 cl ou 33 cl": "25 cl or 33 cl",
    "Rubicon": "Rubicon",

    /* ----- Page : textes mis à jour avec la nouvelle carte ----- */
    "Des frites et une boisson pour 15 DH de plus. La formule existe pour les burgers, les tacos, les sandwichs, les paninis et le döner.":
      "Fries and a drink for 15 DH more. The deal is available for burgers, tacos, sandwiches, paninis and döner.",
    "Le vendredi uniquement. Légumes à 29 DH, poulet à 39 DH, bœuf à 49 DH. Les tajines changent chaque jour : viande le lundi, poulet le mardi, kefta et œufs le mercredi, kebda le jeudi.":
      "Fridays only. Vegetable 29 DH, chicken 39 DH, beef 49 DH. The tagine changes every day: meat on Monday, chicken on Tuesday, kofta and egg on Wednesday, liver on Thursday.",
    "Frites et boisson incluses, avec au choix des nuggets, une mini pizza, un cheeseburger ou du poulet croustillant. De 35 à 39 DH.":
      "Fries and a drink included, with a choice of nuggets, a mini pizza, a cheeseburger or crispy chicken. From 35 to 39 DH.",
    "Livrez-vous à domicile ?": "Do you deliver?",
    "Oui. Commandez directement par téléphone ou WhatsApp au +212 663 630 768. La zone et les frais de livraison sont confirmés lors de la commande.":
      "Yes. Order directly by phone or WhatsApp on +212 663 630 768. The delivery area and fee are confirmed when you order.",
    "Complexe Kawasim, Tanger": "Complexe Kawasim, Tangier",
    "Desserte Qur Golf": "Desserte Qur Golf",
    "Commandes et livraison à domicile": "Orders and home delivery",
    "Commander sur WhatsApp": "Order on WhatsApp"
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

    /* ----- Flamme du curseur ----- */
    "Flamme curseur : activée": "Llama del cursor: activada",
    "Flamme curseur : désactivée": "Llama del cursor: desactivada",

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
    "Sidi Ali": "Sidi Ali",

    /* ----- Nouvelle carte (British_Flames_Impression_Big_Tasty) ----- */
    "Offres": "Ofertas",
    "Offres d'ouverture": "Ofertas de apertura",
    "Frites et sauce incluses, soda pour 8 DH de plus. Offre limitée.": "Patatas y salsa incluidas, refresco por 8 DH más. Oferta limitada.",
    "Formules famille": "Menús familiares",
    "Formules à partager": "Para compartir",
    "Pour 2 : 2 × ¼ poulet Peri-Peri, 2 portions de frites, 2 boissons, 2 sauces": "Para 2: 2 × ¼ de pollo Peri-Peri, 2 raciones de patatas, 2 bebidas, 2 salsas",
    "Pour 3 à 4 : 1 poulet entier Peri-Peri, grandes frites, salade, 4 boissons, sauces": "Para 3 o 4: 1 pollo entero Peri-Peri, patatas grandes, ensalada, 4 bebidas, salsas",
    "Pour 3 à 4 : 3 pizzas au choix, grandes frites, 4 boissons": "Para 3 o 4: 3 pizzas a elegir, patatas grandes, 4 bebidas",
    "Pour 4 : 2 cheeseburgers, 2 wraps döner ou poulet, 5 chicken wings, 2 grandes frites, 4 boissons, sauces": "Para 4: 2 hamburguesas con queso, 2 wraps de döner o pollo, 5 alitas, 2 patatas grandes, 4 bebidas, salsas",
    "Peri-Peri": "Peri-Peri",
    "Peri-Peri, poulet grillé à la flamme": "Peri-Peri, pollo a la llama",
    "Grillades servies avec frites, salade et sauce. Wings avec frites et sauce. Sauces : citron et herbes, doux, medium, hot, extra hot.":
      "Las parrilladas llevan patatas, ensalada y salsa. Las alitas llevan patatas y salsa. Salsas: limón y hierbas, suave, media, picante, extra picante.",
    "¼ Poulet Peri-Peri": "¼ de pollo Peri-Peri",
    "½ Poulet Peri-Peri": "½ pollo Peri-Peri",
    "Poulet entier Peri-Peri": "Pollo entero Peri-Peri",
    "Filet de poulet grillé": "Filete de pollo a la parrilla",
    "3 Pilons de poulet": "3 muslos de pollo",
    "5 Chicken Wings": "5 alitas de pollo",
    "Chicken Wings": "Alitas de pollo",
    "7 pièces": "7 piezas",
    "10 pièces": "10 piezas",
    "Wrap poulet Peri-Peri": "Wrap de pollo Peri-Peri",
    "Burger poulet Peri-Peri": "Hamburguesa de pollo Peri-Peri",
    "Grillades": "Parrilla",
    "Bœuf grillé à la flamme": "Ternera a la llama",
    "Cheeseburger Flame Grilled": "Hamburguesa con queso a la llama",
    "Double Flame Grilled Burger": "Hamburguesa doble a la llama",
    "Burger Döner Bœuf": "Hamburguesa döner de ternera",
    "Assiette kefta grillée": "Plato de kefta a la parrilla",
    "Assiette brochettes de bœuf": "Plato de brochetas de ternera",
    "Mixed Grill Poulet & Bœuf": "Parrillada mixta de pollo y ternera",
    "Burgers & smash burgers": "Hamburguesas y smash burgers",
    "Menu : frites et boisson pour 15 DH de plus": "Menú: patatas y bebida por 15 DH más",
    "British Big Tasty": "British Big Tasty",
    "Bœuf frais 150 g, fromage, salade, tomate, oignon et sauce Big Tasty": "Ternera fresca de 150 g, queso, lechuga, tomate, cebolla y salsa Big Tasty",
    "Smash Burger": "Smash burger",
    "Double Smash Burger": "Smash burger doble",
    "British Flames Signature Burger": "Hamburguesa insignia British Flames",
    "Double burger poulet croustillant": "Hamburguesa doble de pollo crujiente",
    "Tacos Nuggets": "Tacos de nuggets",
    "Tacos Döner": "Tacos de döner",
    "Tacos XL": "Tacos XL",
    "Végétarienne": "Vegetariana",
    "Thon & Maïs": "Atún y maíz",
    "Poulet Peri-Peri": "Pollo Peri-Peri",
    "Shawarma Poulet": "Shawarma de pollo",
    "Döner Bœuf": "Döner de ternera",
    "Meat Feast": "Carnívora",
    "Offre 3 pizzas au choix": "Oferta 3 pizzas a elegir",
    "American Hot Dog": "Perrito americano",
    "Crispy Onion Hot Dog": "Perrito con cebolla crujiente",
    "British Flames Hot Dog": "Perrito British Flames",
    "Crispy Chicken Box": "Caja de pollo crujiente",
    "Double Crispy Chicken Box": "Caja doble de pollo crujiente",
    "Nuggets Box": "Caja de nuggets",
    "Cordon Bleu Box": "Caja de cordon bleu",
    "Döner & shawarma": "Döner y shawarma",
    "Mini Döner Bœuf": "Mini döner de ternera",
    "Sandwich Döner Bœuf": "Bocadillo döner de ternera",
    "Wrap Döner Bœuf": "Wrap döner de ternera",
    "Wrap Döner + frites": "Wrap döner + patatas",
    "Assiette Döner Bœuf": "Plato döner de ternera",
    "Wrap mixte poulet & bœuf": "Wrap mixto de pollo y ternera",
    "Mini Shawarma Poulet": "Mini shawarma de pollo",
    "Shawarma Poulet + frites": "Shawarma de pollo + patatas",
    "Sandwichs": "Bocadillos",
    "Sandwichs marocains": "Bocadillos marroquíes",
    "Sandwich Poulet": "Bocadillo de pollo",
    "Sandwich Kefta": "Bocadillo de kefta",
    "Sandwich Thon": "Bocadillo de atún",
    "Sandwich Mixte": "Bocadillo mixto",
    "Sandwich Saucisses": "Bocadillo de salchichas",
    "Paninis": "Paninis",
    "Paninis grillés": "Paninis a la plancha",
    "Panini Poulet": "Panini de pollo",
    "Panini Viande Hachée": "Panini de carne picada",
    "Panini Thon": "Panini de atún",
    "Panini Dinde Fumée": "Panini de pavo ahumado",
    "Panini Mixte": "Panini mixto",
    "Panini Döner": "Panini de döner",
    "Beurre": "Mantequilla",
    "Fromage": "Queso",
    "Thon, mayonnaise & maïs": "Atún, mayonesa y maíz",
    "Poulet grillé & fromage": "Pollo a la parrilla y queso",
    "Shawarma & fromage": "Shawarma y queso",
    "Döner Bœuf & fromage": "Döner de ternera y queso",
    "Salade mixte": "Ensalada mixta",
    "Salade Poulet Peri-Peri": "Ensalada de pollo Peri-Peri",
    "Grandes frites": "Patatas grandes",
    "Frites Peri-Peri": "Patatas Peri-Peri",
    "Loaded Fries Poulet": "Patatas cargadas de pollo",
    "Loaded Fries Kefta": "Patatas cargadas de kefta",
    "Loaded Fries Döner": "Patatas cargadas de döner",
    "Pasticcio": "Pasticcio",
    "Pasticcio Poulet": "Pasticcio de pollo",
    "Pasticcio Viande Hachée": "Pasticcio de carne picada",
    "Pasticcio Mixte": "Pasticcio mixto",
    "Frites et boisson incluses": "Patatas y bebida incluidas",
    "Kids Nuggets Box": "Caja infantil de nuggets",
    "Kids Mini Pizza Box": "Caja infantil de mini pizza",
    "Kids Cheeseburger Box": "Caja infantil de hamburguesa con queso",
    "Kids Crispy Chicken Box": "Caja infantil de pollo crujiente",
    "Spécialités marocaines": "Especialidades marroquíes",
    "Le dimanche : plat du jour selon disponibilité, prix à confirmer": "Domingo: plato del día según disponibilidad, precio por confirmar",
    "Tajine Viande": "Tajín de carne",
    "Tajine Poulet": "Tajín de pollo",
    "Tajine Kefta & œufs": "Tajín de kefta y huevos",
    "Tajine Kebda": "Tajín de hígado",
    "Le lundi": "Los lunes",
    "Le mardi": "Los martes",
    "Le mercredi": "Los miércoles",
    "Le jeudi": "Los jueves",
    "Le vendredi": "Los viernes",
    "Flan Royale": "Flan royale",
    "Canette. Coca-Cola, Pepsi, 7Up, Hawaï, Pom's, Mirinda, Orangina": "Lata. Coca-Cola, Pepsi, 7Up, Hawaï, Pom's, Mirinda, Orangina",
    "Tonic": "Tónica",
    "25 cl ou 33 cl": "25 cl o 33 cl",
    "Rubicon": "Rubicon",

    /* ----- Page : textes mis à jour avec la nouvelle carte ----- */
    "Des frites et une boisson pour 15 DH de plus. La formule existe pour les burgers, les tacos, les sandwichs, les paninis et le döner.":
      "Patatas y bebida por 15 DH más. El menú está disponible para hamburguesas, tacos, bocadillos, paninis y döner.",
    "Le vendredi uniquement. Légumes à 29 DH, poulet à 39 DH, bœuf à 49 DH. Les tajines changent chaque jour : viande le lundi, poulet le mardi, kefta et œufs le mercredi, kebda le jeudi.":
      "Solo los viernes. Verduras 29 DH, pollo 39 DH, ternera 49 DH. El tajín cambia cada día: carne el lunes, pollo el martes, kefta y huevos el miércoles, hígado el jueves.",
    "Frites et boisson incluses, avec au choix des nuggets, une mini pizza, un cheeseburger ou du poulet croustillant. De 35 à 39 DH.":
      "Patatas y bebida incluidas, a elegir entre nuggets, mini pizza, hamburguesa con queso o pollo crujiente. De 35 a 39 DH.",
    "Livrez-vous à domicile ?": "¿Hacéis entregas a domicilio?",
    "Oui. Commandez directement par téléphone ou WhatsApp au +212 663 630 768. La zone et les frais de livraison sont confirmés lors de la commande.":
      "Sí. Pide directamente por teléfono o WhatsApp al +212 663 630 768. La zona y el coste de entrega se confirman al hacer el pedido.",
    "Complexe Kawasim, Tanger": "Complexe Kawasim, Tánger",
    "Desserte Qur Golf": "Desserte Qur Golf",
    "Commandes et livraison à domicile": "Pedidos y entrega a domicilio",
    "Commander sur WhatsApp": "Pedir por WhatsApp"
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
