import type { User } from "@/types/User";

export const users: User[] = [
  {
    id: 1,

    username: "admin",
    password: "123456",

    firstName: "Carlos",
    lastName: "Lafaurie",

    email: "admin@americanservices.com",

    phone: "3001234567",

    identification: "123456789",

    points: 10000,

    role: "admin",
  },

  {
    id: 2,

    username: "cliente",
    password: "123456",

    firstName: "Juan",

    lastName: "Perez",

    email: "juan@gmail.com",

    phone: "3009876543",

    identification: "99999999",

    points: 2500,

    role: "user",
  },
];