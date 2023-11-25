const formatBalance = (
  balance: string,
  decimal: number = 3,
  as: "string" | "number" = "string",
) => {
  switch (as) {
    case "number":
      return parseFloat(balance);
    default:
      return parseFloat(balance).toFixed(decimal);
  }
};

export { formatBalance };
