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
  /** alergeni, separați prin virgulă */
  allergens?: string
  image?: string
}

export type MenuCategory = {
  title: string
  /** mențiune scurtă afișată sub titlu, ex. „Numai în weekend” */
  note?: string
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
        "title": "De întins pe pâine",
        "items": [
          {
            "name": "De întins pe pâine",
            "price": "67",
            "description": "Icre de știucă (icre, ulei de floarea soarelui, ceapă, sare)\nSalată de vinete (vinete coapte, ulei de floarea soarelui, sare)\nZacuscă făcută în casă (morcov, ceapă, ardei copți, suc de roșii)\nHumus oriental (năut, tahini, stafide-coniac, ardei copt, roșii deshidratate, suc de lămâie, apă minerală)\nMix pâine 80 g",
            "weight": "450 g",
            "allergens": "pește, gluten"
          }
        ]
      },
      {
        "title": "De înmuiat pâine",
        "items": [
          {
            "name": "Salată vară",
            "price": "35",
            "description": "roșii | castraveți | ardei gras | ceapă | dressing",
            "weight": "350 g",
            "allergens": "gluten"
          },
          {
            "name": "French dip sandwich",
            "price": "69",
            "description": "baghetă franțuzească | ceafă de vită coaptă lent de noi | ceapă caramelizată | cașcaval Fontina | sos de hrean | supă de vită",
            "weight": "350 g",
            "allergens": "gluten, lactate, muștar"
          },
          {
            "name": "Supa zilei",
            "price": "39",
            "description": "Întrebați colegii sau bucătarul!",
            "weight": "300 ml",
            "allergens": "lactate"
          }
        ]
      },
      {
        "title": "Cu pâine de dimineață",
        "items": [
          {
            "name": "Omletă pe plită",
            "price": "35",
            "description": "ou | cașcaval Fontina | prosciutto cotto | unt",
            "weight": "280 g / 400 g",
            "allergens": "ouă, lactate"
          },
          {
            "name": "Sandwich matinal",
            "price": "39",
            "description": "pain brioche | cașcaval Fontina | prosciutto cotto | 2x ou ochi | unt",
            "weight": "300 g",
            "allergens": "gluten, ouă, lactate"
          },
          {
            "name": "Scramble în croissant",
            "price": "39",
            "description": "cremă de brânză | unt | lapte | ou | prosciutto crudo | civas",
            "weight": "250 g",
            "badge": "Nou",
            "allergens": "gluten, ouă, lactate"
          },
          {
            "name": "Ouă turcești",
            "price": "45",
            "description": "ouă poșate | humus | ulei picant | ulei de busuioc",
            "weight": "300 g",
            "badge": "Nou",
            "allergens": "gluten, ouă, lactate"
          },
          {
            "name": "Omletă în brioche sandwich",
            "price": "39",
            "description": "ou | ulei de floarea soarelui | sos maioneză | brânză feta | castravete | roșii grase | sare",
            "weight": "300 g",
            "badge": "Nou",
            "allergens": "gluten, ouă, lactate"
          }
        ]
      },
      {
        "title": "Doar salate",
        "items": [
          {
            "name": "Salată brânză de capră cu miere",
            "price": "45",
            "description": "mix salată (spanac, rucola, romană) | dressing (miere, ulei de măsline, suc de lămâie, muștar Dijon) | brânză de capră",
            "weight": "250 g",
            "badge": "Nou",
            "allergens": "lactate, muștar"
          },
          {
            "name": "Salată italiană",
            "price": "30",
            "description": "parmezan | roșii cherry | oțet | mix salată (spanac, rucola, romană) | dressing mediteranean | reducție de aceto",
            "weight": "250 g",
            "allergens": "lactate"
          },
          {
            "name": "Salată cu creveți sotați",
            "price": "55",
            "description": "salată romană | dressing Caesar | crutoane | creveți sotați în unt și vin",
            "weight": "250 g",
            "badge": "Nou"
          }
        ]
      },
      {
        "title": "Pâine toată ziua",
        "items": [
          {
            "name": "Mortadella în focaccia",
            "price": "55",
            "description": "focaccia | pesto de busuioc | mortadella pe plită | stracciatella | rucola",
            "weight": "300 g",
            "allergens": "gluten, lactate, nuci și derivate"
          },
          {
            "name": "Prosciutto cotto în focaccia",
            "price": "64",
            "description": "focaccia | pesto de busuioc | roșii confiate | prosciutto cotto | stracciatella",
            "weight": "330 g",
            "allergens": "gluten, lactate"
          },
          {
            "name": "Burger vită",
            "price": "58",
            "description": "chiflă brioche cu susan | chiftea din carne de vită Argentina | roșii | cheddar | castraveți murați",
            "weight": "350 g",
            "allergens": "gluten, ouă, lactate, susan"
          },
          {
            "name": "Smashed burger",
            "price": "58",
            "description": "chiflă artizanală cu maia, lapte și unt 82% grăsime | carne de vită | bacon | ceapă caramelizată | cheddar",
            "weight": "300 g",
            "allergens": "gluten, ouă, lactate"
          },
          {
            "name": "Veggie sandwich",
            "price": "45",
            "description": "ciabatta | pleurotus copt | pesto de busuioc | stracciatella | roșii cherry confiate | rucola",
            "weight": "330 g",
            "allergens": "gluten, lactate, susan"
          },
          {
            "name": "Bagel cu somon",
            "price": "45",
            "description": "bagel | cremă de brânză cu condimente | somon afumat | salată",
            "weight": "300 g",
            "allergens": "gluten, lactate, susan"
          },
          {
            "name": "Creveți în brioche",
            "price": "50",
            "description": "chiflă brioche cu susan | creveți în pesmet tempura | mix salată | maioneză picantă",
            "weight": "300 g",
            "allergens": "gluten, lactate, susan"
          },
          {
            "name": "Sandwich muncitoresc",
            "price": "25",
            "description": "chiflă din aluat malaxat cu muștar | parizer pane",
            "weight": "300 g",
            "allergens": "gluten, muștar"
          },
          {
            "name": "Sardine sandwich",
            "price": "45",
            "description": "baghetă franțuzească | sardine în ulei de măsline MissCan (Portugalia, captură sălbatică) | lămâie | ou | ceapă murată | capere prăjite",
            "weight": "350 g",
            "badge": "Nou",
            "allergens": "gluten, ouă"
          },
          {
            "name": "Toast cu ton",
            "price": "49",
            "description": "toast cu pesto de pătrunjel | ton | capere | ceapă | muștar | maioneză | ou fiert",
            "weight": "300 g",
            "badge": "Nou",
            "allergens": "gluten, muștar, ouă"
          },
          {
            "name": "Toast cu guacamole",
            "price": "55",
            "description": "toast cu pesto de pătrunjel | ou poșat | guacamole | cremette | unt aromatizat | cașcaval Fontina | sos olandez",
            "weight": "300 g",
            "badge": "Nou",
            "allergens": "gluten, muștar, ouă"
          },
          {
            "name": "Hot dog clasic",
            "price": "50",
            "description": "baghetă cu susan | crenvurști | muștar | ketchup",
            "weight": "300 g",
            "badge": "Nou",
            "allergens": "gluten, muștar, susan"
          },
          {
            "name": "Hot dog trufă",
            "price": "58",
            "description": "baghetă cu susan | crenvurști | salată iceberg | salsa de trufe | bacon | maioneză | castravete murat | sos cheddar | ceapă crocantă",
            "weight": "300 g",
            "badge": "Nou",
            "allergens": "gluten, ouă, susan"
          },
          {
            "name": "Hot dog picant",
            "price": "50",
            "description": "baghetă cu susan | crenvurști | salată iceberg | ulei picant | chorizo | maioneză | castravete murat | sos cheddar | ceapă crocantă | sriracha",
            "weight": "300 g",
            "badge": "Nou",
            "allergens": "gluten, ouă, susan"
          },
          {
            "name": "Pâinaș – aproape papanaș",
            "price": "49",
            "description": "pain brioche | lapte | ou | unt | dulceață de vișine de casă | smântână dulce | zahăr",
            "weight": "350 g",
            "badge": "Nou",
            "allergens": "ouă"
          }
        ]
      },
      {
        "title": "Fără pâine",
        "note": "Numai în weekend",
        "items": [
          {
            "name": "Clătită clasică",
            "price": "45",
            "description": "clătită sărată | prosciutto cotto | cașcaval Fontina | roșii confiate | mărar | ceapă caramelizată | ulei de trufe | parmezan",
            "weight": "400 g",
            "allergens": "gluten, ouă, lactate"
          },
          {
            "name": "Clătită Atena",
            "price": "45",
            "description": "clătită sărată | brânză feta | măsline negre Kalamata | condimente | ardei gras copt | ceapă verde",
            "weight": "400 g"
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
