/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */

function containsNearbyAlmostDuplicate(nums, k, t) {
  if (t < 0) return false; // absolute difference can't be negative

  const map = new Map();
  const bucketSize = t + 1;

  const getBucketId = (num) => {
    return Math.floor(num / bucketSize);
  };

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const bucketId = getBucketId(num);

    if (
      map.has(bucketId) || // same bucket
      (map.has(bucketId - 1) && Math.abs(num - map.get(bucketId - 1)) < bucketSize) || // left bucket
      (map.has(bucketId + 1) && Math.abs(num - map.get(bucketId + 1)) < bucketSize) // right bucket
    ) {
      return true;
    }

    map.set(bucketId, num);

    // Maintain sliding window of size k
    if (i >= k) {
      const oldBucketId = getBucketId(nums[i - k]);
      map.delete(oldBucketId);
    }
  }

  return false;
}
