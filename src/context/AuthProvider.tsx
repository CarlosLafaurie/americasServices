import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  loginCustomer,
  logoutCustomer,
  registerCustomer,
} from "@/api/auth";

import {
  getAuthToken,
  removeAuthToken,
} from "@/api/client";

import {
  getCurrentCustomer,
} from "@/api/customer";

import {
  AuthContext,
} from "./AuthContext";

import type {
  CustomerData,
  RegisterCustomerData,
} from "@/types/Auth";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({
  children,
}: AuthProviderProps) {
  const [
    user,
    setUser,
  ] =
    useState<CustomerData | null>(
      null
    );

  const [
    isLoading,
    setIsLoading,
  ] =
    useState(true);

  const refreshUser =
    useCallback(
      async (): Promise<void> => {
        const token =
          getAuthToken();

        if (!token) {
          setUser(null);

          return;
        }

        try {
          const response =
            await getCurrentCustomer();

          setUser(
            response.data
          );
        } catch {
          removeAuthToken();

          setUser(null);
        }
      },
      []
    );

  useEffect(() => {
    const restoreSession =
      async (): Promise<void> => {
        try {
          await refreshUser();
        } finally {
          setIsLoading(
            false
          );
        }
      };

    void restoreSession();
  }, [refreshUser]);

  const login =
    async (
      email: string,
      password: string
    ): Promise<void> => {
      await loginCustomer(
        email,
        password
      );

      await refreshUser();
    };

  const register =
    async (
      data: RegisterCustomerData
    ): Promise<void> => {
      await registerCustomer(
        data
      );

      await refreshUser();
    };

  const logout =
    async (): Promise<void> => {
      try {
        await logoutCustomer();
      } finally {
        setUser(null);
      }
    };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}