export interface User {
  id: number;
  username: string;
  password: string;

  firstName: string;
  lastName: string;

  email: string;
  phone: string;
  identification: string;

  points: number;

  role: "user" | "admin";
}