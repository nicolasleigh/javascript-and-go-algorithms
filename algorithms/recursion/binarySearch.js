function binarySearch(needle, haystack, left, right) {
  // By default, `left` and `right` are all of `haystack`:
  if (left === undefined) {
    left = 0; // `left` defaults to the 0 index.
  }
  if (right === undefined) {
    right = haystack.length - 1; // `right` defaults to the last index.
  }

  console.log(`Searching: [${haystack.slice(left, right + 1).join(', ')}]`);

  if (left > right) {
    // BASE CASE
    return null; // The `needle` is not in `haystack`.
  }

  let mid = Math.floor((left + right) / 2);
  console.log(`Middle: ${haystack[mid]}`);

  if (needle == haystack[mid]) {
    // BASE CASE
    return mid; // The `needle` has been found in `haystack`.
  } else if (needle < haystack[mid]) {
    // RECURSIVE CASE
    return binarySearch(needle, haystack, left, mid - 1);
  } else if (needle > haystack[mid]) {
    // RECURSIVE CASE
    return binarySearch(needle, haystack, mid + 1, right);
  }
}

console.log(binarySearch(13, [1, 4, 8, 11, 13, 16, 19, 19]));
