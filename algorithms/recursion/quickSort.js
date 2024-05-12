function quicksort(items, left, right) {
  // By default, `left` and `right` span the entire range of `items`:
  if (left === undefined) {
    left = 0; // `left` defaults to the 0 index.
  }
  if (right === undefined) {
    right = items.length - 1; // `right` defaults to the last index.
  }

  console.log(
    `quicksort() called on this range: [${items.slice(left, right + 1)}]`
  );
  console.log(`................The full list is: [${items}]`);

  if (right <= left) {
    // With only zero or one item, `items` is already sorted.
    return; // BASE CASE
  }

  // START OF THE PARTITIONING
  let i = left; // i starts at the left end of the range.
  let pivotValue = items[right]; // Select the last value for the pivot.

  console.log(`....................The pivot is: ${pivotValue.toString()}`);

  // Iterate up to, but not including, the pivot:
  for (let j = left; j < right; j++) {
    // If a value is less than the pivot, swap it so that it's on the left side of `items`:
    if (items[j] <= pivotValue) {
      // Swap these two values:
      [items[i], items[j]] = [items[j], items[i]];
      i++;
    }
  }

  // Put the pivot on the left side of `items`:
  [items[i], items[right]] = [items[right], items[i]];
  // END OF THE PARTITIONING

  console.log(
    `....After swapping, the range is: [${items.slice(left, right + 1)}]`
  );
  console.log(
    `Recursively calling quicksort on: [${items.slice(
      left,
      i
    )}] and [${items.slice(i + 1, right + 1)}]`
  );

  // Call quicksort() on the two partitions:
  quicksort(items, left, i - 1); // RECURSIVE CASE
  quicksort(items, i + 1, right); // RECURSIVE CASE
}

let myList = [0, 7, 6, 3, 1, 2, 5, 4];
quicksort(myList);
console.log(myList);
