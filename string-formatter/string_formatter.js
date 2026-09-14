function cleanText(text) {
  return text.trim();
}

function capitalize(text) {
  const cleaned = cleanText(text);
  if (!cleaned) {
    return "";
  }
  let lowerCase = cleaned.toLowerCase();
  let finalOutput = lowerCase[0].toUpperCase() + lowerCase.slice(1);
  return finalOutput;
}

function formatDisplayName(firstName, lastName) {
  const first = capitalize(firstName);
  const last = capitalize(lastName);

  return `${first} ${last}`;
}

console.log(formatDisplayName("  ava", "STONE  "));
console.log(formatDisplayName("nOAh", "  kim"));
console.log(formatDisplayName("  mINA  ", "pATEL"));
