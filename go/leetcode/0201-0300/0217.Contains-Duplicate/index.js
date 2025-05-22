/**
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums) {
  const record = new Set();

  for (const n of nums) {
    if (record.has(n)) {
      return true;
    }
    record.add(n);
  }

  return false;
}
