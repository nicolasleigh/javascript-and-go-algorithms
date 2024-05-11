import { Compare, defaultCompare } from '../../util.js';
import { quickSort } from '../sorting/quicksort.js';

function binarySearchRecursive(
  array,
  value,
  low,
  high,
  compareFn = defaultCompare
) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const middle = array[mid];

    if (compareFn(value, middle) === Compare.BIGGER_THAN) {
      return binarySearchRecursive(array, value, mid + 1, high, compareFn);
    } else if (compareFn(value, middle) === Compare.LESS_THAN) {
      return binarySearchRecursive(array, value, low, mid - 1, compareFn);
    } else {
      return mid;
    }
  }
  return -1;
}

export function binarySearch(array, value, compareFn = defaultCompare) {
  const sortedArr = quickSort(array);
  const low = 0;
  const high = sortedArr.length - 1;
  return binarySearchRecursive(sortedArr, value, low, high, compareFn);
}
