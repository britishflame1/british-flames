/*
  British Flames : langues du site.

  Le français est écrit dans la page et dans menu-data.js. Ce fichier contient
  la version anglaise : chaque ligne associe le texte français exact à sa traduction.
  Pour corriger une traduction, modifier la partie droite. Un texte français absent
  de cette liste reste affiché en français.

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

  const TITLES = {
    fr: "British Flames | Burgers, tacos, pizzas et fish & chips",
    en: "British Flames | Burgers, tacos, pizzas and fish & chips"
  };

  /* ---------- Choix de la langue ---------- */
  const KEY = "bf-lang";
  let lang = null;
  try { lang = localStorage.getItem(KEY); } catch (err) { /* stockage indisponible */ }
  // Un lien terminé par #en ou #fr impose la langue (pratique pour partager la version anglaise).
  const fromHash = window.location.hash.slice(1);
  if (fromHash === "fr" || fromHash === "en") lang = fromHash;
  if (lang !== "fr" && lang !== "en") {
    lang = (navigator.language || "fr").toLowerCase().startsWith("en") ? "en" : "fr";
  }

  // t("texte {n}", { n: 3 }) : traduit puis remplace les {variables}.
  const t = (text, vars) => {
    let out = lang === "en" && Object.prototype.hasOwnProperty.call(EN, text) ? EN[text] : text;
    if (vars) Object.keys(vars).forEach((k) => { out = out.split(`{${k}}`).join(vars[k]); });
    return out;
  };
  window.BF_LANG = lang;
  window.BF_T = t;

  /* ---------- Traduction de la page et de la carte ---------- */
  if (lang === "en") {
    document.documentElement.lang = "en";
    document.querySelectorAll("body > div[lang='fr']").forEach((el) => { el.lang = "en"; });
    if (/\|/.test(document.title)) document.title = TITLES.en;

    // Textes visibles
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style, .map-svg text")) return;
      const raw = node.nodeValue;
      const key = raw.trim();
      if (key && Object.prototype.hasOwnProperty.call(EN, key)) node.nodeValue = raw.replace(key, EN[key]);
    });
    // Titre et description du plan (lus par les lecteurs d'écran)
    document.querySelectorAll(".map-svg title, .map-svg desc").forEach((el) => { el.textContent = t(el.textContent.trim()); });
    // Attributs
    ["aria-label", "placeholder", "alt"].forEach((attr) => {
      document.querySelectorAll(`[${attr}]`).forEach((el) => {
        const v = el.getAttribute(attr);
        if (Object.prototype.hasOwnProperty.call(EN, v)) el.setAttribute(attr, EN[v]);
      });
    });

    // Carte : familles, plats, précisions et formats
    (window.BF_MENU || []).forEach((cat) => {
      cat.label = t(cat.label);
      cat.title = t(cat.title);
      if (cat.note) cat.note = t(cat.note);
      cat.items.forEach((it) => {
        it.n = t(it.n);
        if (it.bn) it.bn = t(it.bn);
        if (it.d) it.d = t(it.d);
        if (Array.isArray(it.p)) it.p = it.p.map(([label, price]) => [t(label), price]);
      });
    });
  }

  /* ---------- Bouton de langue ---------- */
  document.querySelectorAll(".lang").forEach((group) => {
    group.setAttribute("aria-label", t("Langue"));
    group.querySelectorAll("button[data-lang]").forEach((btn) => {
      const on = btn.dataset.lang === lang;
      btn.setAttribute("aria-pressed", String(on));
      btn.addEventListener("click", () => {
        if (btn.dataset.lang === lang) return;
        try { localStorage.setItem(KEY, btn.dataset.lang); } catch (err) { /* stockage indisponible */ }
        // La langue est aussi écrite dans l'adresse : elle survit au rechargement même sans stockage.
        window.location.hash = btn.dataset.lang;
        window.location.reload();
      });
    });
  });
})();
