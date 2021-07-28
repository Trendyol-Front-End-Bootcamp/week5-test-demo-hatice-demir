const divide = (dividend, divisor) => {
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("invalid number");
  }
  if (divisor === 0) {
    throw new Error("divison by zero");
  }
  return dividend / divisor;
};

export default divide;
