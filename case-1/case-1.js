const divide = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("is not valid number");
  }
  if (b === 0) {
    throw new Error("divison by zero");
  }
  return a / b;
};

export default divide;
