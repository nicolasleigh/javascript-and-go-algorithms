/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function findMedianSortedArrays(nums1, nums2) {
  // Make sure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let m = nums1.length;
  let n = nums2.length;
  let k = Math.ceil((m + n) / 2); // The minimum number of k is 1
  let low = 0;
  let high = m;

  while (low <= high) {
    let nums1Mid = Math.floor((low + high) / 2);
    let nums2Mid = k - nums1Mid;

    if (nums1Mid > 0 && nums1[nums1Mid - 1] > nums2[nums2Mid]) {
      high = nums1Mid - 1;
    } else if (nums1Mid < m && nums1[nums1Mid] < nums2[nums2Mid - 1]) {
      low = nums1Mid + 1;
    } else {
      let midLeft;
      if (nums1Mid === 0) {
        midLeft = nums2[nums2Mid - 1];
      } else if (nums2Mid === 0) {
        midLeft = nums1[nums1Mid - 1];
      } else {
        midLeft = Math.max(nums1[nums1Mid - 1], nums2[nums2Mid - 1]);
      }

      // If odd
      if ((m + n) % 2 === 1) {
        return midLeft;
      }

      let midRight;
      if (nums1Mid === m) {
        midRight = nums2[nums2Mid];
      } else if (nums2Mid === n) {
        midRight = nums1[nums1Mid];
      } else {
        midRight = Math.min(nums1[nums1Mid], nums2[nums2Mid]);
      }

      // If even
      return (midLeft + midRight) / 2;
    }
  }
}
