const toPascalCase = (givenString) => {
  return (
    givenString
      ?.split(" ")
      .map((word) =>
        isConjunction(word)
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ") || ""
  );
};

const isConjunction = (word) => {
  return word === "and" || word === "or";
};
export default toPascalCase;
