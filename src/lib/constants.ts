import { FuelType } from "@prisma/client";
import { City } from "./types";

interface ListFuels {
  image: string;
  name: FuelType;
}

export const LIST_FUELS: ListFuels[] = [
  {
    image: "https://mypertamina.id/assets/img/products/turbo.png",
    name: "Pertamax_Turbo",
  },
  {
    image: "https://mypertamina.id/assets/img/products/1.png",
    name: "Pertamax",
  },
  {
    image: "https://mypertamina.id/assets/img/products/lite.png",
    name: "Pertalite",
  },
  {
    image: "https://mypertamina.id/assets/img/products/dex.png",
    name: "Pertamax_Dex",
  },
  {
    image: "https://mypertamina.id/assets/img/products/dexlite.png",
    name: "Dexlite",
  },
  {
    image: "https://mypertamina.id/assets/img/products/bio-solar.png",
    name: "Bio_Solar",
  },
];

const LIST_CITY_TYPO: City[] = [
  {
    plainCity: "aProv. Sulawesi Selatan",
    parseCity: "Prov. Sulawesi Selatan",
  },
];

export const LIST_CITY: City[] = [
  { plainCity: "Free Trade Zone (FTZ) Sabang" },
  { plainCity: "Kodya Batam (FTZ)" },
  { plainCity: "Prov. Bali" },
  { plainCity: "Prov. Bangka-Belitung" },
  { plainCity: "Prov. Banten" },
  { plainCity: "Prov. Bengkulu" },
  { plainCity: "Prov. DI Yogyakarta" },
  { plainCity: "Prov. DKI Jakarta" },
  { plainCity: "Prov. Gorontalo" },
  { plainCity: "Prov. Jambi" },
  { plainCity: "Prov. Jawa Barat" },
  { plainCity: "Prov. Jawa Tengah" },
  { plainCity: "Prov. Jawa Timur" },
  { plainCity: "Prov. Kalimantan Barat" },
  { plainCity: "Prov. Kalimantan Selatan" },
  { plainCity: "Prov. Kalimantan Tengah" },
  { plainCity: "Prov. Kalimantan Timur" },
  { plainCity: "Prov. Kalimantan Utara" },
  { plainCity: "Prov. Kepulauan Riau" },
  { plainCity: "Prov. Lampung" },
  { plainCity: "Prov. Maluku" },
  { plainCity: "Prov. Maluku Utara" },
  { plainCity: "Prov. Nanggroe Aceh Darussalam" },
  { plainCity: "Prov. Nusa Tenggara Barat" },
  { plainCity: "Prov. Nusa Tenggara Timur" },
  { plainCity: "Prov. Papua" },
  { plainCity: "Prov. Papua Barat" },
  { plainCity: "Prov. Riau" },
  { plainCity: "Prov. Sulawesi Barat" },
  { plainCity: "Prov. Sulawesi Selatan" },
  { plainCity: "Prov. Sulawesi Tengah" },
  { plainCity: "Prov. Sulawesi Tenggara" },
  { plainCity: "Prov. Sulawesi Utara" },
  { plainCity: "Prov. Sumatera Barat" },
  { plainCity: "Prov. Sumatera Selatan" },
  { plainCity: "Prov. Sumatera Utara" },
  ...LIST_CITY_TYPO,
];
