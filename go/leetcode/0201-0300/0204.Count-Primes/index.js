/**
 * @param {number} n
 * @return {number}
 */

function countPrimes(n) {
  if (n < 2) return 0;

  const isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.filter(Boolean).length;
}

// Solution 2
function countPrimes(n) {
  const notPrime = new Array(n).fill(false);
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (!notPrime[i]) {
      count++;
      for (let j = 2; i * j < n; j++) {
        notPrime[i * j] = true;
      }
    }
  }

  return count;
}
