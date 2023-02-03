import * as Cheerio from "cheerio";
import { LIST_FUELS } from "../lib/constants";
import { logger } from "./logger";
import { formatPrice } from "./number";
import { Fuels } from "../lib/types";
import { parseCity } from "./city";
import { parseDate } from "./date";

export const parseRaw = (raw: string) => {
  logger.info("[+] Parsing data from mypertamina.id");

  const $ = Cheerio.load(raw);

  const bucket: Fuels[] = [];
  const listCard = $(".card-body");

  if (listCard.length != LIST_FUELS.length) {
    const error = `[!] List card length not match with list fuels`;
    logger.error(error);
    return new Error(error);
  }

  listCard.each((index, element) => {
    ParseCard($, $(element), bucket);
  });

  return bucket;
};

// Parse from card Pertamax Turbo, Pertamax, etc
export const ParseCard = (
  $: Cheerio.CheerioAPI,
  card: Cheerio.Cheerio<Cheerio.Element>,
  bucket: Fuels[] = [],
) => {
  const image = card.find("img").attr("src");
  if (!image) {
    const error = `[!] Image not found`;
    logger.error(error);
    return new Error(error);
  }

  const date = card.find("p").text();
  if (!date) {
    const error = `[!] Date not found`;
    logger.error(error);
    return new Error(error);
  }

  const type = LIST_FUELS.find((fuel) => fuel.image === image)?.name;
  if (!type) {
    const error = `[!] Type fuel not found for image: ${image}`;
    logger.error(error);
    return new Error(error);
  }

  const priceContainer = card.find(".d-flex.justify-content-between");

  priceContainer.each((index, element) => {
    ParsePriceContainer($, $(element), bucket, type, date);
  });
};

const ParsePriceContainer = (
  $: Cheerio.CheerioAPI,
  priceContainer: Cheerio.Cheerio<Cheerio.Element>,
  bucket: Fuels[] = [],
  type: string,
  date: string,
) => {
  const label = priceContainer.find("label");
  if (!label) {
    const error = `[!] Label not found`;
    logger.error(error);
    return new Error(error);
  }

  const city = label.first().text();
  if (!city) {
    const error = `[!] City not found`;
    logger.error(error);
    return new Error(error);
  }

  const price = label.last().text();
  if (!price) {
    const error = `[!] Price not found`;
    logger.error(error);
    return new Error(error);
  }

  const result = {
    type,
    dateText: date,
    date: parseDate(date) as string,
    city: parseCity(city) as string,
    price: formatPrice(price) as number,
    priceText: price,
  };

  bucket.push(result);
};
