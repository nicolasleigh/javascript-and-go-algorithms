package main

import (
	"fmt"
	"math"
	"slices"
)

func maximumGap(nums []int) int {
	n := len(nums)
	if n < 2 {
		return 0
	}

	low, high := slices.Min(nums), slices.Max(nums)
	if low == high {
		return 0
	}

	// Initialize buckets, let the min value default to MaxInt32, and let the max value default to MinInt32
	// buckets[i][0] -- min value in this bucket
	// buckets[i][1] -- max value in this bucket
	buckets := make([][]int, n-1)
	for i := range buckets {
		buckets[i] = []int{math.MaxInt32, math.MinInt32}
	}
	// The largest gap can not be smaller than (max-min)/(N-1), so if we make the buckets smaller than this number,
	// any gaps within the same bucket is not the amount we are looking for, so we are safe to look only for the inter-bucket gaps.

	// Suppose we have N elements from min to max, since the gap between each elements are different, there must be an average of gap array, assume it is x.
	// For example [1,2,4,5] we have gap array [1,2,1], the average gap x = (1+2+1)/3.
	// now the average gap is x, and we have n-1 gaps for a n-length array, which makes total gap be (n-1) * x, we also know that total gap = max - min
	// So we know that x*(n-1) = max - min => x = (max-min)/(n-1).
	// now since the average gap is x, we know there must be gap smaller than it and larger than it.
	// If every gap is smaller or equal to Floor of (max-min)/(n-1), then average number won't be (max-min)/(n-1), so there must be a gap larger than Ceil of (max-min)/(n-1)

	// Be careful, without using math.Ceil function, there will be "integer divide by zero" and "index out of range" errors.
	bucketSize := int(math.Ceil(float64(high-low) / float64(n-1)))

	// Place each number in a bucket
	for _, num := range nums {
		i := (num - low) / bucketSize
		// i := (num - low) * (n - 1) / (high - low)
		// If num equals high, put this num into the last bucket, so i=n-2. By doing so, "index out of range" error can be avoid.
		if num == high {
			i = n - 2
		}
		buckets[i][0] = min(buckets[i][0], num)
		buckets[i][1] = max(buckets[i][1], num)
	}

	// Calculate the maximum gap
	prevMax := buckets[0][1]
	maxGap := bucketSize // Maximum gap is always greater or equal to bucketSize
	for i := 1; i < n-1; i++ {
		if buckets[i][0] == math.MaxInt32 {
			// If this bucket is empty, continue.
			continue
		}
		maxGap = max(maxGap, buckets[i][0]-prevMax)
		prevMax = buckets[i][1]
	}

	return maxGap
}

func main() {
	nums := []int{3, 6, 9, 1}
	// nums := []int{1, 1, 1, 1, 1, 5, 5, 5, 5, 5}
	// nums := []int{12115, 10639, 2351, 29639, 31300, 11245, 16323, 24899, 8043, 4076, 17583, 15872, 19443, 12887, 5286, 6836, 31052, 25648, 17584, 24599, 13787, 24727, 12414, 5098, 26096, 23020, 25338, 28472, 4345, 25144, 27939, 10716, 3830, 13001, 7960, 8003, 10797, 5917, 22386, 12403, 2335, 32514, 23767, 1868, 29882, 31738, 30157, 7950, 20176, 11748, 13003, 13852, 19656, 25305, 7830, 3328, 19092, 28245, 18635, 5806, 18915, 31639, 24247, 32269, 29079, 24394, 18031, 9395, 8569, 11364, 28701, 32496, 28203, 4175, 20889, 28943, 6495, 14919, 16441, 4568, 23111, 20995, 7401, 30298, 2636, 16791, 1662, 27367, 2563, 22169, 1607, 15711, 29277, 32386, 27365, 31922, 26142, 8792} // len(nums)=98
	fmt.Println(maximumGap(nums)) // Output: 3
}
