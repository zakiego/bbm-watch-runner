import { FuelType } from "@prisma/client";

export interface Fuels {
  type: FuelType;
  date: string;
  dateText: string;
  city: string;
  price: number;
  priceText: string;
}

export interface City {
  plainCity: string;
  parseCity?: string;
}
