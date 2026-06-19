import { useState } from "react";

import { AuthContext } from "./AuthContext";

import { users } from "@/data/users";
import type { User } from "@/types/User";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("user");

    return stored
      ? JSON.parse(stored)
      : null;
  });

  const login = (
    username: string,
    password: string
  ): boolean => {
    const found = users.find(
      (u) =>
        u.username === username &&
        u.password === password
    );

    if (!found) {
      return false;
    }

    setUser(found);

    localStorage.setItem(
      "user",
      JSON.stringify(found)
    );

    return true;
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}