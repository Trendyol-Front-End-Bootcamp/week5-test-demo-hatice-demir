import toPascalCase from "./case-2";
describe("toPascalCase function", () => {
  it("should return the first letter in the each word of given string as an upper case", () => {
    const givenString = "Lorem ipsum dolor sit amet.";
    expect(toPascalCase(givenString)).toBe("Lorem Ipsum Dolor Sit Amet.");
  });

  it("should return the empty string when input is empty ", () => {
    const givenString = "";
    expect(toPascalCase(givenString)).toBe("");
  });

  it("should return the empty string when input is null ", () => {
    const givenString = null;
    expect(toPascalCase(givenString)).toBe("");
  });

  it("should not convert conjunctions(and, or)", () => {
    const givenString = "to be or not to be";
    expect(toPascalCase(givenString)).toBe("To Be or Not To Be");
  });
});
