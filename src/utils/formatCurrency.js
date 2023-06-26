const formatCurrency = (amount, currency, valueSystem) =>
  new Intl.NumberFormat(valueSystem, {
    style: "currency",
    currency: currency,
  }).format(amount);

export default formatCurrency;
