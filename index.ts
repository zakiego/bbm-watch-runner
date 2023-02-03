import prisma from "./src/lib/prisma";
import { Fuels } from "./src/lib/types";
import { fetchRaw } from "./src/utils/fetch";
import { parseRaw } from "./src/utils/html";
import { logger } from "./src/utils/logger";

const main = async () => {
  const raw = await fetchRaw();
  const data = parseRaw(raw) as Fuels[];

  const insert = await prisma.fuels.createMany({
    data: data.map((d) => ({
      date: d.date,
      price: d.price,
      type: d.type,
      cityId: d.city,
      dateText: d.dateText,
      priceText: d.priceText,
    })),
    skipDuplicates: true,
  });

  if (insert.count) {
    logger.info(`[+] Inserted ${insert.count} new data`);
  } else {
    logger.warn(`[-] No new data`);
  }
};

main();
