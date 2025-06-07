/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

var getPermutation = function (n, k) {
  // Step 1: Initialize numbers 1 to n
  const nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }

  // Step 2: Precompute factorials
  const factorials = [1];
  for (let i = 1; i <= n; i++) {
    factorials[i] = factorials[i - 1] * i;
  }

  // Step 3: Convert k to 0-indexed
  k--;

  // Step 4: Build permutation
  let result = "";
  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(k / factorials[i]);
    k %= factorials[i];

    result += nums[index];
    nums.splice(index, 1); // Remove used number
  }

  return result;
};

// Solution 2 - Brute Force
function getPermutation(n, k) {
  const nums = Array.from({ length: n }, (_, i) => i + 1);
  const used = new Array(n).fill(false);
  let count = 0;
  let result = "";

  function backtrack(path) {
    if (path.length === n) {
      count++;
      if (count === k) {
        result = path.join("");
      }
      return;
    }

    for (let i = 0; i < n; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(nums[i]);
      backtrack(path);
      path.pop();
      used[i] = false;

      if (result) return; // early stop if we've found the k-th
    }
  }

  backtrack([]);
  return result;
}
