class Solution {
  constructor(w) {
    this.prefixSums = [];
    this.totalSum = 0;

    for (let weight of w) {
      this.totalSum += weight;
      this.prefixSums.push(this.totalSum);
    }
  }

  pickIndex() {
    const target = Math.random() * this.totalSum;
    let left = 0;
    let right = this.prefixSums.length - 1;

    // Binary search
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (target < this.prefixSums[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
