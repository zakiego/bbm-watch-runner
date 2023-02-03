import { formatPrice } from "../number";

describe("Format number", () => {
  it("should return 0 if price is -", () => {
    expect(formatPrice("-")).toBe(0);
  });

  it("should return 6800 if price is Rp6,800", () => {
    expect(formatPrice("Rp6,800")).toBe(6800);
  });

  it("should return 6800 if price is Rp 6,800 (with space)", () => {
    expect(formatPrice("Rp 6,800")).toBe(6800);
  });
});
