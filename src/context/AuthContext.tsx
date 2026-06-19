import { createContext } from "react";
import type { User } from "@/types/User";

export interface AuthContextType {
  user: User | null;

  login: (
    username: string,
    password: string
  ) => boolean;

  logout: () => void;
}

export const AuthContext =
  createContext<AuthContextType | null>(null);