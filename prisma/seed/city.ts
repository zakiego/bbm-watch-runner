import prisma from "../../src/lib/prisma";
import { logger } from "../../src/utils/logger";

const main = async () => {
  logger.info("[+] Seeding database city");

  const data = await prisma.city.createMany({
    data: listCity.map((d) => ({
      id: d.plainCity,
    })),
    skipDuplicates: true,
  });

  if (data.count) {
    logger.info(`[+] Inserted ${data.count} new data`);
  } else {
    logger.warn(`[-] No new data`);
  }
};

const listCity = [
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
];

main();
