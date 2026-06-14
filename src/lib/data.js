import heroImg from "@/assets/hero_image.jpg";
import sofa1 from "@/assets/mainSofa.jpg";
import products01 from "@/assets/1.png";
import products02 from "@/assets/2.png";
import products03 from "@/assets/3.png";
import products04 from "@/assets/4.png";
import products05 from "@/assets/5.png";
import products06 from "@/assets/6.png";
import products07 from "@/assets/7.png";
import products08 from "@/assets/8.png";
import products09 from "@/assets/9.png";
import products10 from "@/assets/10.png";
import products11 from "@/assets/11.png";
import products12 from "@/assets/12.png";
import products13 from "@/assets/13.png";
import products14 from "@/assets/14.png";
import products15 from "@/assets/15.png";
import products16 from "@/assets/16.png";
import products17 from "@/assets/17.png";
import products18 from "@/assets/18.png";
import products19 from "@/assets/19.png";
import products20 from "@/assets/20.png";
import products21 from "@/assets/21.png";
import products22 from "@/assets/22.png";
import products23 from "@/assets/23.png";
import products24 from "@/assets/24.png";
import products25 from "@/assets/25.png";
import products26 from "@/assets/26.png";
import products27 from "@/assets/27.png";
import aboutImg from "@/assets/about.jpg";
import aboutImg2 from "@/assets/aboutImg2.jpg";
import contactImg from "@/assets/contact.jpg";



export const assets = {
    heroImg,
    sofa1,
    products01,
    products02,
    products03,
    products04,
    products05,
    products06,
    products07,
    products08,
    products09,
    products10,
    products11,
    products12,
    products13,
    products14,
    products15,
    products16,
    products17,
    products18,
    products19,
    products20,
    products21,
    products22,
    products23,
    products24,
    products25,
    products26,
    products27,
    aboutImg,
    aboutImg2,
    contactImg
}

export const categories = [
  { id: "1", name: "Sofas", slug: "sofas" },
  { id: "2", name: "Chairs", slug: "chairs" },
  { id: "3", name: "Tables", slug: "tables" },
  { id: "4", name: "Storage", slug: "storage" },
  { id: "5", name: "Bedroom", slug: "bedroom" },
  { id: "6", name: "Lighting", slug: "lighting" },
  { id: "7", name: "Decor", slug: "decor" },
];

export const productColors = [
  { id: "1", name: "Natural Oak" , colorCode: "#D2B48C"},
  { id: "2", name: "Walnut Brown" , colorCode: "#8B4513"},
  { id: "3", name: "Soft Beige" , colorCode: "#F5F5DC"},
  { id: "4", name: "Stone Gray" , colorCode: "#A9A9A9"},
  { id: "5", name: "Off White" , colorCode: "#FFFFFF"},
];


export const products = [
  {
    id: "1",
    slug: "fjord-sofa",
    name: "Fjord Sofa",
    category: "sofas",
    price: 2499,
    featured: true,
    color: "Stone Gray",
    rating: 4.9,
    reviews: 128,
    description:
      "A sculptural three-seat sofa designed with deep cushions and timeless Scandinavian proportions.",
    images: [
      products01,
    ],
  },

  {
    id: "2",
    slug: "nova-lounge-chair",
    name: "Nova Lounge Chair",
    category: "chairs",
    price: 899,
    featured: true,
    color: "Soft Beige",
    rating: 4.8,
    reviews: 74,
    description:
      "A contemporary lounge chair featuring curved oak arms and premium wool upholstery.",
    images: [
      products25,
      products26,
    ],
  },

  {
    id: "3",
    slug: "aalto-dining-table",
    name: "Aalto Dining Table",
    category: "tables",
    price: 1899,
    featured: true,
    color: "Natural Oak",
    rating: 4.9,
    reviews: 92,
    description:
      "Crafted from solid oak with softly rounded edges and exceptional durability.",
    images: [
      products26,
      "/products/aalto-table-2.jpg",
    ],
  },

  {
    id: "4",
    slug: "saga-armchair",
    name: "Saga Armchair",
    category: "chairs",
    price: 749,
    featured: false,
    color: "Walnut Brown",
    rating: 4.7,
    reviews: 54,
    description:
      "Compact yet comfortable, designed for reading corners and modern apartments.",
    images: [
      products27,
      "/products/saga-chair-2.jpg",
    ],
  },

  {
    id: "5",
    slug: "luna-coffee-table",
    name: "Luna Coffee Table",
    category: "tables",
    price: 599,
    featured: false,
    color: "Off White",
    rating: 4.8,
    reviews: 63,
    description:
      "Minimal circular coffee table with a floating appearance and warm walnut finish.",
    images: [
      products26,
      "/products/luna-table-2.jpg",
    ],
  },

  {
    id: "6",
    slug: "nord-storage-unit",
    name: "Nord Storage Unit",
    category: "storage",
    price: 1399,
    featured: true,
    color: "Off White",
    rating: 4.9,
    reviews: 41,
    description:
      "A versatile oak storage cabinet blending functionality with clean Scandinavian aesthetics.",
    images: [
      products05,
      "/products/nord-storage-2.jpg",
    ],
  },

  {
    id: "7",
    slug: "haven-sectional",
    name: "Haven Sectional",
    category: "sofas",
    price: 3299,
    featured: true,
    color: "Stone Gray",
    rating: 5.0,
    reviews: 189,
    description:
      "Our signature modular sectional offering exceptional comfort and flexibility.",
    images: [
      products06,
      "/products/haven-sectional-2.jpg",
    ],
  },

  {
    id: "8",
    slug: "oslo-desk",
    name: "Oslo Desk",
    category: "tables",
    price: 1199,
    featured: false,
    color: "Walnut Brown",
    rating: 4.8,
    reviews: 52,
    description:
      "A modern workspace solution crafted from solid ash with integrated cable management.",
    images: [
      products07,
      "/products/oslo-desk-2.jpg",
    ],
  },

  {
    id: "9",
    slug: "ember-side-table",
    name: "Ember Side Table",
    category: "tables",
    price: 349,
    featured: false,
    color: "Walnut Brown",
    rating: 4.6,
    reviews: 31,
    description:
      "A refined accent piece perfect beside sofas, beds, and lounge chairs.",
    images: [
      products08,
      "/products/ember-side-table-2.jpg",
    ],
  },

  {
    id: "10",
    slug: "fjord-bed-frame",
    name: "Fjord Bed Frame",
    category: "bedroom",
    price: 2199,
    featured: true,
    color: "Natural Oak",
    
    rating: 4.9,
    reviews: 87,
    description:
      "A low-profile oak bed frame designed to create a calm and inviting bedroom retreat.",
    images: [
      products09,
      "/products/fjord-bed-2.jpg",
    ],
  },

  {
    id: "11",
    slug: "atlas-bookshelf",
    name: "Atlas Bookshelf",
    category: "storage",
    price: 1599,
    featured: false,
    color: "Natural Oak",
    rating: 4.8,
    reviews: 44,
    description:
      "Open shelving system balancing architectural structure with practical storage.",
    images: [
      products10,
      "/products/atlas-shelf-2.jpg",
    ],
  },

  {
    id: "12",
    slug: "vera-dining-chair",
    name: "Vera Dining Chair",
    category: "chairs",
    price: 499,
    featured: true,
    color: "Natural Oak",
    rating: 4.8,
    reviews: 95,
    description:
      "Elegant dining chair featuring curved back support and natural oak construction.",
    images: [
      products11,
      "/products/vera-chair-2.jpg",
    ],
  },
  {
  id: "13",
  slug: "astra-floor-lamp",
  name: "Astra Floor Lamp",
  category: "lighting",
  price: 699,
  featured: false,
  color: "Off White",
  rating: 4.8,
  reviews: 61,
  description: "A sculptural floor lamp crafted from brushed steel and linen.",
  images: [products12],
},

{
  id: "14",
  slug: "lyra-pendant-light",
  name: "Lyra Pendant Light",
  category: "lighting",
  price: 499,
  featured: false,
  color: "Soft Beige",
  rating: 4.7,
  reviews: 44,
  description: "Elegant pendant lighting designed for dining spaces.",
  images: [products13],
},

{
  id: "15",
  slug: "odin-sideboard",
  name: "Odin Sideboard",
  category: "storage",
  price: 1899,
  featured: true,
  color: "Walnut Brown",
  rating: 4.9,
  reviews: 84,
  description: "A spacious oak sideboard balancing storage and minimal design.",
  images: [products14],
},

{
  id: "16",
  slug: "freya-console-table",
  name: "Freya Console Table",
  category: "tables",
  price: 999,
  featured: false,
  color: "Natural Oak",
  rating: 4.8,
  reviews: 37,
  description: "Slim console table perfect for hallways and entryways.",
  images: [products15],
},

{
  id: "17",
  slug: "elio-nightstand",
  name: "Elio Nightstand",
  category: "bedroom",
  price: 549,
  featured: false,
  color: "Walnut Brown",
  rating: 4.6,
  reviews: 29,
  description: "Compact bedside storage with soft-close drawers.",
  images: [products16],
},

{
  id: "18",
  slug: "skye-dresser",
  name: "Skye Dresser",
  category: "bedroom",
  price: 1699,
  featured: true,
  color: "Natural Oak",
  rating: 4.9,
  reviews: 66,
  description: "Clean-lined dresser crafted from natural oak.",
  images: [products17],
},

{
  id: "19",
  slug: "sol-dining-bench",
  name: "Sol Dining Bench",
  category: "chairs",
  price: 699,
  featured: false,
  color: "Natural Oak",
  rating: 4.7,
  reviews: 33,
  description: "A modern dining bench designed for communal living.",
  images: [products18],
},

{
  id: "20",
  slug: "noma-bar-stool",
  name: "Noma Bar Stool",
  category: "chairs",
  price: 449,
  featured: false,
  color: "Walnut Brown",
  rating: 4.8,
  reviews: 52,
  description: "Minimalist bar stool with curved oak detailing.",
  images: [products19],
},

{
  id: "21",
  slug: "echo-media-unit",
  name: "Echo Media Unit",
  category: "storage",
  price: 1499,
  featured: true,
  color: "Natural Oak",
  rating: 4.9,
  reviews: 57,
  description: "A media console built to organize modern living spaces.",
  images: [products20],
},

{
  id: "22",
  slug: "milo-armchair",
  name: "Milo Armchair",
  category: "chairs",
  price: 899,
  featured: true,
  color: "Off White",
  rating: 4.8,
  reviews: 77,
  description: "Generously padded armchair with premium boucle upholstery.",
  images: [products21],
},

{
  id: "23",
  slug: "soren-coffee-table",
  name: "Soren Coffee Table",
  category: "tables",
  price: 749,
  featured: false,
  color: "Walnut Brown",
  rating: 4.7,
  reviews: 41,
  description: "Organic coffee table inspired by Scandinavian landscapes.",
  images: [products22],
},

{
  id: "24",
  slug: "kai-bookshelf",
  name: "Kai Bookshelf",
  category: "storage",
  price: 1299,
  featured: false,
  color: "Natural Oak",
  rating: 4.8,
  reviews: 35,
  description: "Open shelving designed to showcase books and decor.",
  images: [products23],
},

{
  id: "25",
  slug: "terra-rug",
  name: "Terra Wool Rug",
  category: "decor",
  price: 899,
  featured: false,
  color: "Soft Beige",
  rating: 4.7,
  reviews: 46,
  description: "Handwoven wool rug with subtle texture and warmth.",
  images: [products24],
},

{
  id: "26",
  slug: "luca-ottoman",
  name: "Luca Ottoman",
  category: "sofas",
  price: 499,
  featured: false,
  color: "Soft Beige",
  rating: 4.8,
  reviews: 34,
  description: "Versatile ottoman designed for lounging and flexibility.",
  images: [products25],
},

{
  id: "27",
  slug: "aurora-bedside-lamp",
  name: "Aurora Bedside Lamp",
  category: "lighting",
  price: 299,
  featured: false,
  color: "Off White",
  rating: 4.6,
  reviews: 22,
  description: "Soft ambient lighting for calm evening interiors.",
  images: [products26],
},

{
  id: "28",
  slug: "eira-dining-chair",
  name: "Eira Dining Chair",
  category: "chairs",
  price: 399,
  featured: false,
  color: "Soft Beige",
  rating: 4.8,
  reviews: 64,
  description: "Lightweight dining chair with ergonomic support.",
  images: [products27],
},

// {
//   id: "29",
//   slug: "hugo-work-desk",
//   name: "Hugo Work Desk",
//   category: "tables",
//   price: 1399,
//   featured: true,
//   color: "Natural Oak",
//   rating: 4.9,
//   reviews: 58,
//   description: "Minimal workstation designed for modern productivity.",
//   images: [products28],
// },

// {
//   id: "30",
//   slug: "birch-wardrobe",
//   name: "Birch Wardrobe",
//   category: "bedroom",
//   price: 2499,
//   featured: true,
//   rating: 4.9,
//   reviews: 72,
//   description: "Full-height wardrobe crafted from solid birch wood.",
//   images: [products33],
// },

// {
//   id: "31",
//   slug: "nordic-bench",
//   name: "Nordic Entry Bench",
//   category: "chairs",
//   price: 599,
//   featured: false,
//   rating: 4.7,
//   reviews: 26,
//   description: "Simple bench for entryways and transitional spaces.",
//   images: [products34],
// },

// {
//   id: "32",
//   slug: "alto-side-table",
//   name: "Alto Side Table",
//   category: "tables",
//   price: 399,
//   featured: false,
//   rating: 4.6,
//   reviews: 39,
//   description: "Compact side table with elegant geometric form.",
//   images: [products35],
// },

// {
//   id: "33",
//   slug: "vera-mirror",
//   name: "Vera Wall Mirror",
//   category: "decor",
//   price: 549,
//   featured: false,
//   rating: 4.8,
//   reviews: 21,
//   description: "Large statement mirror framed in natural oak.",
//   images: [products36],
// },

// {
//   id: "34",
//   slug: "haven-daybed",
//   name: "Haven Daybed",
//   category: "sofas",
//   price: 1899,
//   featured: true,
//   rating: 4.9,
//   reviews: 48,
//   description: "Multi-functional daybed blending comfort and utility.",
//   images: [products37],
// },

// {
//   id: "35",
//   slug: "lumi-floor-lamp",
//   name: "Lumi Floor Lamp",
//   category: "lighting",
//   price: 649,
//   featured: false,
//   rating: 4.8,
//   reviews: 36,
//   description: "Elegant floor lighting with soft warm illumination.",
//   images: [products38],
// },

// {
//   id: "36",
//   slug: "atlas-dining-set",
//   name: "Atlas Dining Set",
//   category: "tables",
//   price: 3499,
//   featured: true,
//   rating: 5.0,
//   reviews: 97,
//   description: "Complete dining set crafted for modern family living.",
//   images: [products39],
// }

];