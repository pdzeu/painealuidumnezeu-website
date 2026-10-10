// Conținut preluat de pe painealuidumnezeu.ro (colecțiile CMS din Webflow).

export type MenuItem = {
  name: string
  description?: string
  /** preț în RON */
  price?: string
  weight?: string
  kcal?: string
  macros?: string
  badge?: string
  image?: string
}

export type MenuCategory = {
  title: string
  items: MenuItem[]
}

export type MenuSection = {
  id: string
  label: string
  layout: "cards" | "list"
  categories: MenuCategory[]
}

export const menuSections: MenuSection[] = [
  {
    "id": "paine",
    "label": "Pâine & patiserie",
    "layout": "cards",
    "categories": [
      {
        "title": "Pâine",
        "items": [
          {
            "name": "Toscana love",
            "description": "Făină albă de grâu neaditivată, praz, mâsline, ardei gras, sare de mare iodată, maia",
            "weight": "450 g",
            "badge": "Nou",
            "image": "/images/menu/toscana-love.jpg"
          },
          {
            "name": "Tomato & basil",
            "description": "Făină albă de grâu neaditivată, roșii uscate și busuioc, sare de mare iodată, maia",
            "weight": "450 g",
            "badge": "Nou",
            "image": "/images/menu/tomato-basil.jpg"
          },
          {
            "name": "Potato",
            "description": "Făină albă de grâu neaditivată, cartofi, sare de mare iodată, maia",
            "weight": "450 g",
            "badge": "Nou",
            "image": "/images/menu/potato.jpg"
          },
          {
            "name": "Campagne",
            "description": "Făină albă de grâu neaditivată și de secară, malț și sare de mare iodată",
            "weight": "450 g",
            "badge": "Nou",
            "image": "/images/menu/campagne.jpg"
          },
          {
            "name": "Chiflă burger",
            "description": "Făina albă de grâu neaditivată, apă, ou, lapte, maia,susan negru",
            "weight": "100 g",
            "badge": "Nou",
            "image": "/images/menu/chifla-burger.jpg"
          },
          {
            "name": "Nordica",
            "description": "Făină de secara neaditivată, sare de mare iodată, maia, semințe",
            "weight": "450 g",
            "badge": "Nou",
            "image": "/images/menu/nordica.jpg"
          },
          {
            "name": "Tordue",
            "description": "Făină albă de grâu neaditivată, sare de mare iodată, maia",
            "weight": "450 g",
            "badge": "Nou",
            "image": "/images/menu/tordue.jpg"
          },
          {
            "name": "Toast alb la tavă",
            "description": "Făină albă de grâu neaditivată, sare de mare iodată, maia",
            "weight": "750 g",
            "badge": "Nou",
            "image": "/images/menu/toast-alb-la-tava.jpg"
          },
          {
            "name": "Kamut & Hriscă",
            "description": "Făină de kamut & hrișcă neaditivată, sare de mare iodată, maia",
            "weight": "450 g",
            "badge": "Nou",
            "image": "/images/menu/kamut-hrisca.jpg"
          },
          {
            "name": "Indian love",
            "description": "Făină albă de grâu neaditivată, curry,sare de mare iodată, maia",
            "weight": "450 g",
            "image": "/images/menu/indian-love.jpg"
          },
          {
            "name": "Integrală bob întreg",
            "description": "Făină albă de grâu neaditivată din întreg bobul,sare de mare iodată, maia",
            "weight": "450 g",
            "badge": "Nou",
            "image": "/images/menu/integrala-bob-intreg.jpg"
          },
          {
            "name": "Corn",
            "description": "Făină albă de grâu neaditivată, mălai, sare de mare iodată, maia",
            "weight": "450 g",
            "badge": "Nou",
            "image": "/images/menu/corn.jpg"
          },
          {
            "name": "Boule Blanc",
            "description": "Făină albă de grâu neaditivată, sare de mare iodată, maia",
            "weight": "450 g",
            "image": "/images/menu/boule-blanc.jpg"
          },
          {
            "name": "Boule de Meule Blanc",
            "description": "Făină albă de grâu neaditivată, sare de mare iodată, maia",
            "weight": "1020 g",
            "image": "/images/menu/boule-de-meule-blanc.jpg"
          },
          {
            "name": "Boule de Meule",
            "description": "Făină integrală de grâu neaditivată, sare de mare iodată, maia",
            "weight": "1030 g",
            "image": "/images/menu/boule-de-meule.jpg"
          },
          {
            "name": "Boule de Seigle (Secară)",
            "description": "Făină de secară neaditivată, sare de mare iodată, maia",
            "weight": "500 g",
            "image": "/images/menu/boule-de-seigle-secara.jpg"
          },
          {
            "name": "D'Orient cu Sare Maldon",
            "description": "Făină alba de grâu neaditivată, sare de mare iodată maia, sare Maldon",
            "weight": "500 g",
            "badge": "Special",
            "image": "/images/menu/d-orient-cu-sare-maldon.jpg"
          },
          {
            "name": "D'Orient Sandwich (Ciabatta)",
            "description": "Făină albă de grâu neaditivată, sare de mare iodată, maia",
            "weight": "180 g",
            "image": "/images/menu/d-orient-sandwich-ciabatta.jpg"
          },
          {
            "name": "Graines Baguette Blanche",
            "description": "Făină albă de grâu neaditivată, sare de mare iodată, maia, semințe",
            "weight": "350 g",
            "image": "/images/menu/graines-baguette-blanche.jpg"
          },
          {
            "name": "Graines Blanche (la tava)",
            "description": "Făină albă de grâu neaditivată, sare de mare iodată, maia, semințe",
            "weight": "900 g",
            "image": "/images/menu/graines-blanche-la-tava.jpg"
          },
          {
            "name": "Graines Blanche",
            "description": "Făină albă de grâu neaditivată, sare de mare iodată, maia",
            "weight": "500 g",
            "image": "/images/menu/graines-blanche.jpg"
          },
          {
            "name": "Graines Noir (Integrală cu Semințe)",
            "description": "Făină albă de grâu neaditivată, sare de mare iodată, maia, semințe",
            "weight": "500 g",
            "image": "/images/menu/graines-noir-integrala-cu-seminte.jpg"
          },
          {
            "name": "Onion (Albă cu Ceapă)",
            "description": "Făină albă de grâu neaditivată, sare de mare iodată, maia, ceapă confiată",
            "weight": "550 g",
            "image": "/images/menu/onion-alba-cu-ceapa.jpg"
          },
          {
            "name": "Spelta+Secară",
            "description": "Făină spleta si secară neaditivată, sare de mare iodată, maia",
            "weight": "500 g",
            "image": "/images/menu/spelta-secara.jpg"
          },
          {
            "name": "Pâine cu Fructe Confiate și Alune de Pădure",
            "description": "Făină neagră de grâu neaditivată, sare de mare iodată, maia, fructe confiate",
            "weight": "500 g",
            "image": "/images/menu/paine-cu-fructe-confiate-si-alune-de-padure.jpg"
          },
          {
            "name": "Zardicef (Turmeric cu Semințe de Susan)",
            "price": "14",
            "description": "Făină alba de grau neaditivata, sare de mare iodata, maia, susan negru",
            "weight": "400 g",
            "image": "/images/menu/zardicef-turmeric-cu-seminte-de-susan.jpg"
          }
        ]
      },
      {
        "title": "Patiserie",
        "items": [
          {
            "name": "Cannele",
            "description": "Lapte 4, unt 82, zahăr, faină, ou, rom",
            "weight": "50 g",
            "badge": "Dulce",
            "image": "/images/menu/cannele.jpg"
          },
          {
            "name": "Almond & Nuts Cookie",
            "description": "Făină de migdale, zahăr, albuș de ou",
            "weight": "180 g",
            "image": "/images/menu/almond-nuts-cookie.jpg"
          },
          {
            "name": "Chocolate Cookie",
            "description": "cacao, unt 82, ou, ciocolată, faină",
            "weight": "180 g",
            "image": "/images/menu/chocolate-cookie.jpg"
          }
        ]
      },
      {
        "title": "Cafea",
        "items": [
          {
            "name": "Colombia exotico",
            "description": "zahăr brun, alune de pâdure, mâr",
            "weight": "250 g",
            "badge": "Special",
            "image": "/images/menu/colombia-exotico.jpg"
          },
          {
            "name": "Costa rica el cedro",
            "description": "ciocolatâ, miere",
            "weight": "250 g",
            "badge": "Special",
            "image": "/images/menu/costa-rica-el-cedro.jpg"
          },
          {
            "name": "Brazil olhos d'agua",
            "description": "ciocolată, unt, nuci",
            "weight": "250 g",
            "badge": "Special",
            "image": "/images/menu/brazil-olhos-d-agua.jpg"
          },
          {
            "name": "Confort blend",
            "description": "marțipan, caramel, stafide",
            "weight": "250 g",
            "badge": "Special",
            "image": "/images/menu/confort-blend.jpg"
          }
        ]
      }
    ]
  },
  {
    "id": "mancare",
    "label": "Meniu mâncare",
    "layout": "list",
    "categories": [
      {
        "title": "De pofta",
        "items": [
          {
            "name": "De intins pe paine",
            "price": "67",
            "description": "Salata de vinete, Zacusca, Icre, mix paine",
            "weight": "600 g",
            "kcal": "821",
            "macros": "11.17g proteine, 104.1g grasimi, 10.95g carbo"
          },
          {
            "name": "Omleta Pe Plita",
            "price": "35",
            "description": "oua, fontina, cotto, rucola, rosii cherry",
            "weight": "600 g",
            "kcal": "646",
            "macros": "52.5g proteine, 41.5g grasimi, 12.4g carbo"
          },
          {
            "name": "Matinal",
            "price": "39",
            "description": "brioche, fontina, oua, prosciutto cotto, rucola, rosii cherry",
            "weight": "600 g",
            "kcal": "438",
            "macros": "38g proteine, 28g grasimi, 4.7g carbo"
          }
        ]
      },
      {
        "title": "Sandwich",
        "items": [
          {
            "name": "Sandwich vegetarian",
            "price": "45",
            "description": "pesto, stracciatella, rosii cherry, pleurotus, ciabatta",
            "weight": "642 g",
            "macros": "18.2g proteine, 54.8g grasimi, 61g carbo"
          },
          {
            "name": "Sandwich putin iute",
            "price": "50",
            "description": "schiaciata, crema branza, vinete coapte, salam ventricina picant",
            "weight": "535 g",
            "macros": "24g proteine, 43g grasimi, 8g carbo"
          },
          {
            "name": "Bagel somon",
            "price": "55",
            "description": "Bagel, crema branza, somon, rucola",
            "weight": "540 g",
            "macros": "30.9g proteine, 26.1g grasimi, 39g carbo"
          },
          {
            "name": "Sandwich prosciuto cotto",
            "price": "64",
            "description": "focaccia, pesto, stracciatella, rosii cherry, prosciutto cotto",
            "weight": "1130 g",
            "macros": "48g proteine, 50g grasimi, 104g carbo"
          },
          {
            "name": "French dip sandwich",
            "price": "69",
            "description": "ceafa vita, sos hrean, ceapa caramelizata, fontina, sos dip, baguette",
            "weight": "1506 g",
            "macros": "59.5g proteine, 102g grasimi, 46g carbo"
          },
          {
            "name": "Sandwich prosciuto crudo",
            "price": "55",
            "description": "pesto, stracciatella, rosii cherry, prosciutto cotto, focaccia",
            "weight": "1130 g",
            "macros": "44g proteine, 50g grasimi, 104g carbo"
          },
          {
            "name": "Sandwich mortadella",
            "description": "focaccia, rucola, pesto, stracciatella, mortadella",
            "weight": "1084 g",
            "macros": "38g proteine, 64g grasimi, 105g carbo"
          }
        ]
      },
      {
        "title": "Special",
        "items": [
          {
            "name": "Burger vita",
            "price": "58",
            "description": "sos hrean, carne, bbq sos, rosie, castravete murat, bacon, cedar, chifla",
            "weight": "1243 g",
            "macros": "56g proteine, 72.5g grasimi, 63g carbo"
          }
        ]
      },
      {
        "title": "Clatite",
        "items": [
          {
            "name": "Clatita Atena",
            "price": "45",
            "description": "aluat, feta & masline, ceapa verde, castravete, ardei copt",
            "weight": "822 g",
            "macros": "27g proteine, 42g grasimi, 75g carbo"
          },
          {
            "name": "Clatita clasica",
            "price": "45",
            "description": "aluat, prosciutto cotto, fontina, rosii confiate, ceapa caramelizata, castravete",
            "weight": "938 g",
            "macros": "54g proteine, 42.3g grasimi, 71.6g carbo"
          }
        ]
      }
    ]
  },
  {
    "id": "racoritoare",
    "label": "Băuturi răcoritoare",
    "layout": "list",
    "categories": [
      {
        "title": "Băuturi răcoritoare",
        "items": [
          {
            "name": "Apă Boresc minerală plată",
            "price": "15",
            "weight": "750 ml"
          },
          {
            "name": "Ceai",
            "price": "18",
            "weight": "250 ml"
          },
          {
            "name": "Coca-Cola Zero",
            "price": "8",
            "weight": "150 ml"
          },
          {
            "name": "Apă Boresc minerală plată",
            "price": "10",
            "weight": "330 ml"
          },
          {
            "name": "Coca-Cola",
            "price": "8",
            "weight": "150 ml"
          },
          {
            "name": "Limonadă cu miere și mentă",
            "price": "15",
            "weight": "500 ml"
          },
          {
            "name": "Aqua Carpatica apă fructată",
            "price": "10",
            "weight": "330 ml"
          },
          {
            "name": "Sanpellegrino",
            "price": "13",
            "weight": "330 ml"
          },
          {
            "name": "Suc de cătină",
            "price": "15",
            "weight": "500 ml"
          },
          {
            "name": "Cortado",
            "price": "14",
            "weight": "90 ml"
          },
          {
            "name": "Espresso",
            "price": "11",
            "weight": "20 ml"
          },
          {
            "name": "Cappuccino",
            "price": "16",
            "weight": "150 ml"
          },
          {
            "name": "Flat white",
            "price": "19",
            "weight": "150 ml"
          },
          {
            "name": "Babyccino",
            "price": "12",
            "weight": "150 ml"
          },
          {
            "name": "Americano",
            "price": "14",
            "weight": "90 ml"
          },
          {
            "name": "Lapte alternativ",
            "price": "4"
          },
          {
            "name": "Latte",
            "price": "19",
            "weight": "150 ml"
          },
          {
            "name": "Espresso dublu",
            "price": "14",
            "weight": "40 ml"
          },
          {
            "name": "Olovina Pils",
            "price": "13",
            "weight": "330 ml"
          },
          {
            "name": "Vin la pahar",
            "price": "19",
            "weight": "150 ml"
          },
          {
            "name": "Bere draft",
            "weight": "330 ml"
          },
          {
            "name": "Heineken blondă",
            "price": "14",
            "weight": "330 ml"
          },
          {
            "name": "Birra Moretti Sale di Mare",
            "price": "14",
            "weight": "330 ml"
          }
        ]
      }
    ]
  },
  {
    "id": "vinuri",
    "label": "Meniu vinuri",
    "layout": "list",
    "categories": [
      {
        "title": "Vinuri",
        "items": [
          {
            "name": "Salentini Pinot Puglia",
            "price": "999",
            "description": "Un vin alb rafinat din sudul Italiei, din regiunea Puglia, caracterizată de climatul cald și influențele mediteraneene. Acest Pinot impresionează prin prospețime și echilibru, având un profil aromatic delicat, cu note de piersică albă, nectarină și accente fine de miere.",
            "weight": "750 ml"
          },
          {
            "name": "Rosato Salento",
            "price": "63",
            "description": "Salentini Rosato Salento este un rosé proaspăt din sudul Italiei, din Salento, cu arome de fructe roșii, căpșuni și note florale delicate. Lejer, echilibrat și răcoritor, este ideal ca aperitiv sau alături de salate, pește și preparate ușoare.",
            "weight": "750 ml"
          },
          {
            "name": "El Cortez XO Rosu",
            "price": "65",
            "description": "El Cortez XO Roșu este un vin roșu intens și expresiv, cu arome de fructe negre coapte, vanilie și ușoare note de stejar. Corpolent și bine structurat, se potrivește foarte bine cu preparate din carne roșie sau brânzeturi maturate.",
            "weight": "750 ml"
          },
          {
            "name": "Primitivo Salentini Rosu",
            "price": "55",
            "description": "Salentini Primitivo Roșu este un vin bogat și catifelat din sudul Italiei, obținut din struguri cultivați în Salento, cu arome intense de prune, cireșe negre și note fine de condimente dulci. Corpolent și rotund, este ideal alături de carne la grătar, paste consistente sau brânzeturi maturate.",
            "weight": "750 ml"
          },
          {
            "name": "Mierla Alba Cupaj Rosu",
            "price": "250",
            "description": "Mierla Albă Cupaj Roșu este un vin echilibrat și prietenos, cu arome de fructe roșii coapte, vișine și note fine condimentate. Ușor de băut și versatil, se potrivește bine cu preparate din carne, paste sau platouri de brânzeturi.",
            "weight": "750 ml"
          },
          {
            "name": "Ardenghi Prosecco",
            "price": "70",
            "description": "Ardenghi Prosecco este un spumant italian proaspăt și elegant, din zona Veneto, cu arome fine de mere verzi, pere și flori albe. Lejer și răcoritor, este ideal ca aperitiv sau pentru momente festive.",
            "weight": "750 ml"
          },
          {
            "name": "Ariglas Vermentino",
            "price": "88",
            "description": "Ariglas Vermentino este un vin alb proaspăt și aromat, specific insulei Sardinia, cu note de citrice, fructe exotice și accente minerale fine. Lejer și elegant, este potrivit pentru pește, fructe de mare sau preparate ușoare.",
            "weight": "750 ml"
          },
          {
            "name": "Bolgiu Spiritul Sfant",
            "price": "120",
            "description": "Bolgiu Spiritul Sfânt este un vin roșu expresiv, cu arome de fructe negre coapte, prune uscate și note discrete de condimente. Echilibrat și plin, este potrivit pentru preparate din carne roșie, vânat sau brânzeturi maturate.",
            "weight": "750 ml"
          },
          {
            "name": "Gourmet Entrecote",
            "price": "65",
            "description": "Gourmet Entrecôte este un preparat rafinat din mușchi de vită fraged, gătit la perfecție pentru a păstra suculența și aroma intensă a cărnii. Servit cu garnituri alese și sos fin, este o opțiune ideală pentru iubitorii de preparate consistente și elegante.",
            "weight": "750 ml"
          },
          {
            "name": "Gourmet Camembert",
            "price": "65",
            "description": "Gourmet Camembert este un brânză fină și cremoasă, cu gust delicat și note ușor dulci, perfectă pentru aperitive sau platouri sofisticate. Servită cu fructe proaspete sau pâine crocantă, oferă o experiență rafinată și echilibrată.",
            "weight": "750 ml"
          },
          {
            "name": "Fruit de Mere Vin Alb",
            "price": "65",
            "description": "Fruit de Mere Vin Alb este un vin alb proaspăt și fructat, cu arome delicate de mere verzi și note florale subtile. Ușor și revigorant, se potrivește perfect cu aperitive, salate sau preparate ușoare din pește.",
            "weight": "750 ml"
          },
          {
            "name": "Tenuta Ulisse Amaranta",
            "price": "149",
            "description": "Tenuta Ulisse Amaranta este un vin roșu elegant din regiunea Abruzzo, cu arome intense de fructe roșii și negre coapte, note subtile de condimente și accente ușor florale. Corpolent și rotund, se potrivește de minune cu carne roșie, paste consistente sau brânzeturi maturate.",
            "weight": "750 ml"
          },
          {
            "name": "Scaia Chardonnay",
            "price": "98",
            "description": "Scaia Chardonnay este un vin alb elegant din regiunea Veneto, cu arome fine de mere coapte, pere și note subtile de vanilie. Lejer și armonios, se potrivește perfect cu pește, fructe de mare sau preparate ușoare din pui.",
            "weight": "750 ml"
          }
        ]
      }
    ]
  }
]

const bakery = menuSections[0].categories

export const breadItems = bakery.find((c) => c.title === "Pâine")!.items
export const pastryItems = bakery.find((c) => c.title === "Patiserie")!.items
