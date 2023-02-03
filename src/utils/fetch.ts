import { logger } from "./logger";
import fetch from "node-fetch";

export const fetchRaw = async () => {
  logger.info("[+] Fetching data from mypertamina.id");
  const url = `https://mypertamina.id/fuels-harga`;
  return await fetch(url).then((res) => res.text());
};
