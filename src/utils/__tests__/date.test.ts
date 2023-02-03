import { parseDate } from "../date";

describe("Date Parser", () => {
  describe("Success", () => {
    it("should return date in ISO format", () => {
      const date = "01 Januari 2021";
      const result = parseDate(date);
      expect(result).toBe("2021-01-01T00:00:00.000Z");
    });

    const testCases = [
      {
        input: "*Berlaku per 1 Februari 2023",
        output: "2023-02-01T00:00:00.000Z",
      },
      {
        input: "*Berlaku per 3 Januari 2023 Pukul 14:00 WIB",
        output: "2023-01-03T00:00:00.000Z",
      },
      {
        input: "*Berlaku per 3 September 2022",
        output: "2022-09-03T00:00:00.000Z",
      },
    ];

    testCases.forEach((testCase) => {
      it(`should return ${testCase.output} for ${testCase.input}`, () => {
        const result = parseDate(testCase.input);
        expect(result).toBe(testCase.output);
      });
    });
  });
});
