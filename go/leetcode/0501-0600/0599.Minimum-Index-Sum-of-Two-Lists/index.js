/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map = new Map();
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  const result = [];
  let minSum = Infinity;

  for (let j = 0; j < list2.length; j++) {
    const word = list2[j];
    if (map.has(word)) {
      const i = map.get(word);
      const sum = i + j;
      if (sum < minSum) {
        result.length = 0; // Clear previous results
        result.push(word);
        minSum = sum;
      } else if (sum === minSum) {
        result.push(word);
      }
    }
  }

  return result;
};
