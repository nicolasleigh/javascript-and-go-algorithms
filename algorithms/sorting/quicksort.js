import { Compare, defaultCompare, swap } from '../../util.js';

function partition(array, left, right, compareFn) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++;
    }
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quick(array, left, right, compareFn) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right, compareFn);
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn);
    }
    if (index < right) {
      quick(array, index, right, compareFn);
    }
  }
  return array;
}

export function quickSort(array, compareFn = defaultCompare) {
  return quick(array, 0, array.length - 1, compareFn);
}

// [演算法] 學習筆記 — 12. 快速排序法 Quick Sort
// https://medium.com/@amber.fragments/%E6%BC%94%E7%AE%97%E6%B3%95-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-12-%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F%E6%B3%95-quick-sort-841420575b24

// QuickSort – Data Structure and Algorithm Tutorials
// https://www.geeksforgeeks.org/quick-sort/
