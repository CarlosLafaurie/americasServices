import {
  createContext,
} from "react";

import type {
  CustomerData,
  RegisterCustomerData,
} from "@/types/Auth";

export interface AuthContextType {
  user: CustomerData | null;

  isLoading: boolean;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  register: (
    data: RegisterCustomerData
  ) => Promise<void>;

  logout: () => Promise<void>;

  refreshUser: () => Promise<void>;
}

export const AuthContext =
  createContext<AuthContextType | null>(
    null
  );