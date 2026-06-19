export interface Product {
  id: number;

  name: string;

  description: string;

  price: number;

  pointsPrice?: number;

  category:
    | "carwash"
    | "barber"
    | "cafeteria"
    | "coworking";

  image: string;
}