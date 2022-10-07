import { formatCurrencyString } from "use-shopping-cart";

const formatProductPrice = (product) => {
  return formatCurrencyString({
    value: product?.price * 100,
    currency: "BDT",
    language: navigator.language,
  });
};

export default formatProductPrice;
