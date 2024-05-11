import { Compare, defaultCompare } from '../../util.js';
import { quickSort } from '../sorting/quicksort.js';

export function binarySearch(array, value, compareFn = defaultCompare) {
  const sortedArray = quickSort(array);
  let low = 0;
  let high = sortedArray.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const middle = sortedArray[mid];
    if (compareFn(value, middle) === Compare.BIGGER_THAN) {
      low = mid + 1;
    } else if (compareFn(value, middle) === Compare.LESS_THAN) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
