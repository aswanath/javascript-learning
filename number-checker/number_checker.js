function isPositive(number) {
  return number >= 0;
}

function isNegative(number) {
  return number < 0;
}

function isZero(number) {
  return number === 0;
}

function isEven(number) {
  return number % 2 == 0;
}

function describeNumber(number) {
  const positive = isPositive(number);
  const negative = isNegative(number);
  const zero = isZero(number);
  const even = isEven(number);

  return {
    positive: positive,
    negative: negative,
    zero: zero,
    even: even,
    odd: !even,
  };
}

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));
