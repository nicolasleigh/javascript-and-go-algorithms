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
