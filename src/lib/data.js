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
  { name: "Sofas", slug: "sofas" },
  { name: "Chairs", slug: "chairs" },
  { name: "Tables", slug: "tables" },
  { name: "Cabinets", slug: "cabinets" },
  { name: "Lighting", slug: "lighting" },
  { name: "Decor", slug: "decor" },
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
    id: 1,
    name: "Nordic Floor Lamp",
    slug: "nordic-floor-lamp",
    category: "lighting",
    price: 249,
    rating: 4.8,
    reviews: 24,
    color: "Natural Oak",
    description:
      "Minimalist tripod floor lamp crafted with solid oak legs and a soft linen shade.",
    images: [products01],
  },

  {
    id: 2,
    name: "Ceramic Vase Set",
    slug: "ceramic-vase-set",
    category: "decor",
    price: 89,
    rating: 4.7,
    reviews: 18,
    color: "Soft Beige",
    description:
      "Handcrafted ceramic vase collection designed for modern Scandinavian interiors.",
    images: [products02,],
  },

  {
    id: 3,
    name: "Aalto Dining Chair",
    slug: "aalto-dining-chair",
    category: "chairs",
    price: 329,
    rating: 4.9,
    reviews: 32,
    color: "Cream",
    description:
      "Elegant dining chair featuring a curved oak frame and upholstered seat.",
    images: [products03,],
  },

  {
    id: 4,
    name: "Saga Armchair",
    slug: "saga-armchair",
    category: "chairs",
    price: 699,
    rating: 4.8,
    reviews: 27,
    color: "Natural Oak",
    description:
      "Comfortable lounge armchair with premium cushioning and solid wood construction.",
    images: [products04,],
  },

  {
    id: 5,
    name: "Luna Sideboard",
    slug: "luna-sideboard",
    category: "cabinets",
    price: 1299,
    rating: 4.9,
    reviews: 15,
    color: "Natural Oak",
    description:
      "Spacious Scandinavian sideboard offering elegant storage and timeless design.",
    images: [products05,],
  },

  {
    id: 6,
    name: "Nova Lounge Chair",
    slug: "nova-lounge-chair",
    category: "chairs",
    price: 749,
    rating: 4.8,
    reviews: 22,
    color: "Off White",
    description:
      "Curved lounge chair upholstered in soft textured fabric.",
    images: [products06,],
  },

  {
    id: 7,
    name: "Round Coffee Table",
    slug: "round-coffee-table",
    category: "tables",
    price: 399,
    rating: 4.6,
    reviews: 14,
    color: "Natural Oak",
    description:
      "Minimal circular coffee table crafted from sustainably sourced oak.",
    images: [products07,],
  },

  {
    id: 8,
    name: "Fika Sofa",
    slug: "fika-sofa",
    category: "sofas",
    price: 1890,
    rating: 4.9,
    reviews: 36,
    color: "Cream",
    description:
      "Modern Scandinavian sofa with integrated side table and premium upholstery.",
    images: [products08,],
  },

  {
    id: 9,
    name: "Arc Floor Lamp",
    slug: "arc-floor-lamp",
    category: "lighting",
    price: 349,
    rating: 4.7,
    reviews: 19,
    color: "Black",
    description:
      "Elegant arc floor lamp featuring a matte black finish and curved silhouette.",
    images: [products09,],
  },

  {
    id: 10,
    name: "Nordic Pendant Set",
    slug: "nordic-pendant-set",
    category: "lighting",
    price: 289,
    rating: 4.8,
    reviews: 21,
    color: "Black",
    description:
      "Three-piece pendant lighting set ideal for dining and kitchen spaces.",
    images: [products10,],
  },

  {
    id: 11,
    name: "Sky Wing Chair",
    slug: "sky-wing-chair",
    category: "chairs",
    price: 799,
    rating: 4.7,
    reviews: 17,
    color: "Blue",
    description:
      "Iconic wingback chair reimagined with contemporary Scandinavian styling.",
    images: [products11,],
  },

  {
    id: 12,
    name: "Oslo Lounge Chair",
    slug: "oslo-lounge-chair",
    category: "chairs",
    price: 899,
    rating: 4.8,
    reviews: 25,
    color: "Walnut Brown",
    description:
      "Luxurious lounge chair featuring walnut accents and soft upholstery.",
    images: [products12,],
  },

  {
    id: 13,
    name: "Harbor Accent Chair",
    slug: "harbor-accent-chair",
    category: "chairs",
    price: 849,
    rating: 4.8,
    reviews: 20,
    color: "Cream",
    description:
      "Statement accent chair designed to blend comfort and sculptural elegance.",
    images: [products13,],
  },

  {
    id: 14,
    name: "Milo Barrel Chair",
    slug: "milo-barrel-chair",
    category: "chairs",
    price: 799,
    rating: 4.7,
    reviews: 18,
    color: "Soft Beige",
    description:
      "Rounded barrel chair inspired by modern Nordic interiors.",
    images: [products14,],
  },

  {
    id: 15,
    name: "Cloud Lounge Chair",
    slug: "cloud-lounge-chair",
    category: "chairs",
    price: 949,
    rating: 4.9,
    reviews: 28,
    color: "Off White",
    description:
      "Ultra-soft lounge chair offering exceptional comfort and visual appeal.",
    images: [products15,],
  },

  {
    id: 16,
    name: "Pebble Chair",
    slug: "pebble-chair",
    category: "chairs",
    price: 699,
    rating: 4.8,
    reviews: 16,
    color: "Off White",
    description:
      "Organic modern chair with rounded forms and plush upholstery.",
    images: [products16,]
  },

  {
    id: 17,
    name: "Wave Sofa",
    slug: "wave-sofa",
    category: "sofas",
    price: 2190,
    rating: 4.9,
    reviews: 31,
    color: "Off White",
    description:
      "Contemporary statement sofa defined by smooth curves and premium fabric.",
    images: [products17,],
  },

  {
    id: 18,
    name: "Pebble Lounge Chair",
    slug: "pebble-lounge-chair",
    category: "chairs",
    price: 999,
    rating: 4.8,
    reviews: 22,
    color: "Off White",
    description:
      "Low-profile lounge chair with sculpted contours and luxurious comfort.",
    images: [products18,]
  },

  {
    id: 19,
    name: "Nordic Vase Duo",
    slug: "nordic-vase-duo",
    category: "decor",
    price: 129,
    rating: 4.7,
    reviews: 12,
    color: "Off White",
    description:
      "Decorative ceramic vase duo inspired by organic Scandinavian forms.",
    images: [products19,]
  },

  {
    id: 20,
    name: "Heritage Lounge Chair",
    slug: "heritage-lounge-chair",
    category: "chairs",
    price: 1099,
    rating: 4.9,
    reviews: 26,
    color: "Blue",
    description:
      "Premium lounge chair combining classic craftsmanship with modern comfort.",
    images:[ products20,]
  },
];