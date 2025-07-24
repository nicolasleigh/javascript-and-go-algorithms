class Solution {
  constructor(nums) {
    this.original = nums.slice(); // Save original array
  }

  reset() {
    return this.original;
  }

  // Fisher–Yates shuffle
  shuffle() {
    const shuffled = this.original.slice(); // Copy current state

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Pick a random index [0, i]
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap
    }

    return shuffled;
  }
}
