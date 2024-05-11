import { Compare, defaultCompare } from '../../util.js';

export function interpolationSearch(array, value, compareFn = defaultCompare) {
  const { length } = array;
  let low = 0;
  let high = length - 1;
  let position = -1;
  let delta = -1;

  while (low <= high && value >= array[low] && value <= array[high]) {
    delta = (value - array[low]) / (array[high] - array[low]);
    position = low + Math.floor((high - low) * delta);

    if (compareFn(value, array[position]) === Compare.BIGGER_THAN) {
      low = position + 1;
    } else if (compareFn(value, array[position]) === Compare.LESS_THAN) {
      high = position - 1;
    } else {
      return position;
    }
  }
  return -1;
}
