import { LIST_CITY } from "../lib/constants";
import { logger } from "./logger";

export const parseCity = (city: string) => {
  const findCity = LIST_CITY.find((item) => item.plainCity === city);

  if (!findCity) {
    const error = `[!] City "${city}" not found when parsing`;
    logger.error(error);
    throw new Error(error);
  }

  if (findCity.parseCity) {
    return findCity?.parseCity;
  }

  return findCity.plainCity;
};
