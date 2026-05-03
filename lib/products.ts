export type Product = {
  id: string;
  slug: string;
  articleNumber: string;
  name: string;
  type: string;
  category:
    | "Batterie"
    | "Verbund"
    | "Fontäne"
    | "Rohr"
    | "Raketen"
    | "Sortiment"
    | "Knallartikel"
    | "Leuchtartikel"
    | "Partyartikel";
  price: number;
  priceNote?: string;
  shortDescription: string;
  features: string[];
  durationSeconds?: number;
  heightMeters?: number;
  image: string | null;
  videoUrl?: string;
};

const productImageFilesBySlug: Record<string, string> = {
  "desert-rose": "desert-rose.png",
  "flame-falls": "flame-falls.png",
  "arche-nico": "arche-nico.png",
  rhino: "rhino.png",
  "paradise-beach": "paradise-beach.png",
  hofnarr: "hofnarr.png",
  pharaoh: "pharaoh.png",
  flowergirls: "flowergirls.png",
  "blacksmith-betty": "blacksmith-betty.png",
  "cloud-chaser": "cloud-chaser.png",
  donnerroehren: "donnerroehren.png",
  inferno: "inferno.png",
  bombenrohr: "bombenrohr.png",
  helicopter: "helicopter.png",
  feuerkasten: "feuerkasten.png",
  "infinity-paradox": "infinity-paradox.png",
  volltreffer: "volltreffer.png",
  "rocket-strike": "rocket-strike.png",
  "funky-diamonds": "funky-diamonds.png",
  stardust: "stardust.png",
  hamsterkauf: "hamsterkauf.png",
  "lady-cracker": "lady-cracker.png",
  stoertebeker: "stoertebeker.png",
  "pyro-pack": "pyro-pack.png",
  "wild-boys": "wild-boys.png",
  "knallbonbon-26-cm": "knallbonbon-26-cm.png",
  bengalfeuer: "bengalfeuer.png",
};

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const PRODUCT_IMAGE_BASE_PATH = `${BASE_PATH}/products/fireworks_all_cropped_white`;

const rawProducts: Product[] = [
  {
    id: "59301",
    slug: "desert-rose",
    articleNumber: "59301",
    name: "Desert Rose",
    type: "25 Schuss Bombettenbatterie",
    category: "Batterie",
    price: 10.99,
    shortDescription:
      "25 Schuss Bombettenbatterie mit zweistufigen Sternenbuketts und Finale.",
    features: [
      "25 Schuss",
      "zweistufige Sternenbuketts",
      "4 Farb- und Effektvariationen",
      "Finale mit 5er-Salve aus Multi-Color-Effekten",
    ],
    durationSeconds: 40,
    heightMeters: 30,
    image: "/products/59301_desert-rose.png",
    videoUrl: "https://www.youtube.com/watch?v=7mpxQan_TKc",
  },
  {
    id: "59305",
    slug: "flame-falls",
    articleNumber: "59305",
    name: "Flame Falls",
    type: "Fächer- und Salvenbatterie",
    category: "Batterie",
    price: 39.99,
    shortDescription:
      "Vielfältige Fächer- und Salvenbatterie mit 51 Schuss.",
    features: ["51 Schuss", "Fächerbatterie", "Salvenbatterie"],
    durationSeconds: 35,
    heightMeters: 40,
    image: "/products/59305_flame-falls.png",
    videoUrl: "https://www.youtube.com/watch?v=oLvZETIJyzo",
  },
  {
    id: "59350",
    slug: "arche-nico",
    articleNumber: "59350",
    name: "Arche NICO",
    type: "Verbundfeuerwerk",
    category: "Verbund",
    price: 49.99,
    shortDescription:
      "Verbundfeuerwerk bestehend aus 5 Batterien mit insgesamt 816 Effekten.",
    features: ["5 Batterien", "816 Effekte"],
    durationSeconds: 100,
    heightMeters: 30,
    image: "/products/59350_arche-nico.png",
    videoUrl: "https://www.youtube.com/watch?v=mObL8SbXAK0",
  },
  {
    id: "05019",
    slug: "rhino",
    articleNumber: "05019",
    name: "Rhino",
    type: "16 Schuss Batterie",
    category: "Batterie",
    price: 6.99,
    shortDescription:
      "16 Schuss Batterie mit aufsteigenden Sternenbuketts und lauter Zerlegung.",
    features: [
      "16 Schuss",
      "nacheinander zündend",
      "Silberschweif",
      "laute Zerlegung",
    ],
    durationSeconds: 25,
    heightMeters: 30,
    image: "/products/05019_rhino.png",
    videoUrl: "https://www.youtube.com/watch?v=tT6x2HSA93Q",
  },
  {
    id: "05035",
    slug: "paradise-beach",
    articleNumber: "05035",
    name: "Paradise Beach",
    type: "36 Schuss Batterie",
    category: "Batterie",
    price: 14.99,
    shortDescription:
      "36 Schuss Batterie mit farbenfrohen Sternenbuketts und buntem Finale.",
    features: [
      "36 Schuss",
      "rote, goldene oder grüne Leuchtspur",
      "6 Sternenbuketts",
      "Blink-, Knatter-, Chrysanthemen- und Weiden-Effekte",
      "buntes Finale",
    ],
    durationSeconds: 25,
    heightMeters: 40,
    image: null,
    videoUrl: "https://www.youtube.com/watch?v=yRiLestO7UM",
  },
  {
    id: "05045",
    slug: "hofnarr",
    articleNumber: "05045",
    name: "Hofnarr",
    type: "25 Schuss Batterie",
    category: "Batterie",
    price: 9.99,
    shortDescription:
      "25 Schuss Batterie mit brokat-goldenen Effekten und rotem Glitzerstern-Finale.",
    features: [
      "25 Schuss",
      "brokat-goldene Leuchtsterne",
      "Titan-goldene Palmen",
      "bunte Leucht- oder Blinksterne",
      "rotes Glitzerstern-Finale",
      "Chrysanthemen-Effekte",
    ],
    durationSeconds: 35,
    heightMeters: 40,
    image: null,
    videoUrl: "https://www.youtube.com/watch?v=JcS1YB8R7F8",
  },
  {
    id: "05128",
    slug: "pharaoh",
    articleNumber: "05128",
    name: "Pharaoh",
    type: "Verbundfeuerwerk",
    category: "Verbund",
    price: 64.99,
    shortDescription:
      "Mehrfachverbund mit 40 Schuss aus 4 Batterien.",
    features: [
      "40 Schuss",
      "4 Batterien",
      "weiße, rote und goldene Feuertöpfe",
      "rote Dahlien-Sterne",
      "goldene Palmen",
      "goldene Trauerweiden",
    ],
    durationSeconds: 80,
    heightMeters: 50,
    image: null,
    videoUrl: "https://www.youtube.com/watch?v=DvAOLuzzJ6A",
  },
  {
    id: "05762",
    slug: "flowergirls",
    articleNumber: "05762",
    name: "Flowergirls",
    type: "64 Schuss Effektbatterie",
    category: "Batterie",
    price: 29.99,
    shortDescription:
      "Farbenfrohe Effektbatterie mit 64 Schuss und rasantem Finale.",
    features: [
      "64 Schuss",
      "ca. 500 g Nettoexplosivmasse",
      "aufsteigende Knistersterne",
      "verschiedenfarbige Buketts",
      "Glitzer-Effekte",
      "rasantes Finale",
    ],
    durationSeconds: 45,
    heightMeters: 35,
    image: "/products/05762_flowergirls.png",
    videoUrl: "https://www.youtube.com/watch?v=e6SFL-MdPDA",
  },
  {
    id: "05768",
    slug: "blacksmith-betty",
    articleNumber: "05768",
    name: "Blacksmith Betty",
    type: "20 Schuss Batterie",
    category: "Batterie",
    price: 29.99,
    shortDescription:
      "Kraftvolle 20-Schuss-Batterie mit großer Zerlegung und Flower-Crown-Effekten.",
    features: [
      "20 Schuss",
      "gold-flimmernde Leuchtsterne",
      "lautstarke Zerlegung",
      "große Flower-Crown-Effekte",
      "rote, grüne oder blaue Blinksterne",
      "490 g Nettoexplosivmasse",
    ],
    durationSeconds: 25,
    heightMeters: 60,
    image: null,
    videoUrl: "https://www.youtube.com/watch?v=x_FsWrnNmuY",
  },
  {
    id: "59451",
    slug: "cloud-chaser",
    articleNumber: "59451",
    name: "Cloud Chaser",
    type: "3er-Fontänenbatterie",
    category: "Fontäne",
    price: 6.99,
    shortDescription:
      "3er-Fontänenbatterie mit bunten Sternen und Schneeflocken- bzw. Knistereffekten.",
    features: [
      "3 Fontänen",
      "rote, grüne oder gelbe Sterne",
      "weiße Schneeflocken",
      "Knistersterne",
    ],
    durationSeconds: 60,
    heightMeters: 4,
    image: "/products/59451_cloud-chaser.png",
    videoUrl: "https://www.youtube.com/watch?v=Fes_ycnx9g4",
  },
  {
    id: "03320",
    slug: "donnerroehren",
    articleNumber: "03320",
    name: "Donnerröhren",
    type: "10er-Schachtel Feuerwerksrohre",
    category: "Rohr",
    price: 6.49,
    shortDescription:
      "Große Feuerwerksrohre mit lautstark zerlegenden, zweistufigen Effekten.",
    features: [
      "10er-Schachtel",
      "zweistufige Effekte",
      "3-fach sortiert",
      "lautstarke Zerlegung",
    ],
    heightMeters: 35,
    image: "/products/03320_donnerroehren.png",
    videoUrl: "https://www.youtube.com/watch?v=tcXpw9fFXj0&t=1s",
  },
  {
    id: "03376",
    slug: "inferno",
    articleNumber: "03376",
    name: "Inferno",
    type: "Mega-Fontäne",
    category: "Fontäne",
    price: 5.99,
    shortDescription:
      "Mega-Fontäne mit silber-goldenem Ausstoß, Crackling und grünen Sternen.",
    features: [
      "180 g Nettoexplosivmasse",
      "silber-goldener Ausstoß",
      "rote Basis",
      "Crackling-Effekte",
      "grüne Sterne",
    ],
    durationSeconds: 40,
    heightMeters: 5,
    image: "/products/03376_inferno.png",
    videoUrl: "https://www.youtube.com/watch?v=a6y-zEqIbDk",
  },
  {
    id: "03394",
    slug: "bombenrohr",
    articleNumber: "03394",
    name: "Bombenrohr",
    type: "5 Schuss Röhrisches Licht",
    category: "Rohr",
    price: 3.99,
    shortDescription:
      "Großkalibriges Röhrisches Licht mit 5 nacheinander aufsteigenden Effektbombetten.",
    features: [
      "5 Schuss",
      "großkalibrig",
      "nacheinander aufsteigende Effektbombetten",
    ],
    durationSeconds: 20,
    heightMeters: 50,
    image: "/products/03394_bombenrohr.png",
    videoUrl: "https://www.youtube.com/watch?v=bAEMT2NAYqg",
  },
  {
    id: "04575",
    slug: "helicopter",
    articleNumber: "04575",
    name: "Helicopter",
    type: "3er-Schachtel Wirbelaufsteiger",
    category: "Rohr",
    price: 4.99,
    shortDescription:
      "Mit roter oder grüner Flamme aufsteigende Wirbel mit Verwandlungseffekten.",
    features: [
      "3er-Schachtel",
      "rote oder grüne Flamme",
      "silberne Chrysanthemen",
      "goldene Kronen",
      "blaue Sterne",
    ],
    heightMeters: 40,
    image: null,
    videoUrl: "https://www.youtube.com/watch?v=Lv5dSdTN5ws&t=1s",
  },
  {
    id: "04589",
    slug: "feuerkasten",
    articleNumber: "04589",
    name: "Feuerkasten",
    type: "Fontänen-Verbund",
    category: "Fontäne",
    price: 9.99,
    shortDescription:
      "Fontänen-Verbund in Form eines Werkzeugkastens mit verschiedenen Bodeneffekten.",
    features: [
      "weiße Blinksterne",
      "Goldregen",
      "Cracklingspitzen",
      "Silberchrysanthemen",
      "Knatterkronen",
      "bunte Sterne",
    ],
    durationSeconds: 90,
    heightMeters: 4,
    image: null,
    videoUrl: "https://www.youtube.com/watch?v=YprzY18GLXQ",
  },
  {
    id: "04595",
    slug: "infinity-paradox",
    articleNumber: "04595",
    name: "Infinity Paradox",
    type: "7er-Fontänenbatterie",
    category: "Fontäne",
    price: 9.99,
    shortDescription:
      "7er-Fontänenbatterie mit langer Brenndauer und vielen wechselnden Effekten.",
    features: [
      "7 Fontänen",
      "10 unterschiedliche Effekte",
      "goldener Fontänensatz",
      "rote, blaue, silberne oder lilafarbige Sterne",
      "Silber- oder Gold-Chrysanthemen-Effekte",
    ],
    durationSeconds: 200,
    heightMeters: 4,
    image: "/products/04595_infinity-paradox.png",
    videoUrl: "https://www.youtube.com/watch?v=ALR2H_dH00c&t=1s",
  },
  {
    id: "04817",
    slug: "volltreffer",
    articleNumber: "04817",
    name: "Volltreffer",
    type: "9-teiliges Raketensortiment",
    category: "Raketen",
    price: 9.99,
    shortDescription:
      "9-teiliges Raketensortiment mit bunten Sternen und Glitzereffekten.",
    features: ["9-teilig", "bunte Sterne", "Glitzereffekte"],
    image: "/products/04817_volltreffer.png",
    videoUrl: "https://www.youtube.com/watch?v=3f_6XS-4KJA",
  },
  {
    id: "02390",
    slug: "rocket-strike",
    articleNumber: "02390",
    name: "Rocket Strike",
    type: "3er-Schachtel Bomben-Leitwerkraketen",
    category: "Raketen",
    price: 6.99,
    shortDescription:
      "3-stufige Bomben-Leitwerkraketen mit Knall, Schweif und lautstarker Zerlegung.",
    features: [
      "3 Raketen",
      "3-stufig",
      "Knall und Schweif beim Aufstieg",
      "rote, blaue, grüne oder knatternde Sternenbuketts",
      "lautstarke Zerlegung",
    ],
    heightMeters: 60,
    image: "/products/02390_rocket-strike.png",
    videoUrl: "https://youtu.be/L2Utvh1sakQ",
  },
  {
    id: "54076",
    slug: "funky-diamonds",
    articleNumber: "54076",
    name: "Funky Diamonds",
    type: "40er-Raketenbeutel",
    category: "Raketen",
    price: 39.99,
    shortDescription:
      "40 rasante Super-Effektraketen mit farbenfrohen Sternen.",
    features: ["40 Raketen", "Super-Effektraketen", "farbenfrohe Sterne"],
    image: "/products/54076_funky-diamonds.png",
  },
  {
    id: "80703",
    slug: "stardust",
    articleNumber: "80703",
    name: "Stardust",
    type: "19er-Raketenbeutel",
    category: "Raketen",
    price: 16.66,
    shortDescription: "19 Power-Raketen im Beutel.",
    features: ["19 Raketen", "Power-Raketen"],
    image: "/products/80703_stardust.png",
  },
  {
    id: "04685",
    slug: "hamsterkauf",
    articleNumber: "04685",
    name: "Hamsterkauf",
    type: "Mix-Sortiment",
    category: "Sortiment",
    price: 19.99,
    shortDescription:
      "Sortiment mit gemischten Leucht-, Knall- und Raketenartikeln.",
    features: ["Mix-Sortiment"],
    image: "/products/04685_hamsterkauf.png",
  },
  {
    id: "01565",
    slug: "lady-cracker",
    articleNumber: "01565",
    name: "Lady-Cracker",
    type: "700er Knallartikel",
    category: "Knallartikel",
    price: 3.99,
    shortDescription:
      "700 Cracker, gebunden zu 10 Knallketten.",
    features: ["700 Cracker", "10 Knallketten"],
    image: "/products/01565_lady-cracker.png",
  },
  {
    id: "01115",
    slug: "stoertebeker",
    articleNumber: "01115",
    name: "Störtebeker",
    type: "50er-Schachtel Piraten-Kracher",
    category: "Knallartikel",
    price: 4.99,
    shortDescription:
      "Schachtel mit 50 Schwarzpulver-Piraten-Krachern.",
    features: ["50 Stück", "Schwarzpulver-Piraten-Kracher"],
    image: "/products/01115_stoertebeker.png",
    videoUrl: "https://youtu.be/LU4ypLwU-Zk",
  },
  {
    id: "04617",
    slug: "pyro-pack",
    articleNumber: "04617",
    name: "Pyro-Pack",
    type: "Knall-Sortiment",
    category: "Knallartikel",
    price: 4.99,
    shortDescription:
      "Knall-Sortiment im Klarsichtbeutel mit China-Crackern und China-Böllern.",
    features: ["Knall-Sortiment", "60 China-Cracker und China-Böller"],
    image: "/products/04617_pyro-pack.png",
  },
  {
    id: "04740",
    slug: "wild-boys",
    articleNumber: "04740",
    name: "Wild Boys",
    type: "6er-Beutel Jugendsortiment",
    category: "Sortiment",
    price: 4.99,
    shortDescription:
      "Jugendsortiment mit 82 Effekten.",
    features: ["6-teilig", "82 Effekte"],
    image: "/products/04740_wild-boys.png",
  },
  {
    id: "09782",
    slug: "knallbonbon-26-cm",
    articleNumber: "09782",
    name: "Knallbonbon 26 cm",
    type: "6er-Schachtel Knallbonbons",
    category: "Partyartikel",
    price: 9.99,
    shortDescription:
      "Knallbonbons in farbiger Glanzfolie.",
    features: ["6er-Schachtel", "26 cm", "farbige Glanzfolie"],
    image: "/products/09782_knallbonbon-26-cm.png",
  },
  {
    id: "07870",
    slug: "bengalfeuer",
    articleNumber: "07870",
    name: "Bengalfeuer",
    type: "Bengalfackel",
    category: "Leuchtartikel",
    price: 2.99,
    priceNote: "je Stück",
    shortDescription:
      "Bengalfackel mit intensiver Flamme in verschiedenen Farben.",
    features: [
      "Farben: rot, gelb, blau oder grün",
      "intensive Flamme",
      "Kategorie F1",
      "ab 12 Jahren",
    ],
    image: "/products/07870_bengalfeuer.png",
    videoUrl: "https://www.youtube.com/watch?v=WUuX1k4hesI",
  },
];

export const products: Product[] = rawProducts.map((product) => {
  const imageFile = productImageFilesBySlug[product.slug];
  if (!imageFile) return product;

  return {
    ...product,
    image: `${PRODUCT_IMAGE_BASE_PATH}/${imageFile}`,
  };
});

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
