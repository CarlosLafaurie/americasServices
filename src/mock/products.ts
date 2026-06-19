import type { Product } from "@/types/Product";

export const products: Product[] = [
  {
    id: 1,

    name: "Lavado Premium",

    description: "Lavado completo interior y exterior",

    price: 35000,

    pointsPrice: 1000,

    category: "carwash",

    image: "/images/lavado-premium.jpg",
  },

  {
    id: 2,

    name: "Corte Premium",

    description: "Corte + lavado + styling",

    price: 45000,

    pointsPrice: 1200,

    category: "barber",

    image: "/images/corte-premium.jpg",
  },

  {
    id: 3,

    name: "Capuccino",

    description: "Café especial",

    price: 8000,

    pointsPrice: 300,

    category: "cafeteria",

    image: "/images/capuccino.jpg",
  },
];