import convertToUpper from "./case-2";
describe("convertToUpper function", () => {
  it("should return first letter as upperCase", () => {
    const title = "denemedenemedeneme";
    expect(convertToUpper(title)).toBe("Denemedenemedeneme");
  });
});
