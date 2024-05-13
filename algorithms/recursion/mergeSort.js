function mergeSort(items) {
  console.log(`.....mergeSort() called on: [${items}]`);

  // BASE CASE - Zero or one item is naturally sorted:
  if (items.length === 0 || items.length === 1) {
    // BASE CASE
    return items;
  }

  // RECURSIVE CASE - Pass the left and right halves to mergeSort():
  // Round down if items doesn't divide in half evenly:
  let iMiddle = Math.floor(items.length / 2);

  console.log(
    `................Split into: [${items.slice(
      0,
      iMiddle
    )}] and [${items.slice(iMiddle)}]`
  );

  let left = mergeSort(items.slice(0, iMiddle));
  let right = mergeSort(items.slice(iMiddle));

  // BASE CASE - Returned merged, sorted data:
  // At this point, left should be sorted and right should be
  // sorted. We can merge them into a single sorted list.
  let sortedResult = [];
  let iLeft = 0;
  let iRight = 0;
  while (sortedResult.length < items.length) {
    // Append the smaller value to sortedResult.
    if (left[iLeft] < right[iRight]) {
      sortedResult.push(left[iLeft]);
      iLeft++;
    } else {
      sortedResult.push(right[iRight]);
      iRight++;
    }

    // If one of the pointers has reached the end of its list,
    // put the rest of the other list into sortedResult.
    if (iLeft === left.length) {
      // Array.prototype.push.apply(sortedResult, right.slice(iRight));
      sortedResult.push(...right.slice(iRight));
      break;
    } else if (iRight === right.length) {
      // Array.prototype.push.apply(sortedResult, left.slice(iLeft));
      sortedResult.push(...left.slice(iLeft));
      break;
    }
  }

  console.log(`The two halves merged into: [${sortedResult}]`);

  return sortedResult; // Returns a sorted version of items.
}

let myList = [2, 9, 8, 5, 3, 4, 7, 6];
myList = mergeSort(myList);
console.log(myList);
