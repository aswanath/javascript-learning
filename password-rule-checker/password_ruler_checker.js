function hasMinimumLength(password) {
  return password.trim().length >= 8;
}

function hasNumber(password) {
  return password
    .trim()
    .split("")
    .some((char) => Number.isInteger(Number.parseInt(char)));
}

function hasUppercaseLetter(password) {
  return password
    .trim()
    .split("")
    .some((char) => char >= "A" && char <= "Z");
}

function getFailedRules(password) {
  const errors = [];

  const minimumLength = hasMinimumLength(password);
  if (!minimumLength) errors.push("minimum length");

  const containsNumber = hasNumber(password);
  if (!containsNumber) errors.push("number");

  const containsUppperCaseLetter = hasUppercaseLetter(password);
  if (!containsUppperCaseLetter) errors.push("uppercase letter");

  return errors;
}

function validatePassword(password) {
  const errors = getFailedRules(password);
  return {
    valid: errors.length == 0,
    failedRules: errors,
  };
}

console.log(validatePassword("hello"));
console.log(validatePassword("Hello123"));
console.log(validatePassword("hello123"));
console.log(validatePassword("HELLOABC"));
