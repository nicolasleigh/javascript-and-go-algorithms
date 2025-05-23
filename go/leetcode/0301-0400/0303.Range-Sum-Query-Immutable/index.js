// Prefix Sums
class NumArray {
  constructor(nums) {
    this.prefix = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
      this.prefix[i + 1] = this.prefix[i] + nums[i];
    }
  }

  sumRange(left, right) {
    return this.prefix[right + 1] - this.prefix[left];
  }
}

// Brute Force
class NumArray {
  constructor(nums) {
    this.nums = nums; // Just store the original array
  }

  sumRange(left, right) {
    let sum = 0;
    for (let i = left; i <= right; i++) {
      sum += this.nums[i];
    }
    return sum;
  }
}
