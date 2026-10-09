export interface MembershipLevel {
  id: number;

  name: string;

  code: string;

  color: string | null;

  priority?: number;

  description?: string | null;

  points_multiplier?: number;

  minimum_lifetime_points?: number;
}

export interface CustomerUser {
  id: number;

  name: string;

  email: string;

  phone: string | null;

  status: string;

  current_points: number;

  membership_level: MembershipLevel | null;
}

export interface CustomerProfile {
  id: number;

  document_type: string | null;

  document_number: string | null;

  birth_date: string | null;

  phone: string | null;

  marketing_opt_in: boolean;

  is_active: boolean;
}

export interface Membership {
  id: number;

  current_points: number;

  lifetime_points: number;

  status: string;

  level: MembershipLevel | null;

  qr_identifier: string | null;

  wallet_identifier: string | null;
}

export interface CustomerVehicle {
  id: number;

  plate: string;

  vehicle_type: string | null;
}

export interface CustomerData {
  user: CustomerUser;

  profile: CustomerProfile;

  membership: Membership | null;

  vehicles: CustomerVehicle[];
}

export interface AuthenticatedCustomerSummary {
  id: number;

  name: string;

  email: string;

  phone: string | null;

  current_points: number;

  membership_level: MembershipLevel | null;
}

export interface LoginResponse {
  message: string;

  token: string;

  token_type: string;

  user: AuthenticatedCustomerSummary;
}

export interface RegisterCustomerData {
  name: string;

  email: string;

  password: string;

  password_confirmation: string;

  phone?: string | null;

  document_type?: string | null;

  document_number?: string | null;

  birth_date?: string | null;

  marketing_opt_in?: boolean;
}

export interface CustomerResponse {
  data: CustomerData;
}

export interface UpdateCustomerProfileData {
  name: string;

  email: string;

  phone: string | null;

  document_type: string | null;

  document_number: string | null;

  birth_date: string | null;

  marketing_opt_in: boolean;
}

export interface UpdateCustomerProfileResponse {
  message: string;

  data: {
    user: {
      id: number;

      name: string;

      email: string;

      phone: string | null;
    };

    profile: {
      id: number;

      document_type: string | null;

      document_number: string | null;

      birth_date: string | null;

      marketing_opt_in: boolean;
    };
  };
}

export interface CustomerMembershipCardData {
  name: string;

  points_multiplier: number;

  color: string;
}

export interface CustomerMembershipCardResponse {
  data: CustomerMembershipCardData;
}

export interface CustomerDashboardVehicle {
  id: number;

  plate: string;

  vehicle_type: string | null;
}

export interface CustomerDashboardServiceItem {
  id: number;

  service_id: number;

  name: string;

  description: string | null;

  quantity: number;

  started_at: string | null;

  completed_at: string | null;
}

export interface CustomerDashboardOrder {
  id: number;

  order_number: string;

  status: string;

  status_label: string;

  vehicle: CustomerDashboardVehicle | null;

  services: CustomerDashboardServiceItem[];

  total: number;

  scheduled_at: string | null;

  started_at: string | null;

  completed_at: string | null;

  created_at: string;
}

export interface CustomerDashboardData {
  services_count: number;

  recent_services: CustomerDashboardOrder[];

  upcoming_services: CustomerDashboardOrder[];
}

export interface CustomerDashboardResponse {
  data: CustomerDashboardData;
}

export interface ApiMessageResponse {
  message: string;
}

export interface ApiErrorResponse {
  message?: string;

  errors?: Record<
    string,
    string[]
  >;
}