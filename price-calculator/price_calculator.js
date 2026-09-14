function calculateDiscount(price, discountPercent) {
  return (price * discountPercent) / 100;
}

function calculateTax(priceAfterDiscount, taxPercent) {
  return (priceAfterDiscount * taxPercent) / 100;
}


//no need to use this at all, using it calls the same functions again unnecessarily
function calculateFinalPrice(price, discountPercent, taxPercent) {
  const discount = calculateDiscount(price, discountPercent);
  const priceAfterDiscount = price - discount;
  const tax = calculateTax(priceAfterDiscount, taxPercent);
  const finalPrice = priceAfterDiscount + tax;

  return finalPrice;
}

function createPriceSummary(price, discountPercent, taxPercent) {
  const discount = calculateDiscount(price, discountPercent);
  const priceAfterDiscount = price - discount;
  const tax = calculateTax(priceAfterDiscount, taxPercent);
  const finalPrice = priceAfterDiscount + tax;

  return {
    price: price,
    discount: discount,
    tax: tax,
    finalPrice: finalPrice,
  };
}

console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));
