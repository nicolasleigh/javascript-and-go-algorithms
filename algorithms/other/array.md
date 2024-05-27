### ARRAY

#### Sorted Squared Array

You are given an array of Integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

##### Clarifying questions:

- Can the input array be empty? - yes
- Can the input array contain negative numbers? - yes
- Can the input array contain duplicates? - yes

```js
// Method 1
// Time: O(nlogn) - Space: O(n)
function sortedSquared(array) {
  const newArray = new Array(array.length).fill(0); // Space: O(n)
  // Time: O(n)
  for (let i = 0; i < array.length; i++) {
    newArray[i] = Math.pow(array[i], 2);
  }
  newArray.sort((a, b) => a - b); // Time: O(nlogn)
  return newArray;
}

// Another solution
function sortedSquared(array) {
  const newArray = array.map((item) => item ** 2).sort((a, b) => a - b);
  return newArray;
}

// Method 2 - Two pointers: Make use of the fact that the given array is sorted in ascending order
// Time: O(n) - Space: O(n)
function sortedSquared(array) {
  const newArray = new Array(array.length).fill(0);
  let pointerLeft = 0;
  let pointerRight = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (Math.abs(array[pointerLeft]) > Math.abs(array[pointerRight])) {
      newArray[i] = array[pointerLeft] ** 2;
      pointerLeft++;
    } else {
      newArray[i] = array[pointerRight] ** 2;
      pointerRight--;
    }
  }
  return newArray;
}

let a = [1, 3, 4, 5];
let b = [-7, -2, 3, 4, 9];
let c = [];

console.log(sortedSquared(a)); // [1, 9, 16, 25]
console.log(sortedSquared(b)); // [4, 9, 16, 49, 81]
console.log(sortedSquared(c)); // []
```

#### Monotonic Array

An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise.

##### Clarifying questions:

- Is an empty array considered monotonic? - yes
- Is an array with only 1 integer considered monotonic? - yes

```js
// Time: O(n) - Space: O(1)
function checkMonotonic(array) {
  const first = array[0];
  const last = array[array.length - 1];

  if (first === last) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] !== array[i + 1]) return false;
    }
  } else if (first < last) {
    // Increasing
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) return false;
    }
  } else {
    // Decreasing
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) return false;
    }
  }
  return true;
}

let a = [1, 2, 2, 3];
let b = [6, 5, 4, 4];
let c = [1, 2, 3, 1, 4];
let d = [];
let e = [4];

console.log(checkMonotonic(a)); // true
console.log(checkMonotonic(b)); // true
console.log(checkMonotonic(c)); // false
console.log(checkMonotonic(d)); // true
console.log(checkMonotonic(e)); // true
```

#### Rotate Array

Given an array, rotate the array to the right by k steps, where k is non-negative. Eg. [1, 2, 3, 4, 5, 6, 7] and k = 3, the output should be [5, 6, 7, 1, 2, 3, 4].

##### Clarifying questions:

- What happens if an empty array is given? - return the empty array
- If k=0, no rotation is to happen? - yes

```js
// Method 1 - Time O(n) - Space O(n)
const rotateArray = function (array, k) {
  const length = array.length;
  k = k % length;
  const i = length - k;

  const left = array.slice(0, i);
  const right = array.slice(i);
  return right.concat(left);
};

// Method 2 - Time O(n) - Space O(1)
const rotateArray = function (array, k) {
  k = k % array.length;
  reverse(0, array.length - 1);
  reverse(0, k - 1);
  reverse(k, array.length - 1);

  function reverse(start, end) {
    while (start < end) {
      [array[start], array[end]] = [array[end], array[start]];
      start++;
      end--;
    }
  }

  return array;
};

let a = [1, 2, 3, 4, 5, 6, 7]; // length = 7
console.log(rotateArray(a.slice(), 3)); // [5, 6, 7, 1, 2, 3, 4] // using a.slice() to make a copy of the array, because the method 2 modifies the original array.
console.log(rotateArray(a.slice(), 100)); // [6, 7, 1, 2, 3, 4, 5] - 100 % 7 = 2
console.log(rotateArray([], 2)); // []
console.log(rotateArray([1], 2)); // [1]
```
