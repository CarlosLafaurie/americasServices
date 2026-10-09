import {
  apiRequest,
} from "@/api/client";

import type {
  ApiMessageResponse,
  CustomerDashboardResponse,
  CustomerMembershipCardResponse,
  CustomerResponse,
  UpdateCustomerProfileData,
  UpdateCustomerProfileResponse,
} from "@/types/Auth";

export async function getCurrentCustomer(): Promise<CustomerResponse> {
  return apiRequest<CustomerResponse>(
    "/customer/me",
    {
      method: "GET",
      authenticated: true,
    }
  );
}

export async function getCustomerDashboard(): Promise<CustomerDashboardResponse> {
  return apiRequest<CustomerDashboardResponse>(
    "/customer/dashboard",
    {
      method: "GET",
      authenticated: true,
    }
  );
}

export async function getCustomerMembershipCard(): Promise<CustomerMembershipCardResponse> {
  return apiRequest<CustomerMembershipCardResponse>(
    "/customer/membership-card",
    {
      method: "GET",
      authenticated: true,
    }
  );
}

export async function updateCustomerProfile(
  data: UpdateCustomerProfileData
): Promise<UpdateCustomerProfileResponse> {
  return apiRequest<UpdateCustomerProfileResponse>(
    "/customer/profile",
    {
      method: "PUT",
      authenticated: true,

      body: JSON.stringify(
        data
      ),
    }
  );
}

interface UpdatePasswordData {
  current_password: string;

  password: string;

  password_confirmation: string;
}

export async function updateCustomerPassword(
  data: UpdatePasswordData
): Promise<ApiMessageResponse> {
  return apiRequest<ApiMessageResponse>(
    "/customer/password",
    {
      method: "PUT",
      authenticated: true,

      body: JSON.stringify(
        data
      ),
    }
  );
}