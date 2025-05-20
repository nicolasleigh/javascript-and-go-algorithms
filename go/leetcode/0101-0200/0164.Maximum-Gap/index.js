/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  const n = nums.length;
  if (n < 2) return 0;

  const minVal = Math.min(...nums);
  const maxVal = Math.max(...nums);
  if (minVal === maxVal) return 0;
  // The largest gap can not be smaller than (max-min)/(N-1), so if we make the buckets smaller than this number,
  // any gaps within the same bucket is not the amount we are looking for, so we are safe to look only for the inter-bucket gaps.

  // Suppose we have N elements from min to max, since the gap between each elements are different, there must be an average of gap array, assume it is x.
  // For example [1,2,4,5] we have gap array [1,2,1], the average gap x = (1+2+1)/3.
  // now the average gap is x, and we have n-1 gaps for a n-length array, which makes total gap be (n-1) * x, we also know that total gap = max - min
  // So we know that x*(n-1) = max - min => x = (max-min)/(n-1).
  // now since the average gap is x, we know there must be gap smaller than it and larger than it.
  // If every gap is smaller or equal to Floor of (max-min)/(n-1), then average number won't be (max-min)/(n-1), so there must be a gap larger than Ceil of (max-min)/(n-1)

  // Be careful, without using math.Ceil function, there will be "integer divide by zero" and "index out of range" errors.
  const bucketSize = Math.ceil((maxVal - minVal) / (n - 1));
  const bucketCount = n - 1;
  // buckets[i][0] -- min value in this bucket
  // buckets[i][1] -- max value in this bucket
  const buckets = Array.from({ length: bucketCount }, () => [Infinity, -Infinity]);

  for (const num of nums) {
    if (num === maxVal) {
      // Put maxVal into the last bucket
      buckets[bucketCount - 1][0] = Math.min(buckets[bucketCount - 1][0], num);
      buckets[bucketCount - 1][1] = Math.max(buckets[bucketCount - 1][1], num);
    } else {
      const idx = Math.floor((num - minVal) / bucketSize);
      buckets[idx][0] = Math.min(buckets[idx][0], num);
      buckets[idx][1] = Math.max(buckets[idx][1], num);
    }
  }

  let maxGap = bucketSize; // Maximum gap is always greater or equal to bucketSize
  let prevMax = buckets[0][1];

  for (let i = 1; i < bucketCount; i++) {
    const [bucketMin, bucketMax] = buckets[i];
    if (bucketMin === Infinity) continue; // empty bucket
    maxGap = Math.max(maxGap, bucketMin - prevMax);
    prevMax = bucketMax;
  }

  return maxGap;
};
