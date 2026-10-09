import type {
  ApiErrorResponse,
} from "@/types/Auth";

const API_URL =
  import.meta.env.VITE_API_URL;

const TOKEN_KEY =
  "american_services_token";

if (!API_URL) {
  throw new Error(
    "VITE_API_URL no está configurada."
  );
}

export class ApiError extends Error {
  public readonly status: number;

  public readonly errors: Record<
    string,
    string[]
  >;

  public constructor(
    message: string,
    status: number,
    errors: Record<string, string[]> = {}
  ) {
    super(message);

    this.name = "ApiError";

    this.status = status;

    this.errors = errors;
  }
}

export function getAuthToken(): string | null {
  return localStorage.getItem(
    TOKEN_KEY
  );
}

export function setAuthToken(
  token: string
): void {
  localStorage.setItem(
    TOKEN_KEY,
    token
  );
}

export function removeAuthToken(): void {
  localStorage.removeItem(
    TOKEN_KEY
  );
}

interface ApiRequestOptions
  extends RequestInit {
  authenticated?: boolean;
}

export async function apiRequest<T>(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<T> {
  const {
    authenticated = false,
    headers,
    ...requestOptions
  } = options;

  const requestHeaders =
    new Headers(headers);

  requestHeaders.set(
    "Accept",
    "application/json"
  );

  if (
    requestOptions.body &&
    !requestHeaders.has(
      "Content-Type"
    )
  ) {
    requestHeaders.set(
      "Content-Type",
      "application/json"
    );
  }

  if (authenticated) {
    const token =
      getAuthToken();

    if (token) {
      requestHeaders.set(
        "Authorization",
        `Bearer ${token}`
      );
    }
  }

  const response =
    await fetch(
      `${API_URL}${endpoint}`,
      {
        ...requestOptions,
        headers: requestHeaders,
      }
    );

  const data =
    await response
      .json()
      .catch(() => null);

  if (!response.ok) {
    const errorData =
      data as ApiErrorResponse | null;

    throw new ApiError(
      errorData?.message
        || "No fue posible completar la solicitud.",
      response.status,
      errorData?.errors ?? {}
    );
  }

  return data as T;
}