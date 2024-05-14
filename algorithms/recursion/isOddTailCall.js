function isOdd(number) {
  if (number === 0) {
    // BASE CASE
    return false;
  } else {
    // RECURSIVE CASE
    return !isOdd(number - 1);
  }
}

console.log(isOdd(42));
console.log(isOdd(99));

function isOddTailCall(number, inversionAcc) {
  if (inversionAcc === undefined) {
    inversionAcc = false;
  }

  if (number === 0) {
    // BASE CASE
    return inversionAcc;
  } else {
    // RECURSIVE CASE
    return isOddTailCall(number - 1, !inversionAcc);
  }
}

console.log(isOddTailCall(42));
console.log(isOddTailCall(99));
