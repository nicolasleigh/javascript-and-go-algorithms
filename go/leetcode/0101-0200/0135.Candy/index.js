// 135. Candy
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let candies = new Array(ratings.length).fill(1);

  // left to right, compare with left neighbor
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // right to left, compare with right neighbor
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  let count = candies.reduce((acc, cur) => acc + cur, 0);

  return count;
};
