/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  let result = 0;
  let index = s.length - 1;

  for (let i = g.length - 1; i >= 0; i--) {
    if (index >= 0 && s[index] >= g[i]) {
      result++;
      index--;
    }
  }
  return result;
};

// Greedy + Two Pointers
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b); // Sort greed factors
  s.sort((a, b) => a - b); // Sort cookie sizes

  let child = 0,
    cookie = 0;

  while (child < g.length && cookie < s.length) {
    if (s[cookie] >= g[child]) {
      child++; // Satisfy this child
    }
    cookie++; // Move to next cookie
  }

  return child;
};
