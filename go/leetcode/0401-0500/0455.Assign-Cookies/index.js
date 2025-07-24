/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let count = 0;
  // From the largest cookie to the smallest
  let idx = s.length - 1; // Index for cookies, aka s

  // Iterate from the largest greed factor to the smallest
  for (let i = g.length - 1; i >= 0; i--) {
    // If current cookie cannot satisfy the current greed factor, move to the next smaller greed factor
    if (idx >= 0 && s[idx] >= g[i]) {
      count++;
      idx--;
    }
  }
  return count;
};

// Greedy + Two Pointers
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b); // Sort greed factors
  s.sort((a, b) => a - b); // Sort cookie sizes

  let child = 0;
  let cookie = 0;

  while (child < g.length && cookie < s.length) {
    if (s[cookie] >= g[child]) {
      child++; // Satisfy this child
    }
    cookie++; // Move to next cookie
  }

  return child;
};
