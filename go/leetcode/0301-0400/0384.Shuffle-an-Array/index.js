class Solution {
  constructor(nums) {
    this.original = nums.slice(); // Save original array
    this.array = nums;
  }

  reset() {
    this.array = this.original.slice(); // Reset to original
    return this.array;
  }

  // Fisher–Yates shuffle
  shuffle() {
    const shuffled = this.array.slice(); // Copy current state

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Pick a random index [0, i]
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap
    }

    return shuffled;
  }
}
