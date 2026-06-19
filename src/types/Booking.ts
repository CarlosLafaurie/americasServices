export interface Booking {
  id: number;

  userId: number;

  service:
    | "carwash"
    | "barber";

  date: string;

  time: string;

  status:
    | "pending"
    | "confirmed"
    | "completed"
    | "cancelled";
}