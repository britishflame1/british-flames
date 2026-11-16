/*
  British Flames : la carte.
  Source : British_Flames_Menu_Francais-2.pdf

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
*/
window.BF_MENU = [
  {
    id: "burgers", label: "Burgers", title: "Nos burgers", ratio: "1 / 1",
    items: [
      { n: "Burger classique", img: "burger-classique" },
      { n: "Cheeseburger", img: "cheeseburger" },
      { n: "Double cheeseburger", img: "double-cheeseburger" },
      { n: "Triple burger", img: "triple-burger", best: 1 },
      { n: "Burger poulet grillé", img: "burger-poulet-grille" },
      { n: "Burger poulet croustillant", img: "burger-poulet-croustillant" }
    ]
  },
  {
    id: "tacos", label: "Tacos", title: "Tacos français", ratio: "2 / 1", wide: true,
    note: "Menu tacos : frites et boisson pour 15 DH de plus",
    items: [
      { n: "Tacos Poulet", img: "tacos-poulet", p: 45 },
      { n: "Tacos Viande Hachée", img: "tacos-viande-hachee", p: 49 },
      { n: "Tacos Poulet Croustillant", img: "tacos-poulet-croustillant", p: 49 },
      { n: "Tacos Cordon Bleu", img: "tacos-cordon-bleu", p: 52 },
      { n: "Tacos Mixte", img: "tacos-mixte", p: 55 },
      { n: "Tacos Spécial British Flames", img: "tacos-special", p: 59, best: 2 }
    ]
  },
  {
    id: "pizzas", label: "Pizzas", title: "Nos pizzas", ratio: "2 / 1", wide: true,
    items: [
      { n: "Margherita", img: "pizza-margherita", p: 45 },
      { n: "Poulet", img: "pizza-poulet", p: 49 },
      { n: "Thon", img: "pizza-thon", p: 49 },
      { n: "Viande Hachée", img: "pizza-viande-hachee", p: 52 },
      { n: "Quatre Fromages", img: "pizza-quatre-fromages", p: 55 },
      { n: "Spéciale British Flames", img: "pizza-speciale", p: 59, best: 3, bn: "Pizza Spéciale British Flames" },
      { n: "Pepperoni halal", img: "pizza-pepperoni", p: 55, fit: "contain" },
      { n: "Jambon de dinde & Fromage", img: "pizza-jambon-dinde", p: 49, fit: "contain" }
    ]
  },
  {
    id: "hot-dogs", label: "Hot-dogs", title: "Hot-dogs briochés", ratio: "4 / 3",
    items: [
      { n: "Hot-dog classique", img: "hotdog-classique" },
      { n: "Hot-dog cheddar", img: "hotdog-cheddar" },
      { n: "Hot-dog gourmand", img: "hotdog-gourmand" },
      { n: "Hot-dog épicé", img: "hotdog-epice" },
      { n: "Hot-dog croustillant", img: "hotdog-croustillant" }
    ]
  },
  {
    id: "poulet-croustillant", label: "Poulet croustillant", title: "Poulet croustillant & box", ratio: "2 / 1", wide: true,
    items: [
      { n: "Tenders de poulet", img: "tenders", p: [["3 pièces", 39], ["5 pièces", 55]] },
      { n: "Ailes de poulet", img: "ailes", p: [["6 pièces", 39]] },
      { n: "Nuggets", img: "nuggets-6", p: [["6 pièces", 25]] },
      { n: "Crunchy Box", img: "crunchy-box", p: 59 },
      { n: "Box Mixte", img: "box-mixte", p: 79 }
    ]
  },
  {
    id: "shawarma-kebab", label: "Shawarma & kebab", title: "Shawarma & kebab", ratio: "5 / 2", wide: true,
    note: "Menu sandwich : frites et boisson pour 15 DH de plus",
    items: [
      { n: "Sandwich Shawarma Poulet", img: "shawarma-poulet", p: 39 },
      { n: "Sandwich Kebab Bœuf", img: "kebab-boeuf", p: 45 },
      { n: "Sandwich Shawarma Mixte", img: "shawarma-mixte", p: 49 },
      { n: "Assiette Shawarma Poulet", img: "assiette-shawarma-poulet", p: 59 },
      { n: "Assiette Kebab Bœuf", img: "assiette-kebab-boeuf", p: 65 },
      { n: "Assiette Mixte", img: "assiette-mixte", p: 75 }
    ]
  },
  {
    id: "baguettes", label: "Baguettes", title: "Sandwichs baguette", ratio: "5 / 2", wide: true,
    note: "Menu sandwich : frites et boisson pour 15 DH de plus",
    items: [
      { n: "Poulet Grillé", img: "baguette-poulet-grille", p: [["Seul", 39], ["En menu", 54]] },
      { n: "Viande Hachée", img: "baguette-viande-hachee", p: [["Seul", 42], ["En menu", 57]] },
      { n: "Merguez", img: "baguette-merguez", p: [["Seul", 42], ["En menu", 57]] },
      { n: "Thon", img: "baguette-thon", p: [["Seul", 39], ["En menu", 54]] },
      { n: "Mixte", img: "baguette-mixte", p: [["Seul", 49], ["En menu", 64]] },
      { n: "Spécial British Flames", img: "baguette-special", p: [["Seul", 55], ["En menu", 70]] }
    ]
  },
  {
    id: "poulet-roti", label: "Poulet rôti", title: "Poulet rôti", ratio: "5 / 2", wide: true,
    note: "Menus servis avec frites, salade et sauce au choix",
    items: [
      { n: "Quart de Poulet", img: "quart-poulet", p: 29 },
      { n: "Demi-Poulet", img: "demi-poulet", p: 49 },
      { n: "Poulet Entier", img: "poulet-entier", p: 89 },
      { n: "Menu Quart de Poulet", img: "menu-quart-poulet", p: 45 },
      { n: "Menu Demi-Poulet", img: "menu-demi-poulet", p: 65 },
      { n: "Menu Familial Poulet Entier", img: "menu-familial", p: 119 }
    ]
  },
  {
    id: "fish-chips", label: "Fish & chips", title: "Fish & chips", ratio: "3 / 2",
    items: [
      { n: "Fish & Chips", img: "fish-and-chips", p: 59, best: 4, fit: "contain", d: "Poisson pané croustillant, frites dorées et sauce" }
    ]
  },
  {
    id: "pommes-de-terre", label: "Pommes de terre", title: "Pommes de terre au four", ratio: "2 / 1", wide: true,
    note: "Supplément fromage : 5 DH",
    items: [
      { n: "Nature", img: "potato-nature", p: 29 },
      { n: "Cheddar", img: "potato-cheddar", p: 39 },
      { n: "Thon", img: "potato-thon", p: 45 },
      { n: "Poulet", img: "potato-poulet", p: 45 },
      { n: "Viande Hachée", img: "potato-viande-hachee", p: 49 },
      { n: "Mixte", img: "potato-mixte", p: 55 }
    ]
  },
  {
    id: "salades", label: "Salades", title: "Salades", ratio: "3 / 2",
    note: "Supplément poulet : 10 DH",
    items: [
      { n: "Salade Composée", img: "salade-composee", p: 35 },
      { n: "Salade Thon", img: "salade-thon", p: 39 },
      { n: "Salade Poulet Grillé", img: "salade-poulet-grille", p: 45 },
      { n: "Salade César", img: "salade-cesar", p: 49 }
    ]
  },
  {
    id: "frites-snacks", label: "Frites & snacks", title: "Frites & snacks", ratio: "1 / 1",
    items: [
      { n: "Frites classiques", img: "frites-classiques" },
      { n: "Frites cheddar", img: "frites-cheddar" },
      { n: "Frites gourmandes", img: "frites-gourmandes" },
      { n: "Nuggets", img: "nuggets" },
      { n: "Rondelles d'oignon", img: "rondelles-oignon" },
      { n: "Bâtonnets de mozzarella", img: "batonnets-mozzarella" }
    ]
  },
  {
    id: "enfants", label: "Enfants", title: "Menus enfants", ratio: "3 / 2",
    note: "Chaque menu comprend : frites, jus et surprise",
    items: [
      { n: "Mini Burger", img: "kids-mini-burger", p: 39 },
      { n: "4 Nuggets", img: "kids-nuggets", p: 39 },
      { n: "2 Tenders", img: "kids-tenders", p: 45 }
    ]
  },
  {
    id: "couscous", label: "Couscous", title: "Couscous du vendredi", ratio: "3 / 2",
    note: "Disponible chaque vendredi",
    items: [
      { n: "Couscous aux Légumes", img: "couscous-legumes", p: 59 },
      { n: "Couscous au Poulet", img: "couscous-poulet", p: 65 },
      { n: "Couscous au Bœuf", img: "couscous-boeuf", p: 69 }
    ]
  },
  {
    id: "desserts", label: "Desserts", title: "Desserts", ratio: "1 / 1",
    items: [
      { n: "Tiramisu Classique", img: "tiramisu-classique", p: 25 },
      { n: "Tiramisu Oreo", img: "tiramisu-oreo", p: 29 },
      { n: "Tiramisu Lotus", img: "tiramisu-lotus", p: 29 },
      { n: "Cheesecake Fraise", img: "cheesecake-fraise", p: 29 },
      { n: "Cheesecake Chocolat", img: "cheesecake-chocolat", p: 29 },
      { n: "Mousse au Chocolat", img: "mousse-chocolat", p: 25 }
    ]
  },
  {
    id: "boissons", label: "Boissons", title: "Boissons", list: true,
    items: [
      { n: "Sodas", img: "sodas", p: 12, d: "Canette 33 cl. Coca-Cola, Pepsi, 7up, Mirinda, Orangina, Hawaï, Schweppes" },
      { n: "Jus frais", img: "jus-frais", p: 18, d: "Selon saison. Orange, citron, carotte, pomme ou mixte" },
      { n: "Red Bull", img: "red-bull", p: 25, d: "25 cl" },
      { n: "Lipton Ice Tea", img: "lipton", p: 15, d: "50 cl" },
      { n: "Cappy", img: "cappy", p: 12, d: "25 cl" },
      { n: "Oulmès", img: "oulmes", p: 10, d: "25 cl" },
      { n: "Sidi Ali", img: "sidi-ali-25", p: 6, d: "25 cl" },
      { n: "Sidi Ali", img: "sidi-ali-33", p: 8, d: "33 cl" }
    ]
  }
];
