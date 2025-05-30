/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
      if (count >= n) return true;
    }
  }
  return count >= n;
};

// Solution 2
function canPlaceFlowers(flowerbed, n) {
  const size = flowerbed.length;

  for (let i = 0; i < size && n > 0; i += 2) {
    if (flowerbed[i] === 0) {
      if (i + 1 === size || flowerbed[i + 1] === 0) {
        flowerbed[i] = 1; // Optional: simulate planting
        n--;
      } else {
        i++; // Skip next plot if current is 0 but next is 1
      }
    }
  }

  return n === 0;
}
