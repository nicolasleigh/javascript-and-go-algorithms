function factorial(number, acc = 1) {
  if (number === 1) {
    // BASE CASE
    return acc;
  } else {
    // RECURSIVE CASE
    return factorial(number - 1, acc * number);
  }
}

console.log(factorial(5));
