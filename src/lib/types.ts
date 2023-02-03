export interface Fuels {
  type: string;
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
