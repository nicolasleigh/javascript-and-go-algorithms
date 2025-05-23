// // Binary Indexed Tree
// class NumArray {
//   constructor(nums) {
//     this.nums = nums.slice(); // Copy of original array
//     this.bit = new Array(nums.length + 1).fill(0); // Binary Indexed Tree (1-indexed)

//     for (let i = 0; i < nums.length; i++) {
//       this._add(i + 1, nums[i]); // Build BIT
//     }
//   }

//   // Helper to add value to BIT
//   _add(index, val) {
//     while (index < this.bit.length) {
//       this.bit[index] += val;
//       index += index & -index;
//     }
//   }

//   // Helper to get prefix sum from BIT
//   _prefixSum(index) {
//     let sum = 0;
//     while (index > 0) {
//       sum += this.bit[index];
//       index -= index & -index;
//     }
//     return sum;
//   }

//   update(index, val) {
//     const diff = val - this.nums[index];
//     this.nums[index] = val;
//     this._add(index + 1, diff); // BIT is 1-indexed
//   }

//   sumRange(left, right) {
//     return this._prefixSum(right + 1) - this._prefixSum(left);
//   }
// }

// // Segment Tree
// class NumArray {
//   constructor(nums) {
//     this.n = nums.length;
//     this.tree = new Array(this.n * 4).fill(0);
//     this.build(nums, 0, 0, this.n - 1);
//   }

//   // Build the segment tree
//   build(nums, node, start, end) {
//     if (start === end) {
//       this.tree[node] = nums[start];
//     } else {
//       const mid = Math.floor((start + end) / 2);
//       const left = node * 2 + 1;
//       const right = node * 2 + 2;
//       this.build(nums, left, start, mid);
//       this.build(nums, right, mid + 1, end);
//       this.tree[node] = this.tree[left] + this.tree[right];
//     }
//   }

//   update(index, val) {
//     this._update(0, 0, this.n - 1, index, val);
//   }

//   _update(node, start, end, index, val) {
//     if (start === end) {
//       this.tree[node] = val;
//     } else {
//       const mid = Math.floor((start + end) / 2);
//       const left = node * 2 + 1;
//       const right = node * 2 + 2;
//       if (index <= mid) {
//         this._update(left, start, mid, index, val);
//       } else {
//         this._update(right, mid + 1, end, index, val);
//       }
//       this.tree[node] = this.tree[left] + this.tree[right];
//     }
//   }

//   sumRange(left, right) {
//     return this._sumRange(0, 0, this.n - 1, left, right);
//   }

//   _sumRange(node, start, end, left, right) {
//     if (right < start || end < left) {
//       return 0;
//     }
//     if (left <= start && end <= right) {
//       return this.tree[node];
//     }
//     const mid = Math.floor((start + end) / 2);
//     const sumLeft = this._sumRange(node * 2 + 1, start, mid, left, right);
//     const sumRight = this._sumRange(node * 2 + 2, mid + 1, end, left, right);
//     return sumLeft + sumRight;
//   }
// }

// Prefix Sum - Brute Force
class NumArray {
  constructor(nums) {
    this.nums = nums;
    this.prefix = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
      this.prefix[i + 1] = this.prefix[i] + nums[i];
    }
  }

  update(index, val) {
    original = this.nums[index];
    difference = val - original;
    this.nums[index] = val;

    for (let i = index + 1; i < this.prefix.length; i++) {
      this.prefix[i] += difference;
    }
  }

  sumRange(left, right) {
    return this.prefix[right + 1] - this.prefix[left];
  }
}
