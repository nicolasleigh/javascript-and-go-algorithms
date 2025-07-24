// Binary Search
var arrangeCoins = function (n) {
  let left = 0;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const total = (mid * (mid + 1)) / 2;

    if (total === n) {
      return mid;
    } else if (total < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let i = 0; // Initialize the row counter

  while (n > i) {
    i++; // Move to the next row
    n -= i; // Use up i coins for this row
  }

  return i; // Return the number of complete rows
};
