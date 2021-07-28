import divide from "./case-1";
describe("divide function", () => {
  it("should give divison of numbers", () => {
    const num1 = 10;
    const num2 = 2;
    expect(divide(num1, num2)).toBe(num1 / num2);
  });

  it("should throw error if not number", () => {
    const num1 = "hello world";
    const num2 = 2;
    expect(() => divide(num1, num2)).toThrow("is not valid number");
  });

  it("should throw divison by zero error if second number is zero", () => {
    const num1 = 5;
    const num2 = 0;
    expect(() => divide(num1, num2)).toThrow("divison by zero");
  });
});
