const FormatAmount = (amount) => {
  return new Intl.NumberFormat().format(amount);
};
export default FormatAmount;
