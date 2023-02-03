import { parseCity } from "../city";

describe("parseCity", () => {
  it("should return correct city if input correct", () => {
    const parsed = parseCity("Kodya Batam (FTZ)");
    expect(parsed).toBe("Kodya Batam (FTZ)");
  });

  it("should return correct city if input typo expected", () => {
    const parsed = parseCity("aProv. Sulawesi Selatan");
    expect(parsed).toBe("Prov. Sulawesi Selatan");
  });

  it("should error if input typo not expected", () => {
    expect(() =>
      parseCity("axxwProv. Sulawesi Selatan should be error"),
    ).toThrow();
  });
});
