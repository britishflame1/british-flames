/*
  British Flames : la carte.
  Sources : British_Flames_Menu_Francais-2.pdf, puis British_Flames_Impression_Big_Tasty(1).pdf
  (nouvelle carte : ses prix remplacent les anciens ; les plats absents de la nouvelle carte gardent leur ancien prix).

  Pour chaque plat :
    n     nom affiché
    img   fichier dans assets/img (sans extension)
    p     prix en DH. Un nombre, ou une liste [libellé, prix] quand il y a plusieurs formats.
          Sans "p", la carte affiche "Prix à confirmer".
    d     petite précision sous le nom (facultatif)
    best  rang dans les best sellers, de 1 à 4 (facultatif)
    bn    nom affiché dans les best sellers quand il diffère de "n" (facultatif)
    fit   "contain" pour les photos détourées (facultatif)

  Pour chaque famille :
    ratio   format des photos de la famille
    wide    true quand les photos sont panoramiques (3 colonnes au lieu de 4)
    list    true pour un affichage compact en lignes (boissons)
    note    information affichée sous le titre de la famille

  Chaque nouveau nom ou texte doit aussi avoir sa traduction anglaise dans js/i18n.js.
*/
window.BF_MENU = [
  {
    id: "offres", label: "Offres", title: "Offres d'ouverture", ratio: "1 / 1",
    note: "Frites et sauce incluses, soda pour 8 DH de plus. Offre limitée.",
    items: [
      { n: "¼ Poulet Peri-Peri", img: "peri-quart", p: 35 },
      { n: "5 Chicken Wings", img: "peri-wings", p: 39 },
      { n: "Wrap Döner Bœuf", img: "doner-wrap", p: 39 }
    ]
  },
  {
    id: "familles", label: "Formules famille", title: "Formules à partager", ratio: "1 / 1",
    items: [
      { n: "Peri-Peri Duo", img: "famille-peri-duo", p: 105, d: "Pour 2 : 2 × ½ poulet Peri-Peri, 2 portions de frites, 2 boissons, 2 sauces" },
      { n: "Family Chicken", img: "famille-chicken", p: 185, d: "Pour 3 à 4 : 1 poulet entier Peri-Peri, grandes frites, salade, 4 boissons, sauces" },
      { n: "Family Pizza", img: "famille-pizza", p: 239, d: "Pour 3 à 4 : 3 pizzas au choix, grandes frites, 4 boissons" },
      { n: "Mixed Family Box", img: "famille-mixed-box", p: 265, d: "Pour 4 : 2 cheeseburgers, 2 wraps döner ou poulet, 5 chicken wings, 2 grandes frites, 4 boissons, sauces" }
    ]
  },
  {
    id: "peri-peri", label: "Peri-Peri", title: "Peri-Peri, poulet grillé à la flamme", ratio: "1 / 1",
    note: "Grillades servies avec frites, salade et sauce. Wings avec frites et sauce. Sauces : citron et herbes, doux, medium, hot, extra hot.",
    items: [
      { n: "¼ Poulet Peri-Peri", img: "peri-quart", p: 35 },
      { n: "½ Poulet Peri-Peri", img: "peri-quart", p: 59 },
      { n: "Poulet entier Peri-Peri", img: "peri-entier", p: 109 },
      { n: "Filet de poulet grillé", img: "peri-quart", p: 49 },
      { n: "3 Pilons de poulet", img: "peri-quart", p: 39 },
      { n: "Chicken Wings", img: "peri-wings", p: [["3 pièces", 29], ["5 pièces", 39], ["7 pièces", 49], ["10 pièces", 65]] },
      { n: "Wrap poulet Peri-Peri", img: "shawarma-wrap", p: 39 },
      { n: "Burger poulet Peri-Peri", img: "burger-poulet-grille", p: 39 }
    ]
  },
  {
    id: "grillades", label: "Grillades", title: "Bœuf grillé à la flamme", ratio: "1 / 1",
    items: [
      { n: "Cheeseburger Flame Grilled", img: "cheeseburger", p: 35 },
      { n: "Double Flame Grilled Burger", img: "flame-double-burger", p: 49 },
      { n: "Burger Döner Bœuf", img: "burger-classique", p: 39 },
      { n: "Assiette kefta grillée", img: "grill-kefta", p: 55 },
      { n: "Assiette brochettes de bœuf", img: "grill-kefta", p: 65 },
      { n: "Mixed Grill Poulet & Bœuf", img: "grill-kefta", p: 75 }
    ]
  },
  {
    id: "burgers", label: "Burgers", title: "Burgers & smash burgers", ratio: "1 / 1",
    note: "Menu : frites et boisson pour 15 DH de plus",
    items: [
      { n: "British Big Tasty", img: "big-tasty", p: 49, best: 1, d: "Bœuf frais 150 g, fromage, salade, tomate, oignon et sauce Big Tasty" },
      { n: "Burger classique", img: "burger-classique", p: 29 },
      { n: "Cheeseburger", img: "cheeseburger", p: 35 },
      { n: "Smash Burger", img: "smash-double-burger", p: 39 },
      { n: "Double Smash Burger", img: "smash-double-burger", p: 55 },
      { n: "British Flames Signature Burger", img: "double-cheeseburger", p: 59 },
      { n: "Double cheeseburger", img: "double-cheeseburger" },
      { n: "Triple burger", img: "triple-burger" },
      { n: "Burger poulet grillé", img: "burger-poulet-grille" },
      { n: "Burger poulet croustillant", img: "burger-poulet-croustillant", p: 39 },
      { n: "Double burger poulet croustillant", img: "burger-poulet-croustillant", p: 55 }
    ]
  },
  {
    id: "tacos", label: "Tacos", title: "Tacos français", ratio: "2 / 1", wide: true,
    note: "Menu tacos : frites et boisson pour 15 DH de plus. Suppléments : gratiné 10 DH, extra fromage 3 DH, cordon bleu 10 DH, viande hachée 20 DH, nuggets 5 DH",
    items: [
      { n: "Tacos Poulet", img: "tacos-poulet", p: 35 },
      { n: "Tacos Viande Hachée", img: "tacos-viande-hachee", p: 39 },
      { n: "Tacos Nuggets", img: "tacos-poulet-croustillant", p: 35 },
      { n: "Tacos Poulet Croustillant", img: "tacos-poulet-croustillant", p: 49 },
      { n: "Tacos Cordon Bleu", img: "tacos-cordon-bleu", p: 39 },
      { n: "Tacos Mixte", img: "tacos-mixte", p: 45 },
      { n: "Tacos Döner", img: "tacos-viande-hachee", p: 45 },
      { n: "Tacos XL", img: "tacos-special", p: 59 },
      { n: "Tacos Spécial British Flames", img: "tacos-special", p: 59, best: 2 }
    ]
  },
  {
    id: "pizzas", label: "Pizzas", title: "Nos pizzas", ratio: "2 / 1", wide: true,
    items: [
      { n: "Margherita", img: "pizza-margherita", p: 35 },
      { n: "Végétarienne", img: "pizza-margherita", p: 40 },
      { n: "Thon & Maïs", img: "pizza-thon", p: 45 },
      { n: "Jambon de dinde & Fromage", img: "pizza-jambon-dinde", p: 45, fit: "contain" },
      { n: "Pepperoni halal", img: "pizza-pepperoni", p: 49, fit: "contain" },
      { n: "Poulet", img: "pizza-poulet", p: 49 },
      { n: "Poulet Peri-Peri", img: "pizza-poulet", p: 49 },
      { n: "Shawarma Poulet", img: "pizza-poulet", p: 49 },
      { n: "Viande Hachée", img: "pizza-viande-hachee", p: 52 },
      { n: "Döner Bœuf", img: "pizza-viande-hachee", p: 55 },
      { n: "Meat Feast", img: "pizza-speciale", p: 55 },
      { n: "Quatre Fromages", img: "pizza-quatre-fromages", p: 55 },
      { n: "Spéciale British Flames", img: "pizza-speciale", p: 59, best: 3, bn: "Pizza Spéciale British Flames" },
      { n: "Offre 3 pizzas au choix", img: "famille-pizza", p: 139 }
    ]
  },
  {
    id: "hot-dogs", label: "Hot-dogs", title: "Hot-dogs briochés", ratio: "4 / 3",
    items: [
      { n: "Hot-dog classique", img: "hotdog-classique", p: 25 },
      { n: "American Hot Dog", img: "hotdog-epice", p: 29 },
      { n: "Hot-dog cheddar", img: "hotdog-cheddar", p: 32 },
      { n: "Crispy Onion Hot Dog", img: "hotdog-gourmand", p: 32 },
      { n: "British Flames Hot Dog", img: "hotdog-croustillant", p: 39 },
      { n: "Hot-dog gourmand", img: "hotdog-gourmand" },
      { n: "Hot-dog épicé", img: "hotdog-epice" },
      { n: "Hot-dog croustillant", img: "hotdog-croustillant" }
    ]
  },
  {
    id: "poulet-croustillant", label: "Poulet croustillant", title: "Poulet croustillant & box", ratio: "2 / 1", wide: true,
    items: [
      { n: "Crispy Chicken Box", img: "crunchy-box", p: 45, d: "2 pièces, frites et boisson" },
      { n: "Double Crispy Chicken Box", img: "box-mixte", p: 55, d: "4 pièces, frites et boisson" },
      { n: "Nuggets Box", img: "nuggets-6", p: [["6 pièces", 35], ["12 pièces", 55]] },
      { n: "Cordon Bleu Box", img: "crunchy-box", p: 39 },
      { n: "Tenders de poulet", img: "tenders", p: [["3 pièces", 39], ["5 pièces", 55]] },
      { n: "Ailes de poulet", img: "ailes", p: [["6 pièces", 39]] },
      { n: "Nuggets", img: "nuggets-6", p: [["6 pièces", 25]] },
      { n: "Crunchy Box", img: "crunchy-box", p: 59 },
      { n: "Box Mixte", img: "box-mixte", p: 79 }
    ]
  },
  {
    id: "shawarma-kebab", label: "Döner & shawarma", title: "Döner & shawarma", ratio: "5 / 2", wide: true,
    note: "Menu sandwich : frites et boisson pour 15 DH de plus",
    items: [
      { n: "Mini Döner Bœuf", img: "doner-wrap", p: 25 },
      { n: "Sandwich Döner Bœuf", img: "kebab-boeuf", p: 35 },
      { n: "Wrap Döner Bœuf", img: "doner-wrap", p: 39 },
      { n: "Wrap Döner + frites", img: "doner-wrap", p: 45 },
      { n: "Assiette Döner Bœuf", img: "assiette-kebab-boeuf", p: 55 },
      { n: "Wrap mixte poulet & bœuf", img: "shawarma-mixte", p: 45 },
      { n: "Mini Shawarma Poulet", img: "shawarma-wrap", p: 25 },
      { n: "Shawarma Poulet + frites", img: "shawarma-wrap", p: 39 },
      { n: "Sandwich Shawarma Poulet", img: "shawarma-poulet", p: 39 },
      { n: "Sandwich Shawarma Mixte", img: "shawarma-mixte", p: 49 },
      { n: "Assiette Shawarma Poulet", img: "assiette-shawarma-poulet", p: 49 },
      { n: "Assiette Mixte", img: "assiette-mixte", p: 75 }
    ]
  },
  {
    id: "baguettes", label: "Sandwichs", title: "Sandwichs marocains", ratio: "5 / 2", wide: true,
    note: "Menu sandwich : frites et boisson pour 15 DH de plus",
    items: [
      { n: "Sandwich Poulet", img: "baguette-poulet-grille", p: 25 },
      { n: "Sandwich Kefta", img: "baguette-viande-hachee", p: 30 },
      { n: "Sandwich Thon", img: "baguette-thon", p: 25 },
      { n: "Sandwich Mixte", img: "baguette-mixte", p: 35 },
      { n: "Sandwich Saucisses", img: "baguette-merguez", p: 25 },
      { n: "Merguez", img: "baguette-merguez", p: [["Seul", 42], ["En menu", 57]] },
      { n: "Spécial British Flames", img: "baguette-special", p: [["Seul", 55], ["En menu", 70]] }
    ]
  },
  {
    id: "paninis", label: "Paninis", title: "Paninis grillés", ratio: "3 / 2",
    note: "Menu : frites et boisson pour 20 DH de plus",
    items: [
      { n: "Panini Poulet", img: "panini", p: 34 },
      { n: "Panini Viande Hachée", img: "panini", p: 40 },
      { n: "Panini Thon", img: "panini", p: 34 },
      { n: "Panini Dinde Fumée", img: "panini", p: 34 },
      { n: "Panini Mixte", img: "panini", p: 47 },
      { n: "Panini Döner", img: "panini", p: 47 }
    ]
  },
  {
    id: "poulet-roti", label: "Poulet rôti", title: "Poulet rôti", ratio: "5 / 2", wide: true,
    note: "Menus servis avec frites, salade et sauce au choix",
    items: [
      { n: "Quart de Poulet", img: "quart-poulet", p: 29 },
      { n: "Demi-Poulet", img: "demi-poulet", p: 49 },
      { n: "Poulet Entier", img: "poulet-entier", p: 95 },
      { n: "Menu Quart de Poulet", img: "menu-quart-poulet", p: 45 },
      { n: "Menu Demi-Poulet", img: "menu-demi-poulet", p: 65 },
      { n: "Menu Familial Poulet Entier", img: "menu-familial", p: 119 }
    ]
  },
  {
    id: "fish-chips", label: "Fish & chips", title: "Fish & chips", ratio: "3 / 2",
    items: [
      { n: "Fish & Chips", img: "fish-and-chips", p: 49, best: 4, fit: "contain", d: "Poisson pané croustillant, frites dorées et sauce" }
    ]
  },
  {
    id: "pommes-de-terre", label: "Pommes de terre", title: "Pommes de terre au four", ratio: "2 / 1", wide: true,
    note: "Supplément fromage : 5 DH",
    items: [
      { n: "Beurre", img: "potato-nature", p: 20 },
      { n: "Fromage", img: "potato-cheddar", p: 29 },
      { n: "Thon, mayonnaise & maïs", img: "potato-thon", p: 35 },
      { n: "Poulet grillé & fromage", img: "potato-poulet", p: 39 },
      { n: "Shawarma & fromage", img: "potato-poulet", p: 39 },
      { n: "Döner Bœuf & fromage", img: "potato-viande-hachee", p: 45 },
      { n: "Viande Hachée", img: "potato-viande-hachee", p: 49 },
      { n: "Mixte", img: "potato-mixte", p: 55 }
    ]
  },
  {
    id: "salades", label: "Salades", title: "Salades", ratio: "3 / 2",
    note: "Supplément poulet : 10 DH",
    items: [
      { n: "Salade mixte", img: "salade-composee", p: 25 },
      { n: "Salade Thon", img: "salade-thon", p: 30 },
      { n: "Salade Poulet Peri-Peri", img: "salade-peri", p: 35 },
      { n: "Salade Poulet Grillé", img: "salade-poulet-grille", p: 45 },
      { n: "Salade César", img: "salade-cesar", p: 49 }
    ]
  },
  {
    id: "frites-snacks", label: "Frites & snacks", title: "Frites & snacks", ratio: "1 / 1",
    items: [
      { n: "Frites classiques", img: "frites-classiques", p: 10, d: "150 g" },
      { n: "Grandes frites", img: "frites-classiques", p: 15, d: "250 g" },
      { n: "Frites Peri-Peri", img: "frites-gourmandes", p: 15 },
      { n: "Frites cheddar", img: "frites-cheddar", p: 20 },
      { n: "Loaded Fries Poulet", img: "loaded-fries", p: 35 },
      { n: "Loaded Fries Kefta", img: "loaded-fries", p: 39 },
      { n: "Loaded Fries Döner", img: "loaded-fries", p: 45 },
      { n: "Frites gourmandes", img: "frites-gourmandes" },
      { n: "Nuggets", img: "nuggets" },
      { n: "Rondelles d'oignon", img: "rondelles-oignon" },
      { n: "Bâtonnets de mozzarella", img: "batonnets-mozzarella" }
    ]
  },
  {
    id: "pasticcio", label: "Pasticcio", title: "Pasticcio", ratio: "1 / 1",
    items: [
      { n: "Pasticcio Poulet", img: "pasticcio", p: 35 },
      { n: "Pasticcio Viande Hachée", img: "pasticcio", p: 39 },
      { n: "Pasticcio Mixte", img: "pasticcio", p: 45 }
    ]
  },
  {
    id: "enfants", label: "Enfants", title: "Menus enfants", ratio: "3 / 2",
    note: "Frites et boisson incluses",
    items: [
      { n: "Kids Nuggets Box", img: "kids-nuggets", p: 35 },
      { n: "Kids Mini Pizza Box", img: "pizza-margherita", p: 35 },
      { n: "Kids Cheeseburger Box", img: "kids-mini-burger", p: 39 },
      { n: "Kids Crispy Chicken Box", img: "kids-tenders", p: 39 }
    ]
  },
  {
    id: "couscous", label: "Spécialités marocaines", title: "Spécialités marocaines", ratio: "3 / 2",
    note: "Le dimanche : plat du jour selon disponibilité, prix à confirmer",
    items: [
      { n: "Tajine Viande", img: "tajine", p: 49, d: "Le lundi" },
      { n: "Tajine Poulet", img: "tajine", p: 35, d: "Le mardi" },
      { n: "Tajine Kefta & œufs", img: "tajine", p: 39, d: "Le mercredi" },
      { n: "Tajine Kebda", img: "tajine", p: 55, d: "Le jeudi" },
      { n: "Couscous aux Légumes", img: "couscous-legumes", p: 29, d: "Le vendredi" },
      { n: "Couscous au Poulet", img: "couscous-poulet", p: 39, d: "Le vendredi" },
      { n: "Couscous au Bœuf", img: "couscous-boeuf", p: 49, d: "Le vendredi" }
    ]
  },
  {
    id: "desserts", label: "Desserts", title: "Desserts", ratio: "1 / 1",
    items: [
      { n: "Flan Royale", img: "flan-royale", p: 20 },
      { n: "Tiramisu Classique", img: "tiramisu-classique", p: 25 },
      { n: "Mousse au Chocolat", img: "mousse-chocolat", p: 25 },
      { n: "Tiramisu Oreo", img: "tiramisu-oreo", p: 29 },
      { n: "Tiramisu Lotus", img: "tiramisu-lotus", p: 29 },
      { n: "Cheesecake Fraise", img: "cheesecake-fraise", p: 29 },
      { n: "Cheesecake Chocolat", img: "cheesecake-chocolat", p: 29 }
    ]
  },
  {
    id: "boissons", label: "Boissons", title: "Boissons", list: true,
    items: [
      { n: "Sodas", img: "sodas", p: 10, d: "Canette. Coca-Cola, Pepsi, 7Up, Hawaï, Pom's, Mirinda, Orangina" },
      { n: "Tonic", img: "boissons-fraiches", p: 10, d: "25 cl" },
      { n: "Cappy", img: "cappy", p: 10, d: "25 cl" },
      { n: "Sidi Ali", img: "sidi-ali-33", p: 5, d: "25 cl ou 33 cl" },
      { n: "Oulmès", img: "oulmes", p: 8, d: "25 cl" },
      { n: "Lipton Ice Tea", img: "lipton", p: 15, d: "50 cl" },
      { n: "Jus frais", img: "jus-frais", p: 18, d: "Selon saison. Orange, citron, carotte, pomme ou mixte" },
      { n: "Rubicon", img: "boissons-fraiches", p: 20 },
      { n: "Red Bull", img: "red-bull", p: [["25 cl", 25], ["33 cl", 30]] }
    ]
  }
];
