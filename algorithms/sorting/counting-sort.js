import { findMaxValue } from '../search/min-max-search.js';

export function countingSort(array) {
  if (array.length < 2) {
    return array;
  }

  const maxValue = findMaxValue(array);
  let sortedIndex = 0;
  const counts = new Array(maxValue + 1).fill(0);
  array.forEach((element) => counts[element]++);

  counts.forEach((count, index) => {
    while (count > 0) {
      array[sortedIndex++] = index;
      count--;
    }
  });
  return array;
}
