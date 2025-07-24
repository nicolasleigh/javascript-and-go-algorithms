/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
  //sliding window, BUT the window size is not fixed
  let windowSum = 0;
  let minLength = Infinity;
  let windowStart = 0;

  //First, we will add-up elements from the beginning of the array until their sum becomes greater than or equal to target.
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    //add the next element
    windowSum += nums[windowEnd];

    //shrink the window as small as possible
    //until windowSum is small than target
    while (windowSum >= target) {
      //These elements will constitute our sliding window. We are asked to find the smallest such window having a sum greater than or equal to target. We will remember the length of this window as the smallest window so far.
      //After this, we will keep adding one element in the sliding window (i.e., slide the window ahead) in a stepwise fashion.
      //In each step, we will also try to shrink the window from the beginning. We will shrink the window until the windows sum is smaller than target again. This is needed as we intend to find the smallest window. This shrinking will also happen in multiple steps; in each step, we will do two things:
      //Check if the current window length is the smallest so far, and if so, remember its length.
      minLength = Math.min(minLength, windowEnd - windowStart + 1);

      //Subtract the first element of the window from the running sum to shrink the sliding window.
      windowSum -= nums[windowStart];
      windowStart++;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}

console.log(minSubArrayLen(7, [2, 1, 5, 2, 3, 2])); //2
console.log(minSubArrayLen(7, [2, 1, 5, 2, 8])); //1
console.log(minSubArrayLen(8, [3, 4, 1, 1, 6])); //3
