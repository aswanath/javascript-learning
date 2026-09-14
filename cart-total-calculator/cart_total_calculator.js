function calculateSubtotal(items) {
  let subTotal = 0;
  for (const item of items) {
    if (!item.price || !item.quantity) {
      continue;
    }
    subTotal += item.price * item.quantity;
  }

  return subTotal;
}

function calculateDiscount(subTotal, discountPercent) {
  return (subTotal * discountPercent) / 100;
}

function calculateTax(amountAfterDiscount, taxPercent) {
  return (amountAfterDiscount * taxPercent) / 100;
}

function createCartSummary(items, discountPercent, taxPercent) {
  let subTotal = calculateSubtotal(items);
  let discount = calculateDiscount(subTotal, discountPercent);
  let amountAfterDiscount = subTotal - discount;

  let tax = calculateTax(amountAfterDiscount, taxPercent);
  let total = amountAfterDiscount + tax;

  return { subTotal, discount, tax, total };
}

const cartItems = [
  { name: "Notebook", price: 10, quantity: 2 },
  { name: "Pen", price: 2, quantity: 5 },
  { name: "Bag", price: 30, quantity: 1 },
];

console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));

const singleItemCart = [{ name: "Mouse", price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));
