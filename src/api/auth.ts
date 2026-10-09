import {
  apiRequest,
  removeAuthToken,
  setAuthToken,
} from "@/api/client";

import type {
  ApiMessageResponse,
  LoginResponse,
  RegisterCustomerData,
} from "@/types/Auth";

export async function loginCustomer(
  email: string,
  password: string
): Promise<LoginResponse> {
  const response =
    await apiRequest<LoginResponse>(
      "/auth/login",
      {
        method: "POST",

        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

  setAuthToken(
    response.token
  );

  return response;
}

export async function registerCustomer(
  data: RegisterCustomerData
): Promise<LoginResponse> {
  const response =
    await apiRequest<LoginResponse>(
      "/auth/register",
      {
        method: "POST",

        body: JSON.stringify(
          data
        ),
      }
    );

  setAuthToken(
    response.token
  );

  return response;
}

export async function logoutCustomer(): Promise<void> {
  try {
    await apiRequest<ApiMessageResponse>(
      "/auth/logout",
      {
        method: "POST",
        authenticated: true,
      }
    );
  } finally {
    removeAuthToken();
  }
}