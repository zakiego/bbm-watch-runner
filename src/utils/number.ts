import { logger } from "./logger";

export const formatPrice = (price: string) => {
  if (price === "-") {
    return 0;
  }

  // Check if price is valid
  // Example: Rp 1.000,00
  if (!price.match(/^Rp\s?\d{1,3}(,\d{3})*$/)) {
    const error = `[!] Price "${price}" is not valid`;
    logger.error(error);
    return new Error(error);
  }

  return parseInt(price.replace(/[^0-9.-]+/g, ""));
};
