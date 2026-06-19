import type { Booking } from "@/types/Booking";

export const bookings: Booking[] = [
  {
    id: 1,

    userId: 2,

    service: "carwash",

    date: "2026-06-20",

    time: "09:00",

    status: "confirmed",
  },

  {
    id: 2,

    userId: 2,

    service: "barber",

    date: "2026-06-22",

    time: "15:00",

    status: "pending",
  },
];